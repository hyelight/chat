import React from "react";

const ClassCard = ({ icon, title, content }) => {
  const iconStyles =
    "rounded-full text-5xl border-2 border-[var(--sub-color)] w-full text-[#EDC847]";

  return (
    <li className="border-4 border-[var(--sub-color)] rounded-2xl py-4 px-5 hover:scale-105">
      <div>
        {React.cloneElement(icon, { className: iconStyles })}
        <h3 className="text-start text-xl font-bold py-4">{title}</h3>
        <p className="text-start text-lg">{content}</p>
      </div>
    </li>
  );
};

export default ClassCard;
