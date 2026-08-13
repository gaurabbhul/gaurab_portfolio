import { FaLocationArrow } from "react-icons/fa6";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJs,
} from "react-icons/fa";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-8 pt-8" id="home">
      {/**
       *  UI: Spotlights
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-0 z-10">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-6 md:gap-4 items-center px-4">
          {/* Left: Introduction Content */}
          <div className="flex flex-col items-start justify-center">
            <p className="uppercase tracking-widest text-xs text-blue-100 mb-3">
              Welcome to my portfolio
            </p>

            <div className="mb-4">
              <TextGenerateEffect
                words="Hi, I'm Gaurab Bhul"
                className="text-left text-[36px] md:text-5xl lg:text-6xl font-bold mb-2"
              />
              <h2 className="text-2xl md:text-4xl font-bold text-purple mb-3">
                MERN Stack Developer
              </h2>
            </div>

            <p className="text-left text-sm md:text-lg text-white-200 mb-6 max-w-lg">
              Building modern, scalable and user-focused web applications with
              React, Next.js, Node.js, Express and MongoDB. Frontend-focused
              full-stack developer crafting complete digital experiences.
            </p>

            {/* Status Badge */}
            <div className="mb-6 inline-block px-4 py-2 rounded-full border border-purple/30 bg-purple/10">
              <p className="text-sm text-purple">
                ✨ Open to Development Opportunities
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mb-6 flex w-full max-w-[31rem] flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#projects" className="w-full sm:w-60">
                <MagicButton
                  title="View My Projects"
                  icon={<FaLocationArrow />}
                  position="right"
                  containerClasses="w-full"
                />
              </a>
              <a href="mailto:gaurabbhul@gmail.com" className="w-full sm:w-60">
                <button className="h-12 w-full rounded-xl border border-purple/50 bg-purple/[0.04] px-5 text-sm font-semibold text-purple transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple/15 hover:shadow-[0_8px_22px_rgba(203,172,249,0.16)]">
                  Let&apos;s Work Together
                </button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 items-center">
              <p className="text-white-200 text-sm">Connect with me:</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center text-purple hover:bg-purple/30 transition-all duration-300"
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center text-purple hover:bg-purple/30 transition-all duration-300"
                  title="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="mailto:gaurabbhul@gmail.com"
                  className="w-10 h-10 rounded-lg bg-purple/20 border border-purple/30 flex items-center justify-center text-purple hover:bg-purple/30 transition-all duration-300"
                  title="Email"
                >
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Developer profile orbit */}
          <div className="flex items-center justify-center">
            <div className="relative h-[22rem] w-[22rem] scale-[.72] sm:scale-90 md:h-[29rem] md:w-[29rem] md:scale-100">
              <div className="absolute inset-[9%] rounded-full border border-dashed border-purple/20" />
              <div className="absolute inset-[17%] rounded-full border border-blue-100/20" />
              <motion.div
                animate={{ y: [0, -7, 0], scale: [1, 1.012, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-[19%] rounded-full bg-gradient-to-br from-purple via-[#6c63ff] to-blue-100 p-[3px] shadow-[0_0_34px_rgba(125,86,255,0.75)]"
              >
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-black-200">
                <img
                  src="/images/profile.jpg"
                  alt="Gaurab Bhul"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient if image doesn't exist
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple/20 via-transparent to-blue/20" />
                </div>
              </motion.div>

              <TechBadge
                className="left-[1%] top-[10%]"
                icon={<FaReact className="text-cyan-300" />}
                name="React"
                delay={0}
              />
              <TechBadge
                className="right-[1%] top-[13%]"
                icon={<span className="text-xs font-bold text-white">NEXT</span>}
                name="Next.js"
                delay={0.7}
              />
              <TechBadge
                className="-left-[1%] top-[40%]"
                icon={<FaNodeJs className="text-green-400" />}
                name="Node.js"
                delay={1.2}
              />
              <TechBadge
                className="-right-[2%] top-[43%]"
                icon={<span className="text-sm font-medium text-white-100">ex</span>}
                name="Express.js"
                delay={1.8}
              />
              <TechBadge
                className="left-[2%] bottom-[12%]"
                icon={<FaDatabase className="text-green-400" />}
                name="MongoDB"
                delay={2.4}
              />
              <TechBadge
                className="right-[2%] bottom-[10%]"
                icon={<FaJs className="text-yellow-300" />}
                name="JavaScript"
                delay={3}
              />

              <span className="absolute left-[20%] top-[9%] h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_10px_3px_rgba(141,111,255,0.8)]" />
              <span className="absolute right-[18%] top-[7%] h-1.5 w-1.5 rounded-full bg-blue-100 shadow-[0_0_10px_3px_rgba(120,168,255,0.8)]" />
              <span className="absolute bottom-[7%] left-[50%] h-1.5 w-1.5 rounded-full bg-purple shadow-[0_0_10px_3px_rgba(141,111,255,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechBadge = ({
  className,
  icon,
  name,
  delay,
}: {
  className: string;
  icon: ReactNode;
  name: string;
  delay: number;
}) => (
  <motion.div
    animate={{ x: [0, 5, 0, -4, 0], y: [0, -7, -10, -4, 0] }}
    transition={{ duration: 5.5, delay, repeat: Infinity, ease: "easeInOut" }}
    className={`absolute z-10 flex h-[4.1rem] w-[4.1rem] flex-col items-center justify-center rounded-full border border-white/[0.06] bg-[#101426]/90 shadow-lg backdrop-blur-sm ${className}`}
  >
    <span className="mb-1 text-xl">{icon}</span>
    <span className="text-[8px] font-medium text-white-200">{name}</span>
  </motion.div>
);

export default Hero;
