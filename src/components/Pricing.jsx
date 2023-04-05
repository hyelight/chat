import React from "react";
import PricingCard from "./Card/PricingCard";

const Pricing = () => {
  return (
    <section className="bg-[var(--nav-bg)]" id="pricing">
      <h2 className="sr-only">프리미엄 가격</h2>
      <div className="max-w-[1240px] mx-auto px-4 py-16 text-[var(--f6-color)] text-center">
        <h3 className="text-3xl font-extrabold py-7 pb-14">PREMIUM PRICING</h3>
        <div className="flex mx-auto">
          <ul className="mt-10 flex gap-20 justify-center">
            <PricingCard
              price="$15"
              tier="BRONZE"
              firstContent="Lorem, ipsum dolor."
              SecondContent="Lorem ipsum dolor"
              thirdContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              fourthContent="Lorem ipsum dolor sit amet consectetur."
            />
            <PricingCard
              price="$50"
              tier="SILVER"
              firstContent="Lorem, ipsum dolor."
              SecondContent="Lorem ipsum dolor"
              thirdContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              fourthContent="Lorem ipsum dolor sit amet consectetur."
              className="outline-4 outline outline-[var(--main-green)]"
              isMostPopular
            />
            <PricingCard
              price="$90"
              tier="GOLD"
              firstContent="Lorem, ipsum dolor."
              SecondContent="Lorem ipsum dolor"
              thirdContent="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              fourthContent="Lorem ipsum dolor sit amet consectetur."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
