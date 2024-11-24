import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const Header = ({ links, btn }) => {
  const navBtnsRef = useRef();
  const navLogo = useRef();

  const tl = gsap.timeline({ defaults: { duration: 0.6 } });

  useEffect(() => {
    tl.fromTo(
      navLogo.current,
      { opacity: 0, x: -30, y: 20, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      "<"
    );

    tl.fromTo(
      navBtnsRef.current,
      { opacity: 0, x: 30, y: -20, scale: 0.8 },
      { opacity: 1, x: 0, y: 0, scale: 1 },
      "<"
    );
  }, []);

  return (
    <header className="flex items-center justify-between ">
      <NavLink to="/">
        <h1 ref={navLogo} className="text-[#1e293b] text-xl font-semibold">
          Astro<span className="font-semibold text-[#7f838b]">ship</span>
        </h1>
      </NavLink>
      <nav className="flex flex-row items-center gap-10">
        {links.map((item) => {
          return (
            <NavLink
              to={item.path}
              className=" text-[#7f838b] font-medium hover:text-[#303030] transition duration-300"
              key={item.id}
            >
              {item.link}
            </NavLink>
          );
        })}
      </nav>
      <div ref={navBtnsRef} className="flex gap-5">
        {btn.map((item) => (
          <button
            className="font-semibold bg-black py-2 px-4 rounded text-white hover:bg-white hover:text-black transition duration-350"
            key={item.id}
          >
            {item.btn}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
