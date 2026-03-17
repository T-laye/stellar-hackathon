const benefitCardDetails = [
  {
    title: "Ship a Real MVP",
    desc: "Turn your idea into a working product with guidance from mentors.",
  },
  {
    title: "Expert Mentorship",
    desc: "Receive direct feedback from experienced Web3 builders.",
  },
  {
    title: "Investor Ready",
    desc: "Prepare your startup with pitch coaching and business strategy sessions.",
  },
  {
    title: "Ecosystem Access",
    desc: "Connect with founders, developers, and investors.",
  },
  {
    title: "Builder Community",
    desc: "Collaborate with ambitious developers from across the ecosystem.",
  },
  {
    title: "Global Visibility",
    desc: "Showcase your project during Demo Day and ecosystem media coverage.",
  },
];

// ✅ Proper props typing
type BenefitCardProps = {
  title: string;
  desc: string;
};

const BenefitCard = ({ title, desc }: BenefitCardProps) => {
  return (
    <div className="rounded-2xl px-6 py-12 sm:px-10 sm:py-15.5 border border-[#646464] bg-[#0C0C0C]">
      <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
      <p className="mt-2.5 text-[#BABABA] sm:text-xl">{desc}</p>
    </div>
  );
};
export default function WhatBuilders() {
  return (
    <section className="pt-20 sm:pt-28 pb-20 sm:pb-32 bg-black text-white">
      <div className="custom-container">
        <h2>What Builders Walk Away With</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-2xl mt-20 ">
          {benefitCardDetails.map((p, i) => (
            <BenefitCard key={i} title={p.title} desc={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
