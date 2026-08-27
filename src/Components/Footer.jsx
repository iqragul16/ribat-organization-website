import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

import RibatLogo from "../assets/Ribat-Logo.png";

function Footer() {
  return (
    <footer
      className="
        w-full
        border-t
        border-white
        bg-[#292929]
        text-white
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-[430px]
          w-full
          max-w-[900px]
          flex-col
          items-center
          justify-center
          px-5
          py-12

          sm:px-8
          md:min-h-[430px]
        "
      >

        {/* ================= LOGO ================= */}

        <div className="flex flex-col items-center">

          <img
            src={RibatLogo}
            alt="Ribat Logo"
            className="
              h-[125px]
              w-[90px]
              object-contain

              sm:h-[135px]
              sm:w-[100px]

              md:h-[145px]
              md:w-[105px]
            "
          />

        </div>

        {/* ================= LINE ================= */}

        <div
          className="
            mt-3
            h-[1px]
            w-[280px]
            bg-[#dddddd]

            sm:w-[350px]
            md:w-[390px]
          "
        />

        {/* ================= CONTACT ================= */}

        <div
          className="
            mt-5
            flex
            flex-col
            items-center
            gap-3
            text-center
          "
        >

          {/* ADDRESS */}
          <div className="flex items-center gap-2">

            <FaHome
              className="shrink-0 text-[#9d0b0b]"
              size={20}
            />

            <span
              className="
                text-[15px]
                font-medium
                sm:text-[16px]
                md:text-[17px]
              "
            >
              Main Alamgir Road, D.M.C.H.S., Karachi
            </span>

          </div>

          {/* PHONE */}
          <div className="flex items-center gap-2">

            <FaPhone
              className="shrink-0 text-[#9d0b0b]"
              size={18}
            />

            <a
              href="tel:+923192009490"
              className="
                text-[15px]
                font-medium
                transition-colors
                hover:text-[#9d0b0b]

                sm:text-[16px]
                md:text-[17px]
              "
            >
              +92 319 200 9490, 021 34930482
            </a>

          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-2">

            <FaEnvelope
              className="shrink-0 text-[#9d0b0b]"
              size={18}
            />

            <a
              href="mailto:info@ribat.com.pk"
              className="
                text-[15px]
                font-medium
                transition-colors
                hover:text-[#9d0b0b]

                sm:text-[16px]
                md:text-[17px]
              "
            >
              info@ribat.com.pk
            </a>

          </div>

        </div>

        {/* ================= SOCIAL ICONS ================= */}

        <div className="mt-5 flex items-center justify-center gap-3">

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ribatpakistan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              flex
              h-[34px]
              w-[34px]
              items-center
              justify-center
              rounded-[3px]
              bg-[#9d0b0b]
              text-white
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
              hover:text-[#9d0b0b]
            "
          >
            <FaInstagram size={19} />
          </a>

          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="
              flex
              h-[34px]
              w-[34px]
              items-center
              justify-center
              rounded-[3px]
              bg-[#9d0b0b]
              text-white
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
              hover:text-[#9d0b0b]
            "
          >
            <FaFacebookF size={18} />
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            aria-label="LinkedIn"
            className="
              flex
              h-[34px]
              w-[34px]
              items-center
              justify-center
              rounded-[3px]
              bg-[#9d0b0b]
              text-white
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white
              hover:text-[#9d0b0b]
            "
          >
            <FaLinkedinIn size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;