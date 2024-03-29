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
        className="event md:my-20 text-center m-10 drop-shadow-xl"
        style={{
          backgroundImage: "url(/assets/event_list_bg.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          fontFamily: "MedievalSharp, cursive",
        }}
      >
        {/* Event image */}
        <img className="w-60 h-60 shadow-2xl p-2" src={props.image} alt="" />
        {/* Event title */}
        <h3 className="text-lg -mt-6 bg-gradient-to-r capitalize from-amber-600 via-yellow-300 to-amber-600 font-extrabold block text-transparent bg-clip-text mb-2">
          {props.title} <br /> {`(${props.type})`}
        </h3>
        {/* Button to show event details */}
        <Link
          href={`/events/${props.id}`}
          className="mb-6 bg-[#f4d470] hover:bg-[#e4c568] text-sm py-1 px-4 rounded-lg font-bold font-mono tracking-wider "
          type="button"
        >
          Know More
        </Link>
      </div>
    );
  };

  // Rendering component with event cards
  return (
    <div className="relative bg-gradient-to-t from-[#a6def7] via-[#5abeea] to-[#000000] overflow-hidden  no-scrollbar">
      <Navbar />
      <div className=" relative z-20 ">
        <img
          className="absolute top-0 left-0 min-h-screen animate-pulse  rotate-180"
          src="/assets/stars.png"
          alt="star"
        />
        <div className="flex justify-center items-center">
          <img
            className="absolute top-40 h-48 md:h-96 animate-spin"
            src="/assets/moon_full.png"
            alt=""
            style={{ animation: "spin 40s linear infinite" }}
          />
        </div>
      </div>
      <div className="absolute w-screen inset-0 bg-black opacity-50"></div>
      <div className="bg-transparent pt-10  w-[100%] rounded-lg h-screen overflow-hidden overflow-y-scroll no-scrollbar">
        <div className="relative z-40  text-center">
          {/* Displaying event cards */}

          {events.length !== 0 ? (
            <div className="event-cards flex flex-wrap  justify-around">
              {/* Mapping over event list to render each event card */}

              {events.map((eventlist, index) => (
                <div key={index}>
                  <EventCard
                    image={eventlist.imageUrl}
                    title={eventlist.name}
                    type={eventlist.eventType}
                    id={eventlist._id}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
              <div className="border-4 border-t-0 border-l-0 border-black rounded-full h-20 w-20 animate-spin"></div>
              <p className="mt-4 text-lg font-semibold text-gray-800">
                Loading...
              </p>
            </div>
          )}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Events;
