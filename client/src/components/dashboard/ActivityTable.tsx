import { Card } from "@/components/ui/card";
import type { ComponentType, SVGProps } from "react";

interface Activity {
  id: string;
  title: string;
  items: string;
  qty: number;
  status: "draft" | "waiting" | "ready" | "done" | "cancelled";
  date: string;
}

interface ActivityTableProps {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  activities: Activity[];
  iconVariant?: "primary" | "secondary" | "accent";
}

const statusStyles = {
  draft: "bg-muted text-muted-foreground",
  waiting: "bg-warning-light text-warning-foreground",
  ready: "bg-primary-light text-primary",
  done: "bg-secondary-light text-secondary-foreground",
  cancelled: "bg-destructive/10 text-destructive",
};

const iconVariants = {
  primary: "bg-gradient-primary",
  secondary: "bg-gradient-secondary",
  accent: "bg-gradient-accent",
};

export const ActivityTable = ({ 
  title, 
  icon: Icon, 
  activities,
  iconVariant = "primary" 
}: ActivityTableProps) => {
  return (
    <Card className="p-6 rounded-3xl shadow-card border-0 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 ${iconVariants[iconVariant]} rounded-2xl flex items-center justify-center shadow-soft`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all duration-300 hover:scale-102 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-foreground">{activity.title}</h3>
              <span className={`${statusStyles[activity.status]} rounded-full px-3 inline-flex items-center justify-center text-xs font-medium`}>
                {activity.status}
              </span>
            </div>
            <div className="flex gap-4 text-sm">
              <span>{activity.items}</span>
              <span className="font-medium">Qty: {activity.qty}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">{activity.date}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
