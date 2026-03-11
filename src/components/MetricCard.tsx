import React from 'react';
import { cn } from '../lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  change: string | number;
  variant?: 'orange' | 'purple' | 'cyan' | 'blue';
  borderBottom?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  variant = 'orange',
  borderBottom = false
}) => {
  const variants = {
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200',
    cyan: 'bg-gradient-to-br from-cyan-50 to-cyan-100 border-cyan-200',
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
  };

  const textColors = {
    orange: 'text-orange-600',
    purple: 'text-purple-700',
    cyan: 'text-cyan-600',
    blue: 'text-blue-600',
  };

  return (
    <div className={cn(
      "p-4 rounded-xl flex flex-col justify-between h-32 transition-all hover:shadow-sm",
      variants[variant],
      borderBottom && "border-b-4"
    )}>
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <div className="flex items-end justify-between">
        <span className={cn("text-3xl font-bold", textColors[variant])}>{value}</span>
        <span className={cn(
          "bg-white/40 px-2 py-0.5 rounded text-xs font-semibold",
          textColors[variant]
        )}>
          {change}
        </span>
      </div>
    </div>
  );
};
