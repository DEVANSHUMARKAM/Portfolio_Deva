import React from "react";
import "./Skills.css";

const skillsRow1 = [
  { name: "C", icon: "/icons/c.svg" },
  { name: "C++", icon: "/icons/cpp.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "GoLang", icon: "/icons/golang.svg" },
  { name: "Spring Boot", icon: "/icons/springboot.svg" },
  { name: "Hibernate", icon: "/icons/hibernate.svg" },
  { name: "Postman", icon: "/icons/postman.svg" },
];

const skillsRow2 = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Material UI", icon: "/icons/materialui.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Linux", icon: "/icons/linux.svg" },
  { name: "Git", icon: "/icons/git.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
  { name: "AS400", icon: "/icons/ibm.svg" },
];
const skillsTools3 = [
  { name: "VS Code", icon: "/icons/vscode.svg" },
  { name: "IntelliJ IDEA", icon: "/icons/intellij.svg" },
  { name: "Eclipse", icon: "/icons/eclipse.svg" },
  { name: "NetBeans", icon: "/icons/netbeans.svg" },
  { name: "WebStorm", icon: "/icons/webstorm.svg" },
  { name: "AWS", icon: "/icons/aws.svg" },
  { name: "Azure", icon: "/icons/azure.svg" },
  { name: "Render", icon: "/icons/render.svg" },
  { name: "Railway", icon: "/icons/railway.svg" },
  { name: "Netlify", icon: "/icons/netlify.svg" },
  { name: "Vercel", icon: "/icons/vercel.svg" },
];


const Skills = () => {
  return (
    <section id="skills" className="bg-[#4831d4] py-24 text-white overflow-hidden">
      <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-12">
        My Toolbox 🔧
      </h2>

      {/* Carousel Row 1 */}
      <div className="carousel-wrapper">
        <div className="skills-carousel animate-scroll-left">
          {[...skillsRow1, ...skillsRow1].map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3 mx-auto" />
              <span className="text-md font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Row 2 */}
      <div className="carousel-wrapper mt-20">
        <div className="skills-carousel animate-scroll-right">
          {[...skillsRow2, ...skillsRow2].map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3 mx-auto" />
              <span className="text-md font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Carousel Row 3 */}
      <div className="carousel-wrapper mt-20">
        <div className="skills-carousel animate-scroll-left">
          {[...skillsTools3, ...skillsTools3].map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-3 mx-auto" />
              <span className="text-md font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
