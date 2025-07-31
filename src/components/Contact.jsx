import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const isEmailValid = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isFormValid =
    form.name &&
    isEmailValid(form.email) &&
    form.message &&
    form.message.length <= 20;

  const formspreeEndpoint = "https://formspree.io/f/xldllwql"; // ← Replace with your actual Form ID

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-white py-20 px-6 md:px-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#4831d4] mb-10 text-center">
        Get in Touch 📩
      </h2>

      <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl shadow-lg">
        <form action={formspreeEndpoint} method="POST">
          {/* Name */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#4831d4]">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-[#9eef47]"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#4831d4]">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-[#9eef47]"
              placeholder="john@example.com"
              required
            />
            {!isEmailValid(form.email) && form.email && (
              <p className="text-red-500 text-sm mt-1">
                Please enter a valid email address.
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-[#4831d4]">
              Your Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-[#9eef47]"
              placeholder="Type your message..."
              rows="4"
              maxLength={20}
              required
            />
            <p className="text-sm text-gray-600 mt-1">
              {form.message.length}/20 characters
            </p>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-3 font-bold rounded-lg transition-all ${
              isFormValid
                ? "bg-[#4831d4] text-white hover:bg-[#9eef47] hover:text-[#1b1b1b] shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Shoot Message 🚀
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center space-y-2 text-[#4831d4] font-semibold">
          <p>📧 devanshuasm750@gmail.com</p>
          <p>📞 +91 7507182288 / +91 9970533590</p>
          <p>
            📄{" "}
            <a
              href="/DSM (1).pdf"
              download="Devanshu_Markam_Resume.pdf"
              className="text-[#9eef47] hover:underline"
            >
              Download Resume
            </a>
          </p>

          {/* Social Icons (optional) */}
          <div className="flex justify-center space-x-6 mt-4 text-2xl">
            <a href="https://linkedin.com/in/devanshumarkam" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin text-[#4831d4] hover:text-[#9eef47]"></i>
            </a>
            <a href="https://github.com/DEVANSHUMARKAM" target="_blank" rel="noreferrer">
              <i className="fab fa-github text-[#4831d4] hover:text-[#9eef47]"></i>
            </a>
            {/* Add more if needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
