import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, FolderOpen } from "lucide-react";

const initialCategories = [
  { id: "CAT-001", name: "Coffee", description: "Coffee beans and related products", status: "active", productCount: 5 },
  { id: "CAT-002", name: "Vegetables", description: "Fresh vegetables and greens", status: "active", productCount: 12 },
  { id: "CAT-003", name: "Fruits", description: "Fresh seasonal fruits", status: "active", productCount: 8 },
  { id: "CAT-004", name: "Grains", description: "Rice, wheat, and other grains", status: "active", productCount: 3 },
  { id: "CAT-005", name: "Dairy", description: "Milk and dairy products", status: "inactive", productCount: 0 }
];

export const ProductCategories = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "active"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(prev => prev.map(category =>
        category.id === editingCategory.id
          ? { ...category, ...formData }
          : category
      ));
    } else {
      const newCategory = {
        id: `CAT-${String(categories.length + 1).padStart(3, '0')}`,
        ...formData,
        productCount: 0
      };
      setCategories(prev => [...prev, newCategory]);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", status: "active" });
    setEditingCategory(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description,
      status: category.status
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (categoryId) => {
    setCategories(prev => prev.filter(category => category.id !== categoryId));
  };

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
              <FolderOpen className="h-5 w-5 sm:h-6 sm:w-6" />
              Product Categories
            </CardTitle>
            <CardDescription className="font-quicksand text-sm sm:text-base">
              Manage product categories and organization
            </CardDescription>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 font-quicksand">
                <Plus className="h-4 w-4 mr-2" />
                Add Category
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{editingCategory ? 'Edit Category' : 'Add New Category'}</DialogTitle>
                <DialogDescription>
                  {editingCategory ? 'Update category information.' : 'Create a new product category.'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Category Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="e.g., Vegetables"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the category"
                    required
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingCategory ? 'Update' : 'Create'} Category
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
              <TableHead>Category ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.id}</TableCell>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>{category.productCount} products</TableCell>
                <TableCell>
                  <Badge className={category.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}>
                    {category.status === 'active' ? 'Active' : 'Inactive'}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleEdit(category)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDelete(category.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};