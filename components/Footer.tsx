import {
  FaLocationArrow,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s Build Something{" "}
          <span className="text-purple">Amazing</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center max-w-2xl">
          Have a project idea, a job opportunity, or want to collaborate?
          I&apos;d love to hear about it. Let&apos;s connect and create
          something great together.
        </p>
        <a href="mailto:gaurabbhul@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div>
          <p className="md:text-base text-sm md:font-normal font-light">
            <span className="text-purple font-semibold">Gaurab Bhul</span> ©
            2024
          </p>
          <p className="text-xs md:text-sm text-white-200 mt-1">
            MERN Stack Developer | Building Modern Web Applications
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition-colors"
            title="GitHub"
          >
            <FaGithub size={16} className="text-white-200" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition-colors"
            title="LinkedIn"
          >
            <FaLinkedin size={16} className="text-white-200" />
          </a>
          <a
            href="mailto:gaurabbhul@gmail.com"
            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:border-purple transition-colors"
            title="Email"
          >
            <FaEnvelope size={16} className="text-white-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
