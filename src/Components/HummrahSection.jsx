import hummrahImage from "../assets/hummrah.jpg";
import collaborationImage from "../assets/humrrah2.png";
import hummrahImg from "../assets/humrrah3.jpg";

const HummrahSection = () => {
  return (
    <>
      {/* ================= HUMRAAH HERO ================= */}
      <section className="relative w-full">

        <img
          src={hummrahImage}
          alt="An Inclusivity Project by Ribat"
          className="
            h-[450px]
            w-full
            object-cover
            md:h-[550px]
            lg:h-[700px]
            xl:h-[750px]
          "
        />

        {/* Bottom Heading */}
        <div className="absolute bottom-8 left-0 flex w-full justify-center px-4 text-center md:bottom-10">
          <h1
            className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ color: "#9d0b0b" }}
          >
            An Inclusivity Project by Ribat
          </h1>
        </div>

      </section>


      {/* ================= COLLABORATION SECTION ================= */}
      <section className="w-full bg-[#f04450]">

        <div className="
          mx-auto
          flex
          min-h-[350px]
          w-full
          max-w-[1400px]
          items-center
          justify-center
          gap-10
          px-6
          py-12

          md:flex-row
          md:px-10
          lg:px-16
        ">

          {/* LEFT TEXT */}
          <div className="w-full text-center md:w-1/2">

            <h2 className="
              text-3xl
              font-bold
              leading-tight
              text-white
              md:text-4xl
              lg:text-5xl
            "style={{ color: "white" }}>
              In Collaboration With
            </h2>

           <p className="
  mt-2
  text-base
  leading-relaxed
  text-white
  md:text-lg
">
  Department of Empowerment for Persons with Disabilities
  <br />
  (DEPD) Government of Sindh
</p>

          </div>


          {/* RIGHT IMAGE */}
          <div className="flex w-full justify-center md:w-1/2">

            <img
              src={collaborationImage}
              alt="Government of Sindh and DEPD"
              className="
                w-full
                max-w-[560px]
                object-contain
              "
            />

          </div>

        </div>

      </section>
      {/* ================= VISION FOR INCLUSIVITY ================= */}
<section className="w-full px-6 py-12 lg:px-16">
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

    {/* LEFT IMAGE */}
    <div className="w-full">
      <img
        src={hummrahImg}
        alt="Humraah"
        className="h-[300px] w-full rounded-lg object-cover md:h-[380px] lg:h-[450px]"
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="text-left">

      <h2 className="mb-3 text-2xl font-bold md:text-3xl">
        <span className="text-[#f4c542]">
          A Vision For Inclusivity
        </span>
      </h2>

      <p className="mb-5 text-sm leading-6 text-gray-700 md:text-base">
        Humraah is a project in collaboration with the DEPD dedicated to
        empowering differently-abled individuals through accessible religious
        education, sports, and enrichment programs.
      </p>

      <h3 className="mb-2 text-lg font-bold text-black md:text-xl">
        Our Mission:
      </h3>

      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 md:text-base">
        <li>
          To build an inclusive community where every individual feels valued
          and empowered.
        </li>
        <li>
          To foster opportunities for skill development, spiritual growth, and
          recreational engagement.
        </li>
        <li>
          To ensure that no one is left behind on their journey to growth and
          connection.
        </li>
      </ul>

      <h3 className="mb-2 mt-6 text-lg font-bold text-black md:text-xl">
        Key Features:
      </h3>

      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 md:text-base">
        <li>
          Programs tailored for individuals with special needs.
        </li>
        <li>
          Specialized training for teachers, trainers, and volunteers.
        </li>
        <li>
          Accessible resources, including interpreters and adaptive learning
          materials.
        </li>
      </ul>

    </div>
  </div>
</section>
    </>
  );
};

export default HummrahSection;