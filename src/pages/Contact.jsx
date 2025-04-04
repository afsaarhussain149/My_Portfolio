import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { CiMail } from "react-icons/ci";
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from "../components/ContactForm";

const Contact = () => {
  useEffect(() => {    
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='container mx-auto px-4'>
        <div className='mt-20 sm:mt-40'>
          <div className='text-center' data-aos="fade-up">
            <h1 className='text-2xl md:text-4xl font-semibold underline underline-offset-8 md:underline-offset-[2rem] decoration-[#34b7a7] p-6 md:p-[3rem]'>Contact</h1>
            <p className='p-6 sm:p-[3rem]'>Contact me please fill the information below.</p>
          </div>  
        </div>  

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 my-12'>
          <div className='card p-5 shadow border-0' data-aos="fade-up">
            <div className='info-wrap space-y-6'>

              <div className='flex flex-col sm:flex-row items-center sm:items-start' data-aos="fade-up">
                <IoLocationOutline className='w-10 h-10 p-2 bg-[#effaf8] rounded-full text-[#34b7a7] hover:bg-[#34b7a7] hover:text-white transition-all duration-300'/>
                <div className='sm:ml-3 text-center sm:text-left text-lg-start'>
                  <h2 className='font-semibold'>Address</h2>
                  <p className='break-words'>D-819 Jaitpur Part-2, Badarpur, New Delhi-110044</p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row items-center sm:items-start' data-aos="fade-up">
                <HiOutlinePhone className='w-10 h-10 p-2 bg-[#effaf8] rounded-full text-[#34b7a7] hover:bg-[#34b7a7] hover:text-white transition-all duration-300'/>
                <div className='sm:ml-3 text-center sm:text-left text-lg-start'>
                  <h2 className='font-semibold'>Call Us</h2>
                  <p className='break-all sm:break-normal'>+91-9911933890</p>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row items-center sm:items-start' data-aos="fade-up">
                <CiMail className='w-10 h-10 p-2 bg-[#effaf8] rounded-full text-[#34b7a7] hover:bg-[#34b7a7] hover:text-white transition-all duration-300'/>
                <div className='sm:ml-3 text-center sm:text-left text-lg-start'>
                  <h2 className='font-semibold'>Email</h2>
                  <p className='break-words'>afsarhussain149@gmail.com</p>
                </div>
              </div>

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d858.7884589309301!2d77.33829732079614!3d28.511848928814903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7a98be7a023%3A0x4c94e3df0dcdfadd!2sBharat%20Transport!5e0!3m2!1sen!2sin!4v1742548098349!5m2!1sen!2sin" 
                className="w-full h-[250px] rounded-lg shadow-lg" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
