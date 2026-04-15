const judgesDetails = [
	{
		title: "Eugene",
		desc: "Ecosystem Lead Stellar",
		img: "/judge-kwado.png",
	},
];

// ✅ Proper props typing
type JudgeCardProps = {
	title: string;
	desc: string;
	img: string;
};

// const JudgeCard = ({ title, desc, img }: JudgeCardProps) => {
const JudgeCard = ({ img }: JudgeCardProps) => {
	return (
		<div
			style={{
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
export default function Judges() {
	return (
		<section id="judges" className="pt-20 sm:pt-28 pb-20">
			<div className="custom-container">
				<h2>Meet The Judges</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 rounded-2xl mt-20 ">
					{judgesDetails.map((p, i) => (
						<JudgeCard key={i} title={p.title} desc={p.desc} img={p.img} />
					))}
				</div>
			</div>
		</section>
	);
}
