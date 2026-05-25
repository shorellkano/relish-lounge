import { createFileRoute, Link } from "@tanstack/react-router";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import dishAsun from "@/assets/dish-asun.jpg";
import dishPepper from "@/assets/dish-peppersoup.jpg";
import dishIsiewu from "@/assets/dish-isiewu.jpg";
import dishOkro from "@/assets/dish-okro.jpg";
import { Reveal } from "@/components/Reveal";
import { MENU, formatNaira } from "@/data/menu";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/kitchen")({
  head: () => ({
    meta: [
      { title: "The Kitchen — Authentic Nigerian Food in Magodo Phase 1 | Relish" },
      { name: "description", content: "Relish Kitchen Magodo: authentic Nigerian food served fresh daily. Jollof rice, pepper soup, swallow and soups, asun, grilled fish and more. Order online or visit us in Magodo Phase 1 Lagos." },
      { property: "og:title", content: "The Kitchen — Relish Lounge Magodo" },
      { property: "og:description", content: "Authentic Nigerian flavours, made fresh daily." },
    ],
  }),
  component: KitchenPage,
});

const SHOW = ["main-meal","swallow","soup","pepper-soup","side-meal","protein","side-protein","appetizer"];

function KitchenPage() {
  const categories = MENU.filter((c) => SHOW.includes(c.id));
  return (
    <>
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        <img src={heroKitchen} alt="Nigerian jollof and chicken at Relish Kitchen" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-32">
          <Reveal>
            <p className="font-label text-xs text-amber mb-5">The Kitchen</p>
            <h1 className="font-display text-5xl sm:text-7xl text-cream max-w-3xl">Authentic Nigerian Flavours, <br/><span className="italic text-amber">Made Fresh Daily.</span></h1>
            <p className="mt-6 max-w-xl text-cream/80 text-lg">Our kitchen is open every day of the week, from your favourite swallow and soup to asun rice, pepper soup and everything in between.</p>
            <p className="mt-4 font-label text-xs text-amber">Open Monday to Sunday</p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-teal-deep">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <p className="font-display italic text-3xl sm:text-4xl text-cream leading-snug">
              "At Relish Kitchen, we cook the food you grew up loving. Every pot is made with care, every plate served with pride. We bring the real taste of <span className="text-amber">Nigerian cooking</span> to your table, or your doorstep."
            </p>
          </Reveal>
        </div>
      </section>

      {/* Signature dishes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <p className="font-label text-xs text-amber mb-3">Signature Plates</p>
            <h2 className="font-display text-5xl text-cream">From <span className="italic text-amber">our pots</span> to your table</h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { img: dishAsun, name: "Asun Rice", price: 7000 },
              { img: dishPepper, name: "Catfish Pepper Soup", price: 12000 },
              { img: dishIsiewu, name: "Isi-Ewu", price: 15000 },
              { img: dishOkro, name: "Seafood Okro Soup", price: 5000 },
            ].map((d, i) => (
              <Reveal key={d.name} delay={i * 80}>
                <div className="relative overflow-hidden rounded-2xl group">
                  <img src={d.img} alt={d.name} className="w-full h-72 object-cover group-hover:scale-110 transition duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <p className="font-display text-xl text-cream">{d.name}</p>
                    <p className="font-label text-xs text-amber mt-1">{formatNaira(d.price)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Category previews */}
      <section className="py-24 bg-teal-deep">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display text-5xl text-cream mb-3">A taste of the <span className="italic text-amber">menu</span></h2>
            <p className="text-cream/70 max-w-xl">A preview of what's cooking. The full menu is just a tap away.</p>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-2 gap-x-12 gap-y-12">
            {categories.map((c, i) => (
              <Reveal key={c.id} delay={i * 60}>
                <div>
                  <p className="font-label text-xs text-amber mb-4 flex items-center gap-3">
                    <span className="h-px w-8 bg-amber" />{c.name}
                  </p>
                  <ul className="space-y-2">
                    {c.items.slice(0, 4).map((it) => (
                      <li key={it.name} className="flex justify-between items-baseline border-b border-amber/10 pb-2">
                        <span className="text-cream">{it.name}</span>
                        <span className="text-amber font-label text-xs">{formatNaira(it.price)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/menu" className="inline-block gradient-amber text-charcoal font-label text-xs px-8 py-4 rounded-full shadow-amber-glow">View Full Menu & Order</Link>
          </div>
        </div>
      </section>

      {/* Order at home */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-display text-5xl text-cream">Enjoy Relish <span className="italic text-amber">at home</span></h2>
            <p className="mt-5 text-cream/80">Order online and pay with Paystack or Opay. Or send us a WhatsApp order.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/menu" className="gradient-amber text-charcoal font-label text-xs px-8 py-4 rounded-full">Order via Paystack</Link>
              <Link to="/menu" className="bg-teal border border-amber/40 text-cream font-label text-xs px-8 py-4 rounded-full">Order via Opay</Link>
              <a href="https://wa.me/2348098229807" className="bg-whatsapp text-cream font-label text-xs px-8 py-4 rounded-full inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp Order
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}