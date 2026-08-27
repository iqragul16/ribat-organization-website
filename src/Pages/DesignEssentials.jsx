import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import book2 from "../assets/book2.jpg";


const DesignEssentials = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

        <section className="py-[70px]">

          <div className="max-w-[1200px] mx-auto px-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">

              {/* Left */}
              <div className="flex justify-center">
  <img
    src={book2}
    alt="Design Essentials"
    className="w-full max-w-none md:max-w-[500px] h-auto object-contain"
  />
</div>


              {/* Right */}
              <div className="text-left ">

  <h1
    className="text-[34px] md:text-[42px] font-bold mb-5"
    style={{ color: "#9d0b0b" }}
  >
    Design Essentials
  </h1>


  <p
    style={{
      color: "#444",
      fontSize: "17px",
      lineHeight: "1.6",
      textAlign: "left",
      margin: "0 0 20px 0",
    }}
  >
    <strong>Design Essentials</strong> – a computer-based
    skills training program tailored for Hearing/Speech-impaired
    and Physically Challenged individuals.
  
    Participants receive hands-on experience in
    <strong> Video Editing & Presentation </strong>
    and
    <strong> Digital Graphic Design</strong>,
    gaining digital literacy and creative confidence in a safe,
    learning environment.
  </p>


  <h2
    className="text-[23px] font-bold mb-3"
    style={{ color: "black" }}
  >
    Note:
  </h2>


  <ul
    className="list-disc pl-6 text-[17px]"
    style={{
      color: "#444",
      lineHeight: "1.6",
      margin: "0",
    }}
  >
    <li className="mb-2">
      The first batch of Design Essentials has been completed.
    </li>

    <li>
      Stay connected for updates on future opportunities.
    </li>
  </ul>

</div>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default DesignEssentials;