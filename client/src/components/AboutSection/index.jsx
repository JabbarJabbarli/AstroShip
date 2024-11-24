import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ photos }) => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create a timeline for the animations
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current, // Monitor the scroll for this section
        start: "top 80%", // Start animation when top of section is 80% visible
        toggleActions: "play none none none", // Play animation only on scroll down
      },
    });

    // Animate each card with a staggered effect
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 50 }, // Start hidden and slightly below
        { opacity: 1, y: 0 }, // End fully visible and at original position
        index * 0.2 // Stagger animations by 0.2 seconds
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="flex items-center justify-center">
      <div className="py-16 px-36">
        <div className="flex items-center justify-center flex-col pb-16">
          <h1 className="text-5xl font-bold font-body mb-6">About</h1>
          <p className="text-xl text-[#475569]">We are a small passionate team</p>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-semibold mb-5">
            Empowering the world with Astro
          </h1>
          <p className="text-[#77748b] w-100 text-lg">
            We're a multi-cultural team from around the world! We come from
            diverse backgrounds, bringing different
            <br /> personalities, experiences, and skills to the job. This is
            what makes our team so special.
          </p>
        </div>
        <div className="flex items-center gap-16 py-14">
          {photos.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Assign refs for each card
              className=""
            >
              <img className="w-60 h-60" src={item.img} alt={item.name} />
              <h3 className="py-3 text-lg font-semibold font-body text-center">
                {item.name}
              </h3>
              <p className="text-center font-body text-[#77748b] text-sm">
                {item.job}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
