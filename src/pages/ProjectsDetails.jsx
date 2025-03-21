import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectsdetailsData } from "../Data/ProjectsdetailsData";
import SwiperSlider from "../components/SwiperSlide"; 

const ProjectsDetails = () => {
  const { id } = useParams();
  const project = ProjectsdetailsData.find((item) => item.id.toString() === id);
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className="container mx-auto px-4">
      <div className="mt-20 sm:mt-40">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-semibold underline underline-offset-8 md:underline-offset-[2rem] decoration-[#34b7a7] p-6 md:p-[3rem]">
            Project Details
          </h1>
          {project ? (
            <p className="p-6 sm:p-[3rem]">
              <strong>Heading:</strong> {project.heading}
            </p>
          ) : (
            <p className="p-6 sm:p-[3rem] text-red-500">No project found</p>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-20 justify-center">
        <div className="w-full max-w-[600px] sm:max-w-[800px] lg:w-2/3 mx-auto px-4" data-aos="fade-up">
  {project && project.images ? (
    <SwiperSlider images={project.images} />
  ) : (
    <p className="text-red-500 text-center text-sm sm:text-base">No images available</p>
  )}
</div>


          {/* Project Info */}
          <div className="w-full lg:w-1/3" data-aos="fade-up">
            {project ? (
              <div>
                <div className="card shadow border-0 p-4">
                  <h1 className="text-2xl font-semibold">Projects Information</h1>
                  <p className="border-b-2 mt-3"></p>
                  <p className="mt-4 text-[#696969]" data-aos="fade-up"><strong>Category:</strong> {project.category}</p>
                  <p className="mt-2 text-[#696969]" data-aos="fade-up"><strong>Client:</strong> {project.client}</p>
                  <p className="mt-2 text-[#696969]" data-aos="fade-up"><strong>Project Date:</strong> {project.project_date}</p>
                  <p className="mt-2 text-[#696969]" data-aos="fade-up"><strong>Project URL:</strong> <a href={project.project_URL} className="text-blue-500">{project.project_URL}</a></p>
                </div>
                <div className="p-3 text-[#696969] text-sm" data-aos="fade-up">
                  <p>{project.project_para}</p>
                </div>
              </div>
            ) : (
              <p className="text-red-500">No Data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
