"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.from(".headline span", {
      opacity: 0,
      y: 30,
      stagger: 0.05,
      duration: 1,
    });

    gsap.from(".stat", {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      delay: 0.8,
      duration: 1,
    });

    const handleScroll = () => {
      const scrollY = window.scrollY;

      gsap.to(imageRef.current, {
        y: scrollY * 0.5,
        rotation: scrollY * 0.05,
        duration: 0.5,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const text = "WELCOME ITZ FIZZ";

  return (
    <main className="bg-black text-white min-h-[200vh]">
      <section className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
        
        <h1 className="headline text-5xl md:text-7xl tracking-[0.5em] font-bold">
          {text.split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>

        <div className="flex gap-10 mt-10">
          <div className="stat">
            <h2 className="text-3xl font-bold">+120%</h2>
            <p>Growth</p>
          </div>
          <div className="stat">
            <h2 className="text-3xl font-bold">95%</h2>
            <p>Retention</p>
          </div>
          <div className="stat">
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p>Rating</p>
          </div>
        </div>

        <img
          ref={imageRef}
          src="https://pngimg.com/uploads/car/small/car_PNG1667.png"
          className="absolute bottom-10 w-[300px] md:w-[500px]"
        />
      </section>

      <div className="h-[100vh]"></div>
    </main>
  );
}
