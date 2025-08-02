import React from "react";

const educationData = [
  {
    title: "Kendriya Vidyalaya Sangathan",
    subtitle: "10th Grade",
    score: "74.45",
  },
  {
    title: "Kendriya Vidyalaya Sangathan",
    subtitle: "12th Grade",
    score: "80.14",
  },
  {
    title: "Yeshwantrao Chavan College of Engineering, Nagpur",
    subtitle: "B.Tech in Information Technology",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-white px-6 md:px-16 py-24">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#4831d4] mb-16 text-center">
        My Education Timeline
      </h2>

      <div className="relative border-l-4 border-[#9eef47] pl-6 ml-2 space-y-12">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="relative group bg-white p-6 rounded-md shadow-md transition duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:border-l-8 hover:border-[#9eef47]"
          >
            <span className="absolute -left-3 top-6 w-6 h-6 bg-[#9eef47] rounded-full border-2 border-white shadow-md group-hover:scale-110 transition" />
            <h3 className="text-xl md:text-2xl font-bold text-[#4831d4] mb-1">
              {item.title}
            </h3>
            <p className="text-md text-gray-700 mb-1">{item.subtitle}</p>
            <p className="text-sm text-gray-500 font-medium">{item.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
