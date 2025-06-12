
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MetricCard } from "@/components/MetricCard";
import { Users, DollarSign, ShoppingCart, TrendingUp, Target, Leaf, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-8 border-b bg-white/80 backdrop-blur-sm shadow-sm">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-4xl font-poppins font-bold text-foreground mb-2">
                Dashboard
              </h1>
              <p className="text-muted-foreground font-quicksand text-lg">
                Overview of your agricultural platform metrics.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-quicksand text-muted-foreground">Welcome back</p>
                <p className="font-poppins font-semibold">Admin Dashboard</p>
              </div>
            </div>
          </header>

          <div className="flex-1 p-8 space-y-8 animate-fade-in">
            {/* Hero Stats */}
            <section className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl"></div>
              <div className="relative p-8 rounded-3xl border border-primary/10">
                <h2 className="text-3xl font-poppins font-bold mb-8 text-foreground flex items-center gap-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  Key Performance Metrics
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
                    value="2.4M RWF"
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
              </div>
            </section>

            {/* Modern Cards Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Farmers Stats */}
              <Card className="relative overflow-hidden border-0 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
                <CardContent className="relative p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/20 rounded-2xl">
                      <Users className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold">847</h3>
                      <p className="font-quicksand opacity-90">Farmers Onboarded</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-quicksand text-sm opacity-90">This month: +127 new farmers joined</p>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Crop Varieties */}
              <Card className="relative overflow-hidden border-0 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-secondary/80"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-black/10 rounded-full -translate-y-8 translate-x-8"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full translate-y-8 -translate-x-8"></div>
                <CardContent className="relative p-8 text-black">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-black/10 rounded-2xl">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-poppins font-bold">156</h3>
                      <p className="font-quicksand opacity-90">Crop Varieties Listed</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-quicksand text-sm opacity-90">Coffee, Rice, Potatoes, Vegetables & more</p>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-quicksand">Coffee</span>
                      <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-quicksand">Rice</span>
                      <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-quicksand">+154</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <CardTitle className="font-poppins flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <button className="w-full p-4 text-left rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-poppins font-medium">Review KYC</p>
                        <p className="text-sm text-muted-foreground font-quicksand">3 pending approvals</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full p-4 text-left rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-poppins font-medium">Process Orders</p>
                        <p className="text-sm text-muted-foreground font-quicksand">12 new orders</p>
                      </div>
                    </div>
                  </button>

                  <button className="w-full p-4 text-left rounded-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-poppins font-medium">Platform Status</p>
                        <p className="text-sm text-muted-foreground font-quicksand">All systems operational</p>
                      </div>
                    </div>
                  </button>
                </CardContent>
              </Card>
            </section>

            {/* Bottom Stats */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-lg">Monthly Growth</p>
                    <p className="text-3xl font-poppins font-bold text-green-600">+18.5%</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-lg">Coverage Areas</p>
                    <p className="text-3xl font-poppins font-bold text-blue-600">24</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Target className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-lg">Success Rate</p>
                    <p className="text-3xl font-poppins font-bold text-orange-600">94.2%</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
