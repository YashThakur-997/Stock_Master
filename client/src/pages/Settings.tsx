import { Settings as SettingsIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="animate-fade-in">
      <Card className="p-12 rounded-3xl shadow-card border-0 bg-card text-center">
        <div className="w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-float animate-bounce-soft">
          <SettingsIcon className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Settings Page</h1>
        <p className="text-muted-foreground text-lg">
          Configure warehouses, users, categories, and system preferences.
        </p>
      </Card>
    </div>
  );
};

export default Settings;
