// EventList.js

import React, { useState, useEffect } from "react";
import EventCard from "@/components/admin/EventCard";

const EventList = () => {
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

  return (
    <div className="event-cards flex flex-wrap justify-around">
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
  );
};

export default EventList;
