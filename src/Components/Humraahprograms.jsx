import React from "react";
import { Link } from "react-router-dom";

const HumraahPrograms = () => {
  const programs = [
    {
      title: "Skill Development Programs",
      path: "/humraah/skill-development",
      icon: "💡",
      bg: "#244bb3",
    },
    {
      title: "Sports Programs",
      path: "/humraah/sports-programs",
      icon: "⚽",
      bg: "#ff464d",
    },
    {
      title: "Family Support Group",
      path: "/humraah/family-support-group",
      icon: "🤝",
      bg: "#f7c900",
    },
    {
      title: "Legal Mediation Services for PWDs",
      path: "/humraah/legal-mediation",
      icon: "⚖",
      bg: "#20a9e8",
    },
  ];

  return (
    <section className="w-full bg-[#3d5ba9] py-16">
      <div className="max-w-[1200px] mx-auto px-5">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.path}
              className="group block no-underline"
            >
              {/* Icon */}
              <div
                className="h-[170px] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2"
                style={{ backgroundColor: program.bg }}
              >
                <span className="text-white text-[65px]">
                  {program.icon}
                </span>
              </div>

              {/* Title */}
              <div className="min-h-[105px] bg-white flex items-center justify-center text-center px-4">
                <h3 className="text-[#244bb3] text-[20px] md:text-[22px] font-semibold leading-tight m-0">
                  {program.title}
                </h3>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HumraahPrograms;