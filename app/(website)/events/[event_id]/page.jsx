"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";

// Functional component for displaying event details card
const EventDetailsCard = ({ params }) => {
  const { event_id } = params;
  const [event, setEvent] = useState({});

  useEffect(() => {
    // Fetch event details when the component mounts
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`/api/events/${event_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch event details");
      }
      const data = await response.json();
      console.log(data);
      setEvent(data);
    } catch (error) {
      console.error("Error fetching event details:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div className="relative bg-gradient-to-t from-[#a6def7] via-[#5abeea] to-[#000000] overflow-hidden   no-scrollbar">
      <Navbar />
      <div className=" relative z-20 ">
        <img
          className="absolute top-0 left-0 min-h-screen animate-pulse  rotate-180"
          src="/assets/stars.png"
          alt="star"
        />
        <div className="">
          <img
            className="absolute top-0 right-0 h-48 md:h-72 animate-spin"
            src="/assets/moon_full.png"
            alt=""
            style={{ animation: "spin 40s linear infinite" }}
          />
        </div>
      </div>
      <div className="absolute w-screen inset-0 bg-black opacity-75"></div>
      <div className="relative z-50 pt-10 h-screen overflow-hidden overflow-y-scroll no-scrollbar">
        <div className="event-details-card   flex justify-center items-center text-white">
          <div className=" flex flex-col relative bg-black bg-opacity-40 py-10 md:py-4 md:flex-row lg:w-4/6 justify-evenly mb-10 items-center border-black/30 m-2 mt-20 border-2 rounded-xl shadow-xl h-auto px-2 cursor-default">
            <Link
              href="/events"
              className=" absolute top-2 right-4 py-2 px-4 bg-white hover:bg-slate-200 text-black rounded-xl font-bold"
            >
              x
            </Link>
            <div className="flex flex-col items-center">
              <img src={event.imageUrl} alt="" />
              <Link
                // href="/events/register"
                href="#"
                className="bg-gray-500 text-white  px-4 mt-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Registertion Closed
              </Link>
            </div>
            <div className="md:w-4/6 pt-5 px-5 md:pr-5 flex flex-col justify-center md:items-start items-center">
              <h1 className="text-3xl font-bold capitalize">
                {event.name} - {event.eventType}
              </h1>
              <p className="pt-4 mb-6 font-medium cursor-default text-center md:text-left">
                {event.description}
              </p>
              <span className="font-medium">
                For more details!{" "}
                <Link
                  href={event.ruleBookUrl ? event.ruleBookUrl : "#"}
                  target="_blank"
                  className="p-2 my-4 mx-2 bg-rose-500 hover:bg-rose-600 rounded-lg text-white"
                >
                  Click here
                </Link>
              </span>
              <h1 className="text-xl font-semibold mt-4">Coordinators: </h1>
              <div className="flex justify-between text-center uppercase w-full py-2 md:pr-20">
                <div>
                  <h2 className="text-lg font-bold">
                    {event.coordinatorName1}
                  </h2>
                  <Link href={`tel:${event.coordinatorMobile1}`}>
                    {event.coordinatorMobile1}
                  </Link>
                </div>
                <div className="">
                  <h2 className="text-lg font-bold">
                    {event.coordinatorName2}
                  </h2>
                  <Link href={`tel:${event.coordinatorMobile2}`}>
                    {event.coordinatorMobile2}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventDetailsCard;
