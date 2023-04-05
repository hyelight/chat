import React, { useEffect, useState } from "react";
import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  const [showCompany, setShowCompany] = useState(false);
  const [showResources, setshowResources] = useState(false);
  const [showPolicy, setshowPolicy] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleShowCompany = () => {
    setShowCompany(!showCompany);
  };
  const toggleShowResources = () => {
    setshowResources(!showResources);
  };
  const toggleShowPolicy = () => {
    setshowPolicy(!showPolicy);
  };

  return (
    <footer className="bg-[var(--nav-bg)] border-t-2">
      <div className="max-w-[1240px] mx-auto px-4 py-16 text-[var(--f6-color)] text-center overflow-hidden flex gap-10 justify-center items-center footer-flex-col-big">
        <div className="float-left w-1/4 max-w-[300px] min-w-[200px]  ">
          <div className="flex flex-col items-center justify-center ">
            <p className="text-[var(--main-green)] font-bold text-4xl mb-1">
              WORKOUT
            </p>
            <p className="font-medium text-[#EDC847] mb-5">
              BELIEVE IN YOURSELF
            </p>
            <p className="mb-4 float-left-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, obcaecati!
            </p>
            <ul className="flex text-2xl">
              <li>
                <a href="#none">
                  <SlSocialTwitter className="text-[#1DA1F2]" />
                </a>
              </li>
              <li>
                <a href="#none">
                  <SlSocialFacebook className="text-[#4867AA]" />
                </a>
              </li>
              <li>
                <a href="#none">
                  <SlSocialInstagram className="text-[#E702D7]" />
                </a>
              </li>
              <li>
                <a href="#none">
                  <SlSocialYoutube className="text-[#FF0000]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="float-right w-3/4 flex justify-evenly footer-flex-col-small">
          <div>
            <p
              className="text-xl font-semibold text-[--main-green]"
              onClick={toggleShowCompany}
            >
              COMPANY
            </p>
            <ul
              className={`font-medium leading-relaxed text-lg footer-content-ul ${
                windowWidth <= 575
                  ? showCompany
                    ? "block"
                    : "hidden"
                  : "block"
              }`}
            >
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="text-xl font-semibold text-[--main-green]"
              onClick={toggleShowResources}
            >
              RESOURCES
            </p>
            <ul
              className={`font-medium leading-relaxed text-lg footer-content-ul ${
                windowWidth <= 575
                  ? showResources
                    ? "block"
                    : "hidden"
                  : "block"
              }`}
            >
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="text-xl font-semibold text-[--main-green]"
              onClick={toggleShowPolicy}
            >
              OUR POLICY
            </p>
            <ul
              className={`font-medium leading-relaxed text-lg footer-content-ul ${
                windowWidth <= 575 ? (showPolicy ? "block" : "hidden") : "block"
              }`}
            >
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
              <li>
                <a href="#none">lorem</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <small className="text-[--f6-color] flex items-center text-sm justify-center pb-16 copyright">
        Copyright&nbsp;
        <AiOutlineCopyrightCircle />
        &nbsp;2023 WORKOUT Company.&nbsp;All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
