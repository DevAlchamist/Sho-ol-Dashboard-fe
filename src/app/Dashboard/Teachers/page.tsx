import SearchBar from "@/components/Resuable/Search";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Student } from "@/hooks/interfaces";
import {
  ArrowDown,
  Bell,
  Mail,
  MoreHorizontal,
  Phone,
  Plus,
  Settings,
} from "lucide-react";
import React from "react";

const page = () => {
  const teachersData = [
    {
      id: "1",
      name: "John Doe",
      subject: "English",
      profile: "https://via.placeholder.com/150",
      contact: "123-456-7890",
      grade: "VII C",
    },
    {
      id: "2",
      name: "Jane Smith",
      subject: "Mathematics",
      profile: "https://via.placeholder.com/150",
      contact: "987-654-3210",
      grade: "VIII A",
    },
    {
      id: "3",
      name: "Alice Brown",
      subject: "Science",
      profile: "https://via.placeholder.com/150",
      contact: "456-789-1234",
      grade: "VII B",
    },
    {
      id: "4",
      name: "Michael Johnson",
      subject: "History",
      profile: "https://via.placeholder.com/150",
      contact: "789-456-1230",
      grade: "VIII C",
    },
    {
      id: "5",
      name: "Emily Davis",
      subject: "Geography",
      profile: "https://via.placeholder.com/150",
      contact: "321-654-9870",
      grade: "VII A",
    },
    {
      id: "6",
      name: "David Wilson",
      subject: "Physics",
      profile: "https://via.placeholder.com/150",
      contact: "654-321-0987",
      grade: "IX A",
    },
    {
      id: "7",
      name: "Sophia Martinez",
      subject: "Chemistry",
      profile: "https://via.placeholder.com/150",
      contact: "456-123-7894",
      grade: "IX B",
    },
    {
      id: "8",
      name: "James Anderson",
      subject: "Biology",
      profile: "https://via.placeholder.com/150",
      contact: "789-321-4560",
      grade: "X A",
    },
    {
      id: "9",
      name: "Olivia Thomas",
      subject: "Computer Science",
      profile: "https://via.placeholder.com/150",
      contact: "123-654-9876",
      grade: "IX C",
    },
    {
      id: "10",
      name: "William Lee",
      subject: "Physical Education",
      profile: "https://via.placeholder.com/150",
      contact: "321-987-6540",
      grade: "X B",
    },
  ];

  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <div className="w-full flex items-center justify-between">
        <div className="text-3xl text-[#4D44B5] font-bold">Teachers</div>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-white p-2 text-[#A098AE]">
            <Bell />
          </div>
          <div className="rounded-full bg-white p-2 text-[#A098AE]">
            <Settings />
          </div>
          <div className="flex gap-2 text-[#A098AE]">
            <div className=" text-[#A098AE] text-right">
              <div className="text-[14px]">Username</div>
              <div className="text-[10px]">Role</div>
            </div>
            <div className="bg-violet-200 p-5 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <SearchBar />
        <div className="flex gap-4">
          <Button className="bg-transparent border hover:text-white hover:bg-[#4D44B5] border-[#4D44B5] text-[#4D44B5] rounded-full">
            {" "}
            Newest
            <ArrowDown />
          </Button>
          <Button className="hover:bg-transparent border text-white bg-[#4D44B5] border-[#4D44B5] hover:text-[#4D44B5] rounded-full">
            <Plus />
            New Teachers
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap w-full gap-8">
        {teachersData.map((item) => (
          <div className="bg-white relative h-[230px] rounded-xl w-[210px] p-4 flex flex-col gap-3 items-center justify-center">
            <img
              src={item.profile}
              alt="img"
              className="rounded-full h-[72px] w-[72px]"
            />
            <div className="text-black absolute top-2 right-3">
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
              </DropdownMenu>{" "}
            </div>
            <div className="font-bold text-[#303972] text-xl">{item.name}</div>
            <div className="text-[#A098AE]">{item.subject}</div>
            <div className="flex gap-3 items-center justify-center text-white">
              <div className="bg-[#303972] rounded-full p-2">
                <Phone className="h-5 w-5" />
              </div>
              <div className="bg-[#303972] rounded-full p-2">
                <Mail className="h-5 w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
