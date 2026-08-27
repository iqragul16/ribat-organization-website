import React from "react";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
  return (
    <Link to={`/programs/${program.id}`} className="block">
      <img
        src={program.image}
        alt={program.title}
        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
};

export default ProgramCard;