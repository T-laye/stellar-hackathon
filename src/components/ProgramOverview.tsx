import React from "react";

const programDetails = [
  {
    title: "Program Duration",
    desc: "6 weeks",
  },
  {
    title: "Build Sprint",
    desc: "20 Teams",
  },
  {
    title: "Residency Finalist",
    desc: "5 Teams",
  },
  {
    title: "Per Team",
    desc: "3 Builders",
  },
];

// ✅ Proper props typing
type ProgramCardProps = {
  title: string;
  desc: string;
};

const ProgramCard = ({ title, desc }: ProgramCardProps) => {
  return (
    <div className="bg-[#F3F3F3D9] rounded-2xl pl-9.5 py-11.5">
      <h3 className="text-[32px] shabo-font">{desc}</h3>
      <p className="text-xl">{title}</p>
    </div>
  );
};

export default function ProgramOverview() {
  return (
    <section id="program-overview" className="pt-16 sm:pt-20 xl:pt-28 pb-20">
      <div className="custom-container">
        <h2>Program Overview</h2>

        <p className="text-[#444444] mt-4 max-w-2xl text-center mx-auto">
          A structured innovation sprint helping teams turn ideas into working
          products through mentorship, workshops, and a final in-person
          residency.
        </p>

        {/* ✅ Improved grid responsiveness */}
        <div className="bg-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 rounded-2xl mt-14">
          {programDetails.map((p, i) => (
            <ProgramCard key={i} title={p.title} desc={p.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}
