"use client";

import { useState } from "react";

const Appointment = () => {
  const [page, setPage] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="bg-base-200 rounded-lg p-10 md:w-3/4 lg:w-1/2 shadow-lg">
        {/* heading  */}
        <h1 className="text-4xl font-semibold text-success">
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
              Accomodation
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
              Accomodation
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
            <>
              <div className="flex flex-col md:flex-row w-full">
                {/* input full name  */}
                <div className="form-control md:basis-1/2 m-2">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="input input-bordered"
                  />
                </div>
                {/* input email  */}
                <div className="form-control md:basis-1/2 m-2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@gmail.com"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full">
                {/* input Mobile No.  */}
                <div className="form-control md:basis-1/2 m-2">
                  <label className="label">
                    <span className="label-text">Mobile No.</span>
                  </label>
                  <input
                    type="number"
                    placeholder="9162XXXXXX"
                    className="input input-bordered"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                  />
                </div>
                {/* input email  */}
                <div className="form-control md:basis-1/2 m-2">
                  <label className="label">
                    <span className="label-text">City</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Pune"
                    className="input input-bordered"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          {/* page 2  */}
          {page == 2 && <div>hi</div>}

          {/* page 3  */}
          {page == 3 && (
            <div className="flex flex-col md:flex-row w-full">
              {/* input Date  */}
              <div className="form-control md:basis-1/2 m-2">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="input input-bordered"
                />
              </div>
              {/* input Time  */}
              <div className="form-control md:basis-1/2 m-2">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input
                  type="time"
                  className="input input-bordered"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* page 4  */}
          {page == 4 && <div>hi</div>}
          {page}
        </form>
        <div className="flex justify-between pt-10">
          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="btn btn-outline"
            >
              Back
            </button>
          )}
          {page < 4 && (
            <button
              onClick={() => setPage(page + 1)}
              className="btn btn-success"
            >
              Next
            </button>
          )}
          {page == 4 && <button className="btn btn-success">Submit</button>}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
