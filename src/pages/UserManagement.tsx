
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { UserManagementSection } from "@/components/UserManagementSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Ban, UserCheck, AlertTriangle } from "lucide-react";

const fraudulentAccounts = [
  {
    id: 1,
    name: "Suspicious Account 1",
    email: "fake.user@email.com",
    farmLocation: "Unknown",
    reason: "Multiple fake documents",
    status: "flagged"
  },
  {
    id: 2,
    name: "John Doe Fake",
    email: "john.fake@email.com",
    farmLocation: "Invalid Location",
    reason: "Duplicate registration",
    status: "under_review"
  }
];

const UserManagement = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 border-b bg-white/80 backdrop-blur-sm shadow-sm">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-1 sm:mb-2">
                User Management
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-quicksand">
                Manage farmer registrations and handle fraudulent accounts.
              </p>
            </div>
          </header>

          <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
            {/* KYC Submissions */}
            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold mb-4 sm:mb-6 text-foreground">
                KYC Submissions
              </h2>
              <UserManagementSection />
            </section>

            {/* Fraudulent Accounts */}
            <section>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold mb-4 sm:mb-6 text-foreground">
                Fraudulent Accounts
              </h2>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
                    <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                    Flagged Accounts
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Review and ban accounts suspected of fraudulent activity
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {fraudulentAccounts.map((account) => (
                      <div key={account.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 border rounded-xl bg-red-50 border-red-200 hover:bg-red-100 transition-all duration-200">
                        <div className="flex-1 mb-3 lg:mb-0">
                          <h4 className="font-poppins font-medium text-red-800 text-sm sm:text-base">{account.name}</h4>
                          <p className="text-xs sm:text-sm text-red-600 font-quicksand mb-2">{account.email}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 text-xs sm:text-sm font-quicksand">
                            <span><strong>Location:</strong> {account.farmLocation}</span>
                            <span><strong>Reason:</strong> {account.reason}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                          <Badge variant="destructive" className="font-quicksand text-xs w-fit">
                            {account.status === "flagged" ? "Flagged" : "Under Review"}
                          </Badge>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <Button size="sm" variant="outline" className="font-quicksand">
                              <UserCheck className="h-4 w-4 mr-1" />
                              Clear
                            </Button>
                            <Button size="sm" variant="destructive" className="font-quicksand">
                              <Ban className="h-4 w-4 mr-1" />
                              Ban Account
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default UserManagement;
