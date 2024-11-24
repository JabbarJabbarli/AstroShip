import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WebStart = ({ webStart }) => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create a timeline
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current, // Trigger animation when this section enters the viewport
        start: "top 80%", // Start when the top of the section is 80% from the top of the viewport
        end: "bottom 20%", // End when the bottom of the section is 20% from the top of the viewport
        toggleActions: "play none none none", // Play animation on scroll, no reverse
      },
    });

    // Animate each card sequentially
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0, x: -200 },
        { opacity: 1, x: 0 },
        index * 0.3 // Stagger animations by 0.3 seconds
      );
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <div>
        <h1 className="font-bold text-5xl font-body tracking-tighter">
          Everything you need to start a website
        </h1>
        <p className="font-body text-lg tracking-tighter text-[#434447] pt-6">
          Astro comes batteries included. It takes the best parts of
          state-of-the-art tools and adds its own innovations.
        </p>
      </div>

      <div className="flex items-center justify-between flex-wrap gap-10 mt-10">
        {webStart.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)} // Add refs for each card
            className="w-96 shadow-2xl px-5 py-3"
          >
            <div>
              <img src={item.icon}  />
            </div>
            <h1 className="font-bold text-lg">{item.title}</h1>
            <p className="text-[#6e6e6e] w-72">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebStart;
