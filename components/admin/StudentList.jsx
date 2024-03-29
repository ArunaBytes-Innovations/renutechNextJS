"use client";

import React, { useEffect, useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";

import Link from "next/link";

const StudentList = () => {
  const [students, setStudents] = useState([]); // Initialize students as an empty array
  const [showStudentsByPaymentStatus, setShowStudentsByPaymentStatus] =
    useState("All");
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

  const handleDeleteStudent = (id) => async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/students/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      const updatedStudents = students.filter((student) => student._id !== id);
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error deleting student:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <div className="mx-10 my-4">
        <button
          onClick={() => setShowStudentsByPaymentStatus("All")}
          className="btn btn-ghost outline rounded-xl bg-gray-200 mx-2"
        >
          All
        </button>
        <button
          onClick={() => setShowStudentsByPaymentStatus("Pending")}
          className="btn btn-ghost outline rounded-xl bg-gray-200 mx-2"
        >
          Pending
        </button>
        <button
          onClick={() => setShowStudentsByPaymentStatus("Approved")}
          className="btn btn-ghost outline rounded-xl bg-gray-200 mx-2"
        >
          Approved
        </button>
      </div>
      <div className="relative overflow-x-auto mx-12 shadow-md sm:rounded-lg">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students
              .filter((student) => {
                if (showStudentsByPaymentStatus === "All") {
                  return true;
                } else if (showStudentsByPaymentStatus === "Pending") {
                  return !student.paymentStatus;
                } else if (showStudentsByPaymentStatus === "Approved") {
                  return student.paymentStatus;
                }
              })
              .map((student, index) => (
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
                  <td className="px-6 py-4">{student.registrationNo}</td>
                  <td className="px-6 py-4">{`${student.branch} / ${student.year}`}</td>
                  <td className="px-6 py-4">
                    {student.paymentStatus ? "Approved" : "Pending"}
                  </td>
                  <td className="px-6 py-4 flex items-center">
                    <IoCallOutline className="text-xl mr-2" />
                    {student.contact}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex">
                      <Link
                        href={`/admin/participants/${student._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 m-1 rounded-xl"
                      >
                        <GoPencil size={25} />
                      </Link>
                      <button
                        onClick={handleDeleteStudent(student._id)}
                        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-1 px-2 m-1 rounded-xl"
                      >
                        <MdDeleteOutline size={25} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StudentList;
