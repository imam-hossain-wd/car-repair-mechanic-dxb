
"use client";

import { Wrench } from "lucide-react";

export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-12 h-12 mx-auto mb-4 relative">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Wrench className="h-10 w-10 text-primary" />
          </div>
        </div>
        
        {/* Text */}
        <p className="text-lg text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
}