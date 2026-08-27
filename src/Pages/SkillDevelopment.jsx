import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.png";

const SkillDevelopment = () => {

  const books = [
    {
      title: "Culinary Creations",
      image: book1,
      path: "/humraah/skill-development/culinary-creations",
    },
    {
      title: "Design Essentials",
      image: book2,
      path: "/humraah/skill-development/design-essentials",
    },
    {
      title: "Karigar",
      image: book3,
      path: "/humraah/skill-development/karigar",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

        {/* Page Heading */}
        <section className="py-[45px]">
          <div className="max-w-[1200px] mx-auto px-5">

            <h1
              className="text-[32px] md:text-[40px] font-bold text-center"
              style={{ color: "#9d0b0b" }}
            >
              Skill Development Programs
            </h1>

          </div>
        </section>


        {/* Books */}
        <section className="pb-[90px]">

          <div className="max-w-[1000px] mx-auto px-5">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">

              {books.map((book, index) => (

                <Link
                  key={index}
                  to={book.path}
                  className="group block"
                >

                  {/* Smaller Book */}
                  <div className="w-full h-[320px] overflow-hidden bg-[#f5f5f5]">

                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                  

                </Link>

              ))}

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default SkillDevelopment;