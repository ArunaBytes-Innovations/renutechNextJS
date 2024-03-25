import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

const StudentList = ({ students }) => {
  return (
    <div className="relative overflow-x-auto m-12 shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3">
              Branch/Semester
            </th>
            <th scope="col" className="px-6 py-3">
              Hostel
            </th>
            <th scope="col" className="px-6 py-3">
              Contact
            </th>
            <th scope="col" className="px-6 py-3">
              Room No.
            </th>
            <th scope="col" className="px-6 py-3">
              Action
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
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-1"
                    type="checkbox"
                    className="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {student.name}
              </th>
              <td className="px-6 py-4">{student.studentId}</td>
              <td className="px-6 py-4">
                {`${student.branch}/${student.semester}`}
              </td>
              <td className="px-6 py-4">{student.hostel}</td>
              <td className="px-6 py-4 flex items-center">
                <IoCallOutline className="text-xl mr-2" />
                {student.contact}
              </td>
              <td className="px-6 py-4">{student.room}</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium">
                  <BsThreeDots />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
