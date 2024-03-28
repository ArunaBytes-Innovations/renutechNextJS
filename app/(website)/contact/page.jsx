"use client";
import React, { useState } from "react";
import Navbar from "@/components/web/Navbar";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    email: "",
    message: "",
  });

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      // Make POST request to your server endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      if (response.ok) {
        // Handle successful response
        console.log("Form data submitted successfully!");
        setShowPopup(true);
        setFormData({
          fullName: "",
          college: "",
          email: "",
          message: "",
        });
      } else {
        // Handle error response
        console.error("Failed to submit form data");
        alert("Failed to submit form data");
        window.location.reload();
      }
    } catch (error) {
      // Handle fetch error
      console.error("Error occurred while submitting form data:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-t from-[#a6def7] via-[#5abeea] to-[#000000] overflow-hidden">
      <Navbar />
      <img
        className="absolute top-0 left-0 animate-pulse rotate-180"
        src="/assets/stars.png"
        alt="star"
      />
      <div className="">
        <img
          className=" absolute top-0 right-0 md:top-20 md:right-20 w-54 h-48 animate-spin"
          src="/assets/moon_full.png"
          alt=""
          style={{ animation: "spin 40s linear infinite" }}
        />
      </div>
      <div
        className="max-w-md relative z-40 w-[90%] md:full bg-white bg-opacity-25 shadow-md rounded-xl p-8 overflow-hidden"
        style={{ fontFamily: "Lato, sans-serif" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center cursor-default text-white underline underline-offset-8  decoration-wavy">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="peer my-4 w-64 md:w-80 bg-inherit h-8 focus:outline-none capitalize placeholder-transparent border-b-2 "
              placeholder="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            <label
              htmlFor="fullName"
              className=" absolute font-medium  left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                            peer-placeholder-shown:text-base
                                          peer-placeholder-shown:text-black
                                            peer-placeholder-shown:top-6
                                            peer-focus:-top-px
                                          peer-focus:text-gray-600
                                            peer-focus:text-sm"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              id="college"
              className="peer my-4 w-64 md:w-80 bg-inherit h-8 focus:outline-none capitalize placeholder-transparent border-b-2 "
              placeholder="college name"
              required
              name="college"
              value={formData.college}
              onChange={handleChange}
            />
            <label
              htmlFor="college"
              className=" absolute font-medium  left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                            peer-placeholder-shown:text-base
                                          peer-placeholder-shown:text-black
                                            peer-placeholder-shown:top-6
                                            peer-focus:-top-px
                                          peer-focus:text-gray-600
                                            peer-focus:text-sm"
            >
              College Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="user"
              className="peer my-4 bg-inherit w-64 md:w-80 h-8 focus:outline-none placeholder-transparent border-b-2 "
              placeholder="Email"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label
              htmlFor="user"
              className="font-medium absolute left-0 -top-0.5 text-gray-600 text-sm transition-all duration-300 
                                            peer-placeholder-shown:text-base
                                          peer-placeholder-shown:text-black
                                            peer-placeholder-shown:top-6
                                            peer-focus:-top-px
                                          peer-focus:text-gray-600
                                            peer-focus:text-sm"
            >
              Email
            </label>
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-black font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded-md p-2 w-full  focus:outline-none"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {showPopup && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="relative w-[90%] md:w-auto bg-white p-8 rounded-lg shadow-lg text-center">
            <button
              onClick={handleClose}
              className=" absolute top-0 right-0 font-semibold px-2 text-lg hover:text-red-500 focus:outline-none"
            >
              x
            </button>
            <h2 className="text-2xl mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
              Thank you for contacting us!
            </h2>
            <p className=" font-semibold">We will reach out to you soon.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
