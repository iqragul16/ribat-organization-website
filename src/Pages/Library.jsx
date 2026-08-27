import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import libraryImage from "../assets/library.webp";
import libraryLogo from "../assets/library-logo.png";

const Library = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="w-full pt-[74px]">

        <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16">

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ================= LEFT IMAGE ================= */}
            <div className="w-full">
              <img
                src={libraryImage}
                alt="Library at Ribat"
                className="w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[560px] object-cover"
              />
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="w-full">

              {/* Logo */}
              <div className="flex justify-center justify-start mb-8">
                <img
                  src={libraryLogo}
                  alt="Library at Ribat"
                  className="w-[220px] sm:w-[260px] md:w-[280px] max-h-[150px] object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-8 text-left">
                The library at Ribat is an ultra-modern facility, providing
                students with a tranquil space for self-study throughout the
                year. Students have the opportunity to utilize the space for
                examinations, conduct research, or simply enjoy the peaceful
                ambiance of the library with a good book.
              </p>

              {/* Registration */}
             <div className="mt-8 flex flex-col items-start">
  <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
    For registration:
  </p>

  <a
    href="https://forms.gle/TsPhCTiSmqpQ3fNm8"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block px-7 py-3 text-white font-semibold transition duration-300 hover:opacity-90"
    style={{ backgroundColor: "#9d0b0b" }}
  >
    Register Now
  </a>
</div>

            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default Library;