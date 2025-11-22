import { User, Package, Truck, ArrowRightLeft, History, Settings, Warehouse, MapPin } from "lucide-react";
import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Switch from "@/components/ui/star-wars-toggle-switch";

export const TopNav = () => {
  const menuItems = [
    { title: "Dashboard", url: "/" },
    {
      title: "Operations",
      url: "#",
      items: [
        {
          title: "Receipt",
          description: "Manage inbound stock",
          icon: <Package className="size-5 shrink-0" />,
          url: "/receipts",
        },
        {
          title: "Delivery",
          description: "Manage outbound stock",
          icon: <Truck className="size-5 shrink-0" />,
          url: "/deliveries",
        },
        {
          title: "Adjustment",
          description: "Adjust stock levels",
          icon: <ArrowRightLeft className="size-5 shrink-0" />,
          url: "/adjustments",
        },
      ],
    },
    {
      title: "Stock",
      url: "/stock",
      icon: <Warehouse className="size-5 shrink-0" />,
    },
    { title: "Move History", url: "/history", icon: <History className="size-5 shrink-0" /> },
    {
      title: "Settings",
      url: "#",
      icon: <Settings className="size-5 shrink-0" />,
      items: [
        {
          title: "Warehouse",
          description: "View warehouse status",
          icon: <Warehouse className="size-5 shrink-0" />,
          url: "/warehouse",
        },
        {
          title: "Locations",
          description: "Manage storage locations",
          icon: <MapPin className="size-5 shrink-0" />,
          url: "/locations",
        },
        {
          title: "General Settings",
          description: "App configuration",
          icon: <Settings className="size-5 shrink-0" />,
          url: "/settings",
        },
      ],
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <Navbar1
        logo={{
          url: "/",
          src: "https://www.shadcnblocks.com/images/block/block-1.svg", // Placeholder
          alt: "StockMaster",
          title: "StockMaster",
        }}
        menu={menuItems}
        mobileExtraLinks={[]}
        actions={
          <div className="flex items-center gap-2">
            <Switch />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-10 w-10 bg-secondary hover:bg-secondary/80 transition-all shadow-sm border border-border/50"
                >
                  <User className="w-5 h-5 text-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl shadow-lg bg-popover/95 backdrop-blur-sm border-border/50">
                <DropdownMenuItem className="cursor-pointer font-medium">Profile</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium">Settings</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer font-medium text-destructive focus:text-destructive">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        }
      />
    </div>
  );
};
