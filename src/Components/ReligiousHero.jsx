function ReligiousHero() {
  return (
    <section
    id="contact"
      className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        bg-[#9d0b0b]

        flex
        min-h-[500px]
        items-center
        justify-center

        sm:min-h-[520px]
        md:min-h-[540px]
        lg:min-h-[600px]
        xl:min-h-[580px]
      "
    >
      {/* Background Design */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -left-16
            top-10
            h-40
            w-40
            rotate-45
            border
            border-black/20

            sm:h-48
            sm:w-48

            md:h-56
            md:w-56
          "
        />

        <div
          className="
            absolute
            -right-20
            top-0
            h-48
            w-48
            rotate-45
            border
            border-black/20

            sm:h-56
            sm:w-56

            md:h-64
            md:w-64
          "
        />

        <div
          className="
            absolute
            -bottom-20
            left-[15%]
            h-40
            w-40
            rotate-45
            border
            border-black/15

            sm:h-48
            sm:w-48

            md:h-56
            md:w-56
          "
        />

        <div
          className="
            absolute
            -bottom-16
            right-[15%]
            h-36
            w-36
            rotate-45
            border
            border-black/20

            sm:h-44
            sm:w-44

            md:h-52
            md:w-52
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-52
            w-52
            -translate-x-1/2
            -translate-y-1/2
            rotate-45
            border
            border-white/10

            sm:h-64
            sm:w-64

            md:h-80
            md:w-80
          "
        />
      </div>

      {/* Center Content */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-[1400px]
          px-5
          text-center

          sm:px-8
          md:px-10
        "
      >

        {/* Main Heading */}
        <h1
          className="
            !m-0
            !text-white
            font-bold
            leading-[0.9]
            tracking-tight

            text-[58px]

            sm:text-[72px]

            md:text-[88px]

            lg:text-[108px]

            xl:text-[120px]
          "
        >
          RIBAT
        </h1>

        {/* Subtitle */}
        <p
          className="
            !m-0
            !mt-3
            !text-white
            font-medium
            uppercase
            leading-[1.15]
            tracking-[3px]

            text-[18px]

            sm:mt-4
            sm:text-[23px]
            sm:tracking-[4px]

            md:text-[30px]
            md:tracking-[5px]

            lg:text-[38px]
            lg:tracking-[6px]

            xl:text-[42px]
          "
        >
          An Islamic Community
          <br />
          Resource Center
        </p>

      </div>
    </section>
  );
}

export default ReligiousHero;