import React from "react";
import {webprojects} from "../data";
import ProgressiveImage from "react-progressive-image";

export default function WebProjects() {
    return (
        <section id="webprojects" className="resblue body-font md:border-none border-b-4 border-red-300">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <img className="mx-auto inline-block w-10 mb-4" src="./whiteflower.PNG"
                         alt="Just a pretty divider flower!"/>
                    <h1 className="text-4xl md:text-3xl font-medium title-font-blue mb-4 resyellowtext">
                        Web Projects
                    </h1>
                    <p className="mx-auto leading-relaxed text-lg text-white">
                        Some for clients, some for fun!
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {webprojects.map((project) => {
                            const imgClass = project.fit.concat(" absolute inset-0 w-full h-full min-h-full object-cover imageborder bordershape")
                            if (project.link !== "") {
                                return (
                                    <div
                                        key={project.image}
                                        target="blank"
                                        className="w-full md:w-1/2 2xl:w-1/3 h-100 p-8 ">
                                        <h1 className="text-lg font-bold text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <div className="flex relative min-h-full resbluetext">
                                            <a href={project.link} target="blank">
                                                <img
                                                    alt={project.title}
                                                    className={imgClass}
                                                    src={project.image}
                                                />


                                                <div
                                                    className="px-8 py-10 relative z-9 w-full min-h-full notes bordershape bg-gray-50 opacity-0 hover:opacity-100">
                                                    <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-5">
                                                        {project.subtitle}
                                                    </h2>

                                                    <p className="leading-relaxed text-grey-900">{project.description}</p>

                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        key={project.image}
                                        className="w-full md:w-1/2 2xl:w-1/3 h-100 p-8">
                                        <h1 className="text-lg font-bold text-white mb-3">
                                            {project.title}
                                        </h1>
                                        <div className="flex relative min-h-full resbluetext">

                                            <img
                                                alt={project.title}
                                                className={imgClass}
                                                src={project.image}
                                            />
                                            {/* <ProgressiveImage src={project.largeimage} placeholder={project.image}>
                      {src => <img src={src} alt={project.title} class="absolute inset-0 w-full h-full min-h-full object-cover object-center"/>}
                    </ProgressiveImage> */}

                                            <div
                                                className="px-8 py-10 relative z-9 w-full min-h-full border-4 notes bordershape bg-gray-50 opacity-0 hover:opacity-100">
                                                <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-5">
                                                    {project.subtitle}
                                                </h2>

                                                <p className="leading-relaxed text-grey-900">{project.description}</p>

                                            </div>
                                        </div>
                                    </div>
                                )


                            }
                        }
                    )}
                    <a
                        key=""
                        className="w-full md:w-1/2 2xl:w-1/3 h-100 p-8 ">
                        <h1 className="title-font text-lg font-bold text-white mb-3">
                            Personal Site
                        </h1>
                        <div className="flex relative min-h-full resbluetext bordershape" id="metasite">
                            <div
                                className="absolute inset-0 w-full h-full min-h-full object-cover object-center imageborder bordershape"
                            />
                            <div
                                className="px-8 py-10 relative z-9 w-full min-h-full border-4 notes bordershape bg-gray-50 opacity-0 hover:opacity-100">
                                <h2 className="tracking-widest text-sm title-font font-bold text-red-300 mb-5">
                                    React, Tailwind CSS
                                </h2>
                                <p className="leading-relaxed text-grey-900">A simple single page personal and portfolio
                                    site. It may look familiar to you! I wanted to make a very responsive site
                                    that reflected my personality more than the many very techy-looking portfolio sites.
                                    My goal was warmth, flexibility, and a little bit of cute.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}