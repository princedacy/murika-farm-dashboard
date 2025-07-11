import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Plus, Filter, Edit, Trash2, Search, X, Upload, FolderOpen, Smartphone, BarChart3 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductCategories } from "@/components/ProductCategories";
import { FarmerInventorySubmissions } from "@/components/FarmerInventorySubmissions";
import { InventoryTracking } from "@/components/InventoryTracking";

const initialProducts = [
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
  },
  {
    id: "PROD-004",
    name: "Fresh Tomatoes",
    category: "Vegetables",
    farmer: "Solange Mukabana",
    price: "400 RWF/kg",
    stock: "200 kg",
    status: "active"
  },
  {
    id: "PROD-005",
    name: "Bananas",
    category: "Fruits",
    farmer: "Paul Niyitegeka",
    price: "300 RWF/kg",
    stock: "120 kg",
    status: "active"
  }
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    farmer: "",
    price: "",
    stock: "",
    availableQuantity: "",
    image: "",
    status: "active"
  });

  const filteredProducts = products.filter(product => {
    const matchesSearch = searchTerm === "" || 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.farmer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || product.status === statusFilter;
    const matchesCategory = categoryFilter === "all" || product.category.toLowerCase() === categoryFilter.toLowerCase();
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const categories = [...new Set(products.map(product => product.category))];

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setCategoryFilter("all");
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(prev => prev.map(product => 
        product.id === editingProduct.id 
          ? { ...product, ...formData }
          : product
      ));
    } else {
      const newProduct = {
        id: `PROD-${String(products.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setProducts(prev => [...prev, newProduct]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      category: "",
      farmer: "",
      price: "",
      stock: "",
      availableQuantity: "",
      image: "",
      status: "active"
    });
    setEditingProduct(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      farmer: product.farmer,
      price: product.price,
      stock: product.stock,
      availableQuantity: product.availableQuantity || "",
      image: product.image || "",
      status: product.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (productId) => {
    setProducts(prev => prev.filter(product => product.id !== productId));
  };

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
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="products" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Products
                </TabsTrigger>
                <TabsTrigger value="categories" className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  Categories
                </TabsTrigger>
                <TabsTrigger value="inventory" className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Inventory
                </TabsTrigger>
                <TabsTrigger value="submissions" className="flex items-center gap-2">
                  <Smartphone className="h-4 w-4" />
                  Farmer Submissions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="products" className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-foreground">
                    Product Listings
                  </h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Popover open={showFilters} onOpenChange={setShowFilters}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="font-quicksand w-full sm:w-auto">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="search">Search Products</Label>
                          <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="search"
                              placeholder="Search by name, farmer, category, or ID..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="pl-8"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="status-filter">Status</Label>
                          <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Statuses</SelectItem>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="low_stock">Low Stock</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="category-filter">Category</Label>
                          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Categories</SelectItem>
                              {categories.map((category) => (
                                <SelectItem key={category} value={category.toLowerCase()}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-2">
                          <Button onClick={clearFilters} variant="outline" size="sm" className="flex-1">
                            <X className="h-4 w-4 mr-1" />
                            Clear
                          </Button>
                          <Button onClick={() => setShowFilters(false)} size="sm" className="flex-1">
                            Apply
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 font-quicksand w-full sm:w-auto">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Product
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
                        <DialogDescription>
                          {editingProduct ? 'Update product information.' : 'Fill in the product details below.'}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Product Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Input
                            id="category"
                            value={formData.category}
                            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="farmer">Farmer</Label>
                          <Input
                            id="farmer"
                            value={formData.farmer}
                            onChange={(e) => setFormData(prev => ({ ...prev, farmer: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="price">Price</Label>
                          <Input
                            id="price"
                            value={formData.price}
                            onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                            placeholder="e.g., 1,000 RWF/kg"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="image">Product Image</Label>
                          <div className="flex items-center gap-2">
                            <Input
                              id="image"
                              value={formData.image}
                              onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                              placeholder="Image URL or upload"
                            />
                            <Button type="button" size="sm" variant="outline">
                              <Upload className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="stock">Stock</Label>
                            <Input
                              id="stock"
                              value={formData.stock}
                              onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                              placeholder="e.g., 100 kg"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="availableQuantity">Available Quantity</Label>
                            <Input
                              id="availableQuantity"
                              value={formData.availableQuantity}
                              onChange={(e) => setFormData(prev => ({ ...prev, availableQuantity: e.target.value }))}
                              placeholder="e.g., 75 kg"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="status">Status</Label>
                          <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="low_stock">Low Stock</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button type="submit" className="flex-1">
                            {editingProduct ? 'Update' : 'Add'} Product
                          </Button>
                          <Button type="button" variant="outline" onClick={resetForm}>
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                  </div>
                </div>
              
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
                    <Package className="h-5 w-5 sm:h-6 sm:w-6" />
                    Product Catalog
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Manage product listings and inventory ({filteredProducts.length} of {products.length} products)
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Product ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Farmer</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Stock</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedProducts.map((product) => (
                        <TableRow key={product.id}>
                          <TableCell className="font-medium">{product.id}</TableCell>
                          <TableCell>{product.name}</TableCell>
                          <TableCell>{product.category}</TableCell>
                          <TableCell>{product.farmer}</TableCell>
                          <TableCell>{product.price}</TableCell>
                          <TableCell>{product.stock}</TableCell>
                          <TableCell>
                            <Badge 
                              className={`${
                                product.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}
                            >
                              {product.status === 'active' ? 'Active' : 'Low Stock'}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleEdit(product)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDelete(product.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  {totalPages > 1 && (
                    <div className="mt-6">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                          </PaginationItem>
                          {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                              <PaginationLink
                                onClick={() => setCurrentPage(index + 1)}
                                isActive={currentPage === index + 1}
                                className="cursor-pointer"
                              >
                                {index + 1}
                              </PaginationLink>
                            </PaginationItem>
                          ))}
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </CardContent>
              </Card>
              </TabsContent>

              <TabsContent value="categories">
                <ProductCategories />
              </TabsContent>

              <TabsContent value="inventory">
                <InventoryTracking />
              </TabsContent>

              <TabsContent value="submissions">
                <FarmerInventorySubmissions />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Products;
