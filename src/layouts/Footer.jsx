import React from 'react'
import { RiTwitterXLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";


const Footer = () => {

  const socialLinks = [
    { icon: <RiTwitterXLine />, href: "https://x.com/Afsarhussain149" },
    { icon: <CiFacebook />, href: "https://www.facebook.com/share/1BXimtPQJC/" },
    { icon: <IoLogoInstagram />, href: "https://www.instagram.com/afsaarhussain149/" },
    { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/afsar-hussain-67453921b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  return (
    <>
      <footer className='w-full py-[40px] flex justify-center bg-[#e9e8e6]'>
        <div>
            <p className='text-[13px]'>© Copyright <strong>Portfolio</strong> All Rights Reserved</p>
            <div className="text-[22px] flex gap-3 mt-5 flex justify-center text-[#444444]">
              {socialLinks.map((item, index) => (
                <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#34b7a7] p-2 border border-[#444444] hover:border-[#34b7a7] rounded-full"
              >
                {item.icon}
              </a>
                ))}
            </div>
            <p className='mt-5 text-center text-[13px]'>Developed by <span className='text-[#34b7a7]'>Afsar Hussain</span></p>
        </div>
      </footer>
    </>
  )
}

export default Footer