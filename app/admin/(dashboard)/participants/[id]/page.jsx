"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function StudentForm({ params }) {
  const router = useRouter();
  const { id } = params;
  const [student, setStudent] = useState({
    name: "",
    contact: "",
    email: "",
    college: "",
    registrationNo: "",
    branch: "",
    year: "",
    paymentStatus: false,
    paymentDate: "",
    transactionId: "",
    events: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/students/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch student");
        }

        const data = await response.json();
        setStudent(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/students/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(student),
      });

      if (!response.ok) {
        throw new Error("Failed to save student");
      }

      // Optionally, handle success
      router.push("/admin/participants");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <form className=" mx-auto bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Student Info</h2>
        <div className="flex">
          <div className="mb-4 basis-1/2 m-1">
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4 basis-1/2 m-1">
            <label className="block text-sm font-medium text-gray-700">
              Contact:
            </label>
            <input
              type="text"
              name="contact"
              value={student.contact}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mb-4 basis-1/2 m-1">
            <label className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={student.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4 basis-1/2 m-1">
            <label className="block text-sm font-medium text-gray-700">
              Year:
            </label>
            <input
              type="text"
              name="year"
              value={student.year}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="flex">
          <div className="mb-4 basis-1/2 m-1">
            <label className="block text-sm font-medium text-gray-700">
              Registration Number:
            </label>
            <input
              type="text"
              name="registrationNo"
              value={student.registrationNo}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="mb-4 basis-1/2 m-1">
            <label className="block text-sm font-medium text-gray-700">
              Branch:
            </label>
            <input
              type="text"
              name="branch"
              value={student.branch}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            College:
          </label>
          <input
            type="text"
            name="college"
            value={student.college}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Events:
          </label>
          <input
            type="text"
            name="events"
            value={student.events.join(", ")}
            onChange={handleChange}
            disabled
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-around">
          <div className="flex w-96">
            <img
              className="w-full h-full object-cover rounded-md"
              src={`/payments/${student._id}.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-4 basis-1/3 m-1">
              <label className=" text-sm font-medium flex items-center text-gray-700">
                Payment Status {`(check to approve)`}:
                <input
                  type="checkbox"
                  name="paymentStatus"
                  checked={student.paymentStatus}
                  onChange={(e) =>
                    setStudent({ ...student, paymentStatus: e.target.checked })
                  }
                  className="mt-1 ml-2 p-2 border w-5 h-5 border-gray-300 rounded-md "
                />
              </label>
            </div>
            <div className="mb-4 basis-1/3 m-1">
              <label className="block text-sm font-medium text-gray-700">
                Payment Date:
              </label>
              <input
                type="text"
                disabled
                name="paymentDate"
                value={new Date(student.paymentDate).toLocaleDateString()}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div className="mb-4 basis-1/3 m-1">
              <label className="block text-sm font-medium text-gray-700">
                Transaction ID:
              </label>
              <input
                type="text"
                name="transactionId"
                disabled
                value={student.transactionId}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save
          </button>
          <button>
            <Link
              href="/admin/participants"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ml-4"
            >
              Cancel
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
