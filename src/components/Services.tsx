import { StackedBarChart } from "@mui/icons-material";
import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
}
//
const Services: React.FC = () => {
  const ServicesData: Service[] = [
    {
      title: "Student Records Management",
      description:
        "Maintain comprehensive and organized records for all students, including personal details, academic history, attendance, and behavioral records. This ensures easy access to critical information and simplifies administrative tasks. Real-time updates keep records current and accurate.",
    },
    {
      title: "Class Scheduling",
      description:
        "Organize and manage class schedules effortlessly, allowing administrators to plan and coordinate ongoing, upcoming, and past classes. Teachers and students can view their schedules in real-time, ensuring everyone is informed and prepared. Automated reminders help prevent missed classes.",
    },
    {
      title: "Event Management",
      description:
        "Plan, schedule, and track school events and activities with ease. From sports meets to parent-teacher conferences, Sho-ol ensures every event is well-organized and communicated. Users can RSVP, receive updates, and stay engaged with school events.",
    },
    {
      title: "Payment Tracking",
      description:
        "Monitor and manage student fee payments and dues efficiently. Sho-ol provides a clear overview of payment statuses, upcoming due dates, and outstanding balances. Automated reminders and alerts ensure timely payments, reducing administrative workload.",
    },
    {
      title: "Performance Analytics",
      description:
        "Access detailed analytics on student performance, attendance, and other key metrics. Visual reports and dashboards provide insights into academic trends, helping educators make informed decisions. Identify areas for improvement and celebrate student achievements.",
    },
    {
      title: "Communication Tools",
      description:
        "Facilitate seamless communication between students, teachers, and administrators. Sho-ol’s messaging system supports individual and group chats, making it easy to share updates, resources, and feedback. Enhance collaboration and keep everyone in the loop.",
    },
    {
      title: "Group Creation",
      description:
        "Enable students and teachers to create and manage groups for collaboration and discussion. Whether for study groups, project teams, or extracurricular clubs, Sho-ol supports dynamic interaction and resource sharing. Foster a sense of community and teamwork.",
    },
    {
      title: "Notifications and Alerts",
      description:
        "Send timely reminders and notifications for important dates, events, and deadlines. Users can customize their alert preferences to stay informed about what matters most to them. Ensure no critical information is missed with push notifications and emails.",
    },
    {
      title: "Resource Management",
      description:
        "Share and manage educational resources and materials in a centralized repository. Teachers can upload lesson plans, assignments, and multimedia content, while students can access and submit their work. Streamline the distribution and retrieval of learning materials.",
    },
    {
      title: "Attendance Tracking",
      description:
        "Monitor and record student attendance for classes and events accurately. Sho-ol provides real-time attendance data, helping to identify patterns and address absenteeism promptly. Automated reports simplify attendance management for teachers.",
    },
    {
      title: "Parent Portal",
      description:
        "Provide parents with access to their child’s academic progress, attendance, and school communications. The parent portal keeps families engaged and informed, fostering a supportive learning environment. Parents can communicate with teachers and track important updates.",
    },
    {
      title: "Customizable Dashboards",
      description:
        "Allow users to personalize their dashboard to fit their specific needs and preferences. Widgets, shortcuts, and layout options enable a tailored user experience. Enhance productivity and satisfaction by providing a user-friendly and relevant interface.",
    },
    {
      title: "Secure Access",
      description:
        "Ensure secure login and data protection for all users. Sho-ol employs robust security measures, including encryption and multi-factor authentication, to safeguard sensitive information. Maintain user trust with a focus on data privacy and security.",
    },
    {
      title: "User Roles and Permissions",
      description:
        "Manage different user roles and access levels for students, teachers, and administrators. Customize permissions to control what each user can view and edit, ensuring appropriate access. Streamline operations and protect sensitive information with role-based controls.",
    },
    {
      title: "Support and Training",
      description:
        "Offer comprehensive help documentation, customer support, and training resources to ensure effective use of the platform. Sho-ol’s support team is available to assist with any issues, while tutorials and guides help users get the most out of the system. Enhance user confidence and satisfaction with ongoing support.",
    },
    {
      title: "Student Records Management",
      description:
        "Maintain comprehensive and organized records for all students, including personal details, academic history, attendance, and behavioral records. This ensures easy access to critical information and simplifies administrative tasks. Real-time updates keep records current and accurate.",
    },
    {
      title: "Class Scheduling",
      description:
        "Organize and manage class schedules effortlessly, allowing administrators to plan and coordinate ongoing, upcoming, and past classes. Teachers and students can view their schedules in real-time, ensuring everyone is informed and prepared. Automated reminders help prevent missed classes.",
    },
    {
      title: "Event Management",
      description:
        "Plan, schedule, and track school events and activities with ease. From sports meets to parent-teacher conferences, Sho-ol ensures every event is well-organized and communicated. Users can RSVP, receive updates, and stay engaged with school events.",
    },
    {
      title: "Payment Tracking",
      description:
        "Monitor and manage student fee payments and dues efficiently. Sho-ol provides a clear overview of payment statuses, upcoming due dates, and outstanding balances. Automated reminders and alerts ensure timely payments, reducing administrative workload.",
    },
    {
      title: "Performance Analytics",
      description:
        "Access detailed analytics on student performance, attendance, and other key metrics. Visual reports and dashboards provide insights into academic trends, helping educators make informed decisions. Identify areas for improvement and celebrate student achievements.",
    },
    {
      title: "Communication Tools",
      description:
        "Facilitate seamless communication between students, teachers, and administrators. Sho-ol’s messaging system supports individual and group chats, making it easy to share updates, resources, and feedback. Enhance collaboration and keep everyone in the loop.",
    },
    {
      title: "Group Creation",
      description:
        "Enable students and teachers to create and manage groups for collaboration and discussion. Whether for study groups, project teams, or extracurricular clubs, Sho-ol supports dynamic interaction and resource sharing. Foster a sense of community and teamwork.",
    },
    {
      title: "Notifications and Alerts",
      description:
        "Send timely reminders and notifications for important dates, events, and deadlines. Users can customize their alert preferences to stay informed about what matters most to them. Ensure no critical information is missed with push notifications and emails.",
    },
    {
      title: "Resource Management",
      description:
        "Share and manage educational resources and materials in a centralized repository. Teachers can upload lesson plans, assignments, and multimedia content, while students can access and submit their work. Streamline the distribution and retrieval of learning materials.",
    },
    {
      title: "Attendance Tracking",
      description:
        "Monitor and record student attendance for classes and events accurately. Sho-ol provides real-time attendance data, helping to identify patterns and address absenteeism promptly. Automated reports simplify attendance management for teachers.",
    },
    {
      title: "Parent Portal",
      description:
        "Provide parents with access to their child’s academic progress, attendance, and school communications. The parent portal keeps families engaged and informed, fostering a supportive learning environment. Parents can communicate with teachers and track important updates.",
    },
    {
      title: "Customizable Dashboards",
      description:
        "Allow users to personalize their dashboard to fit their specific needs and preferences. Widgets, shortcuts, and layout options enable a tailored user experience. Enhance productivity and satisfaction by providing a user-friendly and relevant interface.",
    },
    {
      title: "Secure Access",
      description:
        "Ensure secure login and data protection for all users. Sho-ol employs robust security measures, including encryption and multi-factor authentication, to safeguard sensitive information. Maintain user trust with a focus on data privacy and security.",
    },
    {
      title: "User Roles and Permissions",
      description:
        "Manage different user roles and access levels for students, teachers, and administrators. Customize permissions to control what each user can view and edit, ensuring appropriate access. Streamline operations and protect sensitive information with role-based controls.",
    },
    {
      title: "Support and Training",
      description:
        "Offer comprehensive help documentation, customer support, and training resources to ensure effective use of the platform. Sho-ol’s support team is available to assist with any issues, while tutorials and guides help users get the most out of the system. Enhance user confidence and satisfaction with ongoing support.",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <div className="flex flex-col items-center relative justify-center w-full h-full p-20 bg-PURPLE">
      <div className="text-[28px] font-semibold text-white border-b-2 mb-10">
        Services We Offer
      </div>
      <div className="w-[95%] p-10 overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-10"
          initial={{ x: 0 }}
          animate={{ x: [-width, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 200, // Adjust speed as needed
            ease: "linear",
          }}
        >
          {ServicesData.concat(ServicesData).map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[450px] min-h-[200px] bg-white rounded-xl p-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="text-start">
                <div className="pb-2 text-[24px] items-center flex gap-5">
                  <StackedBarChart className="fill-PURPLE" />
                  {item.title}
                </div>
                <div className="pt-2 text-gray-500">{item.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
