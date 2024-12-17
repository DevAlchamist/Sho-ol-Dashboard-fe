"use client";

import React from "react";
import { MoreHorizontal, Printer } from "lucide-react"; // Example icons, adjust based on your icon library
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Adjust these imports to your ShadCN component library
import Image from "next/image";

const unpaidStudents = [
  {
    id: 1123123,
    name: "John Doe",
    profile: "https://via.placeholder.com/150",
    pendingFees: "$500",
    class: "12th A",
  },
  {
    id: 1123131,
    name: "Jane Smith",
    profile: "https://via.placeholder.com/151",
    pendingFees: "$300",
    class: "12th A",
  },
  {
    id: 3431545,
    name: "Alice Brown",
    profile: "https://via.placeholder.com/152",
    pendingFees: "$450",
    class: "12th A",
  },
  {
    id: 134545,
    name: "Pixie(My wife)",
    profile: "https://via.placeholder.com/153",
    pendingFees: "KissX1000",
    class: "12th A",
  },
  {
    id: 461545,
    name: "Shubhanshu Rana",
    profile: "https://via.placeholder.com/154",
    pendingFees: "Love",
    class: "12th A",
  },
  // Add more students as needed
];

const UnpaidStudentsTable = () => {
  return (
    <Card className="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle>Unpaid Students</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table>
          <TableBody>
            {unpaidStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell>
                  <Image
                    height={100}
                    width={100}
                    src={student.profile}
                    alt={student.name}
                    className="w-10 h-10 rounded-full"
                  />
                </TableCell>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell className="font-medium">{student.id}</TableCell>
                <TableCell>{student.class}</TableCell>
                <TableCell>{student.pendingFees}</TableCell>
                <TableCell className="flex justify-center gap-4">
                  <Button variant="ghost" size="sm">
                    <Printer className="h-5 w-5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Send Reminder</DropdownMenuItem>
                      <DropdownMenuItem>Mark as Paid</DropdownMenuItem>
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

export default UnpaidStudentsTable;
