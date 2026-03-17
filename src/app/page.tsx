import Header from "../components/Header";
import Hero from "../components/Hero";
import ProgramOverview from "../components/ProgramOverview";
import ProgramTrack from "../components/ProgramTrack";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <ProgramOverview />
      <ProgramTrack />
    </div>
  );
}
