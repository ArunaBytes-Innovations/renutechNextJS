import Navbar from "@/components/web/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="home-container bg-black w-full max-h-fit overflow-x-hidden">
      {/* hero section  */}
      <Navbar />
      <div className="-mt-20">
        <div className="py-24 md:px-10 w-fit text-white mt-20">
          <img
            id="animation"
            src="/assets/renuTech.svg"
            className=" relative z-10 px-10"
            alt=""
          />
          <p className="text-xl text-center font-bold md:text-left md:text-2xl md:px-10 pt-10 text-amber-100 capitalize ">
            Bytes & Beats Together <br />
            Where Tech innovation meets cultural celebration
          </p>
          <img
            src="/assets/moon.png"
            className="md:absolute top-20 -right-96 md:animate-spin -mt-80 md:-mt-20 z-0"
            style={{ animation: "spin 40s linear infinite" }}
            alt=""
          />
        </div>

        <img
          src="/assets/satellite.svg"
          className=" ml-32 md:animate-ping w-28 -rotate-45"
          style={{
            animation: "ping 15s cubic-bezier(0, 0, 0.5, 1) infinite",
          }}
          alt=""
        />
        <div
          className="absolute top-0 left-0 w-screen h-screen z-0 md:animate-pulse"
          style={{
            animation: "pulse 1.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            backgroundImage: "url(/assets/stars.png)",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>
      {/* Section 2 */}
      <div
        className=" w-full h-full mt-48 bg-black"
        style={{
          backgroundImage: "url(/assets/wave.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-yellow-100  text-center pt-16">
          <h1 className="text-2xl" style={{ fontFamily: "Ultra, serif" }}>
            &quot;RENUTECH&quot;
          </h1>
          <p className="px-40 text-2xl font-bold">
            spnrec&apos;s inaugural event celebration innovation, collaboration
            and technology. Join students, faculty and industry professionals
            for cutting-edge projects, workshops and discussions. It&apos;s the
            start of a new era of excellence.
          </p>
        </div>
        <div className="mt-72">
          <img
            className="absolute left-8"
            src="/assets/fire_stone.svg"
            alt=""
          />
        </div>
        <div className="w-full h-full mt-96">
          <div className="text-white text-2xl font-bold px-40 text-center ">
            <p className="">
              &quot;Embark on an unforgettable journey with SPNREC&apos;s
              inaugural celebration of innovation, collaboration, and
              technology. Engage alongside students, esteemed faculty, and
              industry experts for a day brimming with cutting-edge projects,
              immersive workshops, and enlightening discussions. Witness the
              dawn of a new era of excellence at SPNREC!&quot;
            </p>
            <p
              className="mt-8 tracking-wide uppercase"
              style={{ fontFamily: "Mitr, sans-serif" }}
            >
              08-10 april 2024 <br />
              venue:&nbsp;spnrec,araria
            </p>
          </div>
          <div className=" mt-96 flex flex-col items-center">
            <img src="/assets/tech.png" alt="" />
            <img className="pt-20" src="/assets/cultural.png" alt="" />
          </div>
          <div className="w-full h-full mt-16">
            <img
              className="absolute right-0"
              src="/assets/aeroplane.svg"
              alt=""
            />
            <img className="pt-96" src="/assets/hot_balloon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
