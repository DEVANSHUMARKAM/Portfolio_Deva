import React from "react";

const aboutData = [
  {
    title: "🎓 Education",
    content:
      "I am a graduate in  Bachelor of Technology (B.Tech) in Information Technology from Yeshwantrao Chavan College of Engineering, Nagpur. My academic journey has built a strong foundation in development, system design, and problem solving.",
  },
  {
    title: "🧠 Skills",
    content:
      "Skilled in Java, Spring Boot, React.js, Tailwind CSS, Hibernate, MySQL, MongoDB, Git & REST APIs. I enjoy building clean, scalable full-stack solutions and working across frontend and backend ecosystems.",
  },
  {
    title: "🚀 Projects",
    content:
      "I've created real-world projects like a Solar Installation Website (React + Spring Boot), a multi-threaded Chat App in Java, Airline Management System, and Car Rental GUI App. Each one deepened my design and coding skills.",
  },
  {
    title: "🛠️ Current Project",
    content:
      "Right now, I’m developing a Google Form–like application using ASP.NET, React, and Tailwind CSS, with dynamic form generation, backend integration, and real-time data handling features.",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-white px-6 md:px-16 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#4831d4] mb-20 text-center">
        Who Am I ??
      </h2>

      <div className="flex flex-col space-y-24">
        {aboutData.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Left or Right heading */}
            <div
              className={`${
                index % 2 === 1 ? "md:order-2" : ""
              } px-4 md:px-8`}
            >
              {/* <h3 className="text-3xl md:text-4xl font-bold text-[#4831d4] mb-4"> */}
                {/* {item.title} */}
              {/* </h3> */}
            </div>

            {/* Description */}
            <div
              className={`text-[#2d2d2d] text-lg font-medium leading-relaxed px-4 md:px-6 ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
