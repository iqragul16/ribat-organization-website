import { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

import campus1 from "../assets/campus1.jpg";
import campus2 from "../assets/campus2.jpg";
import campus3 from "../assets/campus3.jpg";
import campus4 from "../assets/campus4.jpg";
import campus5 from "../assets/campus5.jpg";
import campus6 from "../assets/campus6.jpg";

function Books2() {
  const campusImages = [
    campus1,
    campus2,
    campus3,
    campus4,
    campus5,
    campus6,
  ];

  /* ==============================
     RESPONSIVE VISIBLE IMAGES
  ============================== */

  const getVisibleImages = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
  };

  const [visibleImages, setVisibleImages] =
    useState(getVisibleImages);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [isTransitioning, setIsTransitioning] =
    useState(true);

  /* ==============================
     FULLSCREEN IMAGE
  ============================== */

  const [selectedImage, setSelectedImage] =
    useState(null);

  /* ==============================
     RESPONSIVE SCREEN SIZE
  ============================== */

  useEffect(() => {
    const handleResize = () => {
      setVisibleImages(getVisibleImages());
      setCurrentIndex(0);
      setIsTransitioning(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ==============================
     DUPLICATE IMAGES
  ============================== */

  const sliderImages = [
    ...campusImages,
    ...campusImages,
  ];

  /* ==============================
     NEXT SLIDE
  ============================== */

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  /* ==============================
     PREVIOUS SLIDE
  ============================== */

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(campusImages.length);

      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(campusImages.length - 1);
      }, 40);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  /* ==============================
     INFINITE SLIDER
  ============================== */

  const handleTransitionEnd = () => {
    if (currentIndex >= campusImages.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 40);
    }
  };

  /* ==============================
     AUTO SLIDER
     EVERY 3 SECONDS
  ============================== */

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  /* ==============================
     OPEN FULLSCREEN
  ============================== */

  const openImage = (index) => {
    setSelectedImage(index);
  };

  /* ==============================
     FULLSCREEN NEXT
  ============================== */

  const nextFullImage = () => {
    setSelectedImage((prev) => {
      if (prev === campusImages.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* ==============================
     FULLSCREEN PREVIOUS
  ============================== */

  const prevFullImage = () => {
    setSelectedImage((prev) => {
      if (prev === 0) {
        return campusImages.length - 1;
      }

      return prev - 1;
    });
  };

  /* ==============================
     CLOSE FULLSCREEN
  ============================== */

  const closeImage = () => {
    setSelectedImage(null);
  };

  /* ==============================
     KEYBOARD CONTROLS
  ============================== */

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedImage === null) return;

      if (event.key === "ArrowRight") {
        nextFullImage();
      }

      if (event.key === "ArrowLeft") {
        prevFullImage();
      }

      if (event.key === "Escape") {
        closeImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [selectedImage]);

  return (
    <>
      {/* =================================================
          CAMPUS SECTION
      ================================================= */}

      <section className="w-full bg-white py-10 sm:py-14 md:py-16">

        {/* ================= HEADING ================= */}

        <div className="mb-7 text-center sm:mb-9 md:mb-10">

          {/* Top line */}
          <div className="mx-auto mb-2 flex max-w-[485px] items-center justify-center">
            <div className="h-[1px] w-[90px] bg-[#999999] sm:w-[130px]" />

            <div className="mx-2 h-[20px] w-[1px] bg-[#999999]" />

            <div className="h-[1px] w-[90px] bg-[#999999] sm:w-[130px]" />
          </div>

          {/* Title */}
          <div className="flex items-center justify-center">

            <span className="mr-5 text-[18px] font-bold text-[#c9151c] sm:text-[22px]">
              ●
            </span>

                    <h1 className="!text-[#9d0b0b] text-3xl font-extrabold uppercase tracking-[3px] sm:text-4xl md:text-7xl">

              THE CAMPUS
            </h1>

            <span className="ml-5 text-[18px] font-bold text-[#c9151c] sm:text-[22px]">
              ●
            </span>

          </div>

          {/* Subtitle */}
          <div className="relative mx-auto mt-1 flex max-w-[485px] items-center justify-center">

            <div className="h-[1px] w-[150px] bg-[#999999] sm:w-[190px]" />

            <span
              className="
                absolute
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                bg-white
                px-3
                text-[14px]
                text-[#777777]

                sm:text-[16px]
              "
            >
              Your Unique Space
            </span>

          </div>

          {/* Description */}
          <div
            className="
              mx-auto
              mt-7
              max-w-[850px]
              px-5
              text-center
              text-[16px]
              leading-[1.6]
              text-[#172554]

              sm:text-[17px]
              md:text-[18px]
            "
          >
            <p>
              Welcome to The Campus – Ribat.
            </p>

            <p>
              Check out our in-house facilities including a
              Library, unique Sports Centre, Learning Nexus,
              Kafe and lots more!
            </p>
          </div>

        </div>

        {/* ================= SLIDER ================= */}

        <div className="relative mx-auto w-full max-w-[1180px]">

          <div className="relative w-full overflow-hidden">

            {/* LEFT ARROW */}

            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous image"
              className="
                absolute
                left-2
                top-1/2
                z-30
                -translate-y-1/2
                text-white
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
                transition-all
                duration-300
                hover:scale-125

                sm:left-3
                md:left-4
              "
            >
              <FaChevronLeft size={28} />
            </button>

            {/* SLIDER TRACK */}

            <div
              onTransitionEnd={handleTransitionEnd}
              className={`flex ${
                isTransitioning
                  ? "transition-transform duration-700 ease-in-out"
                  : ""
              }`}
              style={{
                transform: `translateX(-${
                  currentIndex *
                  (100 / visibleImages)
                }%)`,
              }}
            >
              {sliderImages.map((image, index) => {

                const realIndex =
                  index % campusImages.length;

                return (
                  <div
                    key={index}
                    className="shrink-0"
                    style={{
                      width: `${100 / visibleImages}%`,
                    }}
                  >

                    <div
                      onClick={() =>
                        openImage(realIndex)
                      }
                      className="
                        h-[250px]
                        w-full
                        cursor-pointer
                        overflow-hidden

                        sm:h-[260px]
                        md:h-[280px]
                        lg:h-[300px]
                      "
                    >

                      <img
                        src={image}
                        alt={`Campus facility ${
                          realIndex + 1
                        }`}
                        className="
                          block
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-500
                          hover:scale-105
                        "
                        loading="lazy"
                      />

                    </div>

                  </div>
                );
              })}
            </div>

            {/* RIGHT ARROW */}

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next image"
              className="
                absolute
                right-2
                top-1/2
                z-30
                -translate-y-1/2
                text-white
                drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]
                transition-all
                duration-300
                hover:scale-125

                sm:right-3
                md:right-4
              "
            >
              <FaChevronRight size={28} />
            </button>

          </div>

        </div>

       

      </section>

      {/* =================================================
          FULLSCREEN IMAGE OVERLAY
      ================================================= */}

      {selectedImage !== null && (

        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-sm
          "
        >

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeImage}
            aria-label="Close image"
            className="
              absolute
              right-5
              top-5
              z-50
              text-white
              transition-transform
              duration-300
              hover:scale-125
            "
          >
            <FaTimes size={30} />
          </button>

          {/* LEFT FULLSCREEN ARROW */}

          <button
            type="button"
            onClick={prevFullImage}
            aria-label="Previous image"
            className="
              absolute
              left-4
              top-1/2
              z-50
              -translate-y-1/2
              text-white
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]
              transition-transform
              duration-300
              hover:scale-125

              md:left-8
            "
          >
            <FaChevronLeft
              size={36}
            />
          </button>

          {/* LARGE IMAGE */}

          <div
            className="
              relative
              flex
              h-[85vh]
              w-[90vw]
              max-w-[1200px]
              items-center
              justify-center
            "
          >

            <img
              src={campusImages[selectedImage]}
              alt={`Campus facility ${
                selectedImage + 1
              }`}
              className="
                max-h-full
                max-w-full
                rounded-sm
                object-contain
                shadow-2xl
              "
            />

          </div>

          {/* RIGHT FULLSCREEN ARROW */}

          <button
            type="button"
            onClick={nextFullImage}
            aria-label="Next image"
            className="
              absolute
              right-4
              top-1/2
              z-50
              -translate-y-1/2
              text-white
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)]
              transition-transform
              duration-300
              hover:scale-125

              md:right-8
            "
          >
            <FaChevronRight
              size={36}
            />
          </button>

        </div>
      )}
    </>
  );
}

export default Books2;