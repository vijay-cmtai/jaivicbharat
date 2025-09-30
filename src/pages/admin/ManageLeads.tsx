import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getMyReceivedInquiries,
  updateInquiryStatus,
  deleteInquiry,
} from "@/redux/features/inquiry/inquirySlice";
import { format } from "date-fns";
import { toast } from "sonner";
// UI कंपोनेंट्स... (जैसे पहले थे)
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Loader2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

const ManageLeads = () => {
  const dispatch = useAppDispatch();
  const { received: leads, isLoading } = useAppSelector(
    (state) => state.inquiry
  );

  useEffect(() => {
    dispatch(getMyReceivedInquiries());
  }, [dispatch]);

  const handleStatusChange = (id: string, status: string) => {
    dispatch(updateInquiryStatus({ id, status }))
      .unwrap()
      .then(() => toast.success(`Status updated to ${status}`))
      .catch(() => toast.error("Failed to update status"));
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      dispatch(deleteInquiry(id))
        .unwrap()
        .then(() => toast.success("Inquiry deleted"))
        .catch(() => toast.error("Failed to delete inquiry"));
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Resolved":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Leads / Inquiries</CardTitle>
        <CardDescription>
          View and manage all inquiries for your properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && leads.length === 0 ? (
          <div className="flex justify-center items-center py-10">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Sender</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Date Received</TableHead>
                <TableHead className="text-center">Status</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead._id}>
                  <TableCell className="font-medium">
                    {lead.property?.title || "N/A"}
                  </TableCell>
                  <TableCell>{lead.name}</TableCell>
                  <TableCell>
                    <div>{lead.email}</div>
                    <div className="text-sm text-muted-foreground">
                      {lead.phone}
                    </div>
                  </TableCell>
                  <TableCell>
                    {format(new Date(lead.createdAt), "dd MMM, yyyy")}
                  </TableCell>
                  <TableCell className="text-center">
                    <Badge className={getStatusBadgeClass(lead.status)}>
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onSelect={() => alert(lead.message)}>
                          View Message
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                          <DropdownMenuSubTrigger>
                            Update Status
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              <DropdownMenuItem
                                onSelect={() =>
                                  handleStatusChange(lead._id, "Pending")
                                }
                              >
                                Pending
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onSelect={() =>
                                  handleStatusChange(lead._id, "Contacted")
                                }
                              >
                                Contacted
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onSelect={() =>
                                  handleStatusChange(lead._id, "Resolved")
                                }
                              >
                                Resolved
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuItem
                          className="text-red-600"
                          onSelect={() => handleDelete(lead._id)}
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>{leads.length}</strong> of{" "}
          <strong>{leads.length}</strong> leads.
        </div>
      </CardFooter>
    </Card>
  );
};

export default ManageLeads;
