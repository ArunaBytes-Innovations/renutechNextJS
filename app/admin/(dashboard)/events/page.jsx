import React from "react";
import EventCard from "@/components/admin/EventCard";

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

const Events = () => {
  return (
    <div
      className="event-container min-h-screen bg-slate-600"
      style={{ fontFamily: "Megrim, system-ui" }}
    >
      <div className="flex justify-between px-20 pt-10">
        <h1 className="text-3xl font-bold tracking-wide text-[#FFFDB2]">
          Events
        </h1>
        <button className="bg-green-500 text-white p-2 rounded-lg font-semibold">
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
    </div>
  );
};

export default Events;
