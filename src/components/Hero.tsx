import React from "react";
import Button from "./ui/Button";
// import Image from "next/image";

export default function Hero() {
	return (
		<section className="hero-bg min-h-[80vh] sm:min-h-[90vh] xl:min-h-screen  pt-[12%] pb-32 max-sm:pt-44 max-xl:pt-32 ">
			{/* <div className="custom-container flex flex-col max-md:items-center xl:flex-row justify-between sm:pt-28 "> */}
			<div className="custom-container sm:pt-28 ">
				<div className="max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center lg:w-4/5 xl:w-2/3">
					<h1 className=" shabo-font text-[115.91px] leading-[100%] max-sm:text-5xl max-md:text-8xl">
						Stellar WA Build Weekend Residency Program
					</h1>
					<p className="text-sm sm:text-xl text-[#E9E9E9] mt-4 md:w-2/3">
						A high-intensity one-month innovation sprint designed to take bold
						ideas from concept to market-ready products, culminating in a
						focused 3-day in-person Build Weekend co-working residency.
					</p>
					<div className="flex gap-4 mt-7">
						<Button className="trans-btn">Apply Now</Button>
						<Button className="" variant="outline">
							Learn More
						</Button>
					</div>
				</div>
				{/* <div className="flex flex-col max-md:items-center lg:w-2/3">
					<h1 className="shabo-font text-[115.91px] leading-[100%] max-md:text-center max-md:max-w-225 max-sm:text-6xl">
						Stellar WA Build Weekend Residency Program
					</h1>
					<p className="sm:w-2/3 max-smw-3/4 sm:text-xl text-[#E9E9E9] mt-4 max-md:text-center">
						A high-intensity one-month innovation sprint designed to take bold
						ideas from concept to market-ready products, culminating in a
						focused 3-day in-person Build Weekend co-working residency.
					</p>
					<div className="flex gap-4 mt-7">
						<Button>Apply Now</Button>
						<Button className="" variant="outline">
							Explore
						</Button>
					</div>
				</div> */}
			</div>
		</section>
		// <section className="hero-bg min-h-screen  pt-[7%] relative pb-20 max-xl:pt-32">
		//   <div className="custom-container flex flex-col max-xl:items-center xl:flex-row justify-between sm:pt-28 ">
		//     <div className="flex flex-col max-xl:items-center">
		//       <h1 className="shabo-font text-[115.91px] leading-[100%] max-xl:text-center max-xl:max-w-225 max-sm:text-6xl">
		//         Build the Next <br className="max-xl:hidden" /> Generation of{" "}
		//         <br className="max-xl:hidden" /> Web3 Products
		//       </h1>
		//       <p className="max-sm:w-3/4 sm:text-xl text-[#444444] mt-4 max-xl:text-center">
		//         A 6-week builder sprint culminating in a 4-day <br className="max-sm:hidden" /> physical
		//         residency and Demo Day.
		//       </p>
		//       <div className="flex gap-4 mt-7">
		//         <Button>Apply Now</Button>
		//         <Button className="" variant="outline">
		//           Explore
		//         </Button>
		//       </div>
		//     </div>
		//     <div className="xl:w-160 xl:absolute xl:right-[6%] xl:bottom-[7%] max-xl:mt-10">
		//       <Image
		//         width={500}
		//         height={500}
		//         className="w-full object-contain mix-blend-luminosity"
		//         src="/hero-img.png"
		//         alt="a space duck using a desktop"
		//       />
		//     </div>
		//   </div>
		// </section>
	);
}
