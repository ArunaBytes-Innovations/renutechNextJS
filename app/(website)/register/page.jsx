"use client";

import React, { useState } from "react";

const Register = () => {
  const [page, setPage] = useState(1);

  // List of events
  const Events = [
    "mr and Miss  renutech",
    "paper presentation",
    "codeking",
    "circuit puzzle",
    "roboginators",
    "bot blockade",
    "robo soccer",
    "jet set go",
    "Tech AD",
    "commandCAD",
    "bridge affix",
    "inovatex",
    "Design Quest",
    "frame game",
    "Rubix",
    "Legend squad",
    "Knight of square board",
    "Furious finders",
    "Off-Cuff Odessey",
    "Path Finders",
    "Quizzards",
    "cinematography",
    "voice of heart",
    "NrityaKala",
    "SGT",
    "rap war",
    "perfect shot",
    "nazm E rekhta",
    "art fusion",
    "prastuti",
    "The Model Marvels",
    "comedy Z remedy",
  ];

  return (
    <div
      className="flex justify-center items-center h-dvh bg-gradient-to-b from-[#197fbd] from-10% via-[#5abeea] via-30% to-[#ffffff]"
      style={{
        fontFamily: "Shantell Sans, cursive",
      }}
    >
      <div className="bg-base-200 bg-opacity-25 rounded-lg p-10 md:w-full lg:w-1/2 shadow-lg">
        {/* heading  */}
        <h1 className=" text-4xl py-2 font-semibold bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
          Event Registration
        </h1>

        {/* steper web  */}
        <div className="hidden md:flex my-10 justify-center w-full">
          <ul className="steps w-full">
            <li
              onClick={() => setPage(1)}
              className={`step cursor-pointer ${page > 0 && "step-primary"}`}
            >
              Basic Info
            </li>
            <li
              onClick={() => setPage(2)}
              className={`step cursor-pointer ${page > 1 && "step-primary"}`}
            >
              College Details
            </li>
            <li
              onClick={() => setPage(3)}
              className={`step cursor-pointer ${page > 2 && "step-primary"}`}
            >
              Event
            </li>
            <li
              onClick={() => setPage(4)}
              className={`step cursor-pointer ${page > 3 && "step-primary"}`}
            >
              Payment
            </li>
          </ul>
        </div>

        {/* steper mobile  */}
        <div className="flex md:hidden my-10 justify-center w-full">
          <div role="tablist" className="tabs tabs-bordered">
            <a
              role="tab"
              onClick={() => setPage(1)}
              className={`tab ${page == 1 && "tab-active"}`}
            >
              Info
            </a>
            <a
              role="tab"
              onClick={() => setPage(2)}
              className={`tab ${page == 2 && "tab-active"}`}
            >
              College
            </a>
            <a
              role="tab"
              onClick={() => setPage(3)}
              className={`tab ${page == 3 && "tab-active"}`}
            >
              Event
            </a>
            <a
              role="tab"
              onClick={() => setPage(4)}
              className={`tab ${page == 4 && "tab-active"}`}
            >
              Payment
            </a>
          </div>
        </div>

        {/* form  */}
        <form className="flex flex-col">
          {/* page 1  */}
          {page == 1 && (
            <div className="flex flex-col">
              {/* Input for Name */}
              <label htmlFor="name">
                <span className=" text-red-600">*</span>Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Enter your name"
                className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
              {/* Input for Email */}
              <label htmlFor="email">
                <span className=" text-red-600">*</span>Email:{" "}
              </label>
              <input
                type="email"
                placeholder="jondue@gmail.com"
                name="email"
                id="email"
                required
                className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
              {/* Input for Contact No */}
              <label htmlFor="contact">
                <span className=" text-red-600">*</span>Mobile No:{" "}
              </label>
              <input
                type="number"
                placeholder="91xxxxxxxx"
                name="contact"
                id="contact"
                required
                className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
            </div>
          )}

          {/* page 2  */}
          {page == 2 && (
            <div className="flex flex-col">
              {/* Input for College Name */}
              <label htmlFor="college">
                <span className=" text-red-600">*</span>College Name:{" "}
              </label>
              <input
                type="text"
                placeholder="Enter your Institute name"
                name="college"
                id="college"
                required
                className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
              {/* Input for Registration No */}
              <label htmlFor="registration">
                <span className=" text-red-600">*</span>Registration No:{" "}
              </label>
              <input
                type="number"
                placeholder="2x1xxxxxxxx"
                name="college-reg"
                id="registration"
                required
                className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
              {/* Input for Branch */}
              <label htmlFor="branch">
                <span className=" text-red-600">*</span>Branch:
              </label>

              <input
                type="text"
                placeholder="xxxxxx Engineering"
                name="branch"
                id="branch"
                required
                className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
              {/* Input for student Year */}
              <label htmlFor="year" className="">
                <span className=" text-red-600">*</span>Year:
              </label>
              <select
                id="year"
                name="year"
                required
                className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              >
                <option disabled selected hidden value="">
                  current Year
                </option>
                <option value="first">1st Year</option>
                <option value="secound">2nd Year</option>
                <option value="third">3rd Year</option>
                <option value="fourth">4th Year</option>
              </select>
            </div>
          )}

          {/* page 3  */}
          {page == 3 && (
            <div>
              {/* Input for Event 1 */}
              <label htmlFor="event_first" className="">
                <span className=" text-red-600">*</span>Event 1:
              </label>
              {/* Select for Event 1 compulsory */}
              <select
                id="event_first"
                name="event_first"
                required
                className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              >
                <option disabled selected hidden value="">
                  Choose event
                </option>
                {Events.map((event, index) => (
                  <option className=" capitalize" key={index} value={event}>
                    {event}
                  </option>
                ))}
              </select>
              {/* Input for Event 2 */}
              <label htmlFor="event_secound" className="">
                Event 2:
              </label>
              <select
                id="event_secound"
                name="event_secound"
                className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              >
                <option disabled selected hidden value="">
                  Choose event
                </option>
                {Events.map((event, index) => (
                  <option className=" capitalize" key={index} value={event}>
                    {event}
                  </option>
                ))}
              </select>
              {/* Input for Event 3 */}
              <label htmlFor="event_third" className="">
                Event 3:
              </label>
              <select
                id="event_third"
                name="event_third"
                className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              >
                <option disabled selected hidden value="">
                  Choose event
                </option>
                {Events.map((event, index) => (
                  <option className=" capitalize" key={index} value={event}>
                    {event}
                  </option>
                ))}
              </select>
              {/* Input for Event 4 */}
              <label htmlFor="event_fourth" className="">
                Event 4:
              </label>
              <select
                id="event_fourth"
                name="event_fourth"
                className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              >
                <option disabled selected hidden value="">
                  Choose event
                </option>
                {Events.map((event, index) => (
                  <option className=" capitalize" key={index} value={event}>
                    {event}
                  </option>
                ))}
              </select>
              {/* Input for Additional Event */}
              <label htmlFor="additional">
                Additional event name :{" "}
                <span className=" text-blue-400 text-sm">(if any)</span>
              </label>
              <input
                type="text"
                placeholder="Enter event name"
                name="additional"
                id="additional"
                className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
              />
            </div>
          )}

          {/* page 4  */}
          {page == 4 && (
            <div>
              <div className="cont-1">
                {/* Input for Payment Date */}
                <label htmlFor="date">
                  <span className=" text-red-600">*</span>Payment Date:{" "}
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
                />
                {/* Input for Transaction ID */}
                <label htmlFor="transaction">
                  <span className=" text-red-600">*</span>Transaction ID:{" "}
                </label>
                <input
                  type="text"
                  name="transaction"
                  id="transaction"
                  required
                  placeholder="Enter your transaction ID"
                  className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
                />
                {/* Input for Payment Proof */}
                <label htmlFor="prrof">
                  <span className=" text-red-600">*</span>Payment Proof:
                </label>
                <input
                  type="file"
                  name="proof"
                  id="proof"
                  required
                  className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
                />
              </div>
            </div>
          )}
        </form>
        <div className="flex justify-between pt-10">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="btn btn-outline outline-none border-none bg-[#ff7f7f] text-white hover:bg-[#df6e6e]"
            >
              Back
            </button>
          )}
          {page < 4 && (
            <button
              onClick={() => setPage(page + 1)}
              className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
            >
              Next
            </button>
          )}
          {page == 4 && (
            <button className="btn btn-success font-semibold tracking-wide text-white">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
