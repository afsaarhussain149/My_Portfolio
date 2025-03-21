import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projectData } from "../Data/ProjectData";
import { HiOutlineLink, HiMagnifyingGlassPlus } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectList, setProjectlist] = useState(projectData);
  const [selectedImage, setSelectedImage] = useState(null); // Modal ke liye state

  const filterByCategory = (cat) => {
    if (cat === "All") {
      setProjectlist(projectData);
    } else {
      setProjectlist(projectData.filter((data) => data.category === cat));
    }
    setActiveFilter(cat);
  };

  const filters = ["All", "App", "Web"];

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="mt-20 sm:mt-40">
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-2xl md:text-4xl font-semibold underline underline-offset-8 md:underline-offset-[2rem] decoration-[#34b7a7] p-6 md:p-[3rem]">
              Projects
            </h1>
            <p className="p-6 sm:p-[3rem]">
              I have some projects that are API-integrated, database-connected, responsive, and designed for long-term use. The details of these projects are given below.
            </p>
          </div>
        </div>

        <nav className="flex list-none gap-3 justify-center my-4" data-aos="fade-up">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`p-2 px-4 rounded-full cursor-pointer transition-all duration-300 
                ${
                  activeFilter === filter
                    ? "bg-[#34b7a7] text-white"
                    : "hover:bg-[#34b7a7] hover:text-white"
                }`}
              onClick={() => filterByCategory(filter)}
            >
              {filter}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center text-center gap-5 mb-5">
          {projectList.map((data, id) => (
            <div key={id} className="relative group p-4 bg-white shadow-lg rounded-2xl w-full sm:w-[400px] md:w-[500px]" data-aos="fade-up">

              <div className="relative w-full h-[300px] overflow-hidden rounded-t-xl">
                <img src={data.path} alt={data.title} className="w-full rounded-t-xl" />
              </div>

              {/* Overlay (Hidden by Default, Shows on Hover) */}
              <div className="absolute bottom-0 left-0 w-full bg-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <h5 className="font-semibold">{data.id} {data.title}</h5>
                <p className="text-sm text-gray-600">{data.develop_date}</p>

                <div className="flex justify-end space-x-2 mt-2">
                
                  <button className="p-2 text-2xl rounded-full hover:bg-gray-200 hover:text-[#34b7a7]"
                    onClick={() => setSelectedImage(data.path)}
                  >
                    <HiMagnifyingGlassPlus />
                  </button>

                  <button className="p-2 text-2xl rounded-full hover:bg-gray-200 hover:text-[#34b7a7]">
                    <Link to={`/projectsDetails/${data.id}`} className="hover:text-[#34b7a7]">
                      <HiOutlineLink />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative">
              <img src={selectedImage} alt="Zoomed" className="max-w-[90vw] max-h-[90vh] rounded-lg" />
              <button 
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Projects;
