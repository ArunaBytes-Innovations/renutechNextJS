import React from "react";
import Link from "next/link";

const EventCard = (props) => {
  const token = localStorage.getItem("token");
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/events/${props.id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete event");
      }

      const data = await response.json();
      console.log("Event deleted:", data.message);
      alert("Event deleted successfully");
      window.location.reload();
      // Optionally, you can perform additional actions after deleting the event
    } catch (error) {
      console.error("Error deleting event:", error.message);
      alert("Failed to delete event");
      // Handle error (e.g., show error message to the user)
    }
  };

  return (
    <div
      className="event md:my-20 w-60 h-80 flex flex-col items-center justify-center text-center m-10 rounded-3xl shadow-xl"
      style={{
        backgroundImage: "url(/assets/event_list_bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img className="w-60 h-60 p-2" src={props.image} alt="" />
      <h3 className="bg-gradient-to-r tracking-wide uppercase  from-amber-600 via-yellow-300 to-amber-600 font-extrabold block text-transparent bg-clip-text mb-2">
        {props.title}
      </h3>
      <p className="text-lg text-white">{props.coordinatorName1}</p>
      <p className="text-lg text-white">{props.coordinatorName2}</p>
      <div className="flex justify-between w-[80%] px-4">
        <Link
          href={`/admin/events/${props.id}`}
          className="mb-6 bg-[#f4d470] py-1 px-4 rounded-lg font-bold "
          type="button"
        >
          Edit
        </Link>
        <button
          className="mb-6 bg-[#ff1d1d] py-1 px-4 rounded-lg font-bold "
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EventCard;
