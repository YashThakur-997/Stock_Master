import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const filters = {
  documentType: ["Receipts", "Delivery", "Internal", "Adjustment"],
  status: ["Draft", "Waiting", "Ready", "Done", "Cancelled"],
  warehouse: ["Main", "Secondary", "Retail"],
  category: ["Electronics", "Furniture", "Clothing", "Food"],
};

export const FilterPanel = () => {
  return (
    <Card className="p-6 rounded-3xl shadow-card border-0 bg-card">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-soft animate-float">
          <Filter className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Filters</h2>
      </div>
      
      <div className="space-y-4">
        {Object.entries(filters).map(([key, options]) => (
          <div key={key}>
            <h3 className="text-sm font-medium text-foreground mb-2 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="flex flex-wrap gap-2">
              {options.map((option) => (
                <Badge
                  key={option}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 rounded-full px-4 py-1.5"
                >
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex gap-3 mt-6">
        <Button className="flex-1 rounded-2xl bg-gradient-primary hover:shadow-float transition-all">
          Apply Filters
        </Button>
        <Button variant="outline" className="flex-1 rounded-2xl hover:bg-muted">
          Reset
        </Button>
      </div>
    </Card>
  );
};
