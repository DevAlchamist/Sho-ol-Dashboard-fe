"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bell,
  MessageSquare,
  UserPlus,
  FileText,
  AlertTriangle,
} from "lucide-react";

type Notification = {
  id: number;
  type: "message" | "friend" | "document" | "alert";
  content: string;
  time: string;
};

const notifications: Notification[] = [
  {
    id: 1,
    type: "message",
    content: "New message from Alice",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: "friend",
    content: "Bob sent you a friend request",
    time: "10 minutes ago",
  },
  {
    id: 3,
    type: "document",
    content: "Your report has been reviewed",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "alert",
    content: "System maintenance scheduled",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "message",
    content: "Charlie replied to your comment",
    time: "3 hours ago",
  },
  {
    id: 6,
    type: "friend",
    content: "David accepted your friend request",
    time: "5 hours ago",
  },
  {
    id: 7,
    type: "document",
    content: "New company policy document available",
    time: "Yesterday",
  },
  {
    id: 8,
    type: "alert",
    content: "Your account password will expire soon",
    time: "2 days ago",
  },
];

const getIcon = (type: Notification["type"]) => {
  switch (type) {
    case "message":
      return <MessageSquare className="h-4 w-4" />;
    case "friend":
      return <UserPlus className="h-4 w-4" />;
    case "document":
      return <FileText className="h-4 w-4" />;
    case "alert":
      return <AlertTriangle className="h-4 w-4" />;
  }
};

const getBadgeVariant = (type: Notification["type"]) => {
  switch (type) {
    case "message":
      return "default";
    case "friend":
      return "secondary";
    case "document":
      return "outline";
    case "alert":
      return "destructive";
  }
};

const NotificationTimeline = () => {
  return (
    <Card className="w-full">
      <CardContent>
        <ScrollArea className=" pt-4 pr-4">
          <div className="space-y-8">
            {notifications.map((notification, index) => (
              <div key={notification.id} className="flex gap-3 relative">
                <div className="flex flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white">
                    {getIcon(notification.type)}
                  </div>
                  {index < notifications.length - 1 && (
                    <div className="h-full w-px bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.content}
                  </p>
                  <p className="text-sm text-gray-500">{notification.time}</p>
                  <Badge
                    variant={getBadgeVariant(notification.type)}
                    className="w-fit"
                  >
                    {notification.type}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default NotificationTimeline;
