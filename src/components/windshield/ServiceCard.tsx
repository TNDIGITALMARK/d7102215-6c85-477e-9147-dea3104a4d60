'use client';

import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon: Icon, title, description, className = '' }: ServiceCardProps) {
  return (
    <div className={`card group cursor-pointer ${className}`}>
      <div className="flex flex-col items-center text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center mb-4 group-hover:bg-[hsl(var(--accent))] transition-colors duration-300">
          <Icon className="w-8 h-8 text-[hsl(var(--accent))] group-hover:text-white transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--foreground))]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
