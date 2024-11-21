import React, { useState } from "react";
import dayjs from "dayjs";
import { Card, CardContent } from "@/components/ui/card"; // Adjust this import path based on your project

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = Array.from({ length: 12 }, (_, i) =>
    dayjs().month(i).format("MMMM")
  );

  const startOfMonth = currentDate.startOf("month").day();
  const daysInMonth = currentDate.daysInMonth();
  const daysInPrevMonth = currentDate.subtract(1, "month").daysInMonth();

  const today = dayjs(); // Get today's date for comparison

  const generateCalendarDays = () => {
    const days = [];

    // Add days from the previous month to align the first day of the month correctly
    for (let i = startOfMonth - 1; i >= 0; i--) {
      days.push({
        day: daysInPrevMonth - i,
        currentMonth: false,
      });
    }

    // Add days of the current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        currentMonth: true,
        isToday:
          currentDate.month() === today.month() &&
          currentDate.year() === today.year() &&
          i === today.date(), // Check if this day is today
      });
    }

    // Fill the remaining days to complete a 6-week grid (42 days in total)
    const totalDays = 31;
    const nextMonthDays = totalDays - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      days.push({
        day: i,
        currentMonth: false,
      });
    }

    return days;
  };

  const handleMonthChange = (e: any) => {
    const selectedMonth = e.target.value;
    setCurrentDate(currentDate.month(selectedMonth));
  };

  const calendarDays = generateCalendarDays();

  return (
    <Card className="shadow-none border-none w-full">
      <CardContent>
        <div className="flex justify-between items-center px-2 py-4">
          <div className="font-bold text-[#4D44B5] text-xl">School Calender</div>
          <select
            value={currentDate.month()}
            onChange={handleMonthChange}
            className="bg-white border rounded px-2 py-1 "
          >
            {months.map((month, index) => (
              <option  className="gap-2 flex" key={month} value={index}>
                {month} {currentDate.format("YYYY")}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-7 text-center text-gray-600">
          {daysOfWeek.map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
          {calendarDays.map((day, index) => (
            <div
              key={index}
              className={`p-4 border ${
                day.currentMonth ? " text-[#303972]" : "text-gray-300"
              } ${day.isToday ? "bg-green-200 text-white font-bold" : ""}`}
            >
              {day.day}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Calendar;
