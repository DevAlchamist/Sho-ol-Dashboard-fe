"use client";
import useAppStore from "@/store/useAppStore";
import { useRouter } from "next/navigation";
import { jellyTriangle } from "ldrs";
import React, { useEffect, useState } from "react";

const Page = () => {
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

  if (loading || !checked)
    return (
      <div className="w-full h-screen flex  items-center justify-center">
        <l-jelly-triangle
          size="30"
          speed="1.75"
          color="#4D44B5"
        ></l-jelly-triangle>
      </div>
    ); // Show loading until check completes

  return (
    <div>
      <div>User: {user?.username || "N/A"}</div>
      <div>Role: {user?.role || "N/A"}</div>
    </div>
  );
};

export default Page;
