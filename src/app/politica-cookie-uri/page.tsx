import React from "react";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#cbdad4] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#023d82] mb-6 font-stint-ultra-expanded">
          Politica Cookie-uri - Fade Academy Education
        </h1>

        <div className="space-y-6 text-[#023d82] font-pontano-sans">
          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Ce sunt cookie-urile?
            </h2>
            <p className="text-base leading-relaxed">
              Cookie-urile sunt fișiere text mici care sunt plasate pe dispozitivul dvs. (computer, tabletă sau telefon mobil) atunci când vizitați un site web. Acestea sunt utilizate pe scară largă pentru a face site-urile web să funcționeze sau să funcționeze mai eficient, precum și pentru a furniza informații proprietarilor site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Cum utilizăm cookie-urile pe site-ul Fade Academy Education?
            </h2>
            <p className="text-base leading-relaxed">
              Site-ul nostru utilizează cookie-uri în mod limitat pentru a-ți îmbunătăți experiența de navigare. În prezent, nu colectăm date personale pentru publicitate sau pentru alte scopuri comerciale. Utilizăm doar cookie-urile esențiale necesare pentru funcționarea corectă a site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Tipuri de cookie-uri utilizate
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 font-familjen-grotesk">
                  Cookie-uri esențiale (Vercel)
                </h3>
                <p className="text-base leading-relaxed">
                  Site-ul nostru este găzduit pe platforma Vercel, care poate utiliza cookie-uri tehnice pentru a asigura funcționarea corectă a site-ului, pentru gestionarea sesiunilor și pentru optimizarea performanței. Aceste cookie-uri sunt necesare pentru funcționarea site-ului și nu pot fi dezactivate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-familjen-grotesk">
                  Cookie-uri Google
                </h3>
                <p className="text-base leading-relaxed">
                  Utilizăm servicii Google (cum ar fi Google Fonts) care pot seta cookie-uri pentru a îmbunătăți experiența utilizatorului. Aceste cookie-uri sunt utilizate în mod limitat și nu colectăm date pentru publicitate sau profilare.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Ce date colectăm?
            </h2>
            <p className="text-base leading-relaxed">
              În prezent, nu colectăm date personale pentru publicitate sau pentru alte scopuri comerciale. Singurele date colectate sunt cele necesare pentru funcționarea tehnică a site-ului prin intermediul platformei Vercel, care poate include informații tehnice standard precum adresa IP, tipul de browser și sistemul de operare, dar acestea sunt utilizate doar pentru scopuri tehnice și de securitate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Aplicații terțe
            </h2>
            <p className="text-base leading-relaxed">
              În prezent, site-ul nostru nu utilizează aplicații terțe pentru colectarea de date sau publicitate. Singurele servicii externe utilizate sunt Vercel (pentru găzduire) și Google (pentru fonturi), care sunt necesare pentru funcționarea corectă a site-ului.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Gestionarea cookie-urilor
            </h2>
            <p className="text-base leading-relaxed">
              Puteți gestiona sau șterge cookie-urile în orice moment prin setările browserului dvs. Vă rugăm să rețineți că dezactivarea cookie-urilor poate afecta funcționalitatea site-ului nostru și poate împiedica accesul la anumite funcții.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Modificări ale acestei politici
            </h2>
            <p className="text-base leading-relaxed">
              Ne rezervăm dreptul de a actualiza această politică de cookie-uri în orice moment. Vă recomandăm să verificați periodic această pagină pentru a fi la curent cu orice modificări. Data ultimei actualizări este indicată la sfârșitul acestui document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 font-familjen-grotesk">
              Contact
            </h2>
            <p className="text-base leading-relaxed">
              Dacă aveți întrebări despre utilizarea cookie-urilor pe site-ul nostru, vă rugăm să ne contactați la{" "}
              <a
                href="mailto:contact@fadeacademy.ro"
                className="text-[#023d82] underline hover:text-blue-700"
              >
                contact@fadeacademy.ro
              </a>
              .
            </p>
          </section>

          <div className="pt-6 border-t border-gray-300">
            <p className="text-sm text-gray-600">
              Ultima actualizare: {new Date().toLocaleDateString("ro-RO", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-[#023d82] text-[#ededed] rounded hover:bg-[#0355a8] transition-colors font-pontano-sans"
            >
              Înapoi la pagina principală
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
