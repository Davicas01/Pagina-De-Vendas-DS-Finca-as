"use client";

import { ToastProvider } from "@/components/ui/toast";
import { useEffect, useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-3 border-gray-300 border-t-yellow-400 rounded-full animate-spin mx-auto mb-3"></div>
          <p className="text-gray-600">Inicializando...</p>
        </div>
      </div>
    );
  }

  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}
