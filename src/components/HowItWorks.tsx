"use client";

import React, { useEffect, useState, useRef } from "react";

const steps = [
  {
    title: "Applications",
    description: "April 6 – April 20. Teams apply to join the program",
  },
  {
    title: "Virtual Build Sprint",
    description:
      "April 24 – May 8. Teams build their MVP with mentor guidance.",
  },
  {
    title: "Final Selection",
    description: "May 11 – May 13. Top teams selected for residency.",
  },
  {
    title: "Residency & Demo Day",
    description: "May 26 – May 30. In‑person refinement and final pitches.",
  },
];

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;

      const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);

      // Map progress to steps (0–3)
      const step = Math.min(
        Math.floor(progress * steps.length),
        steps.length - 1,
      );
      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lineProgress = (activeStep / (steps.length - 1)) * 100;

  return (
    // Tall wrapper — gives scroll room (200vh means ~1 screen of scrolling)
    <div ref={wrapperRef} style={{ height: `${100 + steps.length * 50}vh` }}>
      {/* Sticky content that pins while parent scrolls */}
      <div className="sticky top-0 h-screen flex items-center" id="timeline">
        <section className="pt-10 sm:pt-10 xl:pt-20 pb-20 w-full">
          <div className="custom-container">
            <h2>How the sprint works</h2>

            <div className="flex gap-4 sm:gap-8 mt-10 sm:mt-20">
              {/* LEFT: DOTS + LINE */}
              <div className="flex flex-col items-center relative py-2">
                {/* Background line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300" />

                {/* Animated progress line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-yellow-400 transition-[height] duration-500 ease-out"
                  style={{ height: `${lineProgress}%` }}
                />

                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`relative z-10 h-6 w-6 rounded-full transition-all duration-500 ${
                      i === 0 ? "mt-0" : "mt-[calc((100%-1.5rem*4)/3)]"
                    } ${
                      i <= activeStep
                        ? "bg-yellow-400 scale-125 shadow-[0_0_0_4px_rgba(250,204,21,0.25)]"
                        : "bg-gray-300"
                    }`}
                    style={{
                      marginTop: i === 0 ? 0 : "auto",
                    }}
                  />
                ))}
              </div>

              {/* RIGHT: CONTENT */}
              <div className="flex flex-col gap-12">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ${
                      i <= activeStep
                        ? "opacity-100 translate-x-0"
                        : "opacity-30 translate-x-2"
                    }`}
                  >
                    <h3
                      className={`text-3xl sm:text-[32px] transition-colors duration-500 ${
                        i === activeStep ? "text-yellow-400" : ""
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="max-sm:text-sm mt-1">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HowItWorks;
