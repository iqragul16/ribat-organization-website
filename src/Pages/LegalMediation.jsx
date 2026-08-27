import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { FaUserTie, FaWheelchair } from "react-icons/fa";

import hrcLogo from "../assets/Legal Mediation Services-logo.png";
import legalMediationImage from "../assets/Legal Mediation Services.jpg";

const LegalMediation = () => {
  return (
    <>
      <Navbar />

      <main className="pt-[85px] bg-white min-h-screen">

        <section className="py-[50px]">

          <div className="max-w-[1200px] mx-auto px-5">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-start">

              {/* ================= LEFT IMAGE ================= */}
              <div className="w-full flex justify-center">

                <img
                  src={legalMediationImage}
                  alt="Legal Mediation Services"
                  className="w-full max-w-[550px] h-auto object-contain"
                />

              </div>


              {/* ================= RIGHT CONTENT ================= */}
              <div className="text-left pt-2 lg:pt-4">

                {/* HRC LOGO */}
                <div className="mb-3">

                  <img
                    src={hrcLogo}
                    alt="Harmony Resolution Center"
                    className="w-[180px] h-auto object-contain object-left"
                  />

                </div>


                {/* ================= DESCRIPTION ================= */}
                <p
                  style={{
                    color: "#444",
                    fontSize: "17px",
                    lineHeight: "1.5",
                    textAlign: "left",
                    margin: "0 0 12px 0",
                  }}
                >
                  Ribat is proud to extend legal mediation services to Persons
                  with Disabilities (PWDs) through the{" "}
                  <strong>Harmony Resolution Center (HRC)</strong>, a project
                  of <strong>Ribat</strong> and <strong>DPSF</strong>. HRC is
                  an Alternate Dispute Resolution (ADR) facility dedicated to
                  resolving legal disputes with efficiency, fairness, and
                  compassion. Whether it is family disputes, or corporate and
                  commercial agreements, HRC provides a platform for accessible
                  and inclusive mediations.
                </p>


                {/* ================= CONTACT ================= */}
                <div
                  className="flex items-center gap-2 mb-4"
                  style={{
                    fontSize: "17px",
                    lineHeight: "1.4",
                  }}
                >

                  <span className="text-[#333] font-medium">
                    Contact us:
                  </span>

                  <span className="text-[#444]">
                    03192009490
                  </span>

                </div>


                {/* ================================================= */}
                {/* EXPERT MEDIATORS */}
                {/* ================================================= */}

                <div className="mb-4">

                  {/* Heading */}
                  <h3
                    className="flex items-center gap-2 text-[22px] font-semibold mb-2"
                    style={{
                      color: "#222",
                    }}
                  >

                    <FaUserTie
                      className="text-[#9d0b0b] text-[20px]"
                    />

                    Expert Mediators

                  </h3>


                  {/* Names - SAME ROW */}
                  <div className="grid grid-cols-2 gap-4 text-[16px] text-[#444]">

                    {/* Rana */}
                    <div>

                      <strong>
                        Rana Zaki Shamsi
                      </strong>

                      <p className="m-0 mt-0.5 text-[14px] leading-[1.3]">
                        (Retired Sessions Court Judge)
                      </p>

                    </div>


                    {/* Vishal */}
                    <div>

                      <strong>
                        Barrister Vishal Shamsi
                      </strong>

                    </div>

                  </div>

                </div>


                {/* ================================================= */}
                {/* INCLUSIVE SERVICES */}
                {/* ================================================= */}

                <div>

                  {/* Heading */}
                  <h3
                    className="flex items-center gap-2 text-[22px] font-semibold mb-2"
                    style={{
                      color: "#222",
                    }}
                  >

                    <FaWheelchair
                      className="text-[#9d0b0b] text-[20px]"
                    />

                    Inclusive Services

                  </h3>


                  {/* Services - SAME ROW */}
                  <div className="grid grid-cols-2 gap-4 text-[16px] text-[#444] leading-[1.4]">

                    {/* Braille */}
                    <div>
                      Braille-translated documents for the visually impaired
                    </div>


                    {/* Sign Language */}
                    <div>
                      Sign language interpreters for the deaf and hard of hearing
                    </div>

                  </div>

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

export default LegalMediation;