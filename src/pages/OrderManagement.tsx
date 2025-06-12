
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { OrdersSection } from "@/components/OrdersSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Plus, Filter } from "lucide-react";

const products = [
  {
    id: "PROD-001",
    name: "Arabica Coffee Beans",
    category: "Coffee",
    farmer: "Jean Baptiste Uwimana",
    price: "1,500 RWF/kg",
    stock: "150 kg",
    status: "active"
  },
  {
    id: "PROD-002", 
    name: "Fresh Potatoes",
    category: "Vegetables",
    farmer: "Marie Claire Mukamana",
    price: "250 RWF/kg",
    stock: "300 kg",
    status: "active"
  },
  {
    id: "PROD-003",
    name: "Organic Rice",
    category: "Grains",
    farmer: "Emmanuel Nkurunziza",
    price: "800 RWF/kg",
    stock: "75 kg",
    status: "low_stock"
  }
];

const OrderManagement = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-4 p-6 border-b bg-background">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-3xl font-poppins font-bold text-foreground">
                Order & Product Management
              </h1>
              <p className="text-muted-foreground font-quicksand">
                Manage orders and product listings from farmers.
              </p>
            </div>
          </header>

          <div className="flex-1 p-6 space-y-8 animate-fade-in">
            {/* Recent Orders */}
            <section>
              <h2 className="text-2xl font-poppins font-semibold mb-6 text-foreground">
                Recent Orders
              </h2>
              <OrdersSection />
            </section>

            {/* Product Management */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-poppins font-semibold text-foreground">
                  Product Listings
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" className="font-quicksand">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 font-quicksand">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Product Catalog
                  </CardTitle>
                  <CardDescription className="font-quicksand">
                    Manage product listings and inventory
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products.map((product) => (
                      <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-poppins font-medium">{product.name}</h4>
                            <Badge 
                              className={`font-quicksand ${
                                product.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {product.status === 'active' ? 'Active' : 'Low Stock'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground font-quicksand">
                            <strong>{product.farmer}</strong> • {product.category}
                          </p>
                          <div className="flex gap-4 mt-1 text-sm font-quicksand">
                            <span><strong>Price:</strong> {product.price}</span>
                            <span><strong>Stock:</strong> {product.stock}</span>
                            <span><strong>ID:</strong> {product.id}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="font-quicksand">
                          Manage
                        </Button>
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

export default OrderManagement;
