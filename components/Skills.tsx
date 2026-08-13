"use client";

import { skills } from "@/data";

const Skills = () => {
  return (
    <section id="skills" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">Technical Skills</span>
      </h1>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* Frontend Development */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">
              🎨 Frontend Development
            </h3>
            <div className="space-y-3">
              {skills.frontend.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-gray-300 hover:text-purple transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-purple" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">
              ⚙️ Backend Development
            </h3>
            <div className="space-y-3">
              {skills.backend.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-gray-300 hover:text-purple transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-purple" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-6">
              🛠️ Tools & Technologies
            </h3>
            <div className="space-y-3">
              {skills.tools.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-gray-300 hover:text-purple transition-colors duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-purple" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
