"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const EditEvents = ({ params }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    tagLine: "",
    coordinatorName1: "",
    coordinatorMobile1: "",
    coordinatorName2: "",
    coordinatorMobile2: "",
  });

  const [token, setToken] = useState("");
  const { id } = params;

  useEffect(() => {
    getEvents();
    setToken(localStorage.getItem("token"));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getEvents = async () => {
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const responseData = await response.json();
      console.log("Event Fetched:", responseData);
      setFormData(responseData);
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error("Error Fetching event:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/events/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save event");
      }

      // Optionally, handle success
      router.push("/admin/events");
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-gray-600">
      <div className="rounded-xl flex  flex-col fixed  top-10 w-4/6 h-5/6 bg-gray-50 shadow-md p-4">
        <form
          onSubmit={handleSave}
          className=" mt-4 p-4 bg-gray-100  rounded-lg shadow-md overflow-scroll"
        >
          <h1 className="text-3xl mb-4 font-bold">Edit Event</h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Event Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Event Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Event Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Event Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Event Description
            </label>
            <textarea
              type="text"
              id="description"
              name="description"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Event Description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
          {/* Add input fields for coordinators */}
          <h2 className="text-2xl font-bold mb-4">Coordinators</h2>
          <div className="mb-4">
            <label
              htmlFor="coordinatorName1"
              className="block text-sm font-medium text-gray-700"
            >
              Coordinator 1 Name
            </label>
            <input
              type="text"
              id="coordinatorName1"
              name="coordinatorName1"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Coordinator Name"
              value={formData.coordinatorName1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="coordinatorMobile1"
              className="block text-sm font-medium text-gray-700"
            >
              Coordinator 1 Mobile
            </label>
            <input
              type="text"
              id="coordinatorMobile1"
              name="coordinatorMobile1"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Coordinator Mobile"
              value={formData.coordinatorMobile1}
              onChange={handleChange}
            />
          </div>

          {/* coordinator2 */}

          <div className="mb-4">
            <label
              htmlFor="coordinatorName2"
              className="block text-sm font-medium text-gray-700"
            >
              Coordinator 2 Name
            </label>
            <input
              type="text"
              id="coordinatorName2"
              name="coordinatorName2"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Coordinator Name"
              value={formData.coordinatorName2}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="coordinatorMobile2"
              className="block text-sm font-medium text-gray-700"
            >
              Coordinator 2 Mobile
            </label>
            <input
              type="text"
              id="coordinatorMobile2"
              name="coordinatorMobile2"
              className="mt-1 p-2 block w-full border rounded-md"
              placeholder="Coordinator Mobile"
              value={formData.coordinatorMobile2}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEvents;
