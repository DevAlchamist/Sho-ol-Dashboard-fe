"use client";
import React, { useState } from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChartSpline } from "lucide-react";
type Payment = {
  id: string;
  date: Date;
  amount: number;
  status: "completed" | "pending" | "cancelled";
};

const initialPayments: Payment[] = [
  {
    id: "INV001",
    date: new Date("2021-03-02T13:45:00"),
    amount: 125.5,
    status: "completed",
  },
  {
    id: "INV002",
    date: new Date("2021-03-05T10:30:00"),
    amount: 75.2,
    status: "pending",
  },
  {
    id: "INV003",
    date: new Date("2021-03-10T15:15:00"),
    amount: 200.0,
    status: "cancelled",
  },
  {
    id: "INV004",
    date: new Date("2021-03-15T09:00:00"),
    amount: 50.0,
    status: "completed",
  },
  {
    id: "INV005",
    date: new Date("2021-03-20T14:20:00"),
    amount: 175.75,
    status: "pending",
  },
];

const PaymentHistory = () => {
  const [payments, setPayments] = useState<Payment[]>(initialPayments);

  const handleStatusChange = (id: string, newStatus: Payment["status"]) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.id === id ? { ...payment, status: newStatus } : payment
      )
    );
  };

  const getStatusColor = (status: Payment["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "cancelled":
        return "text-red-600";
      case "pending":
        return "text-gray-600";
      default:
        return "";
    }
  };
  return (
    <div className="rounded-xl overflow-hidden bg-white w-full h-full p-5">
      <div className="w-full flex items-center justify-between">
        <div className="text-2xl text-[#303972] font-bold">Payment History</div>
      </div>
      <div className="w-full py-5">
        <Table>
          <TableBody>
            {payments.map((payment) => (
              <TableRow
                className="w-full flex items-center justify-between"
                key={payment.id}
              >
                <TableCell className="flex gap-3 items-center font-medium">
                  <ChartSpline className="bg-RED  text-white p-[6px] h-9 rounded-full w-9" />
                  <span className="font-bold text-[#303972]">
                    #{payment.id}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="text-xs text-[#A098AE]">
                    {format(payment.date, "d MMMM yyyy, HH:mm a")}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-[#303972]">
                    ${payment.amount.toFixed(2)}
                  </div>
                </TableCell>
                <TableCell>
                  <Select
                    value={payment.status}
                    onValueChange={(value) =>
                      handleStatusChange(payment.id, value as Payment["status"])
                    }
                  >
                    <SelectTrigger
                      className={`w-[180px] border-none ${getStatusColor(payment.status)}`}
                    >
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed" className="text-green-600">
                        Completed
                      </SelectItem>
                      <SelectItem value="pending" className="text-gray-600">
                        Pending
                      </SelectItem>
                      <SelectItem value="cancelled" className="text-red-600">
                        Cancelled
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
