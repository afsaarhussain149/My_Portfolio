import { useEffect, useRef } from "react";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
    const resumeRef = useRef();

    useEffect(() => {
      AOS.init({ duration: 1000 });
      window.scrollTo(0, 0);
    }, []);
        
    const handleDownload = () => {
        const input = resumeRef.current;
        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210; // A4 width in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
            pdf.save("Afsar_Hussain_Resume.pdf");
        });
    };

  return (
    <>
        <div>
            <div className='container mx-auto'>
                <div className="mt-20 md:mt-40">
                    <div className="text-center" data-aos="fade-up">
                        <h1 className="text-2xl md:text-4xl font-semibold underline underline-offset-8 md:underline-offset-[2rem] decoration-[#34b7a7] p-6 md:p-[3rem]">
                        Resume
                        </h1>
                    </div>
                </div>

                <div className="resumeDownload bg-white shadow-lg p-10 rounded-lg" ref={resumeRef}>
                    <header className="container-fluid border-b-2 border-[#34b7a7] pb-4" data-aos="fade-up">
                        <h1 className="text-4xl">Afsar Hussain</h1>
                        <p>Software Engineer</p>
                        <p className="mt-4">D/819 GROUND FLOOR, JAITPUR PART-II, BADARPUR, DELHI - 110044</p>
                        <p>+91-9355217186 | Gmail: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=afsaarhussain149@gmail.com" target="_blank" rel="noopener noreferrer">afsaarhussain149@gmail.com</a></p>
                        <p>GitHub: <a href="https://github.com/afsaarhussain149" target="_blank">afsaarhussain149</a></p>
                    </header>

                    <div>
                        <div className="mt-4" data-aos="fade-up">
                            <h1 className="text-2xl">OBJECTIVE</h1>
                            <div className="relative pl-8 border-l-2 border-teal-500 mt-3">
                                <div className="absolute left-0 -ml-2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                <p className="mt-3"><br></br></p> 
                                <p>BCA graduate with a passion for technology and problem-solving. To grow with the company where I can
                                Effectively contribute my software skills as professional.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4" data-aos="fade-up">
                            <div>
                                <h1 className="text-2xl">EDUCATION</h1>
                                <div className="relative mt-3">
                                    <div className="absolute left-0.1 top-0 h-full w-[0.1rem] bg-teal-500"></div>
                                    <div className="relative pl-8 mb-6">
                                        <div className="absolute left-[-7px] w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                        <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">BACHELOR OF COMPUTER APPLICATION</h1>
                                        <h1 className="mt-1 text-[16px] font-semibold">(2020-2023)</h1>
                                        <p className="mt-2 text-[#696969]">Lingayas Vidyapeeth University, Faridabad (Haryana)</p>
                                        <p className="mt-2 text-[#696969]">
                                        I scored CGPA of 8.0 and I was always 100% active, with an intermediate coding level during university.
                                        </p>
                                    </div>
                                        
                                    <div className="relative pl-8 mb-6">
                                        <div className="absolute left-[-7px] w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                        <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">SENIOR SECONDARY EDUCATION-12th</h1>
                                        <h1 className="mt-1 text-[16px] font-semibold">(2019-2020)</h1>
                                        <p className="mt-2 text-[#696969]">Govt. Boys Sr. Sec. School No.2, Molarband (Delhi)</p>
                                        <p className="mt-2 text-[#696969]">I scored CGPA of 7.0 in 12th (Arts) from the CBSE Board.</p>
                                    </div>

                                    <div className="relative pl-8">
                                        <div className="absolute left-[-7px] w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                        <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">SECONDARY EDUCATION-10th</h1>
                                        <h1 className="mt-1 text-[16px] font-semibold">(2017-2018)</h1>
                                        <p className="mt-2 text-[#696969]">G.B.S.S.S, New Jafrabad (Delhi)</p>
                                        <p className="mt-2 text-[#696969]">I scored CGPA of 5.5 in 10th from CBSE board and participated in every activity.</p>
                                    </div>
                                </div>

                                <div className="mt-6" data-aos="fade-up">
                                    <h1 className="text-2xl">SKILLS</h1>
                                    <div className="relative pl-8 border-l-2 border-teal-500 mt-3">
                                    <div className="absolute left-0 -ml-2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                        <p><br></br></p>
                                        <div className="mt-2 text-[#696969]">
                                            <div>Basics Computer knowledge</div>
                                            <div><strong>Programming:</strong> C#</div>
                                            <div><strong>Web Development:</strong>HTML, JavaScript and ReactJS</div>
                                            <div><strong>Tools: </strong>MS Word, MS PowerPoint and VS Code</div>
                                            <div><strong>Framework: </strong>.NET core, Bootstrap and TailwindCss</div>
                                            <div><strong>Database Language: </strong>PostgreSQL</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6" data-aos="fade-up">
                                    <h1 className="text-2xl">PERSONAL DETAILS</h1>
                                    <div className="relative pl-8 border-l-2 border-teal-500 mt-3">
                                    <div className="absolute left-0 -ml-2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                        <p><br></br></p>
                                        <div className="mt-2 text-[#696969]">
                                            <div><strong>Date of Birth: </strong>05/04/2002</div>
                                            <div><strong>Language: </strong>Hindi and English</div>
                                            <div><strong>Hobbies: </strong>Reading, Writing, Travel and Gaming</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-aos="fade-up">
                                <h1 className="text-2xl">PROJECTS</h1>
                                <div className="relative mt-3">
                                    <div className="absolute left-0.1 top-0 h-full w-[0.1rem] bg-teal-500"></div>
                                    <div className="relative pl-8 mb-6">
                                        <div className="absolute left-[-7px] w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                        <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">Navigation System</h1>  
                                        <h1 className="mt-1 text-[16px] font-semibold">(Feb-2023 to May-2023)</h1>
                                        <ul className="text-teal-500 mt-3 list-disc ms-5">
                                            <li className="mt-2"><p className="text-[#696969]">Developed a user-friendly navigation system.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">I developed a major project in my 6th semester</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Implemented secure backend using .NET Core and PostgreSQL.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Built responsive frontend with React.js for interactive UI.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Utilized C#, .NET Core Framework, PostgreSQL and Reactjs for development.</p></li>
                                        </ul>
                                    </div>

                                    <div className="relative pl-8 mb-6"> 
                                        <div className="absolute left-[-7px] w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>  
                                        <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">Imanage</h1>  
                                        <h1 className="mt-1 text-[16px] font-semibold">(Sep-2024 to Mar-2025)</h1>
                                        <ul className="text-teal-500 mt-3 list-disc ms-5">
                                            <li className="mt-2"><p className="text-[#696969]">Developed an Employee Friend Attendance Portal for Logicsoft International Pvt. Ltd</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Manages complete employee records, including:</p>
                                                <ul className="text-teal-500 mt-2 list-disc ms-5">
                                                    <li className="mt-2"><p className="text-[#696969]">Attendance marking</p></li>
                                                    <li className="mt-2"><p className="text-[#696969]">Leave management</p></li>
                                                    <li className="mt-2"><p className="text-[#696969]">Office work reports</p></li>
                                                    <li className="mt-2 mb-3"><p className="text-[#696969]">Salary slip generation</p></li>
                                                </ul>
                                            </li>
                                            <li className="mt-2"><p className="text-[#696969]">Features Admin and User dashboards with role-based access</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Fully dynamic and API-integrated system.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Tech stack: C#, .NET Core Framework, React.js, Bootstrap, PostgreSQL.</p></li>
                                        </ul>
                                    </div>

                                    <div className="relative pl-8 mb-6"> 
                                        <div className="absolute left-[-7px] w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>  
                                        <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">Portfolio</h1>  
                                        <h1 className="mt-1 text-[16px] font-semibold">(Mar-2025 to Mar-2025)</h1>
                                        <ul className="text-teal-500 mt-3 list-disc ms-5">
                                            <li className="mt-2"><p className="text-[#696969]">Developed a complete portfolio website in just 7 days.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Fully responsive design with multiple routes and a navigation bar.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Built using React.js, Tailwind CSS, and Bootstrap for modern UI.</p></li>
                                            <li className="mt-2"><p className="text-[#696969]">Utilized Vite for faster development and improved performance.</p></li>
                                        </ul>
                                    </div> 
                                </div>
                            </div>
                        </div>

                        <div className="mb-[150px]" data-aos="fade-up">
                            <h1 className="text-2xl">EXPERIENCE</h1>
                            <div className="relative pl-8 border-l-2 border-teal-500 mt-3">
                                <div className="absolute left-0 -ml-2 w-4 h-4 bg-white border-2 border-teal-500 rounded-full"></div>
                                <h1 className="mt-3 text-[18px] font-semibold text-[#696969]">Logicsoft International Pvt. Ltd</h1> 
                                <h1 className="mt-1 text-[16px] font-semibold">Trainee</h1>
                                <p className="mt-2 text-[#696969]">Current Position: Trainee at Logicsoft International Pvt. Ltd. (Joined on 9th July 2024 to Present And Experience: More than 6 months)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-10 mt-4">
                    <button  onClick={handleDownload} className="hidden lg:block text-white font-semibold tracking-widest bg-[#34b7a7] mt-6 sm:mt-9 px-6 sm:px-9 py-2 rounded-full hover:scale-105 transition-transform duration-300">
                    Resume Download
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Resume