import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/AhmedRaza_Resume.pdf"; // Place your PDF file in the public folder
    link.download = "AhmedRaza_Resume.pdf";
    link.click();
  };

  return (
    <section className="min-h-screen text-white px-6 md:px-20 py-16 backdrop-blur-lg bg-white/5 border border-purple-400/20 shadow-lg rounded-2xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
            Ahmed Raza
          </h1>
          <p className="text-gray-300 mt-1">Full Stack Web Developer</p>
        </div>
        <button
          onClick={handleDownload}
          className="mt-6 md:mt-0 flex items-center gap-2 bg-purple-600/40 hover:bg-purple-700/60 text-white px-5 py-2 rounded-xl backdrop-blur-md transition-all duration-300 shadow-lg border border-purple-400/40 hover:shadow-purple-500/50"
        >
          <FaDownload />
          Download PDF
        </button>
      </div>

      {/* Contact Info */}
      <div className="grid md:grid-cols-2 gap-4 mb-10 text-sm text-gray-200">
        <p>
          <span className="text-purple-300 font-semibold">📞 Phone:</span> +92 300 1234567
        </p>
        <p>
          <span className="text-purple-300 font-semibold">📧 Email:</span> ahmed.raza@email.com
        </p>
        <p>
          <span className="text-purple-300 font-semibold">🌐 Website:</span> ahmedraza.dev
        </p>
        <p>
          <span className="text-purple-300 font-semibold">📍 Location:</span> Karachi, Pakistan
        </p>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-purple-300 mb-3">Profile</h2>
        <p className="text-gray-300 leading-relaxed">
          Passionate web developer with expertise in PHP, Laravel, JavaScript, and modern frameworks like React and Vue.js.
          I focus on building efficient, scalable web applications with clean design and smooth user experiences.
        </p>
      </motion.div>

      {/* Experience Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-300 mb-6">Experience</h2>

        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition">
            <h3 className="text-xl font-semibold text-purple-200">
              Full Stack Developer — Freelance
            </h3>
            <p className="text-sm text-gray-400 mb-2">2022 - Present</p>
            <p className="text-gray-200">
              Built responsive and interactive websites using React, Laravel, and TailwindCSS for various clients.
              Integrated APIs and improved backend performance by 30%.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition">
            <h3 className="text-xl font-semibold text-purple-200">PHP Developer — Digital Hub</h3>
            <p className="text-sm text-gray-400 mb-2">2021 - 2022</p>
            <p className="text-gray-200">
              Developed dynamic web systems in Core PHP and MySQL, including admin panels and data management dashboards.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-purple-300 mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-gray-200">
          {[
            "PHP / Laravel",
            "React / Vue",
            "JavaScript / jQuery",
            "MySQL / REST API",
            "HTML / TailwindCSS",
            "Git / Hosting",
          ].map((skill, i) => (
            <li
              key={i}
              className="bg-white/10 backdrop-blur-md px-3 py-2 rounded-lg text-center border border-purple-400/30 hover:border-purple-400/60 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Hobbies Section */}
      <div>
        <h2 className="text-2xl font-semibold text-purple-300 mb-3">Hobbies</h2>
        <p className="text-gray-300">
          Exploring AI tools, building automation scripts, learning new frameworks, and gaming.
        </p>
      </div>
    </section>
  );
};

export default Resume;
