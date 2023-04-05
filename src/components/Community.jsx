import React from "react";

const Community = () => {
  return (
    <section className="bg-[var(--nav-bg)]" id="community">
      <h2 className="sr-only">커뮤니티 합류 여부</h2>
      <div className="max-w-[1240px] mx-auto px-4 py-16 text-[var(--f6-color)] text-center">
        <h3 className="text-3xl mb-7">
          Enjoy Our{" "}
          <span className="text-[var(--main-green)] font-bold text-4xl">
            WORKOUT
          </span>{" "}
          Community
        </h3>
        <form className="flex gap-7 justify-center mb-5">
          <input
            className="rounded-full px-5 text-black"
            type="email"
            placeholder="Enter your email"
          />
          <button>Sign Up</button>
        </form>
        <form>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">I agree to join WORKOUT community.</label>
        </form>
      </div>
    </section>
  );
};

export default Community;
