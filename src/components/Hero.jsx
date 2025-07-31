import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col">
      {/* Main Content Area */}
      <div className="flex flex-col md:flex-row flex-grow h-[calc(100vh-8rem)]">
        {/* Violet Section */}
        <div className="w-full md:w-[70%] h-[60%] md:h-full bg-[#4831d4] text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-8xl font-extrabold text-[#9eef47] mb-6">
            Full Stack Developer.
          </h1>
          <p className="text-lg mb-6 font-bold">
            I specialize in building clean, scalable full stack applications using Java, Spring Boot & React.js.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-[#9eef47] font-bold mb-8">
            <div>
              Strong backend skills in Java,<br />Hibernate, and REST APIs.
            </div>
            <div>
              Frontend experience with React,<br />Tailwind, and responsive UI design.
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/DEVANSHUMARKAM"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:bg-[#9eef47] text-white hover:text-[#1b1b1b] p-3 rounded-full bg-[#3f2da8] shadow-lg"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              href="https://linkedin.com/in/devanshumarkam"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:bg-[#9eef47] text-white hover:text-[#1b1b1b] p-3 rounded-full bg-[#3f2da8] shadow-lg"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="https://x.com/markam54352"
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:bg-[#9eef47] text-white hover:text-[#1b1b1b] p-3 rounded-full bg-[#3f2da8] shadow-lg"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.instagram.com/dev._markam?utm_source=qr&igsh=MXRiMXEzZGN1MmlnZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110 hover:bg-[#9eef47] text-white hover:text-[#1b1b1b] p-3 rounded-full bg-[#3f2da8] shadow-lg"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Lime Green Section with Image */}
        <div className="w-full md:w-[30%] h-[40%] md:h-full bg-[#9eeb47] relative flex items-center justify-center md:justify-start">
          <div className="md:absolute md:-left-32 lg:-left-40">
            {/* <img
              src="/images/devanshu-photo.png"
              alt="Devanshu Markam"
              className="w-72 h-auto object-cover rounded shadow-lg border-4 border-white"
            /> */}
          </div>
        </div>
      </div>

      {/* Bottom White Space */}
      <div className="w-full h-32 bg-white" />
    </section>
  );
};

export default Hero;
