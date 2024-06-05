import Hero from "@/components/Hero";
import How from "@/components/How";
import Info from "@/components/Info";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen">
        <Hero />
      </div>
      <div className="min-h-screen">
        <Info />
      </div>
      <div className="min-h-screen">
        <How />
      </div>
    </main>
  );
}
