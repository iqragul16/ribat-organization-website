import { useParams } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function TeamDetails() {
  const { type } = useParams();

  const isVolunteer = type === "volunteer";

  return (
    <div className="min-h-screen bg-white">

      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="pt-[74px]">

        <section className="w-full bg-white">

          <div
            className="
              mx-auto
              max-w-[1200px]
              px-6
              pt-0
              pb-12
              md:pb-16
            "
          >

            {/* ================= TITLE ================= */}
            <h2
              className="
                text-left
                text-[26px]
                font-bold
                leading-tight
                text-[#244bb3]
                sm:text-[32px]
                md:text-[38px]
                m-0
              "
            >
              {isVolunteer
                ? "Be a Changemaker: Volunteer with Ribat to Promote Inclusivity"
                : "Ribat’s Student Ambassador Program"}
            </h2>


            {/* ================= VOLUNTEER ================= */}
            {isVolunteer ? (

              <div
                className="
                  mt-6
                  w-full
                  max-w-[900px]
                  text-left
                  text-[15px]
                  leading-[1.6]
                  text-[#444]
                  md:text-[16px]
                "
              >

                <p className="m-0">
                  Join hands with us to create a world where everyone belongs!
                  Ribat’s Inclusivity Program is a year-long opportunity for
                  passionate individuals to contribute to a meaningful cause.
                </p>

                <p className="mt-5">
                  As a volunteer, you’ll play a vital role in fostering
                  inclusion for Persons with Disabilities (PWDs) through
                  education, sports, and enrichment initiatives.
                </p>


                {/* What You'll Gain */}
                <h2
                  className="
                    mt-7
                    mb-0
                    text-left
                    text-[21px]
                    font-bold
                    text-[#244bb3]
                  "
                >
                  What You’ll Gain:
                </h2>

                <ul className="mt-3 list-disc space-y-2 pl-6">

                  <li>
                    Hands-on experience in creating inclusive spaces.
                  </li>

                  <li>
                    Sensitivity training to better understand and support PWDs.
                  </li>

                  <li>
                    Leadership and teamwork skills that will last a lifetime.
                  </li>

                  <li>
                    The satisfaction of being part of a movement for positive
                    change.
                  </li>

                </ul>


                {/* Who Should Join */}
                <h2
                  className="
                    mt-7
                    mb-0
                    text-left
                    text-[21px]
                    font-bold
                    text-[#244bb3]
                  "
                >
                  Who Should Join?
                </h2>

                <p className="mt-3">
                  We’re looking for committed, empathetic, and driven
                  individuals who are eager to make a difference in their
                  community. Whether you’re a student, professional, or simply
                  passionate about inclusivity, this program is for you!
                </p>


                {/* How to Join */}
                <h2
                  className="
                    mt-7
                    mb-0
                    text-left
                    text-[21px]
                    font-bold
                    text-[#244bb3]
                  "
                >
                  How to Join:
                </h2>

                <p className="mt-3">
                  📩 For queries, email at{" "}
                  <strong>info@ribat.com.pk</strong>
                </p>

                <p className="mt-2">
                  📞 For More Information: Call us at{" "}
                  <strong>0319-2009490</strong>
                </p>

                <p className="mt-6">
                  Together, let’s empower abilities and inspire change.
                  Become a volunteer for inclusivity today.
                </p>

              </div>

            ) : (

              /* ================= STUDENT AMBASSADOR ================= */

              <div
                className="
                  mt-6
                  w-full
                  max-w-[900px]
                  text-left
                  text-[15px]
                  leading-[1.6]
                  text-[#444]
                  md:text-[16px]
                "
              >

                <p className="m-0">
                  Ribat’s Student Ambassador Program is a year-long experience
                  and a unique opportunity for students to join the Ribat
                  movement to uplift the community and increase social
                  development under the guidance of the Shari’ah.
                </p>

                <p className="mt-5">
                  Student Ambassadors primarily operate in two domains:
                  advocacy of Ribat’s programs and recruitment support on their
                  respective campuses.
                </p>

                <p className="mt-5">
                  They play a vital role in mobilizing their peers, raising
                  awareness, and driving meaningful initiatives that can help
                  Ribat in its mission.
                </p>

                <h2
                  className="
                    mt-7
                    mb-0
                    text-left
                    text-[21px]
                    font-bold
                    text-[#9d0b0b]
                  "
                >
                  AN OPPORTUNITY NOT TO BE MISSED!
                </h2>

              </div>

            )}

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}
      <Footer />

    </div>
  );
}

export default TeamDetails;