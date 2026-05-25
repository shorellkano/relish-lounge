import { createFileRoute } from "@tanstack/react-router";
import eventKaraoke from "@/assets/event-karaoke.jpg";
import barDrinks from "@/assets/bar-drinks.jpg";
import { Reveal } from "@/components/Reveal";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Specials — Karaoke Nights at Relish Lounge Magodo" },
      { name: "description", content: "Events at Relish Lounge Magodo: karaoke nights, DJ sets, ladies nights, and weekly specials in Lagos." },
      { property: "og:title", content: "Events at Relish Lounge Magodo" },
      { property: "og:description", content: "Always something to look forward to. Karaoke every Saturday." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <>
      <section className="pt-36 pb-16 bg-teal-deep">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-label text-xs text-amber mb-3">Events & Specials</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream">Always something to <br/><span className="italic text-amber">look forward to.</span></h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <Reveal>
            <article className="relative overflow-hidden rounded-3xl">
              <img src={eventKaraoke} alt="Karaoke Night at Relish" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
              <div className="relative p-10 sm:p-16 max-w-2xl">
                <p className="font-label text-xs text-amber mb-4">Every Saturday · 6PM till late</p>
                <h2 className="font-display text-5xl sm:text-6xl text-cream leading-tight">
                  Karaoke Night with <span className="font-script italic text-amber">DJ Ogyano</span>
                </h2>
                <ul className="mt-6 space-y-2 text-cream/80">
                  <li>• Live Karaoke</li>
                  <li>• DJ on Deck</li>
                  <li>• Games & Good Vibes</li>
                  <li className="text-amber">• Ladies Special: Free Shisha & Free Drinks</li>
                </ul>
                <p className="mt-6 text-sm text-cream/70">Gbelegbo Street, Tob Plaza, Magodo Phase 1, Isheri near Berger</p>
                <p className="text-sm text-cream/70">08098229807 · 09150791878</p>
                <a href="https://wa.me/2348098229807" className="mt-8 inline-flex items-center gap-2 bg-whatsapp text-cream font-label text-xs px-7 py-3 rounded-full">
                  <MessageCircle className="h-4 w-4" /> RSVP on WhatsApp
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="relative overflow-hidden rounded-3xl bg-teal">
              <div className="grid md:grid-cols-2">
                <img src={barDrinks} alt="Ladies night drinks" className="h-64 md:h-auto w-full object-cover" loading="lazy" />
                <div className="p-10">
                  <p className="font-label text-xs text-amber mb-4">Recurring</p>
                  <h2 className="font-display text-4xl text-cream">Ladies Special Nights</h2>
                  <p className="mt-4 text-cream/80">Complimentary drinks and shisha for the ladies on selected nights. Bring your crew, we'll bring the vibe.</p>
                  <a href="https://wa.me/2348098229807" className="mt-6 inline-block border border-amber/50 text-amber font-label text-xs px-6 py-3 rounded-full hover:bg-amber hover:text-charcoal transition">Ask for Tonight's Schedule</a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-teal-deep">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-4xl text-cream">Check back for <span className="italic text-amber">what's coming</span></h2>
            <p className="mt-4 text-cream/70">New nights, themed parties and live performances drop on our Instagram first. Want the heads up?</p>
            <a href="https://wa.me/2348098229807" className="mt-8 inline-flex items-center gap-2 gradient-amber text-charcoal font-label text-xs px-7 py-3 rounded-full">
              <MessageCircle className="h-4 w-4" /> Subscribe via WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}