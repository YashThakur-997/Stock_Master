import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  Package,
  TruckIcon,
  Send,
  ArrowLeftRight,
  ClipboardList,
  History,
  Settings,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Products", path: "/products", icon: Package },
  { title: "Receipts", path: "/receipts", icon: TruckIcon },
  { title: "Deliveries", path: "/deliveries", icon: Send },
  { title: "Internal Transfers", path: "/transfers", icon: ArrowLeftRight },
  { title: "Adjustments", path: "/adjustments", icon: ClipboardList },
  { title: "Move History", path: "/history", icon: History },
  { title: "Settings", path: "/settings", icon: Settings },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen fixed left-0 top-16 overflow-y-auto">
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sidebar-foreground transition-all duration-300 hover:bg-sidebar-accent hover:scale-105 hover:shadow-soft"
            activeClassName="bg-gradient-primary text-primary-foreground shadow-card font-medium"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};
