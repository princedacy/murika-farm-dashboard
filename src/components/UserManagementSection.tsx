
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const pendingUsers = [
  {
    id: 1,
    name: "Jean Baptiste Uwimana",
    email: "jean.uwimana@email.com",
    farmLocation: "Nyagatare District",
    cropType: "Coffee, Maize",
    status: "pending"
  },
  {
    id: 2,
    name: "Marie Claire Mukamana",
    email: "marie.mukamana@email.com",
    farmLocation: "Musanze District",
    cropType: "Potatoes, Vegetables",
    status: "pending"
  },
  {
    id: 3,
    name: "Emmanuel Nkurunziza",
    email: "emmanuel.nk@email.com",
    farmLocation: "Rwamagana District",
    cropType: "Rice, Beans",
    status: "flagged"
  }
];

export function UserManagementSection() {
  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="font-poppins text-lg sm:text-xl">KYC Submissions</CardTitle>
        <CardDescription className="font-quicksand text-sm sm:text-base">
          Review and approve farmer registrations
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-3 sm:space-y-4">
          {pendingUsers.map((user) => (
            <div key={user.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 border rounded-xl hover:bg-muted/50 transition-all duration-200">
              <div className="flex-1 mb-3 lg:mb-0">
                <h4 className="font-poppins font-medium text-sm sm:text-base">{user.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-quicksand mb-2">{user.email}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 text-xs sm:text-sm font-quicksand">
                  <span><strong>Location:</strong> {user.farmLocation}</span>
                  <span><strong>Crops:</strong> {user.cropType}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                {user.status === "flagged" && (
                  <Badge variant="destructive" className="font-quicksand text-xs w-fit">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Flagged
                  </Badge>
                )}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button size="sm" variant="outline" className="font-quicksand">
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 font-quicksand">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
