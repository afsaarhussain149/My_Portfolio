import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import SwiperSlider from "../components/SwiperSlide";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const details = {
        birthday: '05-04-2002',
        website: 'www.com',
        phone: 9355217186,
        city:'delhi',
        Age:23,
        Dgree: 'Bachelor of computer application',
        Email: 'afsarlogicsoft@gmail.com',
        Work:'Full Time'
    };

    const skills = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 60 },
        { name: 'ReactJS', percentage: 85 },
        { name: 'JavaScript', percentage: 75 },
        { name: '.NET', percentage: 60 },
        { name: 'PostgreSQL', percentage: 55 },
        { name: 'Bootstrap', percentage: 50 },
        { name: 'TailwindCss', percentage: 50 },
    ];

    const states = [
        { value: 2, label: "Joining Company" },
        { value: 3, label: "Project" },
        { value: 2, label: "Freelance Project" },
        { value: '24x7', label: "Timing" },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000 });
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <div className='container mx-auto'>
                <div className='mt-[73px]'>
                    <div className='text-center' data-aos="fade-up">
                        <h1 className='text-2xl md:text-4xl font-semibold underline underline-offset-8 md:underline-offset-[2rem] decoration-[#34b7a7] p-6 md:p-[3rem]'>About</h1>
                        <p className='p-[3rem]'>I am Software Engineer and I like coding </p>
                    </div>  
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="w-full md:w-[40%] flex justify-center" data-aos="fade-up">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQGywBMJBYolag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706592223165?e=1747872000&v=beta&t=5tGJxPe75ypbBb5SVEcF-hrbDFk3aAZQzw_uVyrHLqw" className="rounded-xl w-[70%] md:w-full" />
                    </div>
                    <div className="w-full md:w-[60%] mx-0 md:mx-10 text-center md:text-left" data-aos="fade-up">
                        <h2 className="text-2xl font-bold mt-5">Frontend and Backend Developer</h2>
                        <div className="flex flex-col md:flex-row mt-9">
                            <div className="w-full md:w-1/2">
                                <ul>
                                    {Object.entries(details).slice(0, 4).map(([key, value]) => (
                                        <li key={key} className="flex justify-center md:justify-start mt-4 ms-3">
                                            <i className="mt-1 text-[#34b7a7]"><IoIosArrowForward /></i>
                                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                                            <span className="ms-3">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2">
                                <ul>
                                    {Object.entries(details).slice(4).map(([key, value]) => (
                                        <li key={key} className="flex justify-center md:justify-start mt-4">
                                            <i className="mt-1 text-[#34b7a7]"><IoIosArrowForward /></i>
                                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                                            <span className="ms-3">{value}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="mt-10 md:mt-20">
                        I completed my graduation from Lingayas Vidyapeeth University and my schooling from G.B.S.S.S Jafrabad (10th) and G.B.S.S.S Molarband (12th). I permanently reside in Badarpur, Delhi.
                        </p>
                    </div>
                </div>

                <div className='mt-40'>
                    <div className='text-center' data-aos="fade-up">
                        <h1 className='text-4xl font-semibold underline underline-offset-[2rem] decoration-[#34b7a7] p-[3rem]'>Skills</h1>
                    </div>  
                </div>

                <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" data-aos="fade-up">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1 text-sm sm:text-base">
                                <span className="font-semibold">{skill.name}</span>
                                <span>{skill.percentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
                                <div className="bg-[#34b7a7] h-3 sm:h-4 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-40'>
                    <div className='text-center' data-aos="fade-up">
                        <h1 className='text-4xl font-semibold underline underline-offset-[2rem] decoration-[#34b7a7] p-[3rem]'>Facts</h1>
                    </div>  
                </div>

                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-40" data-aos="fade-up">
                    {states.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h1 className="text-3xl sm:text-4xl font-semibold underline underline-offset-[20px] decoration-[#34b7a7] mb-6 sm:mb-14">
                                {stat.value}
                            </h1>
                            <p className="text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;
