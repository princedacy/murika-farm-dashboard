
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
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

const Products = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 to-gray-100">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <header className="flex items-center gap-2 sm:gap-4 p-4 sm:p-6 lg:p-8 border-b bg-white/80 backdrop-blur-sm shadow-sm">
            <SidebarTrigger className="text-primary" />
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-poppins font-bold text-foreground mb-1 sm:mb-2">
                Product Management
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-quicksand">
                Manage product listings and inventory from farmers.
              </p>
            </div>
          </header>

          <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-foreground">
                  Product Listings
                </h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="font-quicksand w-full sm:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 font-quicksand w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </div>
              
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6" />
                    Product Catalog
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Manage product listings and inventory
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="space-y-3 sm:space-y-4">
                    {products.map((product) => (
                      <div key={product.id} className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 border rounded-xl hover:bg-muted/50 transition-all duration-200 hover:shadow-md">
                        <div className="flex-1 mb-3 lg:mb-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h4 className="font-poppins font-medium text-sm sm:text-base">{product.name}</h4>
                            <Badge 
                              className={`font-quicksand text-xs w-fit ${
                                product.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {product.status === 'active' ? 'Active' : 'Low Stock'}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground font-quicksand mb-2">
                            <strong>{product.farmer}</strong> • {product.category}
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 text-xs sm:text-sm font-quicksand">
                            <span><strong>Price:</strong> {product.price}</span>
                            <span><strong>Stock:</strong> {product.stock}</span>
                            <span><strong>ID:</strong> {product.id}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="font-quicksand w-full lg:w-auto">
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

export default Products;
