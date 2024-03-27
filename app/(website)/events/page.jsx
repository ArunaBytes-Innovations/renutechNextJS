"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/web/Navbar"; // Importing Navbar component
import Link from "next/link"; // Importing Link component from Next.js
import Footer from "@/components/web/Footer";

// Functional component Events
const Events = () => {
  // fetch events from fetch api
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  // Functional component for displaying event card
  const EventCard = (props) => {
    return (
      <div
        className="event  md:my-20 text-center m-10"
        style={{
          backgroundImage: "url(/assets/event_list_bg.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Event image */}
        <img className="w-60 h-full p-2" src={props.image} alt="" />
        {/* Event title */}
        <h3 className="bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-600 font-extrabold block text-transparent bg-clip-text mb-2">
          {props.title}
        </h3>
        {/* Button to show event details */}
        <Link
          href={`/events/${props.id}`}
          className="mb-6 bg-[#f4d470] hover:bg-[#e4c568] text-sm py-1 px-4 rounded-lg font-bold "
          type="button"
        >
          Know More
        </Link>
      </div>
    );
  };

  // Rendering component with event cards
  return (
    <div className="min-h-screen bg-gradient-to-b flex flex-col justify-between from-[#197fbd] from-10% via-[#5abeea] via-30% to-[#fcfdff]">
      <div
        className="event-container "
        style={{ fontFamily: "Megrim, system-ui" }}
      >
        {/* Navbar component */}
        <Navbar />
        {/* Displaying event cards */}
        <div>
          <h1 className="text-center text-4xl text-white font-bold pt-24">
            Events
          </h1>
        </div>
        {events.length !== 0 ? (
          <div className="event-cards flex flex-wrap  justify-around">
            {/* Mapping over event list to render each event card */}

            {events.map((eventlist, index) => (
              <div key={index}>
                <EventCard
                  image={eventlist.imageUrl}
                  title={eventlist.name}
                  id={eventlist._id}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="border-4 border-gray-200 border-t-0 border-l-0 border-black rounded-full h-20 w-20 animate-spin"></div>
            <p className="mt-4 text-lg font-semibold text-gray-800">
              Loading...
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
