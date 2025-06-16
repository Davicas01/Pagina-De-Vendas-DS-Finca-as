import { NextRequest, NextResponse } from 'next/server';

// Simple console-based logger to avoid conflicts
const rateLimitLogger = {
  info: (message: string) => console.log(`[INFO] ${message}`),
  warn: (message: string) => console.warn(`[WARN] ${message}`),
  error: (message: string) => console.error(`[ERROR] ${message}`),
  debug: (message: string) => console.debug(`[DEBUG] ${message}`)
};

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

interface RateLimitOptions {
  interval: number; // Time window in milliseconds
  limit: number; // Maximum requests per interval
}

// In-memory store for rate limiting (use Redis in production)
const requestCounts = new Map<string, { count: number; resetTime: number }>();

export class RateLimit {
  private interval: number;
  private limit: number;

  constructor(options: RateLimitOptions) {
    this.interval = options.interval;
    this.limit = options.limit;
  }

  check(identifier: string): RateLimitResult {
    const now = Date.now();
    const windowStart = Math.floor(now / this.interval) * this.interval;
    const resetTime = windowStart + this.interval;
    
    const key = `${identifier}:${windowStart}`;
    const current = requestCounts.get(key) || { count: 0, resetTime };
    
    if (current.count >= this.limit) {
      rateLimitLogger.warn(`Rate limit exceeded for ${identifier}`);
      return {
        success: false,
        limit: this.limit,
        remaining: 0,
        reset: resetTime
      };
    }
    
    current.count++;
    requestCounts.set(key, current);
    
    // Clean up old entries
    this.cleanup();
    
    rateLimitLogger.debug(`Rate limit check for ${identifier}: ${current.count}/${this.limit}`);
    
    return {
      success: true,
      limit: this.limit,
      remaining: this.limit - current.count,
      reset: resetTime
    };
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, value] of requestCounts.entries()) {
      if (value.resetTime <= now) {
        requestCounts.delete(key);
      }
    }
  }
}

// Default rate limiter instances
export const apiRateLimit = new RateLimit({
  interval: 60 * 1000, // 1 minute
  limit: 60 // 60 requests per minute
});

export const strictRateLimit = new RateLimit({
  interval: 60 * 1000, // 1 minute
  limit: 10 // 10 requests per minute
});

// Helper function to get client IP
export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return request.ip || 'unknown';
}

// Middleware helper for rate limiting
export function withRateLimit(rateLimit: RateLimit) {
  return async (request: NextRequest) => {
    const ip = getClientIP(request);
    const result = rateLimit.check(ip);
    
    if (!result.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter: Math.ceil((result.reset - Date.now()) / 1000)
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': result.limit.toString(),
            'X-RateLimit-Remaining': result.remaining.toString(),
            'X-RateLimit-Reset': result.reset.toString(),
            'Retry-After': Math.ceil((result.reset - Date.now()) / 1000).toString()
          }
        }
      );
    }
    
    return null; // Allow request to proceed
  };
}
