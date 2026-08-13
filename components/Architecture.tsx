"use client";

import { motion } from "framer-motion";

const Architecture = () => {
  const layers = [
    {
      name: "Frontend",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: "🖥️",
    },
    {
      name: "REST API",
      tech: ["Express.js", "Node.js", "Authentication", "Authorization"],
      icon: "🔌",
    },
    {
      name: "Backend",
      tech: ["Node.js", "Express.js", "CRUD Operations"],
      icon: "⚙️",
    },
    {
      name: "Database",
      tech: ["MongoDB", "Mongoose", "Data Models"],
      icon: "🗄️",
    },
  ];

  const features = [
    "Cloudinary Image Uploads",
    "Email/SMTP Integration",
    "Payment Processing",
    "User Authentication",
    "Admin Dashboard",
    "Responsive Design",
  ];

  return (
    <section className="py-20 w-full">
      <h1 className="heading">
        <span className="text-purple">MERN Stack</span> Architecture
      </h1>

      <div className="mt-16 max-w-6xl mx-auto px-4">
        {/* Architecture Stack */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Layers */}
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple/20 to-blue/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 p-6 rounded-lg backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{layer.icon}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {layer.name}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {layer.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple/20 border border-purple/30 rounded-full text-sm text-purple"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                {index < layers.length - 1 && (
                  <div className="flex justify-center my-2">
                    <div className="text-purple/50">↓</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Features */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/30 to-blue/30 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-purple/30 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="text-purple">✨</span> Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-gray-200 hover:text-purple transition-colors duration-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-8 pt-6 border-t border-gray-700/30">
                <p className="text-sm text-gray-400">
                  Complete full-stack solutions from database to user interface,
                  with modern best practices and scalable architecture.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Badge */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          <div className="px-4 py-2 rounded-full border border-purple/30 bg-purple/10 text-sm text-purple font-medium">
            React/Next.js Frontend
          </div>
          <div className="px-4 py-2 rounded-full border border-blue/30 bg-blue/10 text-sm text-blue font-medium">
            Node.js/Express Backend
          </div>
          <div className="px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-sm text-green-400 font-medium">
            MongoDB Database
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
