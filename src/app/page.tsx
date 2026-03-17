import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProgramOverview from "../components/ProgramOverview";
import ProgramTrack from "../components/ProgramTrack";
import WhatBuilders from "../components/WhatBuilders";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ProgramOverview />
      <ProgramTrack />
      <div>
        <HowItWorks />
        <WhatBuilders />
      </div>
    </div>
  );
}
