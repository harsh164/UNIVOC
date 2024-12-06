import React from "react";
import image1 from "../images/Frame 6.png";
import { faBell, faEnvelope, faPhoneAlt, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png';

const Banner = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        {/* Top bar with contact info */}
        <div className="bg-gradient-to-r from-[#4f8729] to-[#3b6d21] text-white py-2 w-full z-10 shadow-lg overflow-hidden flex justify-center items-center">
            <div className="whitespace-nowrap flex items-center space-x-8 px-2 animate-scroll gap-5">
                <span className="flex items-center space-x-2 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-300" />
                    <span>1800-XXXX-XXXX</span>
                </span>
                <span className="flex items-center space-x-2 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
                    <FontAwesomeIcon icon={faEnvelope} className="text-yellow-300" />
                    <span>info@Univoc.com</span>
                </span>
                <span className="flex items-center space-x-2 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
                    <FontAwesomeIcon icon={faTags} className="text-yellow-300" />
                    <span>Exclusive Discounts Available Now!</span>
                </span>
                <span className="flex items-center space-x-2 text-xs sm:text-sm font-semibold px-4 py-1 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all ease-in-out duration-300">
                    <FontAwesomeIcon icon={faBell} className="text-yellow-300" />
                    <span>Sign Up for Latest Updates</span>
                </span>
            </div>
        </div>

        {/* Main Banner Section */}
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Content Section */}
            <div className="w-full md:w-1/2 px-6 py-4 flex flex-col justify-center items-center md:items-start text-center md:text-left relative">
                {/* Logo positioned just below the top bar */}
                <div className="absolute top-2 left-2 md:left-6">
                    <img 
                        src={logo} 
                        alt="Univoc Logo" 
                        className="h-10 w-auto md:h-12 transition-transform duration-300 transform hover:scale-105" 
                    />
                </div>

                {/* Main Text Content */}
                <h1 className="mt-16 md:mt-20 text-2xl md:text-4xl font-extrabold text-gray-800 leading-tight">
                    SKILLING TO EMPOWER AND SHAPING FUTURES, BUILDING SKILLS
                </h1>
                <p className="mt-4 text-sm md:text-lg text-gray-600 max-w-xs md:max-w-md">
                    As a fast-growing provider of skilling and manpower solutions in India, we focus on equipping individuals with the skills necessary for today’s job market.
                </p>

                {/* Get Started button with full width */}
                <Link to="/home" className="w-full md:w-full">
                    <div className="mt-6 w-full">
                        <button className="w-full px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
                            Get Started
                        </button>
                    </div>
                </Link>

            </div>

            {/* Right Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-full">
                <img className="w-full h-full object-cover" src={image1} alt="Banner Image"/>
            </div>
        </div>
    </>
    )
}
export default Banner;
