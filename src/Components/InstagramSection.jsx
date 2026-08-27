import { FaInstagram } from "react-icons/fa";
import RibatLogo from "../assets/Ribat-Logo.png";

function InstagramSection() {
  return (
    <section
      className="
        w-full
        bg-[#eeeeee]
        py-16
        sm:py-20
        md:py-24
        lg:py-20
      "
    >
      <div className="flex w-full flex-col items-center justify-center">

        {/* INSTAGRAM PROFILE */}
        <div className="flex items-center justify-center gap-2">

          {/* Small Logo */}
          <div
            className="
              flex
              h-[42px]
              w-[42px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              bg-[#333333]
            "
          >
            <img
              src={RibatLogo}
              alt="Ribat"
              className="
                h-[30px]
                w-[30px]
                object-contain
              "
            />
          </div>

          {/* Instagram Username */}
          <div className="flex items-center gap-1">

            <FaInstagram
              className="text-[22px] text-[#333333]"
            />

            <span
              className="
                text-[20px]
                font-bold
                text-[#444444]

                sm:text-[22px]
                md:text-[23px]
              "
            >
              @ribatpakistan
            </span>

            {/* Verified */}
            <span
              className="
                flex
                h-[17px]
                w-[17px]
                items-center
                justify-center
                rounded-full
                bg-[#1da1f2]
                text-[11px]
                font-bold
                text-white
              "
            >
              ✓
            </span>

          </div>
        </div>

        {/* FOLLOW BUTTON */}
        <a
          href="https://www.instagram.com/ribatpakistan/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-12
            flex
            items-center
            gap-2
            rounded-[3px]
            bg-[#2196f3]
            px-4
            py-2
            text-[14px]
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-[#1976d2]
            hover:shadow-md
          "
        >
          <FaInstagram size={15} />
          <span>Follow on Instagram</span>
        </a>

      </div>
    </section>
  );
}

export default InstagramSection;