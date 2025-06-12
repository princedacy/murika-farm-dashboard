
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
    <Card>
      <CardHeader>
        <CardTitle className="font-poppins">KYC Submissions</CardTitle>
        <CardDescription className="font-quicksand">
          Review and approve farmer registrations
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pendingUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h4 className="font-poppins font-medium">{user.name}</h4>
                <p className="text-sm text-muted-foreground font-quicksand">{user.email}</p>
                <div className="flex gap-4 mt-2 text-sm font-quicksand">
                  <span><strong>Location:</strong> {user.farmLocation}</span>
                  <span><strong>Crops:</strong> {user.cropType}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {user.status === "flagged" && (
                  <Badge variant="destructive" className="font-quicksand">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Flagged
                  </Badge>
                )}
                <div className="flex gap-2">
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
