import { createFileRoute, Link } from "@tanstack/react-router";
import heroLounge from "@/assets/hero-lounge.jpg";
import barDrinks from "@/assets/bar-drinks.jpg";
import eventKaraoke from "@/assets/event-karaoke.jpg";
import { Reveal } from "@/components/Reveal";
import { Wine, Music, Flame, Sparkles, Dice5, Sofa } from "lucide-react";

export const Route = createFileRoute("/lounge")({
  head: () => ({
    meta: [
      { title: "The Lounge & Bar — Relish Lounge Magodo Phase 1" },
      { name: "description", content: "Relish Lounge Magodo, Lagos' favourite bar and nightlife spot. Cocktails, cold beer, shisha, DJ nights, live karaoke and a warm atmosphere in Magodo Phase 1, Isheri, near Berger." },
      { property: "og:title", content: "The Lounge & Bar — Relish Lounge Magodo" },
      { property: "og:description", content: "Lagos nightlife with a neighborhood feel. Drinks, karaoke, shisha, casino." },
    ],
  }),
  component: LoungePage,
});

const OFFERS = [
  { icon: Wine, title: "Fully Stocked Bar", body: "Wide selection of beers, wines, spirits, whiskeys, cocktails and mocktails." },
  { icon: Music, title: "Live DJ & Karaoke", body: "Karaoke nights with DJ Ogyano every Saturday. Music that moves the room." },
  { icon: Flame, title: "Shisha Lounge", body: "Premium shisha flavours, served the way you like." },
  { icon: Sparkles, title: "Ladies Special", body: "Free shisha and free drinks for the ladies on selected nights." },
  { icon: Sofa, title: "Intimate Seating", body: "Comfortable indoor seating, ambient lighting, warm hospitality." },
  { icon: Dice5, title: "Casino Gaming", body: "Try your luck at our casino gaming area." },
];

const DRINKS_PREVIEW = [
  { cat: "Beer", items: ["Heineken — ₦2,500", "Guinness Stout — ₦1,700 to ₦2,700", "Budweiser — ₦2,200"] },
  { cat: "Wines", items: ["Martini Rose — ₦25,000", "Aznauri Wine — ₦20,000", "4 Cousins — ₦15,000"] },
  { cat: "Spirits", items: ["Hennessey VS — ₦75,000", "Jameson Black Barrel — ₦60,000", "Smirnoff Vodka — from ₦5,000"] },
  { cat: "Cocktails & Mocktails", items: ["Crafted cocktails — from ₦5,000", "Fresh mocktails — from ₦5,000"] },
];

function LoungePage() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src={heroLounge} alt="Relish Lounge bar at night" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-32">
          <Reveal>
            <p className="font-label text-xs text-amber mb-5">The Lounge & Bar</p>
            <h1 className="font-display text-5xl sm:text-7xl text-cream max-w-3xl">Lagos Nightlife, <br/><span className="italic text-amber">Neighborhood Feel.</span></h1>
            <p className="mt-6 max-w-xl text-cream/80 text-lg">Relish Lounge is Magodo's go-to spot for cold drinks, great cocktails, good music and unforgettable nights.</p>
          </Reveal>
        </div>
      </section>

      {/* Offerings staggered */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {OFFERS.map((o, i) => {
            const Icon = o.icon;
            const flip = i % 2 === 1;
            return (
              <Reveal key={o.title}>
                <div className={`flex flex-col md:flex-row items-center gap-8 ${flip ? "md:flex-row-reverse" : ""}`}>
                  <div className={`md:w-1/2 ${flip ? "md:pl-16" : "md:pr-16"}`}>
                    <div className="h-14 w-14 rounded-full gradient-amber grid place-items-center mb-5 shadow-amber-glow">
                      <Icon className="h-6 w-6 text-charcoal" />
                    </div>
                    <h3 className="font-display text-3xl text-cream mb-3">{o.title}</h3>
                    <p className="text-cream/70 leading-relaxed">{o.body}</p>
                  </div>
                  <div className="md:w-1/2 h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Drinks preview */}
      <section className="relative py-24 bg-teal-deep overflow-hidden">
        <img src={barDrinks} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-15" loading="lazy" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="font-label text-xs text-amber mb-3">Sip On Something</p>
            <h2 className="font-display text-5xl text-cream">A taste of <span className="italic text-amber">the bar</span></h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            {DRINKS_PREVIEW.map((d, i) => (
              <Reveal key={d.cat} delay={i * 80}>
                <div className="border-l-2 border-amber pl-6 py-2">
                  <p className="font-label text-xs text-amber mb-3">{d.cat}</p>
                  <ul className="space-y-2 text-cream/85">
                    {d.items.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/menu" className="inline-block gradient-amber text-charcoal font-label text-xs px-7 py-4 rounded-full">View Full Drinks Menu</Link>
          </div>
        </div>
      </section>

      {/* Saturday night */}
      <section className="relative py-32 overflow-hidden">
        <img src={eventKaraoke} alt="Karaoke crowd at Relish Lounge" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-label text-xs text-amber mb-4">Every Saturday Night at Relish</p>
            <h2 className="font-display text-6xl sm:text-8xl text-cream leading-none">
              <span className="font-script text-amber italic">Karaoke</span> Night
            </h2>
            <p className="mt-6 text-cream/80 text-lg">Live Karaoke. DJ on Deck. Good Vibes. Games.</p>
            <p className="mt-3 text-amber font-label text-sm">Ladies Special: Free Shisha & Free Drinks</p>
            <p className="mt-2 text-cream/70">6PM till late</p>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
              <div className="border border-amber/30 rounded-2xl p-5">
                <p className="font-label text-[10px] text-amber mb-2">Address</p>
                <p className="text-cream/85">Gbelegbo Street, by Tob Plaza, Magodo Phase 1, Isheri near Berger</p>
              </div>
              <div className="border border-amber/30 rounded-2xl p-5">
                <p className="font-label text-[10px] text-amber mb-2">RSVP</p>
                <p className="text-cream/85">08098229807</p>
                <p className="text-cream/85">09150791878</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hours */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-label text-xs text-amber mb-3">Opening Hours</p>
          <h2 className="font-display text-4xl text-cream mb-8">We're open <span className="italic text-amber">every day</span></h2>
          <ul className="space-y-2 text-cream/80">
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((d) => (
              <li key={d} className="flex justify-between border-b border-amber/15 pb-2">
                <span className="font-label text-xs">{d}</span>
                <span className="text-amber/90">Open</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}