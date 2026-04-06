import type { ReactNode } from "react";
import { cn } from "@/components/lib";

export function GlassCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-8 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5",
        className
      )}
    >
      {children}
    </div>
  );
}
