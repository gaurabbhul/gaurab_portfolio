"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of <span className="text-purple">my recent projects</span>
      </h1>

      {/* Featured Project */}
      {featuredProject && (
        <div className="mt-16 mb-20 max-w-6xl mx-auto px-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/30 via-purple/20 to-blue/30 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-purple/50 rounded-3xl p-8 lg:p-12 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {featuredProject.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {featuredProject.des}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-sm text-purple font-semibold mb-3">
                      TECH STACK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="w-10 h-10 border border-purple/30 rounded-full bg-black/50 flex items-center justify-center"
                        >
                          <img src={icon} alt="tech" className="w-6 h-6" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  {featuredProject.features && (
                    <div className="mb-8">
                      <p className="text-sm text-purple font-semibold mb-3">
                        KEY FEATURES
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {featuredProject.features.map((feature) => (
                          <div key={feature} className="text-sm text-gray-300">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-purple/20 border border-purple/50 rounded-lg text-purple hover:bg-purple/30 transition-all duration-300"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                    <a
                      href={featuredProject.demoLink ?? featuredProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue/20 border border-blue/50 rounded-lg text-blue-300 hover:bg-blue/30 transition-all duration-300"
                    >
                      Demo <FaExternalLinkAlt size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple/30 to-blue/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-black/50 border border-purple/30 rounded-2xl overflow-hidden aspect-video flex items-center justify-center">
                    <img
                      src={featuredProject.img}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23333' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='18'%3EProject Screenshot%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Projects */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {otherProjects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-black/50"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23333' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23999' font-size='18'%3EProject Screenshot%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
