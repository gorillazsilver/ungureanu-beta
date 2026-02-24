"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      src: "/images/testimoniale/ciucas.webp",
      alt: "Alin Ciucas",
      link: "/alin-ciucas",
      aspectRatio: "3/4",
      title: "Alin Ciucas",
    },
    {
      src: "/images/testimoniale/morar.webp",
      alt: "Morar Adrian",
      link: "/morar-adrian",
      aspectRatio: "3/4",
      title: "Morar Adrian",
    },
    {
      src: "/images/testimoniale/banu.webp",
      alt: "Banu Andrei",
      link: "/banu-andrei",
      aspectRatio: "3/4",
      title: "Banu Andrei",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: "#cbdad4" }}
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-3xl md:text-5xl font-stint-ultra-expanded text-[#023d82] text-center mb-12">
          Testimoniale
        </h2>
        <p className="text-lg md:text-xl font-pontano-sans text-[#333333] text-center mb-12">
          Descopera povestile de succes ale celor mai talentati studenti ai Fade
          Academy, care au transformat pasiunea pentru frizerie intr-o cariera
          de succes. Acesti absolventi sunt sursa noastra de mandrie si
          inspiratie pentru toti cei care doresc sa isi depaseasca limitele si
          sa devina maestri in arta frizeriei. Afla cum au reusit sa faca
          diferenta si sa inspire generatiile viitoare prin munca si dedicarea
          lor.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <a
              key={testimonial.src}
              href={testimonial.link}
              className="relative rounded-2xl overflow-hidden shadow-lg group border-2 border-[#023d82]"
              style={{
                animation: isVisible ? "float 6s ease-in-out infinite" : "none",
                aspectRatio: testimonial.aspectRatio || "4/3",
              }}
            >
              <style jsx>{`
                @keyframes float {
                  0% {
                    transform: translateY(0px);
                  }
                  50% {
                    transform: translateY(-15px);
                  }
                  100% {
                    transform: translateY(0px);
                  }
                }
              `}</style>
              <div className="relative w-full h-full">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110 brightness-[0.85] blur-[0.5px]"
                  priority
                />
                <div className="absolute inset-0 bg-[#6fa3d1]/30 group-hover:bg-[#6fa3d1]/50 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-stint-ultra-expanded text-center px-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {testimonial.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
