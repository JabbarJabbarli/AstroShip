import React from "react";

const Card = () => {
  return (
    <div>
      <div className="bg-black mt-24 h-1/2  rounded ">
        <div className="flex items-center justify-center flex-col gap-10 py-20">
          <h1 className="text-white text-center text-7xl ">
            Build faster websites
          </h1>
          <p className="text-[#82a3b8] text-2xl text-center">
            Pull content from anywhere and serve it fast with Astro's next-gen
            island architecture.
          </p>
          <button className="flex items-center rounded py-4 px-14 justify-center bg-white text-black">
            Get Started
          </button>
        </div>
      </div>
      <h1 className="mt-10 text-[#9fa9af] text-center">
        Copyright © 2024 Astroship. All rights reserved. <br /> Made by
        Web3Templates
      </h1>
    </div>
  );
};

export default Card;
