import React, { useState, useRef } from "react";

const EventCard = (props) => {
  const token = localStorage.getItem("token");
  console.log(token);
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

  const refOne = useRef(null);
  const [showEditEvent, setShowEditEvent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    tagLine: "",
    coordinatorName1: "",
    coordinatorMobile1: "",
    coordinatorName2: "",
    coordinatorMobile2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditButton = () => {
    getEvents();
    setShowEditEvent(true);
  };

  const getEvents = async () => {
    try {
      const response = await fetch(`/api/events/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create event");
      }

      const responseData = await response.json();
      console.log("Event Fetched:", responseData);
      setFormData(responseData);
      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error("Error Fetching event:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const EditEvents = () => {
    return (
      <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center bg-gray-900/50 z-10">
        <div
          ref={refOne}
          className="rounded-xl flex  flex-col fixed min-w-96 top-10 bg-gray-50 shadow-md p-4"
        >
          <form
            // onSubmit={handleSubmit}
            className=" mt-4 p-4 bg-gray-100 rounded-lg shadow-md overflow-auto"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Event Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Event Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="imageUrl"
                className="block text-sm font-medium text-gray-700"
              >
                Event Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Event Image URL"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Event Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Event Description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            {/* Add input fields for coordinators */}
            <h2>Coordinators</h2>
            <div className="mb-4">
              <label
                htmlFor="coordinatorName1"
                className="block text-sm font-medium text-gray-700"
              >
                Coordinator Name
              </label>
              <input
                type="text"
                id="coordinatorName1"
                name="coordinatorName1"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Coordinator Name"
                value={formData.coordinatorName1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="coordinatorMobile1"
                className="block text-sm font-medium text-gray-700"
              >
                Coordinator Mobile
              </label>
              <input
                type="text"
                id="coordinatorMobile1"
                name="coordinatorMobile1"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Coordinator Mobile"
                value={formData.coordinatorMobile1}
                onChange={handleChange}
              />
            </div>

            {/* coordinator2 */}

            <div className="mb-4">
              <label
                htmlFor="coordinatorName2"
                className="block text-sm font-medium text-gray-700"
              >
                Coordinator Name
              </label>
              <input
                type="text"
                id="coordinatorName2"
                name="coordinatorName2"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Coordinator Name"
                value={formData.coordinatorName2}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="coordinatorMobile2"
                className="block text-sm font-medium text-gray-700"
              >
                Coordinator Mobile
              </label>
              <input
                type="text"
                id="coordinatorMobile2"
                name="coordinatorMobile2"
                className="mt-1 p-2 block w-full border rounded-md"
                placeholder="Coordinator Mobile"
                value={formData.coordinatorMobile2}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    );
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
      <p className="text-lg text-white">{props.coordinatorName1}</p>
      <p className="text-lg text-white">{props.coordinatorName2}</p>
      <div className="flex justify-around px-4">
        <button
          onClick={handleEditButton}
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
        {showEditEvent && <EditEvents />}
      </div>
    </div>
  );
};

export default EventCard;
