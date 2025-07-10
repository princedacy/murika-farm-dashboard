
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UsersRound, Plus, Filter, Edit, Trash2 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const initialCustomers = [
  {
    id: "CUST-001",
    name: "Alice Uwamahoro",
    email: "alice.uwamahoro@email.com",
    phone: "+250 788 987 654",
    location: "Kicukiro, Kigali",
    customerType: "Individual",
    totalOrders: 12,
    status: "active"
  },
  {
    id: "CUST-002",
    name: "Green Valley Restaurant",
    email: "orders@greenvalley.com",
    phone: "+250 788 876 543",
    location: "Nyarugenge, Kigali",
    customerType: "Business",
    totalOrders: 45,
    status: "active"
  },
  {
    id: "CUST-003",
    name: "Pierre Habimana",
    email: "pierre.habimana@email.com",
    phone: "+250 788 765 432",
    location: "Gasabo, Kigali",
    customerType: "Individual",
    totalOrders: 8,
    status: "inactive"
  },
  {
    id: "CUST-004",
    name: "Fresh Market Ltd",
    email: "procurement@freshmarket.rw",
    phone: "+250 788 654 321",
    location: "Huye, Southern Province",
    customerType: "Business",
    totalOrders: 67,
    status: "active"
  }
];

const Customers = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    customerType: "Individual",
    totalOrders: 0,
    status: "active"
  });

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCustomers = customers.slice(startIndex, startIndex + itemsPerPage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCustomer) {
      setCustomers(prev => prev.map(customer => 
        customer.id === editingCustomer.id 
          ? { ...customer, ...formData }
          : customer
      ));
    } else {
      const newCustomer = {
        id: `CUST-${String(customers.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setCustomers(prev => [...prev, newCustomer]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      customerType: "Individual",
      totalOrders: 0,
      status: "active"
    });
    setEditingCustomer(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (customer) => {
    setEditingCustomer(customer);
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      location: customer.location,
      customerType: customer.customerType,
      totalOrders: customer.totalOrders,
      status: customer.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (customerId) => {
    setCustomers(prev => prev.filter(customer => customer.id !== customerId));
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
                Customer Management
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-quicksand">
                Manage customer profiles and order history.
              </p>
            </div>
          </header>

          <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-foreground">
                  Customer Directory
                </h2>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button variant="outline" className="font-quicksand w-full sm:w-auto">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="bg-primary hover:bg-primary/90 font-quicksand w-full sm:w-auto">
                        <Plus className="h-4 w-4 mr-2" />
                        Add Customer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{editingCustomer ? 'Edit Customer' : 'Add New Customer'}</DialogTitle>
                        <DialogDescription>
                          {editingCustomer ? 'Update customer information.' : 'Fill in the customer details below.'}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="location">Location</Label>
                          <Input
                            id="location"
                            value={formData.location}
                            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="customerType">Customer Type</Label>
                          <Select value={formData.customerType} onValueChange={(value) => setFormData(prev => ({ ...prev, customerType: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Individual">Individual</SelectItem>
                              <SelectItem value="Business">Business</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="totalOrders">Total Orders</Label>
                          <Input
                            id="totalOrders"
                            type="number"
                            value={formData.totalOrders}
                            onChange={(e) => setFormData(prev => ({ ...prev, totalOrders: parseInt(e.target.value) || 0 }))}
                            min="0"
                          />
                        </div>
                        <div>
                          <Label htmlFor="status">Status</Label>
                          <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Active</SelectItem>
                              <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button type="submit" className="flex-1">
                            {editingCustomer ? 'Update' : 'Add'} Customer
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
                    <UsersRound className="h-5 w-5 sm:h-6 sm:w-6" />
                    Customer Database
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Manage customer profiles and relationships
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Customer ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Total Orders</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedCustomers.map((customer) => (
                        <TableRow key={customer.id}>
                          <TableCell className="font-medium">{customer.id}</TableCell>
                          <TableCell>{customer.name}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{customer.email}</div>
                              <div className="text-muted-foreground">{customer.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>{customer.location}</TableCell>
                          <TableCell>{customer.customerType}</TableCell>
                          <TableCell>{customer.totalOrders}</TableCell>
                          <TableCell>
                            <Badge 
                              className={`${
                                customer.status === 'active' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {customer.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleEdit(customer)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDelete(customer.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

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
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Customers;
