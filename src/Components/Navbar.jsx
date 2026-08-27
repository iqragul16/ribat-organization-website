import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import logo from "../assets/Ribat-Logo.png";


export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  // =====================================================
  // HOME
  // =====================================================

  const goHome = () => {

    setMenuOpen(false);

    if (location.pathname === "/") {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    } else {

      navigate("/");
    }
  };


  // =====================================================
  // HOME SECTIONS
  // =====================================================

  const goToSection = (sectionId) => {

    setMenuOpen(false);

    // Agar already Home page par hain
    if (location.pathname === "/") {

      const section = document.getElementById(sectionId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

      return;
    }


    // Agar kisi aur page par hain
    navigate("/");


    // Home page load hone ke baad section par jayega
    setTimeout(() => {

      const section = document.getElementById(sectionId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 500);
  };


  return (

    <header className="fixed left-0 top-0 z-[9999] w-full">


      {/* ================================================= */}
      {/* TOP RED STRIP */}
      {/* ================================================= */}

      <div className="h-[4px] w-full bg-[#9d0b0b]" />


      {/* ================================================= */}
      {/* MAIN HEADER */}
      {/* ================================================= */}

      <div className="relative h-[70px] bg-white shadow-md">


        <div className="relative flex h-full w-full items-center">


          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={goHome}
            className="
              absolute
              left-5
              top-0
              z-[100]
              flex
              h-[125px]
              w-[92px]
              items-center
              justify-center
              border-0
              bg-white
              p-0
              shadow-[0_10px_25px_rgba(0,0,0,0.12)]

              md:left-[40px]
              md:h-[140px]
              md:w-[92px]

              lg:left-[60px]

              xl:left-[88px]
            "
          >

            <img
              src={logo}
              alt="Ribat"
              className="
                h-[105px]
                w-[72px]
                object-contain

                md:h-[118px]
                md:w-[76px]
              "
            />

          </button>


          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav
            className="
              ml-[125px]
              hidden
              items-center
              gap-5
              md:flex

              lg:ml-[170px]
              lg:gap-6

              xl:ml-[200px]
              xl:gap-8
            "
          >


            {/* ================= HOME ================= */}

            <button
              type="button"
              onClick={goHome}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                p-0
                text-[12px]
                font-medium
                text-[#333333]
                transition
                duration-300
                hover:text-[#9d0b0b]

                lg:text-[13px]
                xl:text-[14px]
              "
            >
              Home
            </button>


            {/* ================= ABOUT ================= */}

            <button
              type="button"
              onClick={() => goToSection("about")}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                p-0
                text-[12px]
                font-medium
                text-[#333333]
                transition
                duration-300
                hover:text-[#9d0b0b]

                lg:text-[13px]
                xl:text-[14px]
              "
            >
              About
            </button>


            {/* ================= SERVICES ================= */}

            <Link
  to="/services"
  className="
    whitespace-nowrap
    text-[12px]
    font-medium
    text-[#333333]
    transition
    duration-300
    hover:text-[#9d0b0b]

    lg:text-[13px]
    xl:text-[14px]
  "
>
  Services
</Link>


            {/* ================= PROGRAMS ================= */}

            <Link
              to="/programs"
              className="
                whitespace-nowrap
                text-[12px]
                font-medium
                text-[#333333]
                transition
                duration-300
                hover:text-[#9d0b0b]

                lg:text-[13px]
                xl:text-[14px]
              "
            >
              Programs
            </Link>


            {/* ================= HUMRAAH ================= */}

            <Link
  to="/humraah"
  className="
    whitespace-nowrap
    text-[12px]
    font-medium
    text-[#333333]
    transition
    duration-300
    hover:text-[#9d0b0b]

    lg:text-[13px]
    xl:text-[14px]
  "
>
  Humraah
</Link>


            {/* ================= JOIN OUR TEAM ================= */}

            <Link
              to="/join-team"
              className="
                whitespace-nowrap
                text-[12px]
                font-medium
                text-[#333333]
                transition
                duration-300
                hover:text-[#9d0b0b]

                lg:text-[13px]
                xl:text-[14px]
              "
            >
              Join our team
            </Link>


            {/* ================= CONTACT ================= */}

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="
                whitespace-nowrap
                border-0
                bg-transparent
                p-0
                text-[12px]
                font-medium
                text-[#333333]
                transition
                duration-300
                hover:text-[#9d0b0b]

                lg:text-[13px]
                xl:text-[14px]
              "
            >
              Contact Us
            </button>


          </nav>


          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <div className="ml-auto hidden h-full items-center md:flex">


            {/* SEARCH + SOCIAL */}

            <div
              className="
                flex
                h-full
                items-center
                gap-4
                px-4

                lg:px-5
              "
            >

              {/* SEARCH */}

              <button
                type="button"
                aria-label="Search"
                className="
                  text-[#222222]
                  transition
                  duration-300
                  hover:text-[#9d0b0b]
                "
              >
                <FaSearch size={16} />
              </button>


              {/* FACEBOOK */}

              <a
                href="#"
                aria-label="Facebook"
                className="
                  text-[#222222]
                  transition
                  duration-300
                  hover:text-[#9d0b0b]
                "
              >
                <FaFacebookF size={15} />
              </a>


              {/* INSTAGRAM */}

              <a
                href="#"
                aria-label="Instagram"
                className="
                  text-[#222222]
                  transition
                  duration-300
                  hover:text-[#9d0b0b]
                "
              >
                <FaInstagram size={16} />
              </a>

            </div>


            {/* ================================================= */}
            {/* HELP US GROW */}
            {/* ================================================= */}

            <a
              href="#"
              className="
                flex
                h-[70px]
                min-w-[170px]
                items-center
                justify-center
                bg-[#9d0b0b]
                px-6
                text-[12px]
                font-bold
                uppercase
                text-white
                transition
                duration-300
                hover:bg-[#820909]

                lg:min-w-[190px]
                lg:text-[13px]

                xl:min-w-[204px]
              "
            >
              Help Us Grow
            </a>

          </div>


          {/* ================================================= */}
          {/* MOBILE HAMBURGER */}
          {/* ================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            className="
              relative
              z-[200]
              ml-auto
              mr-5
              flex
              h-10
              w-10
              items-center
              justify-center
              border-0
              bg-transparent
              text-[30px]
              leading-none
              text-[#333333]

              md:hidden
            "
          >
            {menuOpen ? "×" : "☰"}
          </button>


        </div>


        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        <div
          className={`
            absolute
            right-0
            top-[70px]
            z-[150]
            w-[210px]
            overflow-hidden
            bg-white
            shadow-[0_8px_25px_rgba(0,0,0,0.18)]
            transition-all
            duration-300
            md:hidden

            ${
              menuOpen
                ? "pointer-events-auto max-h-[600px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >

          <nav className="flex flex-col px-5 py-3">


            {/* ================= HOME ================= */}

            <button
              type="button"
              onClick={goHome}
              className="
                w-full
                border-b
                border-gray-100
                bg-transparent
                py-3
                text-left
                text-[15px]
                font-medium
                text-[#3f332c]
                transition
                hover:text-[#9d0b0b]
              "
            >
              Home
            </button>


            {/* ================= ABOUT ================= */}

            <button
              type="button"
              onClick={() => goToSection("about")}
              className="
                w-full
                border-b
                border-gray-100
                bg-transparent
                py-3
                text-left
                text-[15px]
                font-medium
                text-[#3f332c]
                transition
                hover:text-[#9d0b0b]
              "
            >
              About
            </button>


            {/* ================= SERVICES ================= */}

            <Link
  to="/services"
  onClick={() => setMenuOpen(false)}
  className="
    w-full
    border-b
    border-gray-100
    py-3
    text-[15px]
    font-medium
    text-[#3f332c]
    transition
    hover:text-[#9d0b0b]
  "
>
  Services
</Link>


            {/* ================= PROGRAMS ================= */}

            <Link
              to="/programs"
              onClick={() => setMenuOpen(false)}
              className="
                w-full
                border-b
                border-gray-100
                py-3
                text-[15px]
                font-medium
                text-[#3f332c]
                transition
                hover:text-[#9d0b0b]
              "
            >
              Programs
            </Link>


            {/* ================= HUMRAAH ================= */}

            <Link
  to="/humraah"
  onClick={() => setMenuOpen(false)}
  className="
    w-full
    border-b
    border-gray-100
    py-3
    text-[15px]
    font-medium
    text-[#3f332c]
    transition
    hover:text-[#9d0b0b]
  "
>
  Humraah
</Link>


            {/* ================= JOIN OUR TEAM ================= */}

            <Link
              to="/join-team"
              onClick={() => setMenuOpen(false)}
              className="
                w-full
                border-b
                border-gray-100
                py-3
                text-[15px]
                font-medium
                text-[#3f332c]
                transition
                hover:text-[#9d0b0b]
              "
            >
              Join our team
            </Link>


            {/* ================= CONTACT ================= */}

            <button
              type="button"
              onClick={() => goToSection("contact")}
              className="
                w-full
                border-b
                border-gray-100
                bg-transparent
                py-3
                text-left
                text-[15px]
                font-medium
                text-[#3f332c]
                transition
                hover:text-[#9d0b0b]
              "
            >
              Contact Us
            </button>


            {/* ================= HELP US GROW ================= */}

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                mt-3
                flex
                w-full
                items-center
                justify-center
                bg-[#9d0b0b]
                px-4
                py-3
                text-[13px]
                font-bold
                uppercase
                text-white
                transition
                duration-300
                hover:bg-[#820909]
              "
            >
              Help Us Grow
            </a>


          </nav>

        </div>

      </div>

    </header>
  );
}