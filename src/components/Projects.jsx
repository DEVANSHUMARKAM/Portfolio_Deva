import React from "react";

const projects = [
  {
    title: "Solar Square Website",
    description:
      "A full-stack solar panel booking platform with real-time booking, location selection, and integrated backend built with React.js, Spring Boot, and MySQL.",
    live: "https://solar-square-live-link.com",
    github: "https://github.com/DEVANSHUMARKAM/Solar-Square",
  },
  {
    title: "Chatting Application",
    description:
      "A real-time, multi-threaded chat system using Java Sockets and Swing UI. Supports multiple client connections with server message handling.",
    live: "#",
    github: "https://github.com/DEVANSHUMARKAM/Chatting_App",
  },
  {
    title: "Airline Management System",
    description:
      "A Java-based desktop system to manage airline operations including flights, bookings, and tickets. Developed using AWT/Swing and MySQL.",
    live: "#",
    github: "https://github.com/DEVANSHUMARKAM/AirLine_Management_System",
  },
  {
    title: "Car Rental App",
    description:
      "A GUI-based desktop app to manage car inventory, booking system, and customer data using Java Swing, AWT, and MySQL database.",
    live: "#",
    github: "https://github.com/DEVANSHUMARKAM/Car_Rental_App",
  },
  {
    title: "Money Manager Web App",
    description:
      "A full-stack expense tracking application using Spring Boot, Hibernate, MySQL, and JWT for authentication. Includes user-based dashboard and REST API.",
    live: "#",
    github: "https://github.com/DEVANSHUMARKAM/Money-Manager",
  },
  {
    title: "Deva Google Form",
    description:
      "A Google Form–like application built with ASP.NET, React, and Tailwind CSS that supports dynamic forms and real-time response capture.",
    live: "#",
    github: "https://github.com/DEVANSHUMARKAM/Google-Form-Clone",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#4831d4] text-white px-4 sm:px-6 md:px-16 py-24"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
        What I've Done!!!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#3f2da8] hover:bg-[#9eef47] hover:text-[#1b1b1b] transition-all duration-300 p-6 sm:p-8 rounded-xl shadow-lg transform hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm sm:text-base mb-4">{project.description}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#4831d4] text-sm font-semibold px-4 py-2 rounded hover:bg-[#f1f1f1] transition text-center"
              >
                Live Now
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#4831d4] text-sm font-semibold px-4 py-2 rounded hover:bg-[#f1f1f1] transition text-center"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
