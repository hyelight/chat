import React, { useState } from "react";

const Community = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      if (document.querySelector("#checkbox").checked) {
        alert("You have entered a valid email address!");
      } else {
        setError("You need to agree to join WORKOUT community.");
      }
    } else {
      setError("You have entered an invalid email address! Try again.");
    }
  };

  return (
    <section className="bg-[var(--nav-bg)]" id="community">
      <h2 className="sr-only">커뮤니티 합류 여부</h2>
      <div className="max-w-[1240px] mx-auto px-4 pt-16 pb-32 text-[var(--f6-color)] text-center">
        <h3 className="text-3xl mb-7 community-h3">
          Enjoy Our{" "}
          <span className="text-[var(--main-green)] font-bold text-4xl">
            WORKOUT
          </span>{" "}
          Community
        </h3>
        <form
          className="flex gap-7 justify-center mb-5 community-form-first"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-full px-5 text-black community-input-first"
            type="email"
            placeholder="Enter your email"
            onChange={handleEmailChange}
          />
          <button>Sign Up</button>
        </form>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <form>
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"> I agree to join WORKOUT community.</label>
        </form>
      </div>
    </section>
  );
};

export default Community;
