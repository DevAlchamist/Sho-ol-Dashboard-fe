import Image from "next/image";
import img1 from "../../public/11121444_4676207.svg";
import img2 from "../../public/11785876_4815540.svg";
import img3 from "../../public/4443347_2359860.svg";
import img4 from "../../public/5538724_2827335.svg";
import React from "react";

const timelineData = [
  {
    title: "Getting Started",
    description:
      "Begin your journey with Sho-ol by signing up and setting up your account. Our user-friendly interface will guide you through the initial setup process, including adding your school's basic information. You'll be ready to explore Sho-ol's features in no time!",
    image: img3,
  },
  {
    title: "Customizing Your Dashboard",
    description:
      "Personalize your Sho-ol dashboard to meet your specific needs. Use widgets, shortcuts, and layout options to create a dashboard that works best for you. Tailor the view to track key metrics, manage tasks, and access important information quickly and efficiently.",
    image: img1,
  },
  {
    title: "Invite People and Assign Roles",
    description:
      "Bring your team on board by inviting teachers, students, and administrators to Sho-ol. Assign roles and permissions to control access levels, ensuring everyone has the tools they need to succeed. Collaborate and communicate effortlessly within your school community.",
    image: img4,
  },
  {
    title: "Sit Back, Relax, and Monitor Your School/Organization Analytics",
    description:
      "Once everything is set up, enjoy the ease of monitoring your school's performance through Sho-ol's comprehensive analytics. Track student progress, attendance, and payments in a user-friendly manner. Focus on what matters most while Sho-ol handles the details.",
    image: img2,
  },
];

// 1. "Start Your Journey with Sho-ol: Easy Signup, Quick Setup, Endless Possibilities!"
// 2. "Personalize Your Dashboard: Select the Pages You Need, Customize Your Sho-ol Journey!!"
// 3. "Empower Your Team: Invite, Assign Roles, Collaborate Seamlessly!"
// 4. "Monitor Success Effortlessly: Comprehensive Analytics, Focus on What Matters!"

const TimelineComp = () => {
  return (
    <div className="text-center w-full h-full flex-col flex items-center justify-center p-20">
      <div className="font-bold text-[28px] border-b-2 border-[#4D44B5] mb-10">
        Start With Sho-ol
      </div>
      {/* <div className="w-[90%] flex flex-col">
        {timelineData.map((item, index) => (
          <div
            className={`justify-between w-full flex items-center ${
              index % 2 === 0 ? " text-start" : "flex-row-reverse text-end"
            }`}
            key={index}
          >
            <div className={`w-[600px] p-5  mb-10 text-start`}>
              <div className="font-semibold text-xl mb-2">{item.title}</div>
              <div className="text-lg">{item.description}</div>
            </div>
            <div>
              <Image
                className="h-[400px] w-[400px]"
                src={item.image}
                alt="img1"
              />
            </div>
          </div>
        ))}
      </div> */}
      <div>
        {/* //component */}
        <div className="container mx-auto bg-white p-4 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-md bg-blue-50 p-4 lg:p-12">
              {/* <div className="flex items-center text-blue-500">
                <p className="text-sm font-bold uppercase">
                  Feature 1 &amp; Feature 2
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewdiv="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div> */}
              <h2 className="mt-4 text-xl font-semibold text-slate-800">
                Start Your Journey with Sho-ol
              </h2>
              <p className="mt-4  text-slate-600">
                Easy Signup, Quick Setup, Endless Possibilities!
              </p>
              <div className="mt-12 flex transform items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image className="" src={img3} alt="img1" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md bg-pink-50 p-4 lg:p-12">
              {/* <div className="flex items-center text-pink-500">
                <p className="text-sm font-bold uppercase">
                  Feature 3 &amp; Feature 4
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewdiv="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div> */}
              <h2 className="mt-4 text-xl font-semibold text-slate-800">
                Personalize Your Dashboard
              </h2>
              <p className="mt-4  text-slate-600">
                Select the Pages You Need, Customize Your Sho-ol Journey!!
              </p>
              <div className="mt-12 flex transform items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image className="" src={img1} alt="img1" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md bg-green-50 p-4 lg:p-12">
              {/* <div className="flex items-center text-green-500">
                <p className="text-sm font-bold uppercase">
                  Feature 5 &amp; Feature 6
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewdiv="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div> */}
              <h2 className="mt-4 text-xl font-semibold text-slate-800">
                Empower Your Team
              </h2>
              <p className="mt-4  text-slate-600">
                Invite, Assign Roles, Collaborate Seamlessly!
              </p>
              <div className="mt-12 flex transform items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image className="" src={img4} alt="img1" />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md bg-purple-50 p-4 lg:p-12">
              {/* <div className="flex items-center text-purple-500">
                <p className="text-sm font-bold uppercase">
                  Feature 7 &amp; Feature 8
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewdiv="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div> */}
              <h2 className="mt-4 text-xl font-semibold text-slate-800">
                Monitor Success Effortlessly
              </h2>
              <p className="mt-4  text-slate-600">
                Comprehensive Analytics, Focus on What Matters!
              </p>
              <div className="mt-12 flex transform items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105">
                <Image className="" src={img2} alt="img1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComp;
