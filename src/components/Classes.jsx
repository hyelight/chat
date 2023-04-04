import React from "react";
import { GiStairsGoal, GiAchievement } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { MdEmojiPeople } from "react-icons/md";
import ClassCard from "./ClassCard";

const Classes = () => {
  return (
    <section className="bg-[var(--nav-bg)]" id="classes">
      <h2 className="sr-only">수업</h2>
      <div className="max-w-[1240px] mx-auto px-4 py-16 bg-[var(--nav-bg)] text-[var(--f6-color)] text-center">
        <p className="text-3xl font-extrabold py-7 pb-14">
          Lorem ipsum dolor sit amet
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <ClassCard
            icon={<GiStairsGoal />}
            title="ANALYZE YOUR GOAL"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse animi
            voluptatibus officiis possimus perferendis quis. Expedita ipsam eum
            deserunt asperiores."
          />
          <ClassCard
            icon={<BiRun />}
            title="WORK HARD ON IT"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi reiciendis optio doloribus incidunt. Labore in quas eius sint libero."
          />
          <ClassCard
            icon={<GiAchievement />}
            title="ACHIEVE YOUR DESTINY"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, saepe dolor accusantium nostrum repudiandae iure cupiditate quidem nesciunt sunt in?"
          />
          <ClassCard
            icon={<MdEmojiPeople />}
            title="KEEP IT UP"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo nisi amet, aliquam error perspiciatis tempora unde asperiores doloribus velit suscipit!"
          />
        </ul>
      </div>
    </section>
  );
};

export default Classes;
