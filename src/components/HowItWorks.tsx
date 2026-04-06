"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
	{
		title: "Applications",
		description:
			"April 6 – April 10. Individuals and teams apply. 70 builders selected.",
	},
	{
		title: "Virtual Build Sprint",
		description:
			"April 14 – April 18. Build MVP, join mentor sessions, submit pitch deck and demo.",
	},
	{
		title: "Final Selection",
		description: "April 19. Final submissions reviewed. 50 builders selected.",
	},
	{
		title: "Build Weekend",
		description:
			"April 23 – April 24. Physical 9 AM – 5 PM co-working and product refinement.",
	},
	{
		title: "Demo Day",
		description:
			"April 25. Live pitches, Q&A, final scoring and winner announcement.",
	},
];

function HowItWorks() {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const [progress, setProgress] = useState(0);
	const [lineHeight, setLineHeight] = useState(0);
	const lineRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
	const handleScroll = () => {
		if (!containerRef.current || !lineRef.current) return;

		const lineRect = lineRef.current.getBoundingClientRect();
		const windowHeight = window.innerHeight;

		// Start: line top enters bottom of viewport
		// End: line bottom exits top of viewport
		const total = lineRect.height + windowHeight;
		const current = windowHeight - lineRect.top;

		const progress = Math.min(Math.max(current / total, 0), 1);

		setProgress(progress);
	};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const setHeight = () => {
			if (lineRef.current) {
				setLineHeight(lineRef.current.offsetHeight);
			}
		};

		setHeight();
		window.addEventListener("resize", setHeight);
		return () => window.removeEventListener("resize", setHeight);
	}, []);

	return (
		<div
			ref={containerRef}
			className="min-h-screen flex items-center"
			id="timeline"
		>
			<section className="pt-10 sm:pt-10 xl:pt-20 pb-30 w-full">
				<div className="custom-container">
					<h2>How the sprint works</h2>

					<div className="mt-18 flex gap-5 sm:gap-10 items-center">
						<div className="flex flex-col gap-20 max-sm:hidden">
							{steps.map((step, i) => (
								<div
									key={i}
									className={`text-end ${[1, 3].includes(i) && "opacity-0"} `}
								>
									<h4 className="text-2xl font-semibold">{step.title}</h4>
									<p>{step.description}</p>
								</div>
							))}
						</div>
						<div
							ref={lineRef}
							className="w-1.5 h-183.75 bg-[#D9D9D9] relative overflow-hidden"
						>
							<div
								className="w-1.5 h-183.75 bg-accent absolute"
								style={{
									transform: `translateY(${
										lineHeight ? (progress - 1) * lineHeight : 0
									}px)`,

									// transition: "transform 0.1s linear",
									transition: "transform 0.2s ease-out",
								}}
							></div>
						</div>
						<div className="flex flex-col gap-16 sm:gap-20">
							{steps.map((step, i) => (
								<div
									key={i}
									className={`text-start ${[0, 2, 4].includes(i) && "sm:opacity-0"} `}
								>
									<h4 className="text-2xl font-semibold">{step.title}</h4>
									<p>{step.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HowItWorks;

// "use client";

// import React, { useEffect, useState, useRef } from "react";

// const steps = [
//   {
//     title: "Applications",
//     description: "April 6 – April 20. Teams apply to join the program",
//   },
//   {
//     title: "Virtual Build Sprint",
//     description:
//       "April 24 – May 8. Teams build their MVP with mentor guidance.",
//   },
//   {
//     title: "Final Selection",
//     description: "May 11 – May 13. Top teams selected for residency.",
//   },
//   {
//     title: "Residency & Demo Day",
//     description: "May 26 – May 30. In‑person refinement and final pitches.",
//   },
// ];

// function HowItWorks() {
//   const [activeStep, setActiveStep] = useState(0);
//   const wrapperRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!wrapperRef.current) return;

//       const rect = wrapperRef.current.getBoundingClientRect();
//       const scrollable = rect.height - window.innerHeight;
//       const scrolled = -rect.top;

//       const progress = Math.min(Math.max(scrolled / scrollable, 0), 1);

//       // Map progress to steps (0–3)
//       const step = Math.min(
//         Math.floor(progress * steps.length),
//         steps.length - 1,
//       );
//       setActiveStep(step);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const lineProgress = (activeStep / (steps.length - 1)) * 100;

//   return (
//     // Tall wrapper — gives scroll room (200vh means ~1 screen of scrolling)
//     <div ref={wrapperRef} style={{ height: `${100 + steps.length * 50}vh` }}>
//       {/* Sticky content that pins while parent scrolls */}
//       <div className="sticky top-0 h-screen flex items-center" id="timeline">
//         <section className="pt-10 sm:pt-10 xl:pt-20 pb-20 w-full">
//           <div className="custom-container">
//             <h2>How the sprint works</h2>

//             <div className="flex gap-4 sm:gap-8 mt-10 sm:mt-20">
//               {/* LEFT: DOTS + LINE */}
//               <div className="flex flex-col items-center relative py-2">
//                 {/* Background line */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300" />

//                 {/* Animated progress line */}
//                 <div
//                   className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-yellow-400 transition-[height] duration-500 ease-out"
//                   style={{ height: `${lineProgress}%` }}
//                 />

//                 {steps.map((_, i) => (
//                   <div
//                     key={i}
//                     className={`relative z-10 h-6 w-6 rounded-full transition-all duration-500 ${
//                       i === 0 ? "mt-0" : "mt-[calc((100%-1.5rem*4)/3)]"
//                     } ${
//                       i <= activeStep
//                         ? "bg-yellow-400 scale-125 shadow-[0_0_0_4px_rgba(250,204,21,0.25)]"
//                         : "bg-gray-300"
//                     }`}
//                     style={{
//                       marginTop: i === 0 ? 0 : "auto",
//                     }}
//                   />
//                 ))}
//               </div>

//               {/* RIGHT: CONTENT */}
//               <div className="flex flex-col gap-12">
//                 {steps.map((step, i) => (
//                   <div
//                     key={i}
//                     className={`transition-all duration-500 ${
//                       i <= activeStep
//                         ? "opacity-100 translate-x-0"
//                         : "opacity-30 translate-x-2"
//                     }`}
//                   >
//                     <h3
//                       className={`text-3xl sm:text-[32px] transition-colors duration-500 ${
//                         i === activeStep ? "text-yellow-400" : ""
//                       }`}
//                     >
//                       {step.title}
//                     </h3>
//                     <p className="max-sm:text-sm mt-1">{step.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default HowItWorks;
