import React from "react";

const PricingCard = ({
  price,
  tier,
  firstContent,
  SecondContent,
  thirdContent,
  fourthContent,
  isMostPopular = false,
  ...rest
}) => {
  return (
    <li
      className={`bg-[var(--sub-color)] rounded-2xl w-full sm:w-1/2 md:w-1/3 py-8 relative max-w-[360px] hover:scale-105 ${rest.className}`}
    >
      {isMostPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--main-green)] rounded-full w-3/4 p-3 py-2 text-lg font-semibold tracking-wide">
          MOST POPULAR
        </div>
      )}
      <p className="text-4xl font-semibold mb-6">{price}</p>
      <p className="text-xl text-[#EDC847] font-bold mb-4">{tier}</p>
      <p className="text-lg mb-5 leading-relaxed">
        {firstContent}
        <br />
        {SecondContent}
        <br />
        {thirdContent} <br />
        {fourthContent}
      </p>
      <button className="">JOIN US</button>
    </li>
  );
};

export default PricingCard;
