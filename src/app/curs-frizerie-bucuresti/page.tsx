import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import Tryout from "../components/Tryout";
import Banner2 from "../components/Banner2";
import Mapc from "../Mapc";
import RevBu from "../components/RevBu";
import Link from "next/link";

export default function BucurestiPage() {
  return (
    <div className="bg-[#000000] overflow-hidden">
      <AnimatedText />
      <Banner2 />
      <Tryout />

      {/* Profesorii Academiei Section */}

      <Mapc />
      <RevBu />
    </div>
  );
}
