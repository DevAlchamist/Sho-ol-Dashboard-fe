"use client";

import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const performanceData = [
  { month: "Jan", math: 17, science: 7 },
  { month: "Feb", math: 25, science: 35 },
  { month: "Mar", math: 45, science: 77 },
  { month: "Apr", math: 28, science: 35 },
  { month: "May", math: 10, science: 0 },
  { month: "Jun", math: 24, science: 14 },
  { month: "Jul", math: 65, science: 50 },
  { month: "Aug", math: 31, science: 30 },
  { month: "Sep", math: 9, science: 25 },
  { month: "Oct", math: 60, science: 50 },
  { month: "Nov", math: 85, science: 65 },
  { month: "Dec", math: 50, science: 65 },
];

const AreaChartComp = () => {
  return (
    <Card className="shadow-none border-none w-full max-w-[800px]">
      <CardContent className="p-0">
        <div className="w-full h-[250px]">
          <ResponsiveContainer className="w-full" width="100%" height="100%">
            <AreaChart
              className="w-full"
              data={performanceData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorMath" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FB7D5B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FB7D5B" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorScience" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FCC43E" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FCC43E" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 0" horizontal={false} vertical={true} />
              <XAxis className="" axisLine={false} tickLine={false} dataKey="month" />
              <YAxis axisLine={false} tickLine={false} />
              <Area
                type="monotone"
                dataKey="math"
                stroke="#FB7D5B"
                fillOpacity={0.5}
                fill="url(#colorMath)"
                name="Math"
                strokeWidth={5}
                />
              <Area
                type="monotone"
                dataKey="science"
                stroke="#FCC43E"
                fillOpacity={0.5}
                fill="url(#colorScience)"
                name="Science"
                strokeWidth={5}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AreaChartComp;
