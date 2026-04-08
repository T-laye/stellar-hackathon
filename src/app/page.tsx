// import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProgramOverview from "../components/ProgramOverview";
import ProgramTrack from "../components/ProgramTrack";
import WhatBuilders from "../components/WhatBuilders";
// import Mentors from "../components/Mentors";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
// import Judges from "../components/Judges";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ProgramOverview />
      <ProgramTrack />
      <HowItWorks />
      {/* <div className="relative">
        <div className="absolute h-250 -right-90  -top-210 max-md:hidden">
          <Image
            src="/curve-bg.png"
            alt="component"
            width={1000}
            height={1000}
            className="h-full object-contain"
          />
        </div>
      </div> */}
        <WhatBuilders />
        {/* <Judges /> */}
        {/* <Mentors /> */}
        <Faq />
        <Footer />
    </div>
  );
}
