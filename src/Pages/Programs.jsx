import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProgramCard from "../Components/ProgramCard";
import programsData from "../data/ProgramsData";

const Programs = () => {
  return (
    <div className="min-h-screen bg-white">

      <Navbar />

      {/* ================= ALL PROGRAMS ================= */}
      <main className="pt-[110px] pb-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h1
            className="
              mb-12
              text-center
              text-3xl
              font-bold
              text-[#9d0b0b]

              md:text-4xl
              lg:text-5xl
            "
          >
            All Programs
          </h1>


          {/* ================= PROGRAM BOOKS ================= */}
          <div
            className="
              grid
              grid-cols-1
              gap-10

              sm:grid-cols-2

              lg:grid-cols-3
              lg:gap-12
            "
          >

            {programsData.map((program) => (
              <ProgramCard
                key={program.id}
                program={program}
              />
            ))}

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
};

export default Programs;