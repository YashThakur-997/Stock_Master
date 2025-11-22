import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "accent" | "warning";
  trend?: string;
}

const variantStyles = {
  primary: "bg-gradient-primary",
  secondary: "bg-gradient-secondary",
  accent: "bg-gradient-accent",
  warning: "bg-gradient-warning",
};

export const KPICard = ({ title, value, icon: Icon, variant = "primary", trend }: KPICardProps) => {
  return (
    <Card className="p-6 rounded-3xl shadow-card hover:shadow-float transition-all duration-300 hover:scale-105 cursor-pointer border-0 bg-card animate-scale-in">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${variantStyles[variant]} rounded-2xl flex items-center justify-center shadow-soft`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        {trend && (
          <span className="text-xs font-medium text-secondary px-2 py-1 bg-secondary-light rounded-full">
            {trend}
          </span>
        )}
      </div>
      <h3 className="text-sm text-muted-foreground mb-1">{title}</h3>
      <p className="text-3xl font-bold text-foreground">{value}</p>
    </Card>
  );
};
