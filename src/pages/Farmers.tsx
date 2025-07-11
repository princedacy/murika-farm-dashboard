import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCheck, Plus, Filter, Edit, Trash2, Search, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const initialFarmers = [
  {
    id: "FARM-001",
    name: "Jean Baptiste Uwimana",
    email: "jean.uwimana@email.com",
    phone: "+250 788 123 456",
    location: "Gasabo, Kigali",
    farmSize: "5 hectares",
    crops: "Coffee, Maize",
    status: "verified"
  },
  {
    id: "FARM-002",
    name: "Marie Claire Mukamana",
    email: "marie.mukamana@email.com",
    phone: "+250 788 234 567",
    location: "Nyarugenge, Kigali",
    farmSize: "3 hectares",
    crops: "Potatoes, Beans",
    status: "verified"
  },
  {
    id: "FARM-003",
    name: "Emmanuel Nkurunziza",
    email: "emmanuel.nkuru@email.com",
    phone: "+250 788 345 678",
    location: "Huye, Southern Province",
    farmSize: "7 hectares",
    crops: "Rice, Vegetables",
    status: "pending"
  },
  {
    id: "FARM-004",
    name: "Solange Mukabana",
    email: "solange.mukabana@email.com",
    phone: "+250 788 456 789",
    location: "Musanze, Northern Province",
    farmSize: "4 hectares",
    crops: "Tomatoes, Carrots",
    status: "verified"
  }
];

const Farmers = () => {
  const [farmers, setFarmers] = useState(initialFarmers);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingFarmer, setEditingFarmer] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    farmSize: "",
    crops: "",
    status: "pending"
  });

  const filteredFarmers = farmers.filter(farmer => {
    const matchesSearch = searchTerm === "" || 
      farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.phone.includes(searchTerm) ||
      farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.crops.toLowerCase().includes(searchTerm.toLowerCase()) ||
      farmer.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || farmer.status === statusFilter;
    const matchesLocation = locationFilter === "all" || farmer.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const totalPages = Math.ceil(filteredFarmers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFarmers = filteredFarmers.slice(startIndex, startIndex + itemsPerPage);

  const locations = [...new Set(farmers.map(farmer => farmer.location))];

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setLocationFilter("all");
    setCurrentPage(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingFarmer) {
      setFarmers(prev => prev.map(farmer => 
        farmer.id === editingFarmer.id 
          ? { ...farmer, ...formData }
          : farmer
      ));
    } else {
      const newFarmer = {
        id: `FARM-${String(farmers.length + 1).padStart(3, '0')}`,
        ...formData
      };
      setFarmers(prev => [...prev, newFarmer]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      farmSize: "",
      crops: "",
      status: "pending"
    });
    setEditingFarmer(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (farmer) => {
    setEditingFarmer(farmer);
    setFormData({
      name: farmer.name,
      email: farmer.email,
      phone: farmer.phone,
      location: farmer.location,
      farmSize: farmer.farmSize,
      crops: farmer.crops,
      status: farmer.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (farmerId) => {
    setFarmers(prev => prev.filter(farmer => farmer.id !== farmerId));
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
                Farmers Management
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground font-quicksand">
                Manage farmer profiles and verification status.
              </p>
            </div>
          </header>

          <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in">
            <section>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold text-foreground">
                  Registered Farmers
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
                          <Label htmlFor="search">Search Farmers</Label>
                          <div className="relative">
                            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                              id="search"
                              placeholder="Search by name, email, location, crops..."
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
                              <SelectItem value="verified">Verified</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location-filter">Location</Label>
                          <Select value={locationFilter} onValueChange={setLocationFilter}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Locations</SelectItem>
                              {locations.map((location) => (
                                <SelectItem key={location} value={location.toLowerCase()}>
                                  {location}
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
                        Add Farmer
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>{editingFarmer ? 'Edit Farmer' : 'Add New Farmer'}</DialogTitle>
                        <DialogDescription>
                          {editingFarmer ? 'Update farmer information.' : 'Fill in the farmer details below.'}
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
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
                          <Label htmlFor="farmSize">Farm Size</Label>
                          <Input
                            id="farmSize"
                            value={formData.farmSize}
                            onChange={(e) => setFormData(prev => ({ ...prev, farmSize: e.target.value }))}
                            placeholder="e.g., 5 hectares"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="crops">Crops</Label>
                          <Input
                            id="crops"
                            value={formData.crops}
                            onChange={(e) => setFormData(prev => ({ ...prev, crops: e.target.value }))}
                            placeholder="e.g., Coffee, Maize"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="status">Status</Label>
                          <Select value={formData.status} onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="verified">Verified</SelectItem>
                              <SelectItem value="pending">Pending</SelectItem>
                              <SelectItem value="rejected">Rejected</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex gap-2 pt-4">
                          <Button type="submit" className="flex-1">
                            {editingFarmer ? 'Update' : 'Add'} Farmer
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
                    <UserCheck className="h-5 w-5 sm:h-6 sm:w-6" />
                    Farmers Directory
                  </CardTitle>
                  <CardDescription className="font-quicksand text-sm sm:text-base">
                    Manage farmer profiles and verification ({filteredFarmers.length} of {farmers.length} farmers)
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Farmer ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Contact</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Farm Size</TableHead>
                        <TableHead>Crops</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedFarmers.map((farmer) => (
                        <TableRow key={farmer.id}>
                          <TableCell className="font-medium">{farmer.id}</TableCell>
                          <TableCell>{farmer.name}</TableCell>
                          <TableCell>
                            <div className="text-sm">
                              <div>{farmer.email}</div>
                              <div className="text-muted-foreground">{farmer.phone}</div>
                            </div>
                          </TableCell>
                          <TableCell>{farmer.location}</TableCell>
                          <TableCell>{farmer.farmSize}</TableCell>
                          <TableCell>{farmer.crops}</TableCell>
                          <TableCell>
                            <Badge 
                              className={`${
                                farmer.status === 'verified' 
                                  ? 'bg-green-100 text-green-800' 
                                  : farmer.status === 'pending'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {farmer.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => handleEdit(farmer)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleDelete(farmer.id)}>
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
            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Farmers;
