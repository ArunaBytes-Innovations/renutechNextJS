import React from "react";

const EventCard = (props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/events/${props.id}`, {
        method: "DELETE",
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWY5YTk5NGU2YjNiOWVkODVkZWVjNGQiLCJpYXQiOjE3MTExMDY3MzgsImV4cCI6MTcxMTcxMTUzOH0.-yRuerS517tiSbWuK1jhiPJ-OF2RSO8eTNj51kGyP5g",
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
      className="event rounded-xl my-20 text-center m-10 drop-shadow-xl"
      style={{
        backgroundImage: "url(/assets/event_list_bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img className="w-60 h-full p-2" src={props.image} alt="" />
      <h3 className="bg-gradient-to-r tracking-wide uppercase  from-amber-600 via-yellow-300 to-amber-600 font-extrabold block text-transparent bg-clip-text mb-2">
        {props.title}
      </h3>
      <div className="flex justify-around px-4">
        <button
          className="mb-6 bg-[#f4d470] py-1 px-4 rounded-lg font-bold "
          type="button"
        >
          Edit
        </button>
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
