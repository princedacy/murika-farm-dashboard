
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, PieChart, Calendar } from "lucide-react";

const Analytics = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 border-b bg-background">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-3xl font-poppins font-bold text-foreground">
                Analytics Reports
              </h1>
              <p className="text-muted-foreground font-quicksand">
                Detailed insights and reports on platform performance.
              </p>
            </div>
          </header>

          <div className="flex-1 p-6 space-y-8 animate-fade-in">
            {/* Report Categories */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Available Reports
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="font-poppins flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Sales Analytics
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Revenue trends, order volumes, and sales performance
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-quicksand text-muted-foreground">
                      Last updated: 2 hours ago
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="font-poppins flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      User Growth
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Farmer registration trends and user engagement metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-quicksand text-muted-foreground">
                      Last updated: 1 hour ago
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="font-poppins flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-primary" />
                      Crop Distribution
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Analysis of crop types and regional distribution
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-quicksand text-muted-foreground">
                      Last updated: 30 minutes ago
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Insights */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Quick Insights
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-poppins">Monthly Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-quicksand">New Registrations</span>
                      <span className="font-poppins font-semibold text-primary">+127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-quicksand">Revenue Growth</span>
                      <span className="font-poppins font-semibold text-primary">+8.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-quicksand">Active Orders</span>
                      <span className="font-poppins font-semibold text-primary">486</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-poppins">Top Performing Regions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-quicksand">Nyagatare District</span>
                      <span className="font-poppins font-semibold">23% of sales</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-quicksand">Musanze District</span>
                      <span className="font-poppins font-semibold">18% of sales</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-quicksand">Rwamagana District</span>
                      <span className="font-poppins font-semibold">15% of sales</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Analytics;
