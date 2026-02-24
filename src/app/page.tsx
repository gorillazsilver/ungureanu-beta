import HeroSection from "./components/HeroSection";
import Details from "./components/Details";
import Galerie from "./components/Galerie";
import MergedComponent from "./components/MergedComponent";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <div className="bg-[#79FD15]">
        <div>
          <HeroSection />

          {/* Transition layer: green -> black */}
          <div
            className="w-full h-24 md:h-32 lg:h-40"
            style={{
              background:
                "linear-gradient(to bottom, #79FD15 0%, #000000 100%)",
            }}
          />

          {/* Switch background to black from here down */}
          <div className="bg-black">
            <Details />
            <MergedComponent />
            <Galerie />
          </div>
        </div>
      </div>
    </main>
  );
}
