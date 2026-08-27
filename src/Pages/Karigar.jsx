import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import book3 from "../assets/book3.png";

const Karigar = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

        <section className="py-[70px]">

          <div className="max-w-[1200px] mx-auto px-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">

              {/* ================= LEFT IMAGE ================= */}
              <div className="flex justify-center">

                <img
                  src={book3}
                  alt="Karigar"
                  className="w-full max-w-none lg:max-w-[500px] h-auto object-contain"
                />

              </div>


              {/* ================= RIGHT CONTENT ================= */}
              <div
                className="text-left pt-4 lg:pt-8"
              >

                {/* Heading */}
                <h1
                  className="text-[34px] md:text-[42px] font-bold mb-5"
                  style={{ color: "#9d0b0b" }}
                >
                  Karigar
                </h1>


                {/* Intro */}
                <p
                  style={{
                    color: "#444",
                    fontSize: "20px",
                    fontWeight: "600",
                    lineHeight: "1.5",
                    textAlign: "left",
                    margin: "0 0 20px 0",
                  }}
                >
                  Every thread tells a story. Let yours begin with Karigar. 🧵
                </p>


                {/* Description */}
                <p
                  style={{
                    color: "#444",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    textAlign: "left",
                    margin: "0 0 28px 0",
                  }}
                >
                  Karigar is Humraah’s newest skill development initiative,
                  offering free weaving skills training for persons with
                  disabilities in a supportive and inclusive environment.
                </p>


                {/* Information */}
                <div
                  className="text-left"
                  style={{
                    color: "#444",
                    fontSize: "17px",
                  }}
                >

                  <p >
                    📅 <strong>Starts:</strong> 18 July
                  </p>

                  <p >
                    🗓️ <strong>Every:</strong> Saturday
                  </p>

                  <p >
                    🕚 <strong>Time:</strong> 11:00 AM – 12:30 PM
                  </p>

                  <p >
                    📍 <strong>Location:</strong> Ribat
                  </p>

                </div>


                {/* Registration */}
                <div className=" text-left">

                  <a
                    href="https://forms.gle/c62HADZRVPzeJVpAA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent  text-[#9d0b0b] px-7 py-3 font-semibold h hover:text-black transition"
                  >
                    Registration Link
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

export default Karigar;