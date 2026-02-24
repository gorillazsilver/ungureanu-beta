import Banner1 from "../components/Banner1";
import AnimatedText from "../components/AnimatedText";
import FadeAcademySection from "../components/AcademiPresentation";
import PriceContact from "../components/PriceContact";
import RevSm from "../components/RevSm";
import MergedComponents from "../components/MergedComponent";

export default function SMPage() {
  return (
    <div className="bg-[#cbdad4] overflow-hidden">
      <Banner1 imageSrc="/images/sm_bg.webp" altText="SM Background" />
      <AnimatedText />
      <FadeAcademySection
        imageSrc="/images/sm_foto.webp"
        formatorName="Bajus Francisc"
        locationName="Satu Mare"
        description="Un formator de top al Fade Academy din Satu-Mare, cu o experienta vasta in arta frizeriei. Cu o pasiune autentica pentru acest domeniu, el se dedica instruirii viitoarelor generatii de frizeri, punand accent pe tehnici moderne si tendinte actuale in hairstyling. Cursurile sale sunt structurate astfel incat fiecare participant sa obtina abilitati practice solide si cunostinte esentiale pentru a-si construi o cariera de succes in frizerie. Datorita experientei sale si a metodei de predare interactive, formatorul din Satu-Mare inspira incredere si profesionalism."
      />
      <PriceContact
        price="3000 RON"
        phoneNumber="+(40) 745 307 856"
        location="Gentleman's Barber Shop, Strada Prahova 10, Satu Mare 440115"
        facebookLink="https://www.facebook.com/gentlemansbarbershopsatumare"
      />
      <MergedComponents />
      <RevSm />
    </div>
  );
}
