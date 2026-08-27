import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import familySupportImage from "../assets/family-support-group.jpg";

const FamilySupport = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

       


        {/* Main Content */}
        <section className="py-[70px]">

          <div className="max-w-[1200px] mx-auto px-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">

              {/* Image */}
              <div className="w-full flex justify-center">

                <img
                  src={familySupportImage}
                  alt="Family Support Group"
                  className="w-full max-w-[550px] h-auto object-contain"
                />

              </div>


              {/* Text */}
              <div className="text-left pt-4 lg:pt-8">

                <h1
  style={{
    color: "#9d0b0b",
    fontSize: "30px",
    lineHeight: "1.2",
    fontWeight: "700",
    textAlign: "left",
    margin: "0",
  }}
>
  Family Support Group
</h1>


                <p
                  style={{
                    color: "#444",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    textAlign: "left",
                    margin: "0 0 25px 0",
                  }}
                >
                  <strong>Connections by Humraah</strong> – a heartfelt
                  initiative devoted to uplifting parents and caregivers of
                  individuals with special needs. Through this meaningful
                  series, a safe and nurturing space was created where
                  individuals could share their stories, draw strength from
                  one another, and hold close a powerful reminder:
                  <strong> You are not alone.</strong>
                </p>


                {/* Note */}
                <h3
                  className="text-[24px] font-bold mb-3"
                  style={{ color: "black" }}
                >
                  Note:
                </h3>


                <ul
                  className="list-disc pl-6 text-[17px]"
                  style={{
                    color: "#444",
                    lineHeight: "1.6",
                    margin: "0",
                  }}
                >
                  <li>
                    Stay connected for the updates.
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

export default FamilySupport;