import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurBlog = ({ blogPic }) => {
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current, // Trigger for the section
        start: "top 80%", // Start animation when top of section reaches 80% of viewport
        toggleActions: "play none none none", // Play animation on scroll
      },
    });

    // Animate each card from bottom to top with a staggered effect
    cardsRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        { opacity: 0, y: 50 }, // Start hidden and slightly below
        { opacity: 1, y: 0 }, // End fully visible and at original position
        index * 0.2 // Staggered by 0.2 seconds
      );
    });
  }, []);

  return (
    <div ref={sectionRef} className="flex items-center justify-center">
      <div className="py-16 px-36">
        <div className="flex items-center justify-center flex-col pb-16">
          <h1 className="text-5xl font-bold font-body mb-6">Our Blog</h1>
          <p className="text-xl text-[#475569]">
            We write about building startups and thoughts going on our mind.
          </p>
        </div>
        <div className="flex flex-col gap-14">
          {blogPic.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Assign refs for each card
              className="flex items-center gap-14"
            >
              <div>
                <img className="rounded" src={item.img} alt={item.title} />
              </div>
              <div className="flex items-start gap-3 flex-col">
                <p className=" text-[#6dacfa] text-sm tracking-wider font-semibold">
                  {item.title}
                </p>
                <h1 className="text-3xl font-bold w-96">{item.description}</h1>
                <span className="text-[#a0a3af]">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
