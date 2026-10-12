import React from "react";
import { cn } from "@/lib/utils";

interface BadgeTagProps {
  label: string;
  text: string;
  className?: string;
}

export function BadgeTag({ label, text, className }: BadgeTagProps) {
  return (
    <div className={cn("inline-flex items-center space-x-2.5 border border-cyan-400/40 rounded-full bg-black/40 p-1 text-sm text-white backdrop-blur-md shadow-lg", className)}>
        <div className="flex items-center space-x-1 bg-gradient-to-r from-cyan-400 to-teal-300 text-slate-950 font-bold rounded-full px-4 py-1 shadow-sm">
            <p>{label}</p>
        </div>
        <p className="pr-4 font-medium">{text}</p>
    </div>
  );
}
