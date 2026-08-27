import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// Main Images
import libraryImage from "../assets/library.webp";
import learningNexusImage from "../assets/learning-nexus.jpg";
import sportsCenterImage from "../assets/sports-cente.jpg";
import harmonyImage from "../assets/harmony.jpg";

// Logos
import libraryLogo from "../assets/library-logo.png";
import learningNexusLogo from "../assets/learning-nexus-logo.png";
import sportsCenterLogo from "../assets/sports-center-logo.png";
import harmonyLogo from "../assets/harmony-logo.png";

const services = [
  {
    title: "Library",
    image: libraryImage,
    logo: libraryLogo,
    path: "/services/library",
  },
  {
    title: "Learning Nexus",
    image: learningNexusImage,
    logo: learningNexusLogo,
    path: "/services/learning-nexus",
  },
  {
    title: "Sports Center",
    image: sportsCenterImage,
    logo: sportsCenterLogo,
    path: "/services/sports-center",
  },
  {
    title: "Harmony Resolution Center",
    image: harmonyImage,
    logo: harmonyLogo,
    path: "/services/harmony-resolution-center",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="w-full bg-white pt-[74px]">

        {/* ================= PAGE INTRO ================= */}
        <section className="pt-8 sm:pt-10 md:pt-12 pb-8 px-4">

          {/* Heading */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[485px]">

              {/* Top horizontal line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gray-400" />

              {/* Left top line */}
              <div className="absolute top-0 left-0 h-5 sm:h-6 w-px bg-gray-400" />

              {/* Right top line */}
              <div className="absolute top-0 right-0 h-5 sm:h-6 w-px bg-gray-400" />

              <h1
                className="pt-5 text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.25em]"
                style={{ color: "#9d0b0b" }}
              >
                THE CAMPUS
              </h1>

              {/* Bottom horizontal line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gray-400" />

              {/* Left bottom line */}
              <div className="absolute bottom-0 left-0 h-5 sm:h-6 w-px bg-gray-400" />

              {/* Right bottom line */}
              <div className="absolute bottom-0 right-0 h-5 sm:h-6 w-px bg-gray-400" />

              {/* Subtitle */}
              <div className="absolute left-1/2 bottom-[-12px] -translate-x-1/2 bg-white px-3 whitespace-nowrap">
                <span className="text-base sm:text-lg md:text-xl text-gray-500">
                  Your Unique Space
                </span>
              </div>

            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl mx-auto text-center mt-12">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Welcome to The Campus – Ribat.
              <br />
              Check out our in-house facilities including a Library, unique
              Sports Centre, Learning Nexus, Kafe and lots more!
            </p>
          </div>

        </section>

        {/* ================= SERVICE CARDS ================= */}
        <section className="w-full px-0 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[10px]">

            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group block w-full bg-white overflow-hidden"
              >

                {/* Main Image */}
                <div className="relative w-full h-[270px] sm:h-[300px] lg:h-[280px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-300" />
                </div>

                {/* Logo */}
                <div className="w-full h-[125px] flex items-center justify-center px-6 py-4 bg-white">
                  <img
                    src={service.logo}
                    alt={`${service.title} logo`}
                    className="max-w-[190px] max-h-[100px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

              </Link>
            ))}

          </div>
        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default Services;