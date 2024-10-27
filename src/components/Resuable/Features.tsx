import { Tooltip } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import img1 from "../../../public/Slider/analytics_555058.png";
import img10 from "../../../public/Slider/analytics_555058.png";
import img9 from "../../../public/Slider/analytics_935682.png";
import img7 from "../../../public/Slider/presentation_2427439.png";
import img6 from "../../../public/Slider/feedback_13033564.png";
import img5 from "../../../public/Slider/about_3875034.png";
import img4 from "../../../public/Slider/agenda_11399045.png";
import img3 from "../../../public/Slider/check_1071008.png";
import img2 from "../../../public/Slider/identification_12099992.png";
import img8 from "../../../public/Slider/people_1769041.png";

type Feature = {
  title: string;
  description: string;
  icon: any;
};

const Features: React.FC = () => {

  const [shuffledData, setShuffledData] = useState<Feature[]>([]);
  const [shuffledData2, setShuffledData2] = useState<Feature[]>([]);

  useEffect(() => {
    const Data: Feature[] = [
      {
        title: "Invite People",
        description: "Easily invite teachers, students, and administrators.",
        icon: img1,
      },
      {
        title: "Assign Roles",
        description: "Assign roles and permissions to control access levels.",
        icon: img3,
      },
      {
        title: "Student Info",
        description: "Manage student information efficiently.",
        icon: img2,
      },
      {
        title: "Teacher Info",
        description: "Keep track of teacher details and updates.",
        icon: img5,
      },
      {
        title: "Analytics",
        description: "Monitor overall performance with comprehensive analytics.",
        icon: img7,
      },
      {
        title: "Student Analytics",
        description: "Track student progress and performance.",
        icon: img9,
      },
      {
        title: "Chat Individually",
        description: "Chat one-on-one with students and teachers.",
        icon: img6,
      },
      {
        title: "Group Creation",
        description: "Create and manage groups for collaborative learning.",
        icon: img8,
      },
      {
        title: "Event Creation",
        description: "Create events for your school or organization.",
        icon: img4,
      },
      {
        title: "Event Monitoring",
        description: "Monitor and manage events effectively.",
        icon: img10,
      },
      {
        title: "Payment QR",
        description: "Generate QR codes for easy payments.",
        icon: img1,
      },
      {
        title: "Payment Slip",
        description: "Generate and send payment slips.",
        icon: img1,
      },
      {
        title: "Canteen Food Addition",
        description: "Add new food items to the canteen menu.",
        icon: img1,
      },
      {
        title: "Canteen Food Removal",
        description: "Remove food items from the canteen menu.",
        icon: img1,
      },
      {
        title: "Attendance Tracking",
        description: "Track student attendance efficiently.",
        icon: img1,
      },
      {
        title: "Gradebook",
        description: "Manage and track student grades.",
        icon: img1,
      },
      {
        title: "Behavior Records",
        description: "Document and manage student behavior records.",
        icon: img1,
      },
      {
        title: "Syllabus Management",
        description: "Manage and distribute the syllabus for courses.",
        icon: img1,
      },
      {
        title: "Lesson Plans",
        description: "Create and manage lesson plans.",
        icon: img1,
      },
      {
        title: "Digital Content Repository",
        description: "Store and manage digital content like videos and PDFs.",
        icon: img1,
      },
      {
        title: "Assignments",
        description: "Create, submit, and grade assignments.",
        icon: img1,
      },
      {
        title: "Online Quizzes",
        description: "Create and administer online quizzes.",
        icon: img1,
      },
      {
        title: "Report Cards",
        description: "Generate and distribute student report cards.",
        icon: img1,
      },
      {
        title: "Announcements",
        description: "Post announcements to students and staff.",
        icon: img1,
      },
      {
        title: "Email Notifications",
        description: "Send email notifications to users.",
        icon: img1,
      },
      {
        title: "School Calendar",
        description: "Manage school events and holidays.",
        icon: img1,
      },
      {
        title: "RSVP Tracking",
        description: "Track RSVPs for school events.",
        icon: img1,
      },
      {
        title: "Expense Tracking",
        description: "Track and manage school expenses.",
        icon: img1,
      },
      {
        title: "Financial Reports",
        description: "Generate financial reports and analytics.",
        icon: img1,
      },
      {
        title: "Tuition Fee Management",
        description: "Manage and track tuition fee payments.",
        icon: img1,
      },
      {
        title: "In-App Messaging",
        description: "Message students and staff within the app.",
        icon: img1,
      },
      {
        title: "Library Management",
        description: "Manage the school library's book inventory.",
        icon: img1,
      },
      {
        title: "Book Issuing",
        description: "Issue and return books for students and staff.",
        icon: img1,
      },
      {
        title: "Overdue Book Tracking",
        description: "Track overdue books and notify users.",
        icon: img1,
      },
      {
        title: "Incident Reporting",
        description: "Report and track incidents within the school.",
        icon: img1,
      },
      {
        title: "Mobile Access",
        description: "Provide mobile access to the dashboard features.",
        icon: img1,
      },
      {
        title: "Push Notifications",
        description: "Send push notifications for important updates.",
        icon: img1,
      },
      {
        title: "Data Security",
        description: "Ensure secure data storage and access.",
        icon: img1,
      },
      {
        title: "User Activity Logs",
        description: "Track and log user activities for audit purposes.",
        icon: img1,
      },
      {
        title: "GDPR Compliance",
        description: "Ensure compliance with GDPR regulations.",
        icon: img1,
      },
      {
        title: "FERPA Compliance",
        description: "Ensure compliance with FERPA regulations.",
        icon: img1,
      },
    ];
    function shuffleArray(array: Feature[]): Feature[] {
      let shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }
      return shuffledArray;
    }

    const shuffled = shuffleArray(Data);
    const shuffled2 = shuffleArray(Data);
    setShuffledData([...shuffled, ...shuffled]); // Duplicate the items to create an infinite effect
    setShuffledData2([...shuffled2, ...shuffled2]); // Duplicate the items to create an infinite effect
  }, []);

  return (
    <div className="flex overflow-hidden">
      <div className="w-full flex rounded-md flex-col p-8 bg-gray-50">
        <div className="text-center text-4xl font-bold mb-12 text-black drop-shadow-md">
          Discover the Magic of Sho-ol
          <div className="text-center text-lg font-normal mb-12 text-gray-700 drop-shadow-md">
            Unleash the Full Power of Sho-ol Features and Transform Your
            Experience with Our Comprehensive Suite of Tools and Innovations
          </div>
        </div>
        <div className="overflow-hidden  relative">
          <div className="flex animate-scroll">
            {shuffledData.map((item, index) => (
              <div key={index} className="min-w-[250px] flex-shrink-0 p-4">
                <Tooltip title={item.description} arrow>
                  <div className="flex items-center gap-5 p-4 rounded-lg shadow hover:bg-gray-200">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <div className="mt-2 text-center font-bold">{item.title}</div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
          <div className="flex animate-ReverseScroll">
            {shuffledData2.map((item, index) => (
              <div key={index} className="min-w-[250px] flex-shrink-0 p-4">
                <Tooltip title={item.description} arrow>
                  <div className="flex justify-center gap-5  items-center p-4 rounded-lg shadow hover:bg-gray-200">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={50}
                      height={50}
                    />
                    <div className="mt-2 text-center font-bold">{item.title}</div>
                  </div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="w-full -mr-[100px] p-4 flex justify-center">
        <Image
          width={2400}
          height={2400}
          src={img} // Replace with the actual image path
          alt="School Management Dashboard"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div> */}
    </div>
  );
};

export default Features;
