import { TopNav } from "./TopNav";
import { Sidebar } from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="pt-20 px-8 pb-8">
        {children}
      </main>
    </div>
  );
};
