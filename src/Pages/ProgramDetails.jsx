import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import programsData from "../data/ProgramsData";

const ProgramDetails = () => {
  const { id } = useParams();

  const program = programsData.find(
    (item) => item.id === Number(id)
  );

  if (!program) {
    return (
      <>
        <Navbar />

        <div className="flex min-h-[70vh] items-center justify-center pt-[80px]">
          <h1 className="text-3xl font-bold">
            Program Not Found
          </h1>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      <main className="pt-[74px]">

        <section className="grid min-h-[calc(100vh-74px)] grid-cols-1 lg:grid-cols-2">

          {/* ================= LEFT BOOK ================= */}
          <div className="flex items-center justify-center bg-gray-50 px-6 py-12 lg:px-12">

            <img
              src={program.image}
              alt={program.title}
              className="
                w-full
                max-w-[600px]
                object-contain
              "
            />

          </div>


          {/* ================= RIGHT DETAILS ================= */}
          <div className="px-6 py-12 sm:px-10 lg:px-14 xl:px-20">

            {/* Program Title */}
            <h1 className="text-3xl font-bold text-[#333333] md:text-4xl">
              {program.title}
            </h1>


            {/* Description */}
            <p className="mt-6 text-base leading-7 text-gray-600">
              {program.description}
            </p>


            {/* Tagline */}
            {program.tagline && (
              <p className="mt-4 text-base font-medium leading-7 text-gray-700">
                {program.tagline}
              </p>
            )}


            {/* ================= COACH ================= */}
            {program.coach && (
              <div className="mt-8">

                <h2 className="text-xl font-bold text-[#333333]">
                  Meet Your Coach: {program.coach}
                </h2>

                {program.coachDetails &&
                  program.coachDetails.length > 0 && (
                    <ul className="mt-4 space-y-3">

                      {program.coachDetails.map(
                        (detail, index) => (
                          <li
                            key={index}
                            className="
                              flex
                              gap-3
                              text-sm
                              leading-6
                              text-gray-600
                            "
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#9d0b0b]" />

                            <span>{detail}</span>
                          </li>
                        )
                      )}

                    </ul>
                  )}

              </div>
            )}


            {/* ================= LEVELS / TIMINGS ================= */}
            {program.levels &&
              program.levels.length > 0 && (
                <div className="mt-8">

                  <h2 className="text-xl font-bold text-[#333333]">
                    Timings
                  </h2>

                  <div className="mt-4 space-y-2">

                    {program.levels.map(
                      (level, index) => (
                        <p
                          key={index}
                          className="text-sm text-gray-600"
                        >
                          {level}
                        </p>
                      )
                    )}

                  </div>

                </div>
              )}


            {/* ================= FEES ================= */}
            <div className="mt-8 border-t border-gray-200 pt-6">

              {/* Registration */}
              <div className="flex items-center justify-between border-b border-gray-100 py-4">

                <span className="font-semibold text-gray-700">
                  Registration Fee
                </span>

                <span className="font-semibold text-[#9d0b0b]">
                  {program.registrationFee}
                </span>

              </div>


              {/* Monthly */}
              <div className="flex items-center justify-between border-b border-gray-100 py-4">

                <span className="font-semibold text-gray-700">
                  Tuition Fee
                </span>

                <span className="font-semibold text-[#9d0b0b]">
                  {program.monthlyFee}
                </span>

              </div>


              {/* Uniform */}
              <div className="flex items-center justify-between py-4">

                <span className="font-semibold text-gray-700">
                  Uniform
                </span>

                <span className="font-semibold text-[#9d0b0b]">
                  {program.uniformFee}
                </span>

              </div>

            </div>


            {/* ================= REGISTER ================= */}
            <div className="mt-8">

              <a
                href={program.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  bg-[#9d0b0b]
                  px-8
                  py-3
                  text-sm
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  transition
                  duration-300
                  hover:bg-[#820909]
                "
              >
                Register Now
              </a>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
};

export default ProgramDetails;