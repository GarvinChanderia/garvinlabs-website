import { cn } from "@/components/lib";

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: {
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}) {
  const textAlign = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("mb-16", textAlign, className)}>
      {label && (
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-brand-green mb-4">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
