import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import book1 from "../assets/program1.png";
import book2 from "../assets/program2.png";
import book3 from "../assets/program3.png";
import book4 from "../assets/program4.png";
import book5 from "../assets/program5.png";
import book6 from "../assets/program6.png";
import book7 from "../assets/program7.png";

const SportsPrograms = () => {

  const books = [
    book1,
    book2,
    book3,
    book4,
    book5,
    book6,
    book7,
  ];

  const googleForm = "https://forms.gle/YOUR-GOOGLE-FORM-LINK";

  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

        {/* ================= HEADING ================= */}
        <section className="py-[45px]">
          <div className="max-w-[1200px] mx-auto px-5">

            <h1
              className="text-[32px] md:text-[40px] font-bold text-center"
              style={{ color: "#9d0b0b" }}
            >
              Sports Programs
            </h1>

          </div>
        </section>

{/* ================= BOOKS ================= */}
{/* ================= BOOKS ================= */}
<section className="pb-[80px]">
  <div className="max-w-[1100px] mx-auto px-2">

    <div
      className="
        flex
        flex-wrap
        justify-start
        gap-x-[4px]
        gap-y-[10px]
        md:gap-x-[20px]
        md:gap-y-[35px]
        md:justify-center
      "
    >

      {books.map((book, index) => (

        <a
          key={index}
          href={googleForm}
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-[calc(50%-2px)]
            md:w-[calc(25%-15px)]
            flex
            justify-center
            group
          "
        >

          <img
            src={book}
            alt={`Sports Program ${index + 1}`}
            className="
              w-full
              max-w-[260px]
              h-[340px]
              md:max-w-[240px]
              md:h-[320px]
              object-contain
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

        </a>

      ))}

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
};

export default SportsPrograms;