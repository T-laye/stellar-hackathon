const programTrackDetails = [
	{
		title: "Open ZK Track",
		desc: "Build applications using Zero Knowledge technology including privacy tools, identity systems, or experimental ZK solutions.",
	},
	{
		title: "GameFi Track",
		desc: "Create blockchain games using the Stellar Game Studio toolkit and build on‑chain game economies.",
	},
	{
		title: "Agentic AI Track ",
		desc: "Create blockchain games using the Stellar Game Studio toolkit and build on‑chain game economies.",
	},
	{
		title: "Open Track",
		desc: "Create blockchain games using the Stellar Game Studio toolkit and build on‑chain game economies.",
	},
];

// ✅ Proper props typing
type ProgramTrackProps = {
	title: string;
	desc: string;
};

const ProgramTrackCard = ({ title, desc }: ProgramTrackProps) => {
	return (
		<div className="bg-accent rounded-2xl px-9.5 py-11.5 text-black">
			<h3 className="text-2xl font-semibold">{title}</h3>
			<p className="mt-2.5">{desc}</p>
		</div>
	);
};

export default function ProgramTrack() {
	return (
		<section id="program-track" className="pt-10 sm:pt-20 xl:pt-28 pb-20">
			<div className="custom-container">
				<h2>Program Track</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-9 rounded-2xl mt-14">
					{programTrackDetails.map((p, i) => (
						<ProgramTrackCard key={i} title={p.title} desc={p.desc} />
					))}
				</div>
			</div>
		</section>
	);
}
