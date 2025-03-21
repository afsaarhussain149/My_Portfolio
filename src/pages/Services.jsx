import React, { useEffect } from 'react';
import { SiWebstorm } from "react-icons/si";
import { SiAssemblyscript } from "react-icons/si";
import { TbDatabaseStar } from "react-icons/tb";

const Services = () => {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  
  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='mt-20 sm:mt-40'>
          <div className='text-center' data-aos="fade-up">
            <h1 className='text-2xl md:text-4xl font-semibold underline underline-offset-8 md:underline-offset-[2rem] decoration-[#34b7a7] p-6 md:p-[3rem]'>Services</h1>
            <p className='p-6 sm:p-[3rem]'>Creating responsive, secure, and scalable websites. Building high-performance and user-friendly applications.Implementing secure and efficient API connections and designing and optimizing PostgreSQL databases.</p>
          </div>  
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10' data-aos="fade-up">

          <div className='shadow-lg rounded-xl p-6 bg-white'>
            <i className='text-8xl text-[#34b7a7] mb-4 flex justify-center'><SiWebstorm className='hover:bg-[red] hover:opacity-60 transition-all duration-300'/></i>
            <h2 className='text-xl font-semibold'>Website Service</h2>
            <p className='text-gray-600 mt-2'>Developed responsive and user-friendly websites with modern designs. Ensured secure, fast, and scalable web solutions using React.js, .NET Core, and PostgreSQL. Focused on smooth performance and a great user experience across all devices.</p>
          </div>

          <div className='shadow-lg rounded-xl p-6 bg-white'>
            <i className='text-8xl text-[#34b7a7] mb-4 flex justify-center'><SiAssemblyscript className='hover:bg-[red] hover:opacity-60 transition-all duration-300' /></i>
            <h2 className='text-xl font-semibold'>Application Service</h2>
            <p className='text-gray-600 mt-2'>Built secure and scalable applications with React.js, .NET Core, and PostgreSQL. Focused on high performance, smooth functionality, and a great user experience. Ensured efficient database management and seamless backend integration.</p>
          </div>

          <div className='shadow-lg rounded-xl p-6 bg-white'>
            <i className='text-8xl text-[#34b7a7] mb-4 flex justify-center'><TbDatabaseStar className='hover:text-[red] hover:opacity-60 transition-all duration-300' /></i>
            <h2 className='text-xl font-semibold'>Database Management</h2>
            <p className='text-gray-600 mt-2'>Designed and managed databases using PostgreSQL for secure and efficient data storage. Optimized queries for high performance and scalability. Ensured data integrity, backups, and smooth integration with applications.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
