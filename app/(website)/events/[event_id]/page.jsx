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
    <div className="bg-slate-700 min-h-screen flex flex-col justify-between">
      <div className="event-details-card  flex justify-center items-center text-white">
        <Navbar />
        <div className=" flex flex-col p-20 md:flex-row lg:w-4/6 justify-evenly items-center border-black/30 m-2 mt-20 border-2 rounded-lg shadow-xl h-fit px-2">
          <div className="flex flex-col items-center">
            <img src={event.imageUrl} alt="" />
            <Link
              href="/events/register"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Get Registerd
            </Link>
          </div>
          <div className="w-4/6 pt-5">
            <h1 className="text-3xl font-bold capitalize">{event.name}</h1>
            <p className="pt-4">{event.description}</p>

            <h1 className="text-xl font-semibold mt-2">Coordinators: </h1>
            <div className="flex justify-evenly uppercase">
              <div>
                <h2 className="text-lg font-bold">{event.coordinatorName1}</h2>
                <p>{event.coordinatorMobile1}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">{event.coordinatorName2}</h2>
                <p>{event.coordinatorMobile2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetailsCard;
