"use client";

import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const financeData = [
  { day: "Mon", income: 60, expenditure: 50, profit: 10, total: 60 },
  { day: "Tue", income: 75, expenditure: 60, profit: 15, total: 75 },
  { day: "Wed", income: 90, expenditure: 75, profit: 15, total: 90 },
  { day: "Thu", income: 80, expenditure: 70, profit: 10, total: 80 },
  { day: "Fri", income: 100, expenditure: 80, profit: 20, total: 100 },
  { day: "Sat", income: 40, expenditure: 35, profit: 5, total: 40 },
  { day: "Sun", income: 25, expenditure: 20, profit: 5, total: 25 },
];


const FinanceChart = () => {
  return (
    <Card className="w-full  border-none shadow-none">
      <CardContent className="p-0">
        <div className="h-[290px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={financeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--foreground))" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--foreground))" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Bar dataKey="income" fill="hsl(var(--primary))" name="Income" />
              <Bar
                dataKey="expenditure"
                fill="hsl(var(--destructive))"
                name="Expenditure"
              />
              <Bar
                dataKey="profit"
                fill="hsl(var(--secondary))"
                name="Profit"
              />
              <Bar dataKey="total" fill="hsl(var(--accent))" name="Total" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinanceChart;
