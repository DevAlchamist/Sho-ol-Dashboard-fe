"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Star, MoreHorizontal, GitGraph, BarChart, ArrowBigRightDash, ArrowRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const foodData = [
  {
    id: 1,
    name: "Pancakes",
    type: "Breakfast",
    rating: 4.5,
    interest: 85,
    totalOrders: 1200,
  },
  {
    id: 2,
    name: "Caesar Salad",
    type: "Lunch",
    rating: 4.2,
    interest: 72,
    totalOrders: 980,
  },
  {
    id: 3,
    name: "Spaghetti Bolognese",
    type: "Dinner",
    rating: 4.7,
    interest: 93,
    totalOrders: 1500,
  },
  {
    id: 4,
    name: "Grilled Chicken Sandwich",
    type: "Lunch",
    rating: 4.3,
    interest: 78,
    totalOrders: 1100,
  },
  {
    id: 5,
    name: "Omelette",
    type: "Breakfast",
    rating: 4.4,
    interest: 80,
    totalOrders: 950,
  },
  {
    id: 6,
    name: "Steak with Mashed Potatoes",
    type: "Dinner",
    rating: 4.8,
    interest: 95,
    totalOrders: 1300,
  },
];

const FoodTable = () => {
  const [filter, setFilter] = useState("All");

  const filteredFood = foodData.filter(
    (food) => filter === "All" || food.type === filter
  );

  return (
    <div className="space-y-4 bg-white p-4 rounded-xl">
      <div className="flex items-center justify-between space-x-2">
        <div className="text-xl text-[#4D44B5] font-bold">Food Menu</div>
        <div className="flex justify-end space-x-2">
          <Button
            onClick={() => setFilter("All")}
            variant={filter === "All" ? "defaultBorderLine" : "borderline"}
          >
            All Food
          </Button>
          <Button
            onClick={() => setFilter("Breakfast")}
            variant={filter === "Breakfast" ? "defaultBorderLine" : "borderline"}
          >
            Breakfast
          </Button>
          <Button
            onClick={() => setFilter("Lunch")}
            variant={filter === "Lunch" ? "defaultBorderLine" : "borderline"}
          >
            Lunch
          </Button>
          <Button
            onClick={() => setFilter("Dinner")}
            variant={filter === "Dinner" ? "defaultBorderLine" : "borderline"}
          >
            Dinner
          </Button>
        </div>
      </div>
      <Table>
        <TableBody className="">
          {filteredFood.map((food) => (
            <TableRow key={food.id}>
              <TableCell>
                <div className="bg-[#C1BBEB] w-[100px] rounded-xl  h-[100px]"></div>
              </TableCell>
              <TableCell className="w-full flex flex-col text-[#4D44B5] font-bold text-xl">
                <div className="text-[10px] w-fit text-white font-light px-5 rounded-full py-[1px] bg-[#4D44B5]">
                  {food.type}
                </div>
                {food.name}
              </TableCell>
              <TableCell>
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                  {food.rating}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <ArrowRight className="-rotate-45" />
                  {food.interest}%
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <BarChart />
                  {food.totalOrders.toLocaleString()}
                </div>
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
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FoodTable;
