
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Package } from "lucide-react";

const recentOrders = [
  {
    id: "ORD-001",
    farmer: "Jean Baptiste Uwimana",
    product: "Arabica Coffee Beans",
    quantity: "50 kg",
    amount: "75,000 RWF",
    status: "pending",
    date: "2024-06-12"
  },
  {
    id: "ORD-002",
    farmer: "Marie Claire Mukamana",
    product: "Fresh Potatoes",
    quantity: "100 kg",
    amount: "25,000 RWF",
    status: "completed",
    date: "2024-06-11"
  },
  {
    id: "ORD-003",
    farmer: "Emmanuel Nkurunziza",
    product: "Organic Rice",
    quantity: "75 kg",
    amount: "60,000 RWF",
    status: "processing",
    date: "2024-06-10"
  }
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800"
};

export function OrdersSection() {
  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
          <Package className="h-5 w-5 sm:h-6 sm:w-6" />
          Recent Orders
        </CardTitle>
        <CardDescription className="font-quicksand text-sm sm:text-base">
          Latest product orders from farmers
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="space-y-3 sm:space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 border rounded-xl hover:bg-muted/50 transition-all duration-200 hover:shadow-md">
              <div className="flex-1 mb-3 lg:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <h4 className="font-poppins font-medium text-sm sm:text-base">{order.id}</h4>
                  <Badge className={`font-quicksand text-xs w-fit ${statusColors[order.status as keyof typeof statusColors]}`}>
                    {order.status}
                  </Badge>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-quicksand mb-2">
                  <strong>{order.farmer}</strong> • {order.product}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm font-quicksand">
                  <span><strong>Quantity:</strong> {order.quantity}</span>
                  <span><strong>Amount:</strong> {order.amount}</span>
                  <span><strong>Date:</strong> {order.date}</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="font-quicksand w-full lg:w-auto">
                <Eye className="h-4 w-4 mr-1" />
                View Details
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
