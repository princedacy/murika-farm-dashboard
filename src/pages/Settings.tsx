
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings as SettingsIcon, User, Bell, Shield, Database, Globe } from "lucide-react";

const Settings = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 border-b bg-white/80 backdrop-blur-sm shadow-sm">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-1 sm:mb-2">
                Settings
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-quicksand">
                Manage your application settings and preferences.
              </p>
            </div>
          </header>

          <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
            {/* Profile Settings */}
            <section>
              <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 sm:mb-6 text-foreground">
                Profile Settings
              </h2>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
                    <User className="h-5 w-5 sm:h-6 sm:w-6" />
                    Account Information
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Manage your personal information and account details
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-poppins">Full Name</label>
                      <div className="p-3 border rounded-md bg-gray-50 font-quicksand">
                        Admin User
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-poppins">Email</label>
                      <div className="p-3 border rounded-md bg-gray-50 font-quicksand">
                        admin@murika.com
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 font-quicksand">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Notification Settings */}
            <section>
              <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 sm:mb-6 text-foreground">
                Notifications
              </h2>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
                    <Bell className="h-5 w-5 sm:h-6 sm:w-6" />
                    Notification Preferences
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Configure how you receive notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-medium font-poppins">New Order Notifications</h4>
                        <p className="text-sm text-muted-foreground font-quicksand">Get notified when new orders are placed</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 w-fit">Enabled</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-medium font-poppins">User Registration Alerts</h4>
                        <p className="text-sm text-muted-foreground font-quicksand">Get notified when new farmers register</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 w-fit">Enabled</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="font-medium font-poppins">Low Stock Alerts</h4>
                        <p className="text-sm text-muted-foreground font-quicksand">Get notified when products are running low</p>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800 w-fit">Disabled</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="font-quicksand">
                    Configure Notifications
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Security & Privacy */}
            <section>
              <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 sm:mb-6 text-foreground">
                Security & Privacy
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="font-poppins flex items-center gap-2 text-lg">
                      <Shield className="h-5 w-5" />
                      Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 space-y-3">
                    <Button variant="outline" className="w-full font-quicksand">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full font-quicksand">
                      Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full font-quicksand">
                      Login History
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-xl bg-white">
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="font-poppins flex items-center gap-2 text-lg">
                      <Database className="h-5 w-5" />
                      Data & Privacy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0 space-y-3">
                    <Button variant="outline" className="w-full font-quicksand">
                      Export Data
                    </Button>
                    <Button variant="outline" className="w-full font-quicksand">
                      Privacy Settings
                    </Button>
                    <Button variant="outline" className="w-full font-quicksand">
                      Data Retention
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* System Settings */}
            <section>
              <h2 className="text-xl sm:text-2xl font-poppins font-semibold mb-4 sm:mb-6 text-foreground">
                System Settings
              </h2>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
                    <Globe className="h-5 w-5 sm:h-6 sm:w-6" />
                    Application Settings
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Configure system-wide settings and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-poppins">Language</label>
                      <div className="p-3 border rounded-md bg-gray-50 font-quicksand">
                        English (US)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-poppins">Currency</label>
                      <div className="p-3 border rounded-md bg-gray-50 font-quicksand">
                        Rwandan Franc (RWF)
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-poppins">Time Zone</label>
                      <div className="p-3 border rounded-md bg-gray-50 font-quicksand">
                        Africa/Kigali
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium font-poppins">Date Format</label>
                      <div className="p-3 border rounded-md bg-gray-50 font-quicksand">
                        DD/MM/YYYY
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 font-quicksand">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Settings;
