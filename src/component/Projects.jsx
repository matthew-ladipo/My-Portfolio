import React from "react";
import one from "../image/e-commerce.jpg";
import two from "../image/desktop-preview.jpg";
import three from "../image/desktop-design-step-1.jpg";
import four from '../image/dropdown.jpg'
import { Link } from "react-router-dom";
// import {projects} from '../db'

const Projects = () => {
  const projects = [
    {
      id: 0,
      image: one,
      name: "Ecommerce Product Page",
      description:
        "An interactive e-commerce platform offering a seamless shopping experience, featuring product galleries, detailed descriptions, and secure checkout. Perfect for browsing and purchasing a variety of goods with ease",
    },
    {
      id: 1,
      image: two,
      name: "Crowdfunding",
      description:
      "A dynamic crowdfunding platform designed to help creators and entrepreneurs raise funds for their projects. Supporters can browse campaigns, contribute easily, and track project milestones in real-time.m!",
    },
    {
      id: 2,
      image: three,
      name: "Multi-step Form",
      description:
        "A user-friendly multi-step form website that guides users through a seamless, step-by-step process to complete complex forms. Each stage ensures clarity and ease, improving form submission and user experience.",
    },
    {
        id: 2,
        image: four,
        name: "Menu Drop-Down",
        description:
          "A sleek menu drop-down website offering intuitive navigation with organized, collapsible menus. Perfect for enhancing user experience, allowing quick access to multiple sections with a clean and minimal design.",
      },
  ];

  return (
    <div id="projects">
      <div className="text-center py-10">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">PROJECTS</h2>
        <span className="bg-blue-800 mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
        <p className="text-gray-500 mb-10 px-[150px] text-[22px] leading-relaxed">
          Here you will find some of the personal and client projects that I
          created, with each project containing its own case study.
        </p>
      </div>
      {projects.map((project, index) => (
        <section
          key={index}
          className="container flex py-10 mx-auto px-20 flex-col md:flex-row items-start justify-between gap-20"
        >
          <img src={project.image} alt={project.name} className="h-[400px]" />
          <article className="mb-6 py-10 pt-10 text-gray-700">
            <h3 className="text-[30px] font-bold mb-5 text-gray-700">
              {project.name}
            </h3>
            <p className="pr-10 text-[20px] font-[300]">
              {project.description}
            </p>
            <Link to={`/productdetails/${project.id}`} className="">
              <button className="bg-gradient-to-r my-10  from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                Explore 
              </button>
            </Link>
          </article>
        </section>
      ))}
    </div>
  );
};

export default Projects;
