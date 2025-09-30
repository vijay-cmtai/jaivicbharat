import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getProperties,
  deleteProperty,
  reset,
} from "@/redux/features/properties/propertySlice";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ManageProperties = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { properties, isLoading, isError, message } = useAppSelector(
    (state) => state.properties
  );

  useEffect(() => {
    dispatch(getProperties());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(message as string);
    }
  }, [isError, message]);

  const handleAddNew = () => {
    navigate("/admin/properties/add");
  };

  // --- बदलाव यहाँ है ---
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      // dispatch से unwrap को कॉल करें
      dispatch(deleteProperty(id))
        .unwrap()
        .then(() => {
          toast.success("Property deleted successfully");
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

  if (isLoading && properties.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Manage Properties</CardTitle>
          <CardDescription>
            Add, edit, or remove property listings.
          </CardDescription>
        </div>
        <Button onClick={handleAddNew}>Add New Property</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(properties as any[]).map((prop) => (
              <TableRow key={prop._id}>
                <TableCell className="font-medium">{prop.title}</TableCell>
                <TableCell>{prop.property_type?.name || "N/A"}</TableCell>
                <TableCell>{prop.transaction_type}</TableCell>
                <TableCell>
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "INR",
                  }).format(prop.price)}
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
                      <DropdownMenuItem
                        onClick={() =>
                          navigate(`/admin/properties/edit/${prop._id}`)
                        }
                      >
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(prop._id)}
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
      </CardContent>
    </Card>
  );
};

export default ManageProperties;
