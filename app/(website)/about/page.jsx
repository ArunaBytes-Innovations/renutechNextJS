import Navbar from "@/components/web/Navbar";
import React from "react";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const DevLists = [
  {
    image: "/assets/priyanshu.png",
    role: "UI/UX Designer",
    name: "Priyanshu Anand",
    number: "8603295964",
    email: "pa28may@gmail.com",
  },
  {
    image: "/assets/divya.png",
    role: "UI/UX Designer",
    name: "Divya Prakash",
    number: "8252745796",
    email: "divyaprakashsunny03@gmail.com",
  },
  {
    image: "/assets/aarju_img.png",
    role: "Frontend Developer",
    name: "Md Aarju Khan",
    number: "8051648516",
    email: "aarjukhan37999@gmail.com",
  },
  {
    image: "/assets/bharat.png",
    role: "Full Stack Developer",
    name: "Bharat Ranjan",
    number: "9162601061",
    email: "ranjanbharat54@gmail.com",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex">
      <Link href="#" className="m-2">
        <i className="">
          <FaInstagram size={22} />
        </i>
      </Link>
      <Link href="#" className="m-2">
        <i className="">
          <FaXTwitter size={22} />
        </i>
      </Link>
      <Link href="#" className="m-2">
        <i className="">
          <FaLinkedinIn size={22} />
        </i>
      </Link>
      <Link href="#" className="m-2">
        <i className="">
          <FaGithub size={24} />
        </i>
      </Link>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="relative px-40 py-20 bg-gradient-to-b from-[#197fbd] from-10% via-[#5abeea] via-30% to-[#fcfdff] to-90% w-fit">
        <img className="md:absolute top-8" src="/assets/clouds.svg" alt="" />
        <div className="first flex items-center text-center justify-evenly">
          <p
            className="w-1/2 text-white text-lg font-bold"
            style={{ fontFamily: "Megrim, system-ui" }}
          >
            Innovation thrives, where circuits hum and colors blend,{" "}
            <b>RENUTECH</b> arises &ndash; a fusion of tech and culture, without
            end. Robo racers sprint, circuits ablaze, in a dance of thought,
            Soccer fields transform, robotic feet pirouette, algorithms sought.
            Huddles hum with ideas, innovation's forge, minds collide and dare,
            Beyond, a cultural tapestry unfurls, voices raise, bodies in motion
            share. In the art gallery, dreams and colors entwine, entrepreneurs
            tread, <b>April 8th to 10th, 2024</b>, etch it in your soul,
            RENUTECH awaits, where tech and art spread.
          </p>
          <img src="/assets/design_quest.svg" alt="inage" />
        </div>
        <div className="mid mt-8 flex justify-center items-center">
          <img src="/assets/hello_squad.png" alt="hello" />
        </div>

        <div className="mt-16">
          <div className="flex justify-evenly flex-wrap">
            {DevLists.map((dev, index) => (
              <div
                style={{ fontFamily: "Shantell Sans, cursive" }}
                key={index}
                className="bg-white p-4 m-5 w-64 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
              >
                <h1 className="text-lg font-bold mt-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                  {dev.role}
                </h1>
                <img
                  src={dev.image}
                  className="w-20 h-20 my-2 rounded-full"
                  alt="dev"
                />

                <p className="font-semibold text-md">{dev.name}</p>
                <Link href={`tel:${dev.number}`}>{dev.number}</Link>
                <Link href={`mailto:${dev.email}`}>{dev.email}</Link>
                <SocialLinks />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
