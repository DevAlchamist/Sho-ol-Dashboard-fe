"use client";

import React, { useState } from "react";
import dayjs from "dayjs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EventCalendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [events, setEvents] = useState<Record<string, string[]>>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [eventTitle, setEventTitle] = useState("");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 10 },
    (_, i) => currentDate.year() - 5 + i
  );

  const handleMonthChange = (month: string) => {
    setCurrentDate(currentDate.month(months.indexOf(month)));
  };

  const handleYearChange = (year: string) => {
    setCurrentDate(currentDate.year(parseInt(year)));
  };

  const handleOpenModal = (date: string) => {
    setSelectedDate(date);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setEventTitle("");
  };

  const handleSaveEvent = () => {
    if (selectedDate && eventTitle.trim()) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [selectedDate]: [
          ...(prevEvents[selectedDate] || []),
          eventTitle.trim(),
        ],
      }));
      handleCloseModal();
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const startOfMonth = currentDate.startOf("month").day();
    const daysInMonth = currentDate.daysInMonth();
  
    // Adjust the calendar to start on Sunday, regardless of startOfMonth offset
    let currentDay = currentDate.startOf("month").subtract(startOfMonth, "day");
    const today = dayjs();
  
    for (let i = 0; i < 35; i++) {
      const date = currentDay.format("YYYY-MM-DD");
      const dayEvents = events[date] || [];
      const isCurrentMonth = currentDay.month() === currentDate.month();
      const isToday = currentDay.isSame(today, 'day');
  
      days.push(
        <div
          key={date}
          className={`p-4 h-[130px] w-full rounded-2xl border cursor-pointer overflow-y-auto 
            ${isCurrentMonth ? "bg-[#f7fd8]" : "bg-gray-100 text-gray-400"}
            ${isToday ? "border-8 border-white bg-PURPLE font-bold text-white" : ""}`} // Highlight today with a border
          onClick={() => isCurrentMonth && handleOpenModal(date)}
        >
          <div className="font-semibold">{currentDay.date()}</div>
          {dayEvents.map((event, index) => (
            <div key={index} className="text-xs text-blue-500 mt-1 truncate">
              {event}
            </div>
          ))}
        </div>
      );
  
      currentDay = currentDay.add(1, "day"); // Move to the next day
    }
  
    return days;
  };
  
  return (
    <Card className="shadow-none rounded-xl border-none max-w-[840px] w-full">
      <CardContent>
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl text-PURPLE font-bold">Calender</div>
          <div className="flex gap-4 items-center p-4">
            <Select
              onValueChange={handleMonthChange}
              defaultValue={currentDate.format("MMMM")}
            >
              <SelectTrigger className="border-PURPLE rounded-full text-PURPLE w-fit ">
                <SelectValue className="" placeholder="Select month" />
              </SelectTrigger>
              <SelectContent>
                {months.map((month) => (
                  <SelectItem className="text-PURPLE" key={month} value={month}>
                    {month}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              onValueChange={handleYearChange}
              defaultValue={currentDate.format("YYYY")}
            >
              <SelectTrigger className="border-PURPLE rounded-full text-PURPLE w-fit ">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-7  justify-center items-center gap-1 text-center text-gray-600 font-semibold mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="w-full text-[#A098AE] font-bold text-xs text-center ">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-4 justify-center items-center">
          {renderCalendarDays()}
        </div>
      </CardContent>

      <Dialog open={modalIsOpen} onOpenChange={setModalIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Event for {selectedDate}</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <Input
              type="text"
              placeholder="Event title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              className="w-full mb-4"
            />
          </div>
          <DialogFooter>
            <Button onClick={handleSaveEvent} disabled={!eventTitle.trim()}>
              Save
            </Button>
            <Button variant="outline" onClick={handleCloseModal}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default EventCalendar;
