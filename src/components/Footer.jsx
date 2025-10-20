import React from 'react';
import logo from "../assets/logo.png"
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {

    const iconClass = "w-6 h-6 fill-current hover:text-gray-400 transition duration-300";

    return (
        <div className='w-full'>
            <footer className="bg-[#001931] text-white p-10">

                <div className="flex justify-between items-center max-w-7xl mx-auto">


                    <div className="flex items-center gap-3">

                        <img className="h-8 w-8" src={logo} alt="HERO.IO Logo" />
                        <h1 className="font-bold text-xl">
                            HERO.IO
                        </h1>
                    </div>


                    <div className="flex flex-col items-end">
                        <h3 className="text-sm font-semibold mb-2">Social Links</h3>
                        <div className="flex gap-4">

                            <a href="#" aria-label="Twitter">
                                <FaTwitter className={iconClass} />
                            </a>


                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedin className={iconClass} />
                            </a>


                            <a href="#" aria-label="Facebook">
                                <FaFacebook className={iconClass} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 pt-4 border-t border-gray-600 max-w-7xl mx-auto">
                    <p className="text-sm text-gray-400">
                        Copyright © {new Date().getFullYear()} - All right reserved
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;