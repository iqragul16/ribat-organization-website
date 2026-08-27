import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import sportsCenterImage from "../assets/sports-cente.jpg";
import sportsCenterLogo from "../assets/sports-center-logo.png";

import sportsCard1 from "../assets/sports-center-card1.jpg";
import sportsCard2 from "../assets/sports-center-card2.jpg";
import sportsCard3 from "../assets/sports-center-card3.jpg";
import sportsCard4 from "../assets/sports-center-card4.webp";

const SportsCenter = () => {
  const cards = [
    sportsCard1,
    sportsCard2,
    sportsCard3,
    sportsCard4,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  /* ================= RESPONSIVE SLIDER ================= */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ================= NEXT SLIDE ================= */
  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = cards.length - itemsPerView;

      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  /* ================= PREVIOUS SLIDE ================= */
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
                src={sportsCenterImage}
                alt="Ribat Sports Center"
                className="w-full h-[450px] sm:h-[520px] md:h-[600px] lg:h-[680px] object-cover"
              />
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="w-full text-left">

              {/* LOGO */}
              <div className="flex justify-start mb-6">
                <img
                  src={sportsCenterLogo}
                  alt="Ribat Sports Center"
                  className="w-[190px] sm:w-[220px] md:w-[240px] max-h-[130px] object-contain object-left"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-7 mb-4">
                Ribat’s multi-purpose open sports court offers an array of
                engaging activities, catering to enthusiasts of basketball,
                futsal, skating, archery, and martial arts.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-7 mb-4">
                In addition to individual use, the sports center is
                available for event bookings, making it an ideal choice
                for tournaments, matches, or group gatherings. Whether
                it’s a corporate team-building event or a friendly sports
                competition, Ribat is equipped to accommodate every need.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-7 mb-6">
                For the convenience of attendees, toilet facilities are
                available near the ground, ensuring a comfortable
                experience for all visitors.
              </p>

              {/* BOOK NOW */}
              <div className="flex flex-col items-start">

                <p className="text-sm sm:text-base font-semibold text-gray-800 mb-3">
                  For Pricing and booking, please contact:
                </p>

                <a
                  href="mailto:program.coordinator@ribat.com.pk"
                  className="inline-block px-6 py-2.5 text-sm text-white font-semibold transition duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#9d0b0b" }}
                >
                  BOOK NOW
                </a>

              </div>

            </div>
          </div>

        </section>


        {/* ================= GREY SLIDER SECTION ================= */}
        <section className="w-full bg-gray-100 py-10 sm:py-12 md:py-14">

          <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16">

            <div className="relative flex items-center">

              {/* ================= LEFT ARROW ================= */}
              <button
                onClick={prevSlide}
                className="absolute left-0 z-10 -translate-x-1/2 w-10 h-10 bg-gray-200 text-black flex items-center justify-center rounded-full shadow-sm hover:bg-gray-300 transition"
                aria-label="Previous"
              >
                <FaChevronLeft size={14} />
              </button>


              {/* ================= SLIDER ================= */}
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
                      className="min-w-full md:min-w-[50%] px-2"
                    >

                      <img
                        src={image}
                        alt={`Sports Center ${index + 1}`}
                        className="w-full h-[240px] sm:h-[300px] md:h-[360px] object-cover"
                      />

                    </div>
                  ))}

                </div>

              </div>


              {/* ================= RIGHT ARROW ================= */}
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

export default SportsCenter;