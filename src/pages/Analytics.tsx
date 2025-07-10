import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart3, TrendingUp, PieChart, Calendar as CalendarIcon, Download } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Bar, BarChart, Line, LineChart, Pie, PieChart as RechartsPieChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from "recharts";

const Analytics = () => {
  const [reportType, setReportType] = useState("daily");
  const [dateFrom, setDateFrom] = useState<Date>();
  const [dateTo, setDateTo] = useState<Date>();

  const salesData = [
    { name: "Jan", revenue: 4000, orders: 24 },
    { name: "Feb", revenue: 3000, orders: 18 },
    { name: "Mar", revenue: 5000, orders: 32 },
    { name: "Apr", revenue: 4500, orders: 28 },
    { name: "May", revenue: 6000, orders: 38 },
    { name: "Jun", revenue: 5500, orders: 35 },
  ];

  const cropData = [
    { name: "Maize", value: 400, fill: "#10B981" }, // emerald-500
    { name: "Beans", value: 300, fill: "#F59E0B" }, // amber-500
    { name: "Rice", value: 200, fill: "#EF4444" }, // red-500
    { name: "Potatoes", value: 150, fill: "#8B5CF6" }, // violet-500
  ];

  const userGrowthData = [
    { name: "Week 1", farmers: 45, buyers: 23 },
    { name: "Week 2", farmers: 52, buyers: 31 },
    { name: "Week 3", farmers: 48, buyers: 28 },
    { name: "Week 4", farmers: 61, buyers: 35 },
  ];

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#059669", // emerald-600
    },
    orders: {
      label: "Orders",
      color: "#DC2626", // red-600
    },
    farmers: {
      label: "Farmers",
      color: "#7C3AED", // violet-600
    },
    buyers: {
      label: "Buyers",
      color: "#EA580C", // orange-600
    },
  };

  const generateReport = () => {
    console.log("Generating report:", { reportType, dateFrom, dateTo });
    // Here you would typically call an API to generate the report
  };

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
                Generate detailed insights and reports on platform performance.
              </p>
            </div>
          </header>

          <div className="flex-1 p-6 space-y-8 animate-fade-in">
            {/* Report Controls */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Report Configuration
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins">Generate Custom Report</CardTitle>
                  <CardDescription className="font-quicksand">
                    Select report type and date range to generate analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-quicksand font-medium">Report Type</label>
                      <Select value={reportType} onValueChange={setReportType}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select report type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                          <SelectItem value="custom">Custom Range</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-quicksand font-medium">From Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dateFrom && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateFrom ? format(dateFrom, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dateFrom}
                            onSelect={setDateFrom}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-quicksand font-medium">To Date</label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !dateTo && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {dateTo ? format(dateTo, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={dateTo}
                            onSelect={setDateTo}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-quicksand font-medium">Actions</label>
                      <div className="flex gap-2">
                        <Button onClick={generateReport} className="flex-1">
                          Generate Report
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Charts Section */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Visual Analytics
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sales Revenue Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-poppins flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Sales & Revenue Trends
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Monthly revenue and order volume comparison
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px]">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="revenue" fill="var(--color-revenue)" />
                        <Bar dataKey="orders" fill="var(--color-orders)" />
                      </BarChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* Crop Distribution Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-poppins flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-primary" />
                      Crop Distribution
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Distribution of different crop types by volume
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px]">
                      <RechartsPieChart>
                        <Pie
                          data={cropData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {cropData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </RechartsPieChart>
                    </ChartContainer>
                  </CardContent>
                </Card>

                {/* User Growth Chart */}
                <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="font-poppins flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      User Growth Trends
                    </CardTitle>
                    <CardDescription className="font-quicksand">
                      Weekly farmer and buyer registration trends
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ChartContainer config={chartConfig} className="h-[300px]">
                      <LineChart data={userGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="farmers" stroke="var(--color-farmers)" strokeWidth={2} />
                        <Line type="monotone" dataKey="buyers" stroke="var(--color-buyers)" strokeWidth={2} />
                      </LineChart>
                    </ChartContainer>
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
