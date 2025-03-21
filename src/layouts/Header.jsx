import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiTwitterXLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { GoX } from "react-icons/go";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects"},
    { name: "Contact", path: "/contact" }, 
  ];
  
  const socialLinks = [
    { icon: <RiTwitterXLine />, href: "https://x.com/Afsarhussain149" },
    { icon: <CiFacebook />, href: "https://www.facebook.com/share/1BXimtPQJC/" },
    { icon: <IoLogoInstagram />, href: "https://www.instagram.com/afsaarhussain149/" },
    { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/afsar-hussain-67453921b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  return (
    <>
      <header className='fixed top-0 w-full bg-[#e9e8e6] shadow-md z-50 h-[70px]'>
        <div className='relative flex justify-between px-4 py-3 text-1xl'>
          <div className='text-3xl font-light text-[#34b7a7]'>Portfolio</div>

          <nav className="flex items-center justify-center relative gap-[3rem]">
            {menu.map((item, index) => (
              <Link 
                key={index} 
                to={item.path} 
                className={`hidden lg:flex relative text-[#444444] hover:text-[#34b7a7] 
                  before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] 
                  before:bg-[#34b7a7] before:transition-all before:duration-300 
                  hover:before:w-full hover:before:left-0 
                  ${location.pathname === item.path ? "text-[#34b7a7] font-semibold" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="text-[22px] flex justify-end gap-3 max-lg:hidden md:me-4 text-[#444444] mt-2">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#34b7a7]"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="flex text-[30px] lg:hidden hover:text-[#34b7a7]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <GoX className="text-4xl" /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className='m-5 rounded p-4 bg-[#D6D6D6] lg:hidden transition-all duration-300 ease-in-out'>
            <nav className="flex flex-col gap-5 items-center">
              {menu.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} 
                  className="text-[#444444] hover:text-[#34b7a7]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;