"use client";
import AreaChartComp from "@/components/Resuable/AreaChart";
import FinaceChart from "@/components/Resuable/FinaceChart";
import LeftSidebar from "@/components/Resuable/LeftSidebar";
import SearchBar from "@/components/Resuable/Search";
import UnpaidList from "@/components/Resuable/UnpaidComp";
import Calendar from "@/components/ui/calendar";
import useAppStore from "@/store/useAppStore";
import { jellyTriangle } from "ldrs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  jellyTriangle.register();
  const router = useRouter();
  const { user, fetchCurrentUser, loading } = useAppStore();
  const [checked, setChecked] = useState(false); // Track if check is complete

  useEffect(() => {
    // If `user` is not yet fetched, call `fetchCurrentUser`
    if (!user && !loading && !checked) {
      fetchCurrentUser().then(() => {
        setChecked(true); // Mark check as complete after fetching
      });
    } else if (!loading && checked && !user) {
      // Redirect if fetch is complete and `user` is still not set
      router.push("/auth/login");
    } else if (user) {
      // User is available
      setChecked(true);
    }
  }, [user, loading, checked, fetchCurrentUser, router]);

  return (
    <div className="w-full flex">
      <div className="w-full flex flex-col gap-5 p-4">
        <div className="w-full flex items-center justify-between">
          <div className="text-3xl text-[#4D44B5] font-bold">Dashboard</div>
          <SearchBar />
        </div>
        {loading || !checked ? (
          <div className="w-full h-screen flex  items-center justify-center">
            <l-jelly-triangle
              size="30"
              speed="1.75"
              color="#4D44B5"
            ></l-jelly-triangle>
          </div>
        ) : (
          <>
            {/* Info bar */}
            <div>
              <div className="w-full rounded-xl justify-between  flex gap-5 items-center p-8 bg-white">
                <div className="flex items-center gap-5">
                  <div className="bg-violet-600 rounded-full p-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3_7)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.9288 38.75H8.75C6.67875 38.75 5 37.0713 5 35V24.5863C5 22.7738 6.29625 21.2213 8.07875 20.8975C10.7212 20.4163 15.2775 19.5875 17.855 19.12C19.2737 18.8612 20.7263 18.8612 22.145 19.12C24.7225 19.5875 29.2788 20.4163 31.9213 20.8975C33.7038 21.2213 35 22.7738 35 24.5863C35 27.3125 35 32.0825 35 35C35 37.0713 33.3212 38.75 31.25 38.75H17.9288ZM29.785 23.05L29.79 23.0563C30.0088 23.3838 30.06 23.795 29.9287 24.1662L29.0462 26.6662C28.9312 26.9925 28.685 27.2575 28.3675 27.3963L26.7075 28.12L27.3675 29.4412C27.5525 29.81 27.5425 30.2462 27.3425 30.6075L24.2075 36.25H31.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L29.785 23.05ZM26.3663 22.4275L21.6975 21.5788C20.575 21.375 19.425 21.375 18.3025 21.5788L13.6337 22.4275L12.6363 23.9238L13.13 25.3213L15.5 26.3537C15.8138 26.4912 16.0575 26.7512 16.175 27.0737C16.2925 27.3962 16.2712 27.7525 16.1175 28.0588L15.1625 29.9688L18.6525 36.25H21.3475L24.8375 29.9688L23.8825 28.0588C23.7288 27.7525 23.7075 27.3962 23.825 27.0737C23.9425 26.7512 24.1862 26.4912 24.5 26.3537L26.87 25.3213L27.3638 23.9238L26.3663 22.4275ZM10.215 23.05L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25H15.7925L12.6575 30.6075C12.4575 30.2462 12.4475 29.81 12.6325 29.4412L13.2925 28.12L11.6325 27.3963C11.315 27.2575 11.0688 26.9925 10.9538 26.6662L10.0712 24.1662C9.94 23.795 9.99125 23.3838 10.21 23.0563L10.215 23.05ZM28.75 30V32.5C28.75 33.19 29.31 33.75 30 33.75C30.69 33.75 31.25 33.19 31.25 32.5V30C31.25 29.31 30.69 28.75 30 28.75C29.31 28.75 28.75 29.31 28.75 30ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_7">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#A098AE]">Students</div>
                    <div className="font-bold text-[#303972] text-3xl">932</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-[#FB7D5B] rounded-full p-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3_21)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5 35C5 37.0713 6.67875 38.75 8.75 38.75H31.25C33.3212 38.75 35 37.0713 35 35C35 32.0825 35 27.3125 35 24.5863C35 22.7738 33.7038 21.2213 31.9213 20.8975C29.2788 20.4163 24.7225 19.5875 22.145 19.12C20.7263 18.8612 19.2737 18.8612 17.855 19.12C15.2775 19.5875 10.7212 20.4163 8.07875 20.8975C6.29625 21.2213 5 22.7738 5 24.5863V35ZM22.885 21.795L24.7612 28.9288C25.0075 29.865 24.6775 30.8588 23.92 31.4638C23.28 31.9738 22.2713 32.7788 21.5713 33.3388C20.6525 34.0713 19.3475 34.0713 18.4287 33.3388C17.7287 32.7788 16.72 31.9738 16.08 31.4638C15.3225 30.8588 14.9925 29.865 15.2388 28.9288L17.115 21.795L8.52625 23.3562C7.9325 23.465 7.5 23.9825 7.5 24.5863V35C7.5 35.69 8.06 36.25 8.75 36.25C13.98 36.25 26.02 36.25 31.25 36.25C31.94 36.25 32.5 35.69 32.5 35C32.5 32.0825 32.5 27.3125 32.5 24.5863C32.5 23.9825 32.0675 23.465 31.4738 23.3562L22.885 21.795ZM20.2038 21.4288C20.0675 21.425 19.9325 21.425 19.7962 21.4288L17.6663 29.5312L19.9887 31.3837C19.995 31.39 20.005 31.39 20.0113 31.3837L22.3337 29.5312L20.2038 21.4288ZM20 1.25C15.5163 1.25 11.875 4.89125 11.875 9.375C11.875 13.8587 15.5163 17.5 20 17.5C24.4837 17.5 28.125 13.8587 28.125 9.375C28.125 4.89125 24.4837 1.25 20 1.25ZM20 3.75C23.105 3.75 25.625 6.27 25.625 9.375C25.625 12.48 23.105 15 20 15C16.895 15 14.375 12.48 14.375 9.375C14.375 6.27 16.895 3.75 20 3.75Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_21">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#A098AE]">Teachers</div>
                    <div className="font-bold text-[#303972] text-3xl">932</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-[#FCC43E] rounded-full p-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 8.75H27.5V7.5C27.5 7.16848 27.3683 6.85054 27.1339 6.61612C26.8995 6.3817 26.5815 6.25 26.25 6.25C25.9185 6.25 25.6005 6.3817 25.3661 6.61612C25.1317 6.85054 25 7.16848 25 7.5V8.75H21.25V7.5C21.25 7.16848 21.1183 6.85054 20.8839 6.61612C20.6495 6.3817 20.3315 6.25 20 6.25C19.6685 6.25 19.3505 6.3817 19.1161 6.61612C18.8817 6.85054 18.75 7.16848 18.75 7.5V8.75H15V7.5C15 7.16848 14.8683 6.85054 14.6339 6.61612C14.3995 6.3817 14.0815 6.25 13.75 6.25C13.4185 6.25 13.1005 6.3817 12.8661 6.61612C12.6317 6.85054 12.5 7.16848 12.5 7.5V8.75H10C9.00544 8.75 8.05161 9.14509 7.34835 9.84835C6.64509 10.5516 6.25 11.5054 6.25 12.5V30C6.25 30.9946 6.64509 31.9484 7.34835 32.6517C8.05161 33.3549 9.00544 33.75 10 33.75H30C30.9946 33.75 31.9484 33.3549 32.6517 32.6517C33.3549 31.9484 33.75 30.9946 33.75 30V12.5C33.75 11.5054 33.3549 10.5516 32.6517 9.84835C31.9484 9.14509 30.9946 8.75 30 8.75ZM8.75 12.5C8.75 12.1685 8.8817 11.8505 9.11612 11.6161C9.35054 11.3817 9.66848 11.25 10 11.25H12.5V12.5C12.5 12.8315 12.6317 13.1495 12.8661 13.3839C13.1005 13.6183 13.4185 13.75 13.75 13.75C14.0815 13.75 14.3995 13.6183 14.6339 13.3839C14.8683 13.1495 15 12.8315 15 12.5V11.25H18.75V12.5C18.75 12.8315 18.8817 13.1495 19.1161 13.3839C19.3505 13.6183 19.6685 13.75 20 13.75C20.3315 13.75 20.6495 13.6183 20.8839 13.3839C21.1183 13.1495 21.25 12.8315 21.25 12.5V11.25H25V12.5C25 12.8315 25.1317 13.1495 25.3661 13.3839C25.6005 13.6183 25.9185 13.75 26.25 13.75C26.5815 13.75 26.8995 13.6183 27.1339 13.3839C27.3683 13.1495 27.5 12.8315 27.5 12.5V11.25H30C30.3315 11.25 30.6495 11.3817 30.8839 11.6161C31.1183 11.8505 31.25 12.1685 31.25 12.5V16.25H8.75V12.5ZM31.25 30C31.25 30.3315 31.1183 30.6495 30.8839 30.8839C30.6495 31.1183 30.3315 31.25 30 31.25H10C9.66848 31.25 9.35054 31.1183 9.11612 30.8839C8.8817 30.6495 8.75 30.3315 8.75 30V18.75H31.25V30Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#A098AE]">Events</div>
                    <div className="font-bold text-[#303972] text-3xl">932</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="bg-[#303972] rounded-full p-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2545 3.50917C11.9688 4.64226 10.0464 6.39315 8.70524 8.56327C7.36408 10.7334 6.65785 13.2359 6.66665 15.787V21.7167C6.6677 22.5871 7.01397 23.4216 7.62948 24.0372C8.245 24.6527 9.07951 24.9989 9.94998 25H13.3333V35C13.3333 35.442 13.5089 35.866 13.8215 36.1785C14.134 36.4911 14.558 36.6667 15 36.6667C15.442 36.6667 15.8659 36.4911 16.1785 36.1785C16.4911 35.866 16.6666 35.442 16.6666 35V5C16.6664 4.71598 16.5936 4.43673 16.4552 4.18872C16.3168 3.9407 16.1173 3.73215 15.8757 3.58283C15.6341 3.43351 15.3584 3.34837 15.0747 3.33548C14.7909 3.32259 14.5086 3.38237 14.2545 3.50917ZM13.3333 21.6833L9.99998 21.7167V15.787C9.99498 14.3525 10.2888 12.9327 10.8627 11.618C11.4366 10.3034 12.278 9.12261 13.3333 8.151V21.6833ZM30 5V11.6667C29.9994 12.1085 29.8236 12.5321 29.5112 12.8445C29.1988 13.157 28.7752 13.3328 28.3333 13.3333V5C28.3333 4.55797 28.1577 4.13405 27.8452 3.82149C27.5326 3.50893 27.1087 3.33333 26.6666 3.33333C26.2246 3.33333 25.8007 3.50893 25.4881 3.82149C25.1756 4.13405 25 4.55797 25 5V13.3333C24.5581 13.3328 24.1345 13.157 23.8221 12.8445C23.5097 12.5321 23.3339 12.1085 23.3333 11.6667V5C23.3333 4.55797 23.1577 4.13405 22.8452 3.82149C22.5326 3.50893 22.1087 3.33333 21.6666 3.33333C21.2246 3.33333 20.8007 3.50893 20.4881 3.82149C20.1756 4.13405 20 4.55797 20 5V11.6667C20.0014 12.9923 20.5287 14.2632 21.4661 15.2006C22.4034 16.138 23.6743 16.6652 25 16.6667V35C25 35.442 25.1756 35.866 25.4881 36.1785C25.8007 36.4911 26.2246 36.6667 26.6666 36.6667C27.1087 36.6667 27.5326 36.4911 27.8452 36.1785C28.1577 35.866 28.3333 35.442 28.3333 35V16.6667C29.6589 16.6652 30.9299 16.138 31.8672 15.2006C32.8046 14.2632 33.3319 12.9923 33.3333 11.6667V5C33.3333 4.55797 33.1577 4.13405 32.8452 3.82149C32.5326 3.50893 32.1087 3.33333 31.6666 3.33333C31.2246 3.33333 30.8007 3.50893 30.4881 3.82149C30.1756 4.13405 30 4.55797 30 5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#A098AE]">Foods</div>
                    <div className="font-bold text-[#303972] text-3xl">932</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Performance Chart */}
            <div className="w-full rounded-xl justify-between flex-col flex gap-5 items-center py-8 bg-white">
              <div className="w-full px-8 flex justify-between items-center">
                <div className="text-xl text-[#303972] font-semibold">
                  Performance
                </div>
                <div className="flex gap-3 text-sm ">
                  <div className="text-center">
                    <div className="text-sm">This Week</div>
                    <div className="font-bold text-[#303972]">1234</div>
                  </div>
                  <div className="text-center">
                    <div>This Week</div>
                    <div className="font-bold text-[#303972]">1234</div>
                  </div>
                </div>
              </div>
              <AreaChartComp />
            </div>
            {/* Calender */}
            <div className="w-full flex gap-5 items-center">
              <div className="w-full text-[#303972] rounded-xl justify-between flex-col flex gap-5 items-center pt-4 bg-white">
                <Calendar />
              </div>
              <div className="w-full rounded-xl justify-between flex-col flex gap-5 items-center py-8 bg-white">
                <div className="w-full px-8 flex justify-between items-center">
                  <div className="font-bold text-[#4D44B5] text-xl">
                    School Finance
                  </div>
                  <div className="flex gap-3 text-sm ">
                    <div className="text-center">
                      <div className="text-sm">This Week</div>
                      <div className="font-bold text-[#303972]">1234</div>
                    </div>
                    <div className="text-center">
                      <div>This Week</div>
                      <div className="font-bold text-[#303972]">1234</div>
                    </div>
                  </div>
                </div>
                <FinaceChart />
              </div>
            </div>
            <div className="w-full text-[#303972] rounded-xl justify-between flex-col flex gap-5 items-center pt-4 bg-white">
              <UnpaidList />
            </div>
          </>
        )}
      </div>
      <LeftSidebar user={user} />
    </div>
  );
};

export default page;
