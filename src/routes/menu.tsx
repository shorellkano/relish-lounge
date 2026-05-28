import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MENU, formatNaira } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { Plus, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Full Menu & Online Ordering — Relish Lounge Magodo" },
      { name: "description", content: "Browse the full Relish Lounge menu: Nigerian meals, swallow, soups, pepper soup, drinks, cocktails and more. Order online and pay with Paystack, Opay or WhatsApp." },
      { property: "og:title", content: "Order Online — Relish Lounge Magodo" },
      { property: "og:description", content: "Order Nigerian food and drinks from Relish Lounge Magodo." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const { add, setOpen, count } = useCart();
  const [active, setActive] = useState(MENU[0].id);
  const cat = MENU.find((c) => c.id === active)!;

  return (
    <>
      <section className="pt-24 pb-6 sm:pt-32 sm:pb-12 bg-teal-deep">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-label text-xs text-amber mb-2 sm:mb-3">Menu & Order</p>
          <h1 className="font-display text-3xl sm:text-6xl text-cream max-w-3xl">Browse, build your <span className="italic text-amber">order</span>, and check out.</h1>
          <p className="mt-3 sm:mt-5 text-cream/70 max-w-xl text-sm sm:text-base hidden sm:block">Tap the plus on any item to add it to your cart. Pay with Paystack, Opay, or WhatsApp.</p>
        </div>
      </section>

      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="lg:max-h-[70vh] overflow-x-auto lg:overflow-y-auto -mx-6 lg:mx-0 px-6 lg:px-0">
              <ul className="flex lg:flex-col gap-2 lg:gap-1 min-w-max lg:min-w-0 pb-2">
                {MENU.map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => setActive(c.id)}
                      className={`whitespace-nowrap font-label text-[11px] px-4 py-2.5 rounded-full lg:rounded-lg w-full text-left transition ${
                        active === c.id ? "bg-amber text-charcoal" : "text-cream/70 hover:text-amber border border-amber/20 lg:border-none"
                      }`}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Items */}
          <div>
            <h2 className="font-display text-2xl sm:text-4xl text-amber mb-4 sm:mb-6">{cat.name}</h2>
            <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {cat.items.map((it) => (
                <li key={it.name} className="p-3 sm:p-5 bg-card border border-amber/15 rounded-xl hover:border-amber/50 transition">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0 flex-1 w-full sm:w-auto">
                    <p className="text-cream text-sm sm:text-base leading-snug sm:truncate">{it.name}</p>
                    <p className="text-amber font-label text-xs mt-1">{it.note ? it.note + " " : ""}{formatNaira(it.price)}</p>
                    </div>
                    <button
                      onClick={() => { add(it.name, it.price); setOpen(true); }}
                      className="w-full sm:w-11 h-11 inline-flex items-center justify-center gap-2 rounded-full gradient-amber text-charcoal hover:scale-110 transition shrink-0 shadow-amber-glow"
                      aria-label={`Add ${it.name}`}
                    >
                      <Plus className="h-5 w-5" />
                      <span className="font-label text-[10px] sm:hidden">Add to order</span>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Floating cart button on mobile */}
        {count > 0 && (
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-40 gradient-amber text-charcoal font-label text-xs px-6 py-3 rounded-full shadow-amber-glow"
          >
            View Cart ({count})
          </button>
        )}
      </section>

      <section className="py-16 bg-teal-deep text-center">
        <p className="text-cream/80 mb-4">Prefer to order on WhatsApp?</p>
        <a href="https://wa.me/2348098229807" className="inline-flex items-center gap-2 bg-whatsapp text-cream font-label text-xs px-7 py-3 rounded-full">
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
      </section>
    </>
  );
}