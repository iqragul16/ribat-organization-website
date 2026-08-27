import React from "react";
import humraahSupport from "../assets/humraah-support.png";
import {
  FaEnvelope,
  FaHandshake,
  FaHandsHelping,
} from "react-icons/fa";

const SupportHumraah = () => {
  return (
    <section className="w-full bg-white py-[60px]">
      <div className="max-w-[1200px] mx-auto px-5">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-stretch">

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col">

            {/* Main Heading */}
            <h2
              className="text-[40px] md:text-[50px] font-bold mb-2 whitespace-nowrap"
              style={{
                color: "#9d0b0b",
                textAlign: "left",
              }}
            >
              Why Support Humraah?
            </h2>


            {/* Your Contribution */}
            <div className="flex items-center gap-4 mb-5">

              <div className="flex items-center shrink-0">

                <div className="w-[30px] h-[2px] bg-[#8b1d2c]"></div>

                <div className="w-[14px] h-[14px] border border-[#8b1d2c] rounded-full bg-white"></div>

              </div>

              <h3 className="text-[#222] text-[18px] md:text-[19px] font-semibold m-0">
                Your Contribution Makes a Difference
              </h3>

            </div>


            {/* ================= COLORED BOXES ================= */}

            {/* Blue Box */}
            <div className="bg-[#244bb3] text-white px-6 py-6 mb-2 w-full md:w-[80%] md:ml-[10%]">

              <p className=" text-left text-[16px] md:text-[17px] leading-[1.4] m-0">
                Enable the implementation of life changing
                programs for people with disabilities.
              </p>

            </div>


            {/* Red Box */}
            <div className="bg-[#ff484f] text-white px-6 py-6 mb-2 w-full md:w-[80%] md:ml-[10%]">

              <p className=" text-left text-[16px] md:text-[17px] leading-[1.4] m-0">
                Support the training of teachers and volunteers
                in inclusivity practices
              </p>

            </div>


            {/* Yellow Box */}
            <div className="bg-[#ffc609] text-white px-6 py-6 mb-5 w-full md:w-[80%] md:ml-[10%]">

              <p className="text-left text-[16px] md:text-[17px] leading-[1.4] m-0">
                Make our community inclusive- offer your services
                for integration of PWDs in the society
              </p>

            </div>


            {/* ================= JOIN HANDS ================= */}

            <div className="flex items-center gap-4 mb-5">

              <div className="flex items-center shrink-0">

                <div className="w-[30px] h-[2px] bg-[#8b1d2c]"></div>

                <div className="w-[14px] h-[14px] border border-[#8b1d2c] rounded-full bg-white"></div>

              </div>

              <h3 className="text-[#222] text-[18px] md:text-[19px] font-semibold m-0">
                Join Hands With Us
              </h3>

            </div>


            {/* ================= POINT 1 ================= */}

            <div className="flex items-center gap-4 mb-4 ml-[10%]">

              <div className="text-[#244bb3] text-[24px] w-[32px] text-center shrink-0">
                <FaHandsHelping />
              </div>

              <p className="text-[#333] text-[16px] md:text-[17px] m-0">
                Sponsor a program or activity.
              </p>

            </div>


            {/* ================= POINT 2 ================= */}

            <div className="flex items-center gap-4 mb-4 ml-[10%]">

              <div className="text-[#244bb3] text-[24px] w-[32px] text-center shrink-0">
                <FaHandshake />
              </div>

              <p className="text-[#333] text-[16px] md:text-[17px] m-0">
                Partner with us to expand our reach.
              </p>

            </div>


            {/* ================= POINT 3 ================= */}

            <div className="flex items-center gap-4 mb-6 ml-[10%]">

              <div className="text-[#244bb3] text-[24px] w-[32px] text-center shrink-0">
                <FaHandsHelping />
              </div>

              <p className="text-[#333] text-[16px] md:text-[17px] m-0">
                Volunteer your time and expertise.
              </p>

            </div>


            {/* ================= BOTTOM TEXT ================= */}

            <div className="mt-auto pt-4">

              <h2
                className="text-[25px] md:text-[29px] font-bold leading-tight mb-4"
                style={{
                  color: "#9d0b0b",
                  textAlign: "left",
                }}
              >
                Join the movement, connect with our
                resource mobilisation team today!
              </h2>


              {/* Email */}
              <div className="flex items-center gap-3">

                <FaEnvelope
                  className="text-[#8b5e3c] text-[20px] flex-shrink-0"
                />

                <a
                  href="mailto:resourcemobilization@ribat.com.pk"
                  className="text-[#555] text-[17px] font-medium hover:underline"
                >
                  resourcemobilization@ribat.com.pk
                </a>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE IMAGE ================= */}

          <div className="w-full h-full min-h-[700px]">

            <img
              src={humraahSupport}
              alt="Humraah Support"
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default SupportHumraah;