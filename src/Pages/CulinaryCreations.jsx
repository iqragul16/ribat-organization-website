import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import book1 from "../assets/book1.jpg";

const CulinaryCreations = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

        <section className="py-[70px]">

          <div className="max-w-[1200px] mx-auto px-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">

              {/* Left Book */}
              <div className="w-full flex justify-center">

                <img
                  src={book1}
                  alt="Culinary Creations"
                  className="w-full max-w-[500px] h-auto object-contain"
                />

              </div>


              {/* Right Content */}
              <div className="text-left">

                {/* Heading */}
                <h1
                  className="text-[34px] md:text-[42px] font-bold mb-7"
                  style={{ color: "#9d0b0b" }}
                >
                  Culinary Creations
                </h1>


               {/* Description */}
<div style={{ textAlign: "left" }}>

  <p
    style={{
      color: "#444",
      fontSize: "17px",
      lineHeight: "1.6",
      margin: "0 0 20px 0",
    }}
  >
    Humraah is excited to bring back the Culinary Creations
    program with an enhanced curriculum for neurodivergent and
    visually impaired individuals, in collaboration with DEPD
    and in partnership with the International Chocolate &
    Pastry Academy.
  </p>

  <p
    style={{
      color: "#444",
      fontSize: "17px",
      lineHeight: "1.6",
      margin: "0 0 28px 0",
    }}
  >
    It is designed to equip participants with practical culinary
    skills in an inclusive and supportive environment.
  </p>

</div>


<div style={{ textAlign: "left" }}>

  <p style={{ marginBottom: "20px" }}>
    📅 <strong>Starting:</strong> 21st August
  </p>

  <p style={{ marginBottom: "20px" }}>
    👥 <strong>Eligibility:</strong> 17 years and above
  </p>

  <p>
    ⏰ <strong>Time:</strong> 4:00 – 6:00 pm every Friday & Saturday
  </p>

</div>


                {/* Register */}
                <div className="mt-8 text-left">

                  <a
                    href="https://forms.gle/LxfEFK9qtdJb1E2d6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-left  bg-transparent  text-[#9d0b0b] px-7 py-3 font-semibold hover:text-[black]  transition"
                  >
                    Register Now
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default CulinaryCreations;