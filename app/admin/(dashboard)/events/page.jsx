"use client";
import React, { useState, useRef, useEffect } from "react";
import EventCard from "@/components/admin/EventCard";
import EventList from "./EventList";

const Events = () => {
  const refOne = useRef(null);
  const [showAddEvent, setShowAddEvent] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (refOne.current && !refOne.current.contains(event.target)) {
      setShowAddEvent(false);
    }
  };

  const EventLists = [
    {
      image: "/assets/paper_presentation.svg",
      title: "Paper Presentation",
    },
    {
      image: "/assets/paper_presentation.svg",
      title: "Paper Presentation",
    },
    {
      image: "/assets/paper_presentation.svg",
      title: "Paper Presentation",
    },
    {
      image: "/assets/paper_presentation.svg",
      title: "Paper Presentation",
    },
    {
      image: "/assets/paper_presentation.svg",
      title: "Paper Presentation",
    },
    {
      image: "/assets/paper_presentation.svg",
      title: "Paper Presentation",
    },
  ];
  const AddEvents = () => {
    const [formData, setFormData] = useState({
      name: "",
      description: "",
      imageUrl: "",
      tagLine: "",
      coordinators: [],
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("/api/events", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY5YTk5NGU2YjNiOWVkODVkZWVjNGQiLCJpYXQiOjE3MTExMDY3MzgsImV4cCI6MTcxMTcxMTUzOH0.-yRuerS517tiSbWuK1jhiPJ-OF2RSO8eTNj51kGyP5g",
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) {
          throw new Error("Failed to create event");
        }

        const responseData = await response.json();
        console.log("Event created:", responseData);
        alert("Event created successfully");
        // Optionally, you can redirect the user or show a success message here
      } catch (error) {
        console.error("Error creating event:", error);
        alert("Failed to create event");
        // Handle error (e.g., show error message to the user)
      }

      setShowAddEvent(false);
    };

    return (
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-900/50 z-10">
        <div
          ref={refOne}
          className="rounded-xl flex flex-col w-4/6 h-3/4 bg-gray-50 shadow-md p-4"
        >
          <form
            onSubmit={handleSubmit}
            className=" mt-4 p-4 bg-gray-100 rounded-lg shadow-md"
          >
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
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div
      className="event-container min-h-screen bg-slate-600"
      style={{ fontFamily: "Megrim, system-ui" }}
    >
      <div className="flex justify-between px-20 pt-10">
        <h1 className="text-3xl font-bold tracking-wide text-[#FFFDB2]">
          Events
        </h1>
        <button
          className="bg-green-500 text-white p-2 rounded-lg font-semibold"
          onClick={() => setShowAddEvent(true)}
        >
          + Add Events
        </button>
      </div>
      <EventList />
      {showAddEvent && <AddEvents />}
    </div>
  );
};

export default Events;
