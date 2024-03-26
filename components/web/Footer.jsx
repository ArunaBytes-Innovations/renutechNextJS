import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className=" bg-[#3b7d9a] bg-opacity-25 w-screen  md:w-screen text-white pb-3 px-4 md:px-12 overflow-hidden"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container flex flex-col justify-center items-center ">
        <div className="md:flex items-center md:pt-4">
          <h3 className="text-2xl pt-2 md:pt-0 font-extrabold mr-4 md:border-r-2 md:pr-4">
            RENUTECH
          </h3>
          <div className="flex pt-4 md:pt-0">
            <Link href="#" className="mr-4">
              <FaInstagram size={22} />
            </Link>
            <Link href="#" className="mr-4">
              <FaXTwitter size={22} />
            </Link>
            <Link href="#" className="mr-4">
              <FaLinkedinIn size={22} />
            </Link>
            <Link href="#">
              <FaGithub size={24} />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center md:w-full md:px-40 font-semibold mt-6">
          <Link href="#" className="m-2 md:border-r-2 md:px-16">
            Home
          </Link>
          <Link href="#" className="m-2 md:border-r-2 md:px-16">
            Events
          </Link>
          <Link href="#" className="m-2 md:border-r-2 md:px-16">
            About
          </Link>{" "}
          <Link href="#" className="m-2 md:border-r-2 md:px-16">
            Contact
          </Link>
          <Link href="#" className=" md:pl-16">
            Developers
          </Link>
        </div>
      </div>
      <div className="container text-center mt-4">
        <p className="hidden md:block">
          &quot;Join us for an unforgettable celebration of talent, creativity,
          and community at our college fest!&rdquo; <br />
          #ExperienceTheMagic #CollegeFest2024 <br />
          &ldquo;Don&apos;t miss out!&quot;
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center mt-4">
          <span className="md:border-r-4 pr-2">&copy; 2024 RenuTech </span>
          <p className="font-bold pl-2">
            &nbsp;Developed by Arunabyte Innovations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
