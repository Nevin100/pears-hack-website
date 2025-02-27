"use client";

import "../../styles/JudgesMentors.css";
import "./TeamMembers.css";
import React from "react";
import { Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Frame from "../../SVGs/Frame.svg";

import Manass from "../../assets/team/leadorg/Manas.jpeg";
import Vedant from "../../assets/team/leadorg/Vedant.jpg";
import Akshay from "../../assets/team/leadorg/Akshay.jpg";
import Samrat from "../../assets/team/leadorg/Samrat.jpg";

const leadorg = [
  {
    name: "Manas Chopra",
    image: Manass,
    linkedin: "https://www.linkedin.com/in/themanas95826",
    github: "https://github.com/manas95826",
  },
  {
    name: "Vedant Nagwanshi",
    image: Vedant,
    linkedin: "https://www.linkedin.com/in/vedant-nagwanshi",
    github: "https://github.com/02-davinci-01",
  },
  {
    name: "Akshay kumar sharma",
    image: Akshay,
    linkedin: "https://www.linkedin.com/in/akshay-kumar-sharma-devvoyager",
    github: "http://github.com/Cappybara12",
  },
  {
    name: "Samrat Kalki",
    image: Samrat,
    linkedin: "https://www.linkedin.com/in/samrat-kalki-a657b5291",
    github: "https://github.com/SAMRATKALKI",
  },
];

const LeadCard = ({ mentor }) => (
  <div className="group relative w-[14rem] h-[18rem] flex-shrink-0">
    <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden border-2 border-[#b6e33e] transition-transform duration-300 group-hover:scale-105">
      <img
        src={mentor.image || "/placeholder.svg"}
        alt={mentor.name}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <h3 className="text-white text-xs font-bold mb-1 truncate tracking-wider">
            {mentor.name}
          </h3>
          <div className="flex gap-2">
            <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 text-[#b6e33e] hover:text-white transition-colors cursor-pointer" />
            </a>
            <a href={mentor.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 text-[#b6e33e] hover:text-white transition-colors cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Carousel = ({ mentors, direction = "left" }) => {
  const repeatedMentors = [...mentors, ...mentors, ...mentors, ...mentors];

  return (
    <div className="flex flex-nowrap relative w-full h-[19rem] overflow-hidden">
      <div
        className={`flex flex-nowrap gap-4 ${direction === "left" ? "scroll-left" : "scroll-right"
          }`}
      >
        {repeatedMentors.map((mentor, index) => (
          <LeadCard key={`${mentor.name}-${index}`} mentor={mentor} />
        ))}
      </div>
    </div>
  );
};

const lead = () => {
  return (
    <section className="flex flex-col justify-start gap-8 xl:gap-20 mt-16 md:mt-10 2xl:mt-10 h-[95vh] w-[23rem] md:w-[30rem] lg:w-[40rem] xl:w-[50rem] overflow-hidden">
      <Link to="/">
        <button className="bg-[#222] rounded-full border-2 border-[#b6e33e] px-4 py-1 flex items-center justify-center">
          <img
            src={Frame || "/placeholder.svg"}
            alt="Back-Arrow"
            className="back-arrow w-[1.5rem] h-8 mr-2"
          />
        </button>
      </Link>
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <div className="flex flex-col gap-[1rem]">
          {/* <Carousel mentors={topMentors} direction="left" /> */}
          <Carousel mentors={leadorg} direction="right" />
        </div>
      </div>
    </section>
  );
};

export default lead;
