import React from "react";
import mainBgNatureVid from "../assets/main-bg-nature.mp4";

const MainBg = () => {
  return (
    <section className="w-full h-[90vh] top-[90px]">
      <h2 className="sr-only">메인 비디오 있는 화면</h2>
      <video
        className="absolute w-full h-full object-cover -z-20"
        src={mainBgNatureVid}
        autoPlay
        loop
        muted
      />
      <div className="flex flex-col items-center h-[90%] justify-center text-[var(--f6-color)]">
        <h3 className="text-5xl font-bold mb-6 text-[]">
          For your <span className="text-[var(--main-green)] main-word-text-shadow">healthy</span> life
        </h3>
        <p className="text-3xl font-semibold mb-2">There's no magic pill</p>
        <p className="text-xl text-center mb-7 font-medium">
          There’s no secret formula. <br /> I lift heavy, work hard, and aim to
          be the best.
        </p>
        <div>
          <button>Start</button>
        </div>
      </div>
    </section>
  );
};

export default MainBg;
