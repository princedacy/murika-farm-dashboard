import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Package, Plus, Calendar, User, Star, TrendingUp, TrendingDown } from "lucide-react";

const inventoryData = [
  {
    id: "INV-001",
    product: "Arabica Coffee Beans",
    farmer: "Jean Baptiste Uwimana",
    quantity: "150 kg",
    grade: "Grade A",
    receivedDate: "2024-01-15",
    receivedTime: "08:30 AM",
    expiryDate: "2024-06-15",
    status: "available",
    batchNumber: "BATCH-2024-001"
  },
  {
    id: "INV-002",
    product: "Fresh Potatoes",
    farmer: "Marie Claire Mukamana",
    quantity: "75 kg",
    grade: "Grade B",
    receivedDate: "2024-01-14",
    receivedTime: "02:15 PM",
    expiryDate: "2024-02-14",
    status: "low_stock",
    batchNumber: "BATCH-2024-002"
  },
  {
    id: "INV-003",
    product: "Organic Rice",
    farmer: "Emmanuel Nkurunziza",
    quantity: "200 kg",
    grade: "Grade A",
    receivedDate: "2024-01-13",
    receivedTime: "11:00 AM",
    expiryDate: "2024-12-13",
    status: "available",
    batchNumber: "BATCH-2024-003"
  }
];

export const InventoryTracking = () => {
  const [inventory, setInventory] = useState(inventoryData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    farmer: "",
    quantity: "",
    grade: "Grade A",
    receivedDate: "",
    receivedTime: "",
    expiryDate: "",
    batchNumber: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newInventory = {
      id: `INV-${String(inventory.length + 1).padStart(3, '0')}`,
      ...formData,
      status: "available"
    };
    setInventory(prev => [...prev, newInventory]);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      product: "",
      farmer: "",
      quantity: "",
      grade: "Grade A",
      receivedDate: "",
      receivedTime: "",
      expiryDate: "",
      batchNumber: ""
    });
    setIsDialogOpen(false);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      available: { color: 'bg-green-100 text-green-800', text: 'Available', icon: TrendingUp },
      low_stock: { color: 'bg-yellow-100 text-yellow-800', text: 'Low Stock', icon: TrendingDown },
      out_of_stock: { color: 'bg-red-100 text-red-800', text: 'Out of Stock', icon: TrendingDown }
    };
    
    const config = statusConfig[status] || statusConfig.available;
    const Icon = config.icon;
    
    return (
      <Badge className={config.color}>
        <Icon className="h-3 w-3 mr-1" />
        {config.text}
      </Badge>
    );
  };

  const getGradeBadge = (grade) => {
    const gradeConfig = {
      'Grade A': { color: 'bg-emerald-100 text-emerald-800', stars: 3 },
      'Grade B': { color: 'bg-blue-100 text-blue-800', stars: 2 },
      'Grade C': { color: 'bg-orange-100 text-orange-800', stars: 1 }
    };
    
    const config = gradeConfig[grade] || gradeConfig['Grade C'];
    return (
      <div className="flex items-center gap-1">
        <Badge className={config.color}>{grade}</Badge>
        <div className="flex">
          {[...Array(config.stars)].map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-current text-yellow-500" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
              <Package className="h-5 w-5 sm:h-6 sm:w-6" />
              Inventory Tracking
            </CardTitle>
            <CardDescription className="font-quicksand text-sm sm:text-base">
              Track product inventory by farmer with detailed information
            </CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 font-quicksand">
                <Plus className="h-4 w-4 mr-2" />
                Add Inventory
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Inventory Entry</DialogTitle>
                <DialogDescription>
                  Record new product inventory with farmer details.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="product">Product Name</Label>
                  <Input
                    id="product"
                    value={formData.product}
                    onChange={(e) => setFormData(prev => ({ ...prev, product: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="farmer">Farmer Name</Label>
                  <Input
                    id="farmer"
                    value={formData.farmer}
                    onChange={(e) => setFormData(prev => ({ ...prev, farmer: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                    placeholder="e.g., 100 kg"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="grade">Grade</Label>
                  <Select value={formData.grade} onValueChange={(value) => setFormData(prev => ({ ...prev, grade: value }))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Grade A">Grade A</SelectItem>
                      <SelectItem value="Grade B">Grade B</SelectItem>
                      <SelectItem value="Grade C">Grade C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="receivedDate">Received Date</Label>
                    <Input
                      id="receivedDate"
                      type="date"
                      value={formData.receivedDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, receivedDate: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="receivedTime">Received Time</Label>
                    <Input
                      id="receivedTime"
                      type="time"
                      value={formData.receivedTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, receivedTime: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="batchNumber">Batch Number</Label>
                  <Input
                    id="batchNumber"
                    value={formData.batchNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, batchNumber: e.target.value }))}
                    placeholder="e.g., BATCH-2024-001"
                    required
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    Add Inventory
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Inventory ID</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Received</TableHead>
              <TableHead>Expiry Date</TableHead>
              <TableHead>Batch</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.id}</TableCell>
                <TableCell>{item.product}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    {item.farmer}
                  </div>
                </TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>{getGradeBadge(item.grade)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div className="text-sm">
                      <div>{item.receivedDate}</div>
                      <div className="text-muted-foreground">{item.receivedTime}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{item.expiryDate}</TableCell>
                <TableCell className="font-mono text-sm">{item.batchNumber}</TableCell>
                <TableCell>{getStatusBadge(item.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};