import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import hrcImage from "../assets/harmony.jpg";
import hrcLogo from "../assets/harmony-logo.png";

import hrcCard1 from "../assets/hrc-card1.jpg";
import hrcCard2 from "../assets/hrc-card2.jpg";
import hrcCard3 from "../assets/hrc-card3.jpg";
import hrcCard4 from "../assets/hrc-card4.jpg";
import hrcCard5 from "../assets/hrc-card5.jpg";

const HarmonyResolutionCenter = () => {
  const cards = [
    hrcCard1,
    hrcCard2,
    hrcCard3,
    hrcCard4,
    hrcCard5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  /* ================= RESPONSIVE SLIDER ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ================= NEXT ================= */
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = cards.length - itemsPerView;

      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  /* ================= PREVIOUS ================= */
  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = cards.length - itemsPerView;

      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN ================= */}
      <main className="w-full pt-[74px]">

        {/* ================= TOP SECTION ================= */}
        <section className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* ================= LEFT IMAGE ================= */}
            <div className="w-full">
              <img
                src={hrcImage}
                alt="Harmony Resolution Center"
                className="w-full h-[450px] sm:h-[520px] md:h-[600px] lg:h-[680px] object-cover"
              />
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="w-full text-left">

              {/* LOGO */}
              <div className="flex justify-start mb-6">
                <img
                  src={hrcLogo}
                  alt="Harmony Resolution Center"
                  className="w-[190px] sm:w-[220px] md:w-[240px] max-h-[130px] object-contain object-left"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-7 mb-5">
                A project of <strong>Ribat</strong> and{" "}
                <strong>DPSF</strong>,{" "}
                <strong>Harmony Resolution Center (HRC)</strong> is an
                Alternate Dispute Resolution (ADR) facility dedicated to
                resolving legal disputes with efficiency, fairness, and
                compassion. Whether it is family disputes, or corporate
                and commercial agreements, HRC provides a platform for
                accessible and inclusive mediations.
              </p>

              {/* FOR MORE INFO */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                For more info:
              </h3>

              <div className="space-y-2 text-sm sm:text-base text-gray-700 mb-6">

                <p>
                  <a
                    href="tel:03205690111"
                    className="hover:text-[#9d0b0b] transition"
                  >
                    0320 5690111
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:admin.hrc@dpsf.org.pk"
                    className="hover:text-[#9d0b0b] transition"
                  >
                    admin.hrc@dpsf.org.pk
                  </a>
                </p>

              </div>

              {/* EXPERT MEDIATORS */}
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                Expert mediators
              </h3>

              <div className="text-sm sm:text-base text-gray-700 leading-7 mb-6">

                <p className="font-semibold">
                  Rana Zaki Shamsi
                </p>

                <p className="mb-3">
                  (Retired Sessions Court Judge)
                </p>

                <p className="font-semibold">
                  Barrister Vishal Shamsi
                </p>

              </div>

              {/* BOOK NOW */}
              <a
                href="https://forms.gle/xmKHAeEfEUHgbUP6A"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 text-sm text-white font-semibold transition duration-300 hover:opacity-90"
                style={{ backgroundColor: "#9d0b0b" }}
              >
                BOOK NOW
              </a>

            </div>
          </div>

        </section>


        {/* ================= GREY SLIDER SECTION ================= */}
        <section className="w-full bg-gray-100 py-10 sm:py-12 md:py-14">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

            {/* ================= SLIDER ================= */}
            <div className="relative flex items-center">

              {/* LEFT ARROW */}
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 -translate-x-1/2 w-10 h-10 bg-gray-200 text-black flex items-center justify-center rounded-full shadow-sm hover:bg-gray-300 transition"
                aria-label="Previous"
              >
                <FaChevronLeft size={14} />
              </button>


              {/* SLIDER WINDOW */}
              <div className="w-full overflow-hidden">

                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / itemsPerView)
                    }%)`,
                  }}
                >

                  {cards.map((image, index) => (
                    <div
                      key={index}
                      className="min-w-full md:min-w-[33.3333%] px-2"
                    >
                      <img
                        src={image}
                        alt={`HRC ${index + 1}`}
                        className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover"
                      />
                    </div>
                  ))}

                </div>

              </div>


              {/* RIGHT ARROW */}
              <button
                onClick={nextSlide}
                className="absolute right-0 z-10 translate-x-1/2 w-10 h-10 bg-gray-200 text-black flex items-center justify-center rounded-full shadow-sm hover:bg-gray-300 transition"
                aria-label="Next"
              >
                <FaChevronRight size={14} />
              </button>

            </div>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default HarmonyResolutionCenter;