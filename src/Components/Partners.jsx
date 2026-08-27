import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";
import partner3 from "../assets/partner3.png";
import partner4 from "../assets/partner4.png";
import partner5 from "../assets/partner5.png";
import partner6 from "../assets/partner6.png";
import partner7 from "../assets/partner7.png";
import partner8 from "../assets/partner8.png";
import partner9 from "../assets/partner9.png";
import partner10 from "../assets/partner10.png";
import partner11 from "../assets/partner11.png";
import partner12 from "../assets/partner12.png";
import partner13 from "../assets/partner13.png";
import partner14 from "../assets/partner14.png";
import partner15 from "../assets/partner15.png";
import partner16 from "../assets/partner16.png";
import partner17 from "../assets/partner17.png";

function Partners() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,
    partner9,
    partner10,
    partner11,
    partner12,
    partner13,
    partner14,
    partner15,
    partner16,
    partner17,
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 md:py-16 lg:py-20">

      {/* ================= HEADING ================= */}
      <div className="mb-10 text-center sm:mb-12 md:mb-14 lg:mb-16">

                            <h1 className="!text-[#9d0b0b] text-3xl font-extrabold uppercase tracking-[3px] sm:text-4xl md:text-7xl">

          Our Partners
        </h1>

        {/* Small line */}
        <div
          className="
            mx-auto
            mt-3
            h-[2px]
            w-[70px]
            bg-[#9d0b0b]

            sm:w-[90px]
            md:w-[110px]
          "
        />

      </div>

      {/* ================= LOGOS ================= */}
     {/* ================= LOGOS ================= */}

<div className="mx-auto w-full max-w-[1250px] px-5 sm:px-8 lg:px-10">

  {/* ================= DESKTOP ================= */}
  <div
    className="
      hidden
      md:grid
      md:grid-cols-6
      md:items-center
      md:gap-x-5
      md:gap-y-14

      lg:gap-x-7
      lg:gap-y-16
    "
  >
    {partners.slice(0, 12).map((logo, index) => (
      <div
        key={index}
        className="
          flex
          h-[120px]
          w-full
          items-center
          justify-center

          lg:h-[135px]
        "
      >
        <img
          src={logo}
          alt={`Partner ${index + 1}`}
          className="
            block
            max-h-[90px]
            max-w-[145px]
            object-contain

            lg:max-h-[105px]
            lg:max-w-[170px]
          "
          loading="lazy"
        />
      </div>
    ))}
  </div>


  {/* ================= DESKTOP THIRD ROW ================= */}

  <div
    className="
      hidden
      md:flex
      md:items-center
      md:justify-center
      md:gap-x-10
      md:pt-14

      lg:gap-x-14
      lg:pt-16
    "
  >
    {partners.slice(12, 17).map((logo, index) => (
      <div
        key={index + 12}
        className="
          flex
          h-[120px]
          w-[145px]
          items-center
          justify-center

          lg:h-[135px]
          lg:w-[170px]
        "
      >
        <img
          src={logo}
          alt={`Partner ${index + 13}`}
          className="
            block
            max-h-[90px]
            max-w-[145px]
            object-contain

            lg:max-h-[105px]
            lg:max-w-[170px]
          "
          loading="lazy"
        />
      </div>
    ))}
  </div>


  {/* ================= MOBILE / TABLET ================= */}

  {/* ================= MOBILE / TABLET ================= */}
<div className="md:hidden">

  {/* FIRST 15 LOGOS — 3 PER ROW */}
  <div
    className="
      grid
      grid-cols-3
      items-center
      gap-x-4
      gap-y-10

      sm:gap-x-6
      sm:gap-y-12
    "
  >
    {partners.slice(0, 15).map((logo, index) => (
      <div
        key={index}
        className="
          flex
          h-[90px]
          w-full
          items-center
          justify-center

          sm:h-[105px]
        "
      >
        <img
          src={logo}
          alt={`Partner ${index + 1}`}
          className="
            block
            max-h-[70px]
            max-w-[100px]
            object-contain

            sm:max-h-[80px]
            sm:max-w-[120px]
          "
          loading="lazy"
        />
      </div>
    ))}
  </div>


  {/* LAST 2 LOGOS — CENTER */}
  <div
    className="
      mt-10
      flex
      items-center
      justify-center
      gap-x-4

      sm:mt-12
      sm:gap-x-6
    "
  >
    {partners.slice(15, 17).map((logo, index) => (
      <div
        key={index + 15}
        className="
          flex
          h-[90px]
          w-[calc(33.333%-8px)]
          items-center
          justify-center

          sm:h-[105px]
          sm:w-[calc(33.333%-12px)]
        "
      >
        <img
          src={logo}
          alt={`Partner ${index + 16}`}
          className="
            block
            max-h-[70px]
            max-w-[100px]
            object-contain

            sm:max-h-[80px]
            sm:max-w-[120px]
          "
          loading="lazy"
        />
      </div>
    ))}
  </div>

</div>

</div>

    </section>
  );
}

export default Partners;