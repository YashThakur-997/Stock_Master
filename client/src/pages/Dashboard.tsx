import { ArrowRight, Clock, AlertCircle, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto animate-fade-in space-y-8">

      {/* Hero Section / Welcome Message (Optional but adds to premium feel) */}
      <div className="flex flex-col space-y-2">
        <h2 className="text-3xl font-bold tracking-tight relative top-3">Overview</h2>
        <p className="text-muted-foreground relative top-3">Manage your inventory operations and logistics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Receipt Card */}
        <Card className="group relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-xl hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="p-8 relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Receipt</h3>
                <p className="text-sm text-muted-foreground">Inbound Operations</p>
              </div>
              <div className="p-3 bg-orange-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Package className="w-6 h-6 text-orange-500" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Button
                className="w-full sm:w-auto h-12 text-lg bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="mr-2">4 to receive</span>
                <ArrowRight className="w-5 h-5 opacity-80" />
              </Button>

              <div className="flex items-center gap-4 text-sm">
                <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200 hover:bg-red-500/20 px-3 py-1 h-8 rounded-lg gap-2">
                  <AlertCircle className="w-4 h-4" />
                  1 Late
                </Badge>
                <span className="text-muted-foreground font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  6 operations
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Delivery Card */}
        <Card className="group relative overflow-hidden border-none shadow-2xl bg-gradient-to-br from-card to-card/50 backdrop-blur-xl hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="p-8 relative z-10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Delivery</h3>
                <p className="text-sm text-muted-foreground">Outbound Operations</p>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Truck className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <Button
                className="w-full sm:w-auto h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="mr-2">4 to Deliver</span>
                <ArrowRight className="w-5 h-5 opacity-80" />
              </Button>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200 hover:bg-red-500/20 px-3 py-1 h-8 rounded-lg gap-2">
                  <AlertCircle className="w-4 h-4" />
                  1 Late
                </Badge>
                <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200 hover:bg-amber-500/20 px-3 py-1 h-8 rounded-lg gap-2">
                  <Clock className="w-4 h-4" />
                  2 waiting
                </Badge>
                <span className="text-muted-foreground font-medium flex items-center gap-2 ml-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  6 operations
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
