import campusImage from "../assets/aboutimg.jpg";

function AboutSection() {
  return (
    <section
  id="about"
  className="relative w-full bg-white scroll-mt-[90px]"
>

      {/* TOP GREY STRIP */}
      <div
        className="
          hidden
          bg-[#eeeeeece]
          md:block
          md:h-[80px]
          lg:h-[100px]
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1350px]
          flex-col
          px-6

          md:flex-row
          md:items-center
          md:gap-10
          md:px-10
          md:min-h-[480px]

          lg:gap-12
          lg:px-12
          lg:min-h-[380px]
        "
      >
{/* LEFT TEXT */}
<div
  className="
    order-1
    w-full
    py-10
    text-left

    md:w-[45%]
    md:py-16

    lg:w-[46%]
  "
>
  {/* FIRST PARAGRAPH */}
  <p
    style={{
      color: "#172554",
      fontSize: "19px",
      lineHeight: "1.65",
      textAlign: "left",
      margin: "0 0 40px 0",
    }}
  >
    Ribat’s institution is founded upon the ideology of Islam, with a
    commitment to preparing the youth to become strong and mindful
    nation builders of tomorrow. Under the guidance of the Shari’ah,
    Ribat is dedicated to uplifting the community and increasing social
    development.
  </p>

  {/* SECOND PARAGRAPH */}
  <p
    style={{
      color: "#172554",
      fontSize: "19px",
      lineHeight: "1.65",
      textAlign: "left",
      margin: "0",
    }}
  >
    The project includes state-of-the-art facilities designed for
    recreation and improving learning outcomes. Ribat aims to build a
    well-rounded society for the next generation. The dream of (late)
    Hafiz Muhammed Ismail &amp; (late) Hafiz Muhammed Ibrahim came to
    reality with the construction of The Campus and its facilities; it
    is a safe, healthy, and academically fruitful place for every
    individual.
  </p>
</div>

        {/*
          RIGHT IMAGE PLACEHOLDER
          At md+ this column collapses to 0 height (its content is pulled
          out of flow with md:absolute), so items-center on the row places
          this 0px box exactly at the row's vertical midpoint. The image
          inside is then centered on that same midpoint, which makes it
          overflow the row symmetrically top and bottom.
        */}
        <div
          className="
            order-2
            relative
            w-full

            md:w-[55%]
          "
        >
          <div
            className="
              relative
              z-20

              md:absolute
              md:left-0
              md:right-0
              md:top-1/2
              md:-translate-y-1/2
            "
          >
            {/* Light grey shadow */}
            <div
              className="
                absolute
                -inset-5
                z-0
                bg-[#e5e5e5]
                blur-[30px]
              "
            />

            <img
  src={campusImage}
  alt="Ribat Campus"
  className="
    relative
    z-10
    block
    h-[400px]
    w-full
    object-cover

    sm:h-[400px]
    md:h-[700px]
    lg:h-[660px]
  "
/>
          </div>
        </div>
      </div>

      {/* BOTTOM GREY STRIP */}
      <div
        className="
          hidden
          bg-[#eeeeeece]

          md:relative
          md:z-0
          md:block
          md:h-[80px]

          lg:h-[100px]
        "
      />

    </section>
  );
}

export default AboutSection;