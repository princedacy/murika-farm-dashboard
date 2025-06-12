
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
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 border-b bg-background">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-3xl font-poppins font-bold text-foreground">
                User Management
              </h1>
              <p className="text-muted-foreground font-quicksand">
                Manage farmer registrations and handle fraudulent accounts.
              </p>
            </div>
          </header>

          <div className="flex-1 p-6 space-y-8 animate-fade-in">
            {/* KYC Submissions */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                KYC Submissions
              </h2>
              <UserManagementSection />
            </section>

            {/* Fraudulent Accounts */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Fraudulent Accounts
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Flagged Accounts
                  </CardTitle>
                  <CardDescription className="font-quicksand">
                    Review and ban accounts suspected of fraudulent activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fraudulentAccounts.map((account) => (
                      <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg bg-red-50 border-red-200">
                        <div className="flex-1">
                          <h4 className="font-poppins font-medium text-red-800">{account.name}</h4>
                          <p className="text-sm text-red-600 font-quicksand">{account.email}</p>
                          <div className="flex gap-4 mt-2 text-sm font-quicksand">
                            <span><strong>Location:</strong> {account.farmLocation}</span>
                            <span><strong>Reason:</strong> {account.reason}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="destructive" className="font-quicksand">
                            {account.status === "flagged" ? "Flagged" : "Under Review"}
                          </Badge>
                          <div className="flex gap-2">
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
