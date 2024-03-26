"use client";

import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";

const StudentList = () => {
  const [students, setStudents] = useState([]); // Initialize students as an empty array
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchStudents = async () => {
      try {
        const response = await fetch("/api/students", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch students");
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          // Check if data.students is an array
          setStudents(data);
          console.log(data);
        } else {
          console.error("data.students is not an array:", data.students);
        }
      } catch (error) {
        console.error("Error fetching students:", error);
        alert(error.message);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="relative overflow-x-auto m-12 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              College
            </th>
            <th scope="col" className="px-6 py-3">
              Regsitration No.
            </th>
            <th scope="col" className="px-6 py-3">
              Branch / Year
            </th>
            <th scope="col" className="px-6 py-3">
              PaymentStatus
            </th>
            <th scope="col" className="px-6 py-3">
              conatact
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={index}
              className={`${
                student.index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } border-b`}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {student.name}
              </th>
              <td className="px-6 py-4">{student.college}</td>
              <td className="px-6 py-4">
                {`${student.branch}/${student.registrationNo}`}
              </td>
              <td className="px-6 py-4">{`${student.branch} / ${student.year}`}</td>
              <td className="px-6 py-4">
                {student.paymentStatus ? "true" : "false"}
              </td>
              <td className="px-6 py-4 flex items-center">
                <IoCallOutline className="text-xl mr-2" />
                {student.contact}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
