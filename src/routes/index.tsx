import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroLounge from "@/assets/hero-lounge.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import loungeInterior from "@/assets/lounge-interior.jpg";
import dishAsun from "@/assets/dish-asun.jpg";
import dishPepper from "@/assets/dish-peppersoup.jpg";
import dishIsiewu from "@/assets/dish-isiewu.jpg";
import dishOkro from "@/assets/dish-okro.jpg";
import barDrinks from "@/assets/bar-drinks.jpg";
import eventKaraoke from "@/assets/event-karaoke.jpg";
import { Reveal } from "@/components/Reveal";
import { formatNaira } from "@/data/menu";
import { AmbientVideo } from "@/components/AmbientVideo";
import { AMBIENT_LOUNGE_VIDEO } from "@/data/media";
import { MessageCircle, UtensilsCrossed, Wine } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Relish Lounge Magodo — Good Food. Good Vibes. Great Nights." },
      { name: "description", content: "Magodo's favourite neighborhood lounge, bar and Nigerian kitchen. Cocktails, karaoke nights, authentic Nigerian food in Magodo Phase 1, Lagos." },
      { property: "og:title", content: "Relish Lounge Magodo — Bar, Kitchen & Casino" },
      { property: "og:description", content: "Good food, good vibes, great nights in Magodo Phase 1, Lagos." },
    ],
  }),
  component: Index,
});

const FEATURED = [
  { name: "Asun Rice", price: 7000, img: dishAsun },
  { name: "Catfish Pepper Soup", price: 12000, img: dishPepper },
  { name: "Isi-Ewu", price: 15000, img: dishIsiewu },
  { name: "Seafood Okro Soup", price: 5000, img: dishOkro },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AmbientVideo
          src={AMBIENT_LOUNGE_VIDEO}
          poster={loungeInterior}
          alt="Relish Lounge interior — hanging foliage, warm globe lights, neon glow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/70 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-20">
          <Reveal>
            <p className="font-label text-xs text-amber mb-5">Magodo's Favourite Spot</p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.95] text-cream max-w-3xl">
              Good Food. <span className="italic text-amber">Good Vibes.</span><br/>Great Nights.
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-xl text-cream/80 text-lg leading-relaxed">
              Experience Relish Lounge, where authentic Nigerian flavours meet Lagos nightlife in the heart of Magodo Phase 1.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/kitchen" className="gradient-amber text-charcoal font-label text-xs px-7 py-4 rounded-full shadow-amber-glow hover:scale-105 transition">
                Explore The Kitchen
              </Link>
              <Link to="/events" className="border border-amber/60 text-amber font-label text-xs px-7 py-4 rounded-full hover:bg-amber hover:text-charcoal transition">
                See What's On
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Dual facet split */}
      <section className="relative grid md:grid-cols-2 -mt-px">
        <Link to="/lounge" className="group relative overflow-hidden h-80 md:h-[480px]">
          <img src={barDrinks} alt="Cocktails at Relish bar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-1000" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-deep via-teal-deep/40 to-transparent group-hover:from-amber/60 transition-all duration-700" />
          <div className="relative h-full flex flex-col justify-end p-10">
            <Wine className="h-8 w-8 text-amber mb-4" />
            <h2 className="font-display text-4xl text-cream mb-2">The Lounge <span className="font-script text-amber">& Bar</span></h2>
            <p className="text-cream/75 max-w-xs">Cocktails, cold beer, shisha, karaoke. Late nights done right.</p>
            <p className="font-label text-[10px] text-amber mt-4 group-hover:translate-x-2 transition">Step inside →</p>
          </div>
        </Link>
        <Link to="/kitchen" className="group relative overflow-hidden h-80 md:h-[480px]">
          <img src={heroKitchen} alt="Nigerian jollof rice from Relish Kitchen" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-1000" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent group-hover:from-amber/60 transition-all duration-700" />
          <div className="relative h-full flex flex-col justify-end p-10">
            <UtensilsCrossed className="h-8 w-8 text-amber mb-4" />
            <h2 className="font-display text-4xl text-cream mb-2">The <span className="font-script text-amber">Kitchen</span></h2>
            <p className="text-cream/75 max-w-xs">Authentic Nigerian cooking served fresh, every day of the week.</p>
            <p className="font-label text-[10px] text-amber mt-4 group-hover:translate-x-2 transition">See the menu →</p>
          </div>
        </Link>
      </section>

      {/* About */}
      <section className="relative py-28 bg-teal-deep overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-amber/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
          <Reveal>
            <p className="font-label text-xs text-amber mb-4">About Relish</p>
            <blockquote className="font-display text-3xl sm:text-4xl text-cream leading-snug">
              "Relish is more than a lounge. We are Magodo's neighborhood spot for authentic Nigerian home cooking, cold drinks, late nights, and the kind of atmosphere that keeps you coming back."
            </blockquote>
            <p className="mt-6 text-cream/70">Whether you are here to eat, to unwind, or to turn up, you belong here.</p>
          </Reveal>
          <Reveal delay={200} className="relative">
            <img src={heroLounge} alt="Inside Relish Lounge Magodo" className="rounded-2xl shadow-deep object-cover h-[460px] w-full" loading="lazy" />
            <div className="absolute -bottom-6 -left-6 bg-amber text-charcoal p-5 rounded-2xl shadow-amber-glow max-w-[200px]">
              <p className="font-display text-2xl leading-none">Open Daily</p>
              <p className="font-label text-[10px] mt-2">Mon to Sun</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured menu */}
      <section className="relative py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="font-label text-xs text-amber mb-3">From Our Kitchen Tonight</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream max-w-2xl">Tonight's <span className="italic text-amber">favourites</span>, served warm.</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED.map((f, i) => (
              <Reveal key={f.name} delay={i * 100} className="group">
                <div className="relative overflow-hidden rounded-2xl bg-card border border-amber/15">
                  <img src={f.img} alt={f.name} className="w-full h-64 object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-display text-xl text-cream">{f.name}</p>
                    <p className="font-label text-xs text-amber mt-1">{formatNaira(f.price)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/menu" className="inline-block border border-amber/50 text-amber font-label text-xs px-7 py-3 rounded-full hover:bg-amber hover:text-charcoal transition">See Full Menu</Link>
          </div>
        </div>
      </section>

      {/* Events teaser */}
      <section className="relative py-28 overflow-hidden">
        <img src={eventKaraoke} alt="Karaoke night at Relish Lounge" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="font-label text-xs text-amber mb-3">What's Happening at Relish</p>
            <h2 className="font-display text-5xl text-cream leading-tight">Karaoke Night <br/><span className="font-script text-amber italic text-6xl">every Saturday</span></h2>
            <p className="mt-6 text-cream/80 max-w-md">Live karaoke with DJ Ogyano. Games. Ladies special with free shisha and free drinks. 6PM till late.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/events" className="gradient-amber text-charcoal font-label text-xs px-7 py-4 rounded-full">See All Events</Link>
              <a href="https://wa.me/2348098229807" className="border border-amber/50 text-amber font-label text-xs px-7 py-4 rounded-full">RSVP on WhatsApp</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonial / vibe */}
      <section className="relative py-32 bg-teal-deep">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-display italic text-4xl sm:text-6xl text-cream leading-tight">
              "The vibes here are <span className="text-amber">unmatched</span>."
            </p>
            <p className="mt-6 font-label text-xs text-amber/80">A regular at Relish</p>
          </Reveal>
        </div>
      </section>

      {/* Order CTA */}
      <section className="relative py-28 overflow-hidden">
        <img src={heroKitchen} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" aria-hidden />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl text-cream">Craving something? <br/><span className="text-amber italic">Order from our kitchen.</span></h2>
            <p className="mt-6 text-cream/80">We deliver. Pay with Paystack or Opay. Or chat us on WhatsApp.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/menu" className="gradient-amber text-charcoal font-label text-xs px-8 py-4 rounded-full shadow-amber-glow">Order Online</Link>
              <a href="https://wa.me/2348098229807" className="bg-whatsapp text-cream font-label text-xs px-8 py-4 rounded-full inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
