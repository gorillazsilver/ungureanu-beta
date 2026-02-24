"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type EventItem = {
  id: number;
  city: string;
  zone: string;
  month: string;
  date: string;
  price: number;
  title: string;
  description: string;
  image: string;
};

const WHATSAPP_BASE = "https://wa.me/40723403403";

const EVENTS: EventItem[] = [
  {
    id: 1,
    city: "Timișoara",
    zone: "Vest",
    month: "Noiembrie",
    date: "15 Noiembrie 2026",
    price: 850,
    title: "Barber Master Tour – Timișoara",
    description:
      "Sesiune intensivă dedicată frizerilor care vor fade-uri curate, control și structură profesională.",
    image: "/images/tour-timisoara.jpg",
  },
  {
    id: 2,
    city: "Cluj-Napoca",
    zone: "Nord-Vest",
    month: "Noiembrie",
    date: "22 Noiembrie 2026",
    price: 900,
    title: "Barber Master Tour – Cluj",
    description:
      "Tehnici moderne de tuns, corectarea greșelilor și eficientizarea timpului de lucru.",
    image: "/images/tour-cluj.jpg",
  },
  {
    id: 3,
    city: "București",
    zone: "Sud",
    month: "Octombrie",
    date: "10 Octombrie 2026",
    price: 1000,
    title: "Barber Master Tour – București",
    description:
      "Program complet de formare practică și teorie aplicată pentru frizeri activi.",
    image: "/images/tour-bucuresti.jpg",
  },
  {
    id: 4,
    city: "Iași",
    zone: "Nord-Est",
    month: "Noiembrie",
    date: "28 Noiembrie 2026",
    price: 800,
    title: "Barber Master Tour – Iași",
    description:
      "Focus pe fade, blend, simetrie și disciplină de lucru în salon.",
    image: "/images/tour-iasi.jpg",
  },
];

export default function CountryToursPage() {
  const [selectedCity, setSelectedCity] = useState("Toate");
  const [selectedMonth, setSelectedMonth] = useState("Toate");

  const cities = ["Toate", ...Array.from(new Set(EVENTS.map((e) => e.city)))];
  const months = ["Toate", ...Array.from(new Set(EVENTS.map((e) => e.month)))];

  const filteredEvents = useMemo(() => {
    return EVENTS.filter((event) => {
      const cityMatch = selectedCity === "Toate" || event.city === selectedCity;
      const monthMatch =
        selectedMonth === "Toate" || event.month === selectedMonth;
      return cityMatch && monthMatch;
    });
  }, [selectedCity, selectedMonth]);

  const openWhatsApp = (event: EventItem) => {
    const msg = encodeURIComponent(
      `Salut! Sunt interesat de evenimentul ${event.title} din ${event.city} - ${event.date}.`,
    );
    window.open(`${WHATSAPP_BASE}?text=${msg}`, "_blank");
  };

  return (
    <main className="bg-[#cbdad4] min-h-screen">
      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-b from-[#023d82] to-[#0461ab] text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-stint-ultra-expanded mb-4">
          COUNTRY TOURS
        </h1>
        <p className="max-w-3xl mx-auto font-pontano-sans text-base md:text-lg">
          Barber Master susține sesiuni educaționale în mai multe orașe din
          România. Alege orașul sau luna și găsește evenimentul potrivit pentru
          tine.
        </p>
      </section>

      {/* FILTERS */}
      <section className="py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-4 justify-between">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-sm font-semibold mb-1">Oraș</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="p-2 rounded-lg border border-gray-300"
            >
              {cities.map((city) => (
                <option key={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-sm font-semibold mb-1">Lună</label>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="p-2 rounded-lg border border-gray-300"
            >
              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 bg-[#023d82] text-white px-3 py-1 rounded-full text-xs">
                  {event.date}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-stint-ultra-expanded text-[#023d82] mb-2">
                  {event.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {event.description}
                </p>

                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold">
                      📍 {event.city}
                    </span>
                    <span className="text-xl font-stint-ultra-expanded text-[#023d82]">
                      {event.price} RON
                    </span>
                  </div>

                  <button
                    onClick={() => openWhatsApp(event)}
                    className="w-full bg-gradient-to-r from-[#023d82] to-[#0461ab] text-white py-2 rounded-full font-semibold hover:opacity-90 transition"
                  >
                    Rezervă prin WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center mt-10 text-gray-700">
            Nu există evenimente pentru criteriile selectate.
          </p>
        )}
      </section>
    </main>
  );
}
