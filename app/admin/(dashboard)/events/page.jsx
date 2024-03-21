"use client";
import React, { useState, useRef, useEffect } from "react";
import EventCard from "@/components/admin/EventCard";

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
    return (
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-900/50 z-10">
        <div
          ref={refOne}
          className="rounded-xl flex flex-col w-4/6 h-3/4 bg-gray-50 shadow-md p-4"
        >
          <button onClick={() => setShowAddEvent(false)}>save </button>
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
      <div className="event-cards flex flex-wrap justify-around">
        {EventLists.map((eventlist, index) => (
          <div key={index}>
            <EventCard image={eventlist.image} title={eventlist.title} />
          </div>
        ))}
      </div>
      {showAddEvent && <AddEvents />}
    </div>
  );
};

export default Events;
