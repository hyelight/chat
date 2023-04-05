import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { TbStretching } from "react-icons/tb";
import { IoIosNutrition } from "react-icons/io";
import { BiRun } from "react-icons/bi";
import ClassCard from "./Card/ClassCard";

const Classes = () => {
  return (
    <section className="bg-[var(--nav-bg)]" id="classes">
      <h2 className="sr-only">수업</h2>
      <div className="max-w-[1240px] mx-auto px-4 pt-32 pb-16 bg-[var(--nav-bg)] text-[var(--f6-color)] text-center">
        <p className="text-3xl font-extrabold py-7 pb-14">
          CLASSES
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <ClassCard
            icon={<GiWeightLiftingUp />}
            title="LIFTING"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse animi
            voluptatibus officiis possimus perferendis quis. Expedita ipsam eum
            deserunt asperiores."
          />
          <ClassCard
            icon={<TbStretching />}
            title="STRETCHING"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi reiciendis optio doloribus incidunt. Labore in quas eius sint libero."
          />
          <ClassCard
            icon={<IoIosNutrition />}
            title="NUTRITION"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe dolor accusantium nostrum repudiandae iure cupiditate quidem nesciunt sunt in?"
          />
          <ClassCard
            icon={<BiRun />}
            title="OUTDOOR"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nisi amet, aliquam error perspiciatis tempora unde asperiores doloribus velit suscipit!"
          />
        </ul>
      </div>
    </section>
  );
};

export default Classes;
