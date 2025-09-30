import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppDispatch, RootState } from "../../redux/store";
import { getUsers } from "@/redux/features/users/userSlice";
type User = {
  _id: string;
  name: string;
  agency: string;
  properties_listed: number;
  status: "Active" | "Inactive";
  role: string;
};

const ManageBrokers = () => {
  // --- Redux Hooks ---
  const dispatch = useDispatch<AppDispatch>();
  const { users, isLoading, isError, message } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const brokers = users.filter((user: User) => user.role === "broker");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Manage Brokers</CardTitle>
          <CardDescription>
            Add, view, or manage brokers associated with your platform.
          </CardDescription>
        </div>
        <Button>Add New Broker</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Broker ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Agency</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-right">Properties Listed</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  Loading brokers...
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-red-600">
                  Error fetching data: {message}
                </TableCell>
              </TableRow>
            ) : brokers.length > 0 ? (
              brokers.map((broker) => (
                <TableRow key={broker._id}>
                  <TableCell className="font-medium">{broker._id}</TableCell>
                  <TableCell>{broker.name}</TableCell>
                  <TableCell>{broker.agency}</TableCell>
                  <TableCell className="text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        broker.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {broker.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {broker.properties_listed}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit Broker</DropdownMenuItem>
                        <DropdownMenuItem>View Properties</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center">
                  No brokers found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ManageBrokers;
