import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import book1 from "../assets/img1.png";
import book2 from "../assets/img2.png";
import book3 from "../assets/img3.png";
import book4 from "../assets/img4.jpg";

function ExploreBooks() {
  const books = [book1, book2, book3, book4];

  const getVisibleBooks = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
  };

  const [visibleBooks, setVisibleBooks] = useState(getVisibleBooks);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Responsive screen size
  useEffect(() => {
    const handleResize = () => {
      setVisibleBooks(getVisibleBooks());
      setCurrentIndex(0);
      setIsTransitioning(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Duplicate books for infinite slider
  const sliderBooks = [...books, ...books];

  // Next
  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Previous
  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(books.length);

      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(books.length - 1);
      }, 40);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Infinite loop
  const handleTransitionEnd = () => {
    if (currentIndex >= books.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);

      setTimeout(() => {
        setIsTransitioning(true);
      }, 40);
    }
  };

  return (
<section className="w-full bg-white border-0 outline-none shadow-none py-10 sm:py-14 md:py-16">
      {/* Heading */}
      <div className="mb-8 text-center sm:mb-10 md:mb-12">
        <h1 className="!text-[#9d0b0b] text-3xl font-extrabold uppercase tracking-[3px] sm:text-4xl md:text-7xl">
          Explore Programs
        </h1>
      </div>

      {/* Slider */}

<div className="relative w-full max-w-none px-0 mx-0">
   {/* Slider Viewport */}
    <div className="relative w-full overflow-hidden border-0 outline-none">
    {/* Left Arrow */}
    <button
      type="button"
      onClick={prevSlide}
      aria-label="Previous"
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

    {/* Slider Track */}
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`flex ${
        isTransitioning
          ? "transition-transform duration-700 ease-in-out"
          : ""
      }`}
      style={{
        transform: `translateX(-${
          currentIndex * (100 / visibleBooks)
        }%)`,
      }}
    >
      {sliderBooks.map((book, index) => (
        <div
          key={index}
          className="shrink-0"
          style={{
            width: `${100 / visibleBooks}%`,
          }}
        >
          <div
            className="
              flex
              w-full
              items-center
              justify-center
              overflow-hidden
              
            "
          >
            <img
              src={book}
              alt={`Program ${index + 1}`}
              className="
                block
                h-auto
                w-full
                object-contain
              "
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Right Arrow */}
    <button
      type="button"
      onClick={nextSlide}
      aria-label="Next"
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
      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {books.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setIsTransitioning(true);
              setCurrentIndex(index);
            }}
            aria-label={`Slide ${index + 1}`}
            className={`
              h-2.5
              w-2.5
              rounded-full
              transition-all
              duration-300
              ${
                currentIndex % books.length === index
                  ? "scale-110 bg-[black]"
                  : "bg-gray-300"
              }
            `}
          />
        ))}
      </div>

    </section>
  );
}

export default ExploreBooks;