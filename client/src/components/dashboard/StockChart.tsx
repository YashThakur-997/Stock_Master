import { Card } from "@/components/ui/card";
import { BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", inbound: 45, outbound: 30 },
  { name: "Tue", inbound: 52, outbound: 38 },
  { name: "Wed", inbound: 48, outbound: 42 },
  { name: "Thu", inbound: 61, outbound: 45 },
  { name: "Fri", inbound: 55, outbound: 48 },
  { name: "Sat", inbound: 38, outbound: 35 },
  { name: "Sun", inbound: 42, outbound: 32 },
];

export const StockChart = () => {
  return (
    <Card className="p-6 rounded-3xl shadow-card border-0 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-secondary rounded-2xl flex items-center justify-center shadow-soft">
          <BarChart3 className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Stock Flow</h2>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "1rem",
            }}
          />
          <Line
            type="monotone"
            dataKey="inbound"
            stroke="hsl(var(--secondary))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--secondary))", r: 5 }}
          />
          <Line
            type="monotone"
            dataKey="outbound"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            dot={{ fill: "hsl(var(--primary))", r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
      
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-secondary"></div>
          <span className="text-sm text-muted-foreground">Inbound</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <span className="text-sm text-muted-foreground">Outbound</span>
        </div>
      </div>
    </Card>
  );
};
