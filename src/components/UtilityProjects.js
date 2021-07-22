
import React from "react";
import { utilityprojects } from "../data";

export default function UtilityProjects() {
  return (
    <section id="utilityprojects" className="resblue body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <img className="mx-auto inline-block w-10 mb-4" src="./whiteflower.PNG" alt="Just a pretty divider flower!"/> 
          <h1 className="sm:text-4xl text-3xl font-medium title-font-only resyellowtext mb-4 ">
            Utility Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Made (almost) entirely for my own use. They ain't pretty, but they're portable and dependable.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {utilityprojects.map((project) => {if(project.title !== "Gimmetune Bot" && project.title !== "Vimkey"){ return (
                        <a
              
              key={project.image}
              className="sm:w-1/2 w-100 p-8 h-100 min-h-full hoverers">
                <h1 className="text-lg font-bold text-white mb-3">
                    {project.title}
                  </h1>
              <div className="flex relative min-h-full resbluetext">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full min-h-full border-4 border-gray-800 bg-gray-50 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-1">
                    {project.subtitle}
                  </h2>
                  
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          )}
          else if(project.title === "Vimkey" || project.title === "Rosterizer"){
            return (
              <a href = {project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-8 h-100 min-h-full hoverers">
                <h1 className="text-lg font-bold text-white mb-3">
                    {project.title}
                  </h1>
              <div className="flex relative min-h-full resbluetext">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full min-h-full border-4 border-gray-800 bg-gray-50 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-1">
                    {project.subtitle}
                  </h2>
                  
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          )



          }
          else {
            return (
              <a 
              key={project.image}
              className="sm:w-1/2 w-100 p-8 h-100 min-h-full hoverers">
                <h1 className="text-lg font-bold text-white mb-3">
                    {project.title}
                  </h1>
              <div className="flex relative min-h-full resbluetext">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full min-h-full border-4 border-gray-800 bg-gray-50 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-1">
                    {project.subtitle}
                  </h2>
                  
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          )



          }
          })}
        </div>
      </div>
    </section>
  );
}