import React from "react";
import EventCard from "@/components/admin/EventCard";

const EventLists = [
  {
    image: "/assets/paper_presentation.svg",
    title: "Paper Presentation",
    button: "Register",
  },
  {
    image: "/assets/paper_presentation.svg",
    title: "Paper Presentation",
    button: "Register",
  },
  {
    image: "/assets/paper_presentation.svg",
    title: "Paper Presentation",
    button: "Register",
  },
  {
    image: "/assets/paper_presentation.svg",
    title: "Paper Presentation",
    button: "Register",
  },
  {
    image: "/assets/paper_presentation.svg",
    title: "Paper Presentation",
    button: "Register",
  },
  {
    image: "/assets/paper_presentation.svg",
    title: "Paper Presentation",
    button: "Register",
  },
];

const Events = () => {
  return (
    <div
      className="event-container bg-black"
      style={{ fontFamily: "Megrim, system-ui" }}
    >
      <div className="event-cards flex flex-wrap justify-around">
        {EventLists.map((eventlist) => (
          <EventCard
            image={eventlist.image}
            title={eventlist.title}
            button={eventlist.button}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
