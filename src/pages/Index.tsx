
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MetricCard } from "@/components/MetricCard";
import { UserManagementSection } from "@/components/UserManagementSection";
import { OrdersSection } from "@/components/OrdersSection";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 border-b bg-background">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-3xl font-poppins font-bold text-foreground">
                Murika Dashboard
              </h1>
              <p className="text-muted-foreground font-quicksand">
                Welcome back! Here's an overview of your agricultural platform.
              </p>
            </div>
          </header>

          <div className="flex-1 p-6 space-y-8 animate-fade-in">
            {/* Metrics Overview */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Key Metrics
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Active Farmers"
                  value="1,247"
                  change="+12.5%"
                  changeType="positive"
                  icon={Users}
                />
                <MetricCard
                  title="Total Revenue"
                  value="₹2.4M"
                  change="+8.2%"
                  changeType="positive"
                  icon={DollarSign}
                />
                <MetricCard
                  title="Orders This Month"
                  value="486"
                  change="+15.3%"
                  changeType="positive"
                  icon={ShoppingCart}
                />
                <MetricCard
                  title="Growth Rate"
                  value="23.1%"
                  change="+2.4%"
                  changeType="positive"
                  icon={TrendingUp}
                />
              </div>
            </section>

            {/* User Management */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                User Management
              </h2>
              <UserManagementSection />
            </section>

            {/* Orders Management */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Orders & Products
              </h2>
              <OrdersSection />
            </section>

            {/* Quick Stats */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-6 text-white">
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  Farmers Onboarded
                </h3>
                <p className="text-3xl font-poppins font-bold mb-2">847</p>
                <p className="font-quicksand opacity-90">
                  This month: +127 new farmers joined
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-lg p-6 text-black">
                <h3 className="text-xl font-poppins font-semibold mb-2">
                  Crop Varieties Listed
                </h3>
                <p className="text-3xl font-poppins font-bold mb-2">156</p>
                <p className="font-quicksand opacity-90">
                  Coffee, Rice, Potatoes, Vegetables & more
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
