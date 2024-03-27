import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="home-container bg-gradient-to-t from-[#9fd4eb] from-10% via-[#5abeea] via-30% to-[#000000] to-90% w-full min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative -mt-10">
        <div className="hero md:flex justify-between">
          <div className="py-10 md:py-24 md:px-10 w-full md:w-fit text-white mt-20 text-center md:text-left">
            <img
              id="animation"
              src="/assets/renuTech.svg"
              className="relative z-10 px-10 md:w-auto md:max-w-none"
              alt=""
            />
            <p className="relative z-50 text-xl text-center font-bold md:text-center md:text-2xl md:px-10 pt-6 text-amber-100 capitalize ">
              08-10 April 2024
            </p>
            <p className="md:text-xl text-center font-bold md:text-left md:px-10 pt-10 text-amber-100 capitalize ">
              Bytes &amp; Beats Together <br />
              Where Tech innovation meets cultural celebration
            </p>
            <Link href="/events">
              <button className="bg-amber-100 text-sm md:text-lg font-semibold text-black md:ml-10 px-4 py-2 mt-5 rounded-lg cursor-pointer relative z-40">
                Get Started
              </button>
            </Link>
          </div>
          <img
            className="absolute top-24 md:top-36 min-h-full animate-pulse w-screen rotate-180"
            src="/assets/stars.png"
            alt="star"
          />
          <div className="md:basis-1/4 -mt-36 md:mt-40 overflow-hidden">
            <img
              className="w-54 md:w-full md:h-full h-48 animate-spin"
              src="/assets/moon_full.png"
              alt=""
              style={{ animation: "spin 40s linear infinite" }}
            />
          </div>
        </div>
      </div>

      <div className="about bg-inherit py-10 px-10">
        <h2 className="text-center text-[#fcf1c5] text-2xl font-bold underline underline-offset-8  decoration-wavy">
          About Fest
        </h2>
        <p className="text-center font-semibold text-white mt-5 md:px-40">
          RenuTech is the ultimate fusion of tech and creativity organized by{" "}
          <span className="text-lg text-[#fcf1c5]">SPNREC, Araria!</span>{" "}
          Featuring a diverse range of events from coding competitions to
          debates and workshops, RenuTech offers something for everyone. Join us
          as we push the boundaries of innovation and imagination, creating a
          platform where talents from all disciplines converge to shape the
          future.
        </p>
      </div>

      <div className="events bg-inherit text-white py-10 overflow-hidden cursor-default">
        <h2 className="text-center text-[#fcf1c5] text-2xl font-bold underline underline-offset-8  decoration-wavy">
          Events
        </h2>
        <div className="flex flex-wrap justify-evenly mt-5 md:mt-12 px-6 md:px-0">
          <Link href="/events">
            <div className="flex justify-evenly bg-white text-black p-2 rounded-lg drop-shadow-xl">
              <img
                src="/assets/design_quest.svg"
                className="w-20 h-20 pr-2 rounded-full"
                alt="dev"
              />
              <div>
                <h3 className="text-xl font-bold">Tech Event</h3>
                <p className="text-gray-500 mt-2 font-semibold">
                  Embark on a Journey of Code, Creation, and Conquest: <br />{" "}
                  Join the Tech Odyssey.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/events">
            <div className="flex justify-evenly bg-white text-black mt-4 md:mt-0 p-2 rounded-lg drop-shadow-xl ">
              <img
                src="/assets/cultural_img.png"
                className="w-20 h-20 pr-2 rounded-full"
                alt="dev"
              />
              <div>
                <h3 className="text-xl font-bold">Cultural Event</h3>
                <p className="text-gray-500 mt-2 font-semibold">
                  From Tradition to Transformation: Let&apos;s Celebrate
                  Culture.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="earth-container bg-inherit py-10 px-10">
        <img
          className="w-full h-auto md:h-96 -mb-10"
          src="/assets/earth.png"
          alt="earth"
        />
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
