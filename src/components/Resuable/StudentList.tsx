"use client";

import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";
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
} from "@/components/ui/table";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Adjust these imports based on your ShadCN setup
import { Student } from "@/hooks/interfaces";
import Image from "next/image";
import Link from "next/link";

// Sample Data
const studentsData: Student[] = [
  {
    id: "1",
    name: "John Doe",
    date: "2024-11-01",
    city: "New York",
    profile: "https://via.placeholder.com/150",
    contact: "123-456-7890",
    parentName: "Ajay",
    grade: "VII C",
  },
  {
    id: "2",
    name: "Jane Smith",
    date: "2024-11-02",
    city: "Los Angeles",
    contact: "987-654-3210",
    profile: "https://via.placeholder.com/150",
    parentName: "Ajay",
    grade: "VII B",
  },
  {
    id: "3",
    name: "Alice Brown",
    profile: "https://via.placeholder.com/150",
    date: "2024-11-03",
    city: "Chicago",
    parentName: "Ajay",
    contact: "456-789-1234",
    grade: "VII A",
  },
  // More student records as needed
];

const StudentTable = () => {
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const handleSelect = (id: number) => {
    setSelectedStudent(id);
  };

  return (
    <Card className="w-full border-none shadow-none">
      <CardContent className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="">
              <TableHead className="text-black text-left">
                <RadioGroup>
                  <RadioGroupItem value="all" />
                </RadioGroup>
              </TableHead>
              <TableHead className="text-black text-left">Name</TableHead>
              <TableHead className="text-black text-left">ID</TableHead>
              <TableHead className="text-black text-left">Date</TableHead>
              <TableHead className="text-black text-left">City</TableHead>
              <TableHead className="text-black text-left">
                Parent Name
              </TableHead>
              <TableHead className="text-black text-left">Contact</TableHead>
              <TableHead className="text-black text-left">Grade</TableHead>
              <TableHead className="text-black text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentsData.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="">
                  <RadioGroup
                    value={selectedStudent}
                    onValueChange={() => handleSelect(student.id)}
                  >
                    <RadioGroupItem value={student.id} />
                  </RadioGroup>
                </TableCell>
                <TableCell className="font-bold ">
                  <Link
                    className="flex  items-center gap-2"
                    href={`/Dashboard/Students/${student.id}`}
                  >
                    <Image
                      height={100}
                      width={100}
                      src={student.profile}
                      alt={student.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {student.name}
                  </Link>
                </TableCell>
                <TableCell className="text-[#4D44B5]">{student.id}</TableCell>
                <TableCell className="text-[#A098AE]">{student.date}</TableCell>
                <TableCell className="">{student.city}</TableCell>
                <TableCell className="">{student.parentName}</TableCell>
                <TableCell className="">{student.contact}</TableCell>
                <TableCell className="">{student.grade}</TableCell>
                <TableCell className="flex justify-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Edit Details</DropdownMenuItem>
                      <DropdownMenuItem>Delete Record</DropdownMenuItem>
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

export default StudentTable;
