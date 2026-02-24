import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";
import RevB from "../components/RevB";
import MergedComponents from "../components/MergedComponent";

export default function BotosaniPage() {
  return (
    <div className="bg-[#cbdad4] overflow-hidden">
      <Banner1
        imageSrc="/images/botosani_bg.webp"
        altText="Botosani Background"
      />
      <AnimatedText />
      <FadeAcademySection
        imageSrc="/images/botosani_foto.webp"
        formatorName="TUCALIUC ANDI BENAMIN"
        locationName="Botosani"
        description="La Fade Academy Botosani, Andi este liderul care a format peste 25 de frizeri activi, dintre care multi si-au deschis propriile saloane. Cursurile de frizerie Botosani sunt recunoscute pentru atentia la detalii si pentru pregatirea completa pe care o ofera, sub indrumarea unui profesionist dedicat. Cu o experienta bogata si o pasiune pentru educatie, Andi asigura ca fiecare cursant invata tehnicile necesare pentru a deveni un frizer de succes si, mai mult decat atat, isi dezvolta increderea pentru a-si lansa propria afacere in acest domeniu dinamic."
      />
      <PriceContact
        price="3500 RON"
        phoneNumber="+(40) 753 757 164"
        location="T.A.G95Barber, Aleea Mihail Kogalniceanu 32, Botoșani 710182"
        facebookLink="https://www.facebook.com/T.A.G95Barber?mibextid=LQQJ4d&rdid=36dsP8i5fxWEg0Eu&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FU7JBGZdHMwSxHMmc%2F%3Fmibextid%3DLQQJ4d"
      />
      <MergedComponents />
      <RevB />
    </div>
  );
}
