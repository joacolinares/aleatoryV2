import Hero from "@/components/Hero";
import How from "@/components/How";
import Info from "@/components/Info";
import TechInnovation from "@/components/TechInnovation";
import Tokenomics from "@/components/Tokenomics";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div className="h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <Info />
      </div>
      <div className="min-h-screen">
        <How />
      </div>
      <div className="min-h-screen">
        <Tokenomics />
      </div>
      <div className="min-h-screen">
        <TechInnovation />
      </div>
    </main>
  );
}
