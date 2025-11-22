import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Package } from "lucide-react";

const transfers = [
  {
    id: "1",
    from: "Main Warehouse",
    to: "Retail Store A",
    product: "Electronics Bundle",
    qty: 25,
    status: "in-transit",
  },
  {
    id: "2",
    from: "Secondary Warehouse",
    to: "Main Warehouse",
    product: "Furniture Set",
    qty: 12,
    status: "scheduled",
  },
  {
    id: "3",
    from: "Main Warehouse",
    to: "Retail Store B",
    product: "Clothing Items",
    qty: 50,
    status: "completed",
  },
];

const statusStyles = {
  "in-transit": "bg-primary-light text-primary",
  "scheduled": "bg-warning-light text-warning-foreground",
  "completed": "bg-secondary-light text-secondary-foreground",
};

export const TransfersOverview = () => {
  return (
    <Card className="p-6 rounded-3xl shadow-card border-0 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft">
          <Package className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Internal Transfers</h2>
      </div>
      
      <div className="space-y-4">
        {transfers.map((transfer) => (
          <div
            key={transfer.id}
            className="p-4 bg-muted/30 rounded-2xl hover:bg-muted/50 transition-all duration-300 hover:scale-102 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <Badge className={`${statusStyles[transfer.status as keyof typeof statusStyles]} rounded-full px-3 capitalize`}>
                {transfer.status}
              </Badge>
              <span className="text-sm font-medium text-foreground">Qty: {transfer.qty}</span>
            </div>
            
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-1 px-3 py-2 bg-background rounded-xl text-sm">
                {transfer.from}
              </div>
              <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 animate-pulse" />
              <div className="flex-1 px-3 py-2 bg-background rounded-xl text-sm">
                {transfer.to}
              </div>
            </div>
            
            <p className="text-sm font-medium text-foreground mt-2">{transfer.product}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
