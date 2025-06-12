
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
    <Card>
      <CardHeader>
        <CardTitle className="font-poppins flex items-center gap-2">
          <Package className="h-5 w-5" />
          Recent Orders
        </CardTitle>
        <CardDescription className="font-quicksand">
          Latest product orders from farmers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-poppins font-medium">{order.id}</h4>
                  <Badge className={`font-quicksand ${statusColors[order.status as keyof typeof statusColors]}`}>
                    {order.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground font-quicksand">
                  <strong>{order.farmer}</strong> • {order.product}
                </p>
                <div className="flex gap-4 mt-1 text-sm font-quicksand">
                  <span><strong>Quantity:</strong> {order.quantity}</span>
                  <span><strong>Amount:</strong> {order.amount}</span>
                  <span><strong>Date:</strong> {order.date}</span>
                </div>
              </div>
              <Button size="sm" variant="outline" className="font-quicksand">
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
