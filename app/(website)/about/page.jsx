import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";
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
    insta:
      "https://www.instagram.com/priyanshu_anand_01_?igsh=MXE4czYybng0cnBxdA==",
    twitter: "https://x.com/PANAND_007?t=T_DTRmeMwN60KzEDp3GERA&s=09",
    linkedin:
      "https://www.linkedin.com/in/priyanshu-anand-18532328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: " https://github.com/PAnand007",
  },
  {
    image: "/assets/divya.png",
    role: "UI/UX Designer",
    name: "Divya Prakash",
    number: "8252745796",
    email: "divyaprakashsunny03@gmail.com",
    insta:
      "https://www.instagram.com/galaxy_of_paintings?igsh=eGR5d3B6NzJsdXc=",
    twitter: "#",
    linkedin:
      "https://www.linkedin.com/in/divya-prakash-2435a9227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "#",
  },
  {
    image: "/assets/aarju_img.png",
    role: "Frontend Developer",
    name: "Md Aarju Khan",
    number: "8051648516",
    email: "aarjukhan37999@gmail.com",
    insta: "https://www.instagram.com/aarju_0004/",
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/md-aarju-khan-23a253265/",
    github: "https://github.com/Aarju004",
  },
  {
    image: "/assets/bharat.png",
    role: "Full Stack Developer",
    name: "Bharat Ranjan",
    number: "9162601061",
    email: "ranjanbharat54@gmail.com",
    insta: "https://www.instagram.com/bhaarat.ranjan/",
    twitter: "https://twitter.com/codewithbharat",
    linkedin: "https://www.linkedin.com/in/codewithbharat/",
    github: "https://github.com/codewithbharat",
  },
];

const SocialLinks = ({ insta, twitter, linkedin, github }) => {
  return (
    <div className="flex">
      {insta && (
        <Link href={insta} className="m-2" target="_blank">
          <FaInstagram size={22} />
        </Link>
      )}
      {twitter && (
        <Link href={twitter} className="m-2" target="_blank">
          <FaXTwitter size={22} />
        </Link>
      )}
      {linkedin && (
        <Link href={linkedin} className="m-2" target="_blank">
          <FaLinkedinIn size={22} />
        </Link>
      )}
      {github && (
        <Link href={github} className="m-2" target="_blank">
          <FaGithub size={24} />
        </Link>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="home-container bg-gradient-to-t from-[#a6def7] via-[#5abeea] to-[#000000] w-full min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative pt-10 md:pt-20">
        <div className="first relative z-20 flex flex-col-reverse md:flex-row items-center text-center md:text-left justify-evenly">
          <img
            className="hidden md:block absolute drop-shadow-xl top-40 md:top-0 md:right-20"
            src="/assets/clouds.svg"
            alt=""
          />
          <p
            className="md:w-1/2 text-xs text-center text-white md:text-lg md:mt-10 font-semibold relative z-50 px-4 md:px-8 cursor-default"
            style={{ fontFamily: "Megrim, system-ui" }}
          >
            {" "}
            <b className="text-[#fcf1c5] text-xl md:text-2xl">
              Welcome to RenuTech
            </b>{" "}
            <br /> the ultimate fusion of technology and innovation, brought to
            you by <b className="text-[#fcf1c5]">SPNREC Araria!</b> RenuTech is
            not just a tech fest; it&apos;s an extravaganza that blends
            cutting-edge technology with creative prowess and intellectual
            prowess.{" "}
            <span className="hidden md:block">
              With a diverse array of events ranging from coding competitions
              and robotics challenges to debates, quizzes, and workshops,
              RenuTech offers something for everyone, whether you&apos;re a tech
              enthusiast or not. Our aim is to create an inclusive platform
              where students from various disciplines can come together to
              showcase their talents, exchange ideas, and push the boundaries of
              innovation.
            </span>{" "}
            Join us as we embark on a journey to redefine the future through the
            convergence of technology and imagination at RenuTech, where
            possibilities are endless, and innovation knows no bounds.
          </p>
          <img
            className="drop-shadow-2xl w-80 md:w-96"
            src="/assets/moon_about.png"
            alt="inage"
          />
        </div>
        <img
          className="absolute top-24 md:top-36 animate-pulse w-screen rotate-180"
          src="/assets/stars.png"
          alt="star"
        />
        <div
          className=" mt-20 relative z-50 flex flex-wrap justify-evenly item-center text-black "
          style={{ fontFamily: "MedievalSharp, cursive" }}
        >
          <div className="bg-white bg-opacity-25 drop-shadow-2xl p-4 m-5 w-80 md:w-96 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl font-bold pb-4 lg:mb-10 text-white">
              Patron
            </h3>
            <img
              className="w-44 md:w-56 pb-4 lg:pb-8  "
              src="assets/principal.png"
              alt="img"
            />
            <p className="text-white text-2xl font-semibold">
              Dr. Atma Ram Gupta
            </p>
            <p>Principal In Charge SPNREC, Araria</p>
          </div>
          <div className="bg-white bg-opacity-25 drop-shadow-2xl p-4 m-5 w-80 md:w-96 rounded-xl shadow-md flex flex-col items-center justify-center text-center">
            <h3 className="text-4xl font-bold py-4 text-white">
              Prof. Incharge <span className="text-3xl">RenuTech&apos;24</span>
            </h3>
            <img
              className="w-44 md:w-56 pb-4"
              src="assets/faculty.png"
              alt="img"
            />
            <p className="text-white text-2xl font-semibold">
              Prof. Gaurav Anand
            </p>
            <p>Assistant Professor Electrical Engg. Department</p>
          </div>
        </div>
        <div className="mid drop-shadow-2xl mt-20 flex justify-center items-center">
          <img src="/assets/hello_img.png" alt="hello" />
        </div>

        <div
          className="mt-16 mb-8"
          style={{ fontFamily: "MedievalSharp, cursive" }}
        >
          <div className="flex justify-evenly flex-wrap">
            {DevLists.map((dev, index) => (
              <div
                key={index}
                className="bg-white drop-shadow-2xl p-4 m-5 w-64 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
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
                <SocialLinks
                  insta={dev.insta}
                  twitter={dev.twitter}
                  linkedin={dev.linkedin}
                  github={dev.github}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default About;
