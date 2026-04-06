import React from "react";

const programDetails = [
	{
		title: "Compressed Sprint",
		desc: "1 Month ",
	},
	{
		title: "Virtual Build Phase",
		desc: "1 Week Sprint",
	},
	{
		title: "Physical Co-working Residency",
		desc: "3 Days",
	},
	// {
	// 	title: "Per Team",
	// 	desc: "3 Builders",
	// },
];

// ✅ Proper props typing
type ProgramCardProps = {
	title: string;
	desc: string;
};

const ProgramCard = ({ title, desc }: ProgramCardProps) => {
	return (
		<div className="relative max-w-75 w-full min-h-40.75">
			<div className="bg-[#FFFFFF45] text-white backdrop-blur-xl rounded-2xl px-9.5 py-11.5 z-10 h-full w-full">
				<h3 className="text-[32px] shabo-font">{desc}</h3>
				<p className="text-xl">{title}</p>
			</div>
			<div className="w-34.5 h-4 bg-primary absolute -z-10 top-[20%] left-[20%]"></div>
		</div>
	);
};

export default function ProgramOverview() {
	return (
		<section id="program" className="pt-16 sm:pt-20 xl:pt-28 pb-20">
			<div className="custom-container">
				<h2>Program Overview</h2>

				<p className="text-[#A5A5A5] mt-4 max-w-2xl text-center mx-auto">
					This is not just another hackathon. It is a builder-first execution
					sprint for solo builders and teams ready to ship fast and position
					products for real adoption. it is a structured innovation sprint
					helping teams turn ideas into working products through mentorship,
					workshops, and a final in‑person residency.
				</p>

				{/* ✅ Improved grid responsiveness */}
				<div className="flex justify-center gap-5 mt-14 flex-wrap">
					{programDetails.map((p, i) => (
						<ProgramCard key={i} title={p.title} desc={p.desc} />
					))}
				</div>
			</div>
		</section>
	);
}
