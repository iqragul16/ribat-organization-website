import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import joinTeamImage from "../assets/jointeam.jpg";
import volunteer from "../assets/Volunteer.webp";
import ambassador from "../assets/ambassador.png";

function JoinTeam() {
  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= HEADER SPACE ================= */}
      <div className="h-[74px]" />


      {/* ================= INTRO + MAIN IMAGE ================= */}
      <section className="w-full bg-[#f1f6ff]">
{/* ================= INTRO ================= */}
<div className="
  mx-auto
  max-w-[1200px]
  px-5
  py-10
  text-center
  sm:px-6
  sm:py-12
  md:py-14
  lg:py-16
">

  {/* Heading */}
  <h1
    className="
      mx-auto
      text-center
      font-bold
      leading-tight
      text-[#9d0b0b]
      text-[28px]
      sm:text-[32px]
      md:text-[38px]
      lg:text-[42px]
      xl:text-[44px]
    "
    style={{ color: "#9d0b0b" }}
  >
    Join Our Team!
  </h1>

  {/* Description */}
  <p
    className="
      mx-auto
      mt-4
      w-full
      max-w-[1050px]
      text-center
      text-[13px]
      leading-6
      text-[#555]
      sm:text-[14px]
      md:text-[15px]
      lg:text-[16px]
      xl:text-[17px]
    "
  >
    Ribat is guiding Muslims towards discovering meaning and confidence in
    their faith. You can be a key part of that mission.
  </p>

</div>

        {/* ================= MAIN IMAGE ================= */}
        <div className="w-full">

          <div className="mx-auto w-full max-w-[1250px] px-6 pb-12">

            <img
              src={joinTeamImage}
              alt="Join Ribat Team"
              className="
                mx-auto
                block
                h-auto
                w-full
                object-contain
              "
            />

          </div>

        </div>

      </section>


      {/* ================= TWO PROGRAMS ================= */}
      <section className="w-full bg-white py-14 md:py-20">

        <div
          className="
            mx-auto
            grid
            max-w-[1050px]
            grid-cols-1
            gap-10
            px-6
            md:grid-cols-2
            md:gap-14
          "
        >

          {/* ================= VOLUNTEER ================= */}
          <div className="flex flex-col items-center">

            <Link
              to="/join-team/volunteer"
              className="block w-full"
            >

              <img
                src={volunteer}
                alt="Volunteer with Ribat"
                className="
                  mx-auto
                  h-[330px]
                  w-full
                  max-w-[310px]
                  object-contain
                  transition
                  duration-300
                  hover:scale-[1.02]
                "
              />

            </Link>


            <Link
              to="/join-team/volunteer"
              className="
                mt-4
                inline-flex
                items-center
                justify-center
                bg-[#9d0b0b]
                px-6
                py-2.5
                text-[14px]
                font-semibold
                uppercase
                text-white
                transition
                duration-300
                hover:bg-[#820909]
              "
            >
              Read More
            </Link>

          </div>


          {/* ================= AMBASSADOR ================= */}
          <div className="flex flex-col items-center">

            <Link
              to="/join-team/ambassador"
              className="block w-full"
            >

              <img
                src={ambassador}
                alt="Student Ambassador Program"
                className="
                  mx-auto
                  h-[330px]
                  w-full
                  max-w-[310px]
                  object-contain
                  transition
                  duration-300
                  hover:scale-[1.02]
                "
              />

            </Link>


            <Link
              to="/join-team/ambassador"
              className="
                mt-4
                inline-flex
                items-center
                justify-center
                bg-[#9d0b0b]
                px-6
                py-2.5
                text-[14px]
                font-semibold
                uppercase
                text-white
                transition
                duration-300
                hover:bg-[#820909]
              "
            >
              Read More
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default JoinTeam;