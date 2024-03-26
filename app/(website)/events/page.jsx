"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/web/Navbar"; // Importing Navbar component
import Link from "next/link"; // Importing Link component from Next.js

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

  // Array containing detailed event information
  const EventDetails = [
    {
      image: "/assets/paper_presentation.svg",
      description:
        "Prepare to be captivated by the brilliance of young minds at the Paper Presentation event. This event promises to be a showcase of innovation and ingenuity as participants present their pioneering projects related to science and technology. With PowerPoint presentations as their canvas, participants will articulate their ideas, research findings, and technological breakthroughs, offering insights into the future of innovation. From cutting-edge advancements in artificial intelligence to sustainable energy solutions, the breadth of topics covered will be as diverse as the imaginations of the presenters. Join us for an enlightening journey into the realm of scientific discovery and technological innovation, where ideas take flight and possibilities are endless.",
      coordinators: [
        {
          name: "John Doe",
          number: "+91 1234567890",
        },
        {
          name: "John Doe",
          number: "+91 1234567890",
        },
      ],
    },
  ];

  // Functional component for displaying event details card
  const EventDetailsCard = (props) => {
    return (
      <div className="event-details-card">
        <div className=" flex justify-evenly items-center px-2">
          <img src={props.image} alt="" />
          <p className="px-8 text-center">
            {props.description}
            &nbsp;
            {/* Link for Rule book */}
            <Link
              className=" float-center text-sm font-bold text-blue-500"
              href="#"
            >
              For more details click here !
            </Link>
          </p>
        </div>
        {/* Coordinators details and registration button */}
        <div className="flex justify-between items-center px-10 py-3">
          <div className=" ">
            <h3 className=" font-bold bg-gradient-to-r from-cyan-500 from-10% via-purple-500 via-30% to-sky-500 to-90% text-transparent bg-clip-text">
              Coordinators:
            </h3>
            {/* Displaying coordinators */}
            {/* {props.coordinators.map((coordinator) => (
              <div className=" mr-4 float-left">
                <p>{coordinator.name}</p>
                <Link
                  className="text-blue-700"
                  href={`tel:${coordinator.number}`}
                >
                  {coordinator.number}
                </Link>
              </div>
            ))} */}
          </div>
          {/* Button for registration */}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Get Register
          </button>
        </div>
      </div>
    );
  };

  // Functional component for displaying event card
  const EventCard = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    // Function to toggle popup visibility
    const togglePopup = () => {
      setShowPopup(!showPopup);
    };
    return (
      <div
        className="event  my-20 text-center m-10"
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
        <button
          onClick={togglePopup}
          className="mb-6 bg-[#f4d470] hover:bg-[#e4c568] text-sm py-1 px-4 rounded-lg font-bold "
          type="button"
        >
          Register
        </button>
        {/* Popup for detailed event information */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-25 z-50">
            <div
              className=" w-3/4 h-auto p-8 rounded-lg bg-[#eff1f3] overflow-auto"
              style={{ fontFamily: "Shantell Sans, cursive" }}
            >
              <div className=" relative text-center z-10 font-bold">
                {/* Close button */}
                <span
                  style={{ fontFamily: "Shantell Sans, cursive" }}
                  onClick={togglePopup}
                  className=" text-[#a3a5a8] hover:text-black cursor-pointer text-3xl px-2 rounded absolute -top-3 -right-3"
                >
                  x
                </span>
                {/* Event title */}
                <h2 className="text-2xl pb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                  {props.title}
                </h2>
              </div>
              {/* Detailed event information */}
              <div className="know-more bg-white ">
                <EventDetailsCard
                  image={EventDetails[0].image}
                  description={EventDetails[0].description}
                  coordinators={EventDetails[0].coordinators}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Rendering component with event cards
  return (
    <div
      className="event-container min-h-screen bg-gradient-to-b from-[#197fbd] from-10% via-[#5abeea] via-30% to-[#fcfdff]"
      style={{ fontFamily: "Megrim, system-ui" }}
    >
      {/* Navbar component */}
      <Navbar />
      {/* Displaying event cards */}
      <div className="event-cards flex flex-wrap justify-around">
        {/* Mapping over event list to render each event card */}
        {events.map((eventlist, index) => (
          <div key={index}>
            <EventCard image={eventlist.imageUrl} title={eventlist.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
