import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Smartphone, Clock, Star, Package2 } from "lucide-react";

const farmerSubmissions = [
  {
    id: "SUB-001",
    farmer: "Jean Baptiste Uwimana",
    product: "Arabica Coffee Beans",
    quantity: "25 kg",
    grade: "Grade A",
    submissionTime: "2024-01-15 08:30 AM",
    status: "pending_review",
    location: "Kigali, Gasabo"
  },
  {
    id: "SUB-002",
    farmer: "Marie Claire Mukamana",
    product: "Fresh Potatoes",
    quantity: "50 kg",
    grade: "Grade B",
    submissionTime: "2024-01-15 10:15 AM",
    status: "approved",
    location: "Kigali, Nyarugenge"
  },
  {
    id: "SUB-003",
    farmer: "Emmanuel Nkurunziza",
    product: "Organic Rice",
    quantity: "30 kg",
    grade: "Grade A",
    submissionTime: "2024-01-15 02:45 PM",
    status: "pending_review",
    location: "Kigali, Kicukiro"
  }
];

export const FarmerInventorySubmissions = () => {
  const [submissions, setSubmissions] = useState(farmerSubmissions);

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending_review: { color: 'bg-yellow-100 text-yellow-800', text: 'Pending Review' },
      approved: { color: 'bg-green-100 text-green-800', text: 'Approved' },
      rejected: { color: 'bg-red-100 text-red-800', text: 'Rejected' }
    };
    
    const config = statusConfig[status] || statusConfig.pending_review;
    return <Badge className={config.color}>{config.text}</Badge>;
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

  const handleApproval = (submissionId, action) => {
    setSubmissions(prev => prev.map(sub =>
      sub.id === submissionId
        ? { ...sub, status: action === 'approve' ? 'approved' : 'rejected' }
        : sub
    ));
  };

  return (
    <Card className="border-0 shadow-xl bg-white">
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="font-poppins flex items-center gap-2 text-lg sm:text-xl">
          <Smartphone className="h-5 w-5 sm:h-6 sm:w-6" />
          Farmer Inventory Submissions
        </CardTitle>
        <CardDescription className="font-quicksand text-sm sm:text-base">
          Review and approve farmer product submissions from mobile app
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Submission ID</TableHead>
              <TableHead>Farmer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Grade</TableHead>
              <TableHead>Submission Time</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submissions.map((submission) => (
              <TableRow key={submission.id}>
                <TableCell className="font-medium">{submission.id}</TableCell>
                <TableCell>{submission.farmer}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Package2 className="h-4 w-4" />
                  {submission.product}
                </TableCell>
                <TableCell>{submission.quantity}</TableCell>
                <TableCell>{getGradeBadge(submission.grade)}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    {submission.submissionTime}
                  </div>
                </TableCell>
                <TableCell>{submission.location}</TableCell>
                <TableCell>{getStatusBadge(submission.status)}</TableCell>
                <TableCell>
                  {submission.status === 'pending_review' && (
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-green-600 hover:bg-green-50"
                        onClick={() => handleApproval(submission.id, 'approve')}
                      >
                        Approve
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-red-600 hover:bg-red-50"
                        onClick={() => handleApproval(submission.id, 'reject')}
                      >
                        Reject
                      </Button>
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};