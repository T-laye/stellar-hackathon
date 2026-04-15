const mentorDetails =  [
	{
		title: "Eugene",
		desc: "Ecosystem Lead Stellar",
		img: "/mentor-raph.png",
	},
	{
		title: "Eniola",
		desc: "Ecosystem Lead Stellar",
		img: "/mentor-tupui.png",
	},
	{
		title: "Silence",
		desc: "Ecosystem Lead Stellar",
		img: "/mentor-levai.png",
	},
];

// ✅ Proper props typing
type MentorCardProps = {
	title: string;
	desc: string;
	img: string;
};

// const MentorCard = ({ title, desc, img }: MentorCardProps) => {
const MentorCard = ({ img }: MentorCardProps) => {
	return (
		<div
			style={{
				// backgroundImage: `linear-gradient(to top, #FFDA00, transparent, transparent, transparent), url(${img})`,
				backgroundImage: `url(${img})`,
				backgroundSize: "contain",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
			className="h-97.75 px-8.75 flex text-black justify-end flex-col pb-3.5 w-full max-sm:max-w-87.5 max-sm:mx-auto"
		>
			{/* <h3 className="text-xl font-semibold">{title}</h3>
			<p>{desc}</p> */}
		</div>
	);
};
export default function Mentors() {
	return (
		<section id="mentors" className="pt-20 sm:pt-28 pb-20">
			<div className="custom-container">
				<h2>Meet The Mentors</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 rounded-2xl mt-20 ">
					{mentorDetails.map((p, i) => (
						<MentorCard key={i} title={p.title} desc={p.desc} img={p.img} />
					))}
				</div>
			</div>
		</section>
	);
}
