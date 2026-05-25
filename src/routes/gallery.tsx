import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroLounge from "@/assets/hero-lounge.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import dishAsun from "@/assets/dish-asun.jpg";
import dishPepper from "@/assets/dish-peppersoup.jpg";
import dishIsiewu from "@/assets/dish-isiewu.jpg";
import dishOkro from "@/assets/dish-okro.jpg";
import barDrinks from "@/assets/bar-drinks.jpg";
import eventKaraoke from "@/assets/event-karaoke.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — The Relish Experience | Relish Lounge Magodo" },
      { name: "description", content: "Step inside Relish Lounge Magodo through our gallery: food, drinks, events and the lounge itself." },
      { property: "og:title", content: "Gallery — Relish Lounge Magodo" },
      { property: "og:description", content: "The Relish experience in photos." },
    ],
  }),
  component: GalleryPage,
});

type Tag = "all" | "food" | "drinks" | "events" | "lounge";
const PHOTOS: { src: string; alt: string; tag: Exclude<Tag, "all">; h: string }[] = [
  { src: dishAsun, alt: "Asun bowl", tag: "food", h: "h-80" },
  { src: barDrinks, alt: "Cocktails at the bar", tag: "drinks", h: "h-96" },
  { src: heroLounge, alt: "Lounge interior", tag: "lounge", h: "h-72" },
  { src: dishPepper, alt: "Catfish pepper soup", tag: "food", h: "h-96" },
  { src: eventKaraoke, alt: "Karaoke night", tag: "events", h: "h-80" },
  { src: dishIsiewu, alt: "Isi-Ewu delicacy", tag: "food", h: "h-72" },
  { src: heroKitchen, alt: "Jollof rice and chicken", tag: "food", h: "h-96" },
  { src: dishOkro, alt: "Seafood okro soup", tag: "food", h: "h-80" },
];

const TAGS: { id: Tag; label: string }[] = [
  { id: "all", label: "All" },
  { id: "food", label: "Food" },
  { id: "drinks", label: "Drinks" },
  { id: "events", label: "Events" },
  { id: "lounge", label: "The Lounge" },
];

function GalleryPage() {
  const [tag, setTag] = useState<Tag>("all");
  const photos = PHOTOS.filter((p) => tag === "all" || p.tag === tag);
  return (
    <>
      <section className="pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-label text-xs text-amber mb-3">Gallery</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream">The Relish <span className="italic text-amber">Experience</span></h1>
          <div className="mt-10 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button key={t.id} onClick={() => setTag(t.id)}
                className={`font-label text-[11px] px-5 py-2.5 rounded-full transition ${
                  tag === t.id ? "bg-amber text-charcoal" : "border border-amber/30 text-cream/70 hover:text-amber"
                }`}>{t.label}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {photos.map((p, i) => (
            <Reveal key={p.src + i} delay={i * 40} className="break-inside-avoid mb-4">
              <div className="relative overflow-hidden rounded-2xl group">
                <img src={p.src} alt={p.alt} className={`w-full ${p.h} object-cover group-hover:scale-110 transition duration-700`} loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}