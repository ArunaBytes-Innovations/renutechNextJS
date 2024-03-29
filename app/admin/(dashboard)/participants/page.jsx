"use client";
import React, { useState, useRef, useEffect } from "react";
import StudentList from "@/components/admin/StudentList";
import { useRouter } from "next/navigation";

const InstStudents = () => {
  const refOne = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    }
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      setShowAddStudent(false);
    }
  };

  return (
    <div className="p-10 bg-slate-600 min-h-screen">
      <div className="flex flex-row items-center mx-12">
        <h1 className="text-3xl font-bold tracking-wide text-[#FFFDB2]">
          Participants
        </h1>
        {/* <div
          // onClick={() => setShowAddStudent(true)}
          className=" cursor-pointer bg-green-600 font-semibold text-white ml-auto  px-2 py-1 rounded-md shadow-md shadow-slate-500/50"
        >
          + Add Student
        </div> */}
      </div>
      <StudentList />
    </div>
  );
};

export default InstStudents;
