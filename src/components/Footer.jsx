import React from "react";

const Footer = ({ scrollRef }) => {
  const scrollToTop = () => {
    scrollRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#4831d4] text-white pt-16 pb-10 px-6 md:px-16">
      {/* Greeting Image */}
      <div className="w-full">
        <img
          src="/images/footer.png" // <-- Make sure this image exists in public/images
          alt="Website End Greeting"
          className="w-full object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center font-bold md:items-start gap-8 mt-16">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#9eef47]">Quick Links</h3>
          <ul className="space-y-2">
            {["about", "projects", "education", "skills", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} className="hover:text-[#9eef47] transition">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sarcastic Slogan */}
        <div className="text-center md:text-left max-w-md">
          <p className="text-lg italic text-gray-300">
            "I write frontend code like a pastry chef and backend like a butcher —
            that’s what you call a real <i>Full Stack</i>."
          </p>
          <p className="mt-4 text-sm text-gray-400">— Devanshu Markam</p>
        </div>

        {/* Back to Top */}
        <div>
          <button
            onClick={scrollToTop}
            className="bg-[#9eef47] text-[#1b1b1b] px-6 py-2 rounded font-bold shadow hover:bg-lime-400 transition"
          >
            ⬆ Back to Top
          </button>
        </div>
      </div>

      {/* Divider + Copyright */}
      <hr className="my-8 border-gray-500" />
      <div className="text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Devanshu Markam. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
