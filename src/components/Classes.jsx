import React from "react";
import { GiStairsGoal, GiAchievement } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import { MdEmojiPeople } from "react-icons/md";

const Classes = () => {
  return (
    <section className="bg-[var(--nav-bg)]" id="classes">
      <h2 className="sr-only">수업</h2>
      <div className="max-w-[1240px] mx-auto px-4 py-16 bg-[var(--nav-bg)] text-[var(--f6-color)] text-center">
        <p className="text-3xl font-extrabold py-7 pb-14">
          Lorem ipsum dolor sit amet
        </p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          <li className="border-4 border-[var(--sub-color)] rounded-2xl py-4 px-5">
            <div>
              <GiStairsGoal className="rounded-full text-5xl border-2 border-[var(--sub-color)] w-full" />
              <h3 className="text-start text-xl font-bold py-4">
                ANALYZE YOUR GOAL
              </h3>
              <p className="text-start text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                animi voluptatibus officiis possimus perferendis quis. Expedita
                ipsam eum deserunt asperiores.
              </p>
            </div>
          </li>
          <li>card</li>
          <li>card</li>
          <li>card</li>
        </ul>
      </div>
    </section>
  );
};

export default Classes;
