import React from "react";
import { useState } from "react";
import { MdPersonPinCircle } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { FiDribbble } from "react-icons/fi";
import { IoLogoPinterest } from "react-icons/io";
import { IoClose } from "react-icons/io5";
const NavBar = () => {


  const[nav,setNav]=useState(false)
  const[logo,setLogo]=useState(false)
    
  const handleNav=()=>{
    setNav(!nav)
    setLogo(!logo)
  }




  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white bg-black">
      <div>
        <h1  onClick={handleNav} className={logo ? "hidden":"block"}>BEACHES.</h1>
      </div>
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="hidden md:flex">
        <MdPersonPinCircle className="mr-2" size={20} />

        <FaSearchLocation size={20} />
      </div>


      <div className=" md:hidden z-10" onClick={handleNav}>
        {
         nav ? <IoClose size={20} className="text-black"/>: <IoMenu size={20} /> 
        }
      </div>

      
      {/* nav bar drop down */}
      <div onClick={handleNav} className={nav ? "absolute left-0 top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col" :"absolute left-[-100%]"}>
        <ul>
        <h1 >BEACHES.</h1>
        <li className="border-b">Home</li>
        <li className="border-b">Destination</li>
        <li className="border-b">Travel</li>
        <li className="border-b">View</li>
        <li className="border-b">Book</li>
        <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
        </div>
        <div className="flex justify-between my-6">
        <FaFacebookF  className="icon"/>
        <SiInstagram className="icon"/>
        <RiTwitterXFill  className="icon"/>
        <FiDribbble className="icon"/>
        <IoLogoPinterest  className="icon"/>
        </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
