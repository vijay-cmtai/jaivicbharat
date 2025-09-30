import React from "react";
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
import {
  DollarSign,
  Users,
  Building,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* --- आँकड़ों के कार्ड --- */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,23,189</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Properties Sold
            </CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Platform Activity
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* --- ग्राफ़ कार्ड --- */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Sales Overview</CardTitle>
            <CardDescription>
              A summary of sales and rentals this year.
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            {/* 
              यहाँ आप एक चार्टिंग लाइब्रेरी (जैसे Recharts, Chart.js) का उपयोग करेंगे।
              उदाहरण के लिए: <BarChart data={chartData} /> 
            */}
            <div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
              <p className="text-muted-foreground">Graph / Chart Area</p>
            </div>
          </CardContent>
        </Card>

        {/* --- हाल के ऑर्डर कार्ड --- */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>You have 5 new orders this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Rohan Sharma</div>
                    <div className="text-sm text-muted-foreground">
                      rohan@example.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">₹1.2 Cr</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Priya Verma</div>
                    <div className="text-sm text-muted-foreground">
                      priya@example.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">₹2.5 Cr</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Amit Singh</div>
                    <div className="text-sm text-muted-foreground">
                      amit@example.com
                    </div>
                  </TableCell>
                  <TableCell className="text-right">₹80,000</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <Button asChild size="sm" className="w-full">
              <Link to="/admin/orders">
                View All Orders <ArrowUpRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
