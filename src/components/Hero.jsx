import React, { lazy } from "react";
import SriVideo from "../assets/sri.mp4";
import { FaSearchLocation } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        src={SriVideo}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        onLoad={lazy}
      />

      <div className="absolute w-full h-full top-0 left-0 bg-slate-500/30"></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
        <h1 >First Class Travel</h1>
        <h2 className="py-4">Top 1% Location World wide</h2>
        <form className="flex w-full h-10 items-center max-w-3xl mx-auto border p-1 rounded-md text-black bg-gray-100/90">
      <input
        type="text"
        className="flex-grow bg-transparent px-4 py-2 rounded-l-md focus:outline-none"
        placeholder="Search Destination"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md">
        <FaSearchLocation size={20} className="icon" />
      </button>
    </form>
      </div>
    </div>
  );
};

export default Hero;
