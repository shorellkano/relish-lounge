import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, MessageCircle, Instagram } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Find Us — Relish Lounge Magodo Phase 1, Lagos" },
      { name: "description", content: "Contact Relish Lounge Magodo: visit us at Gbelegbo Street, Magodo Phase 1. Order by WhatsApp or call us." },
      { property: "og:title", content: "Contact Relish Lounge Magodo" },
      { property: "og:description", content: "Come find us in Magodo Phase 1, Isheri near Berger." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Relish! From ${form.name} (${form.phone}): ${form.message}`;
    window.open(`https://wa.me/2348098229807?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <>
      <section className="pt-36 pb-10 bg-teal-deep">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-label text-xs text-amber mb-3">Visit Us</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream">Come find <span className="italic text-amber">us.</span></h1>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-amber shrink-0 mt-1" />
                <div>
                  <p className="font-label text-xs text-amber mb-1">Address</p>
                  <p className="text-cream">Gbelegbo Street, by Tob Plaza, Magodo Phase 1, Isheri near Berger, Lagos</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-amber shrink-0 mt-1" />
                <div>
                  <p className="font-label text-xs text-amber mb-1">Phone</p>
                  <p className="text-cream">08098229807</p>
                  <p className="text-cream">09150791878</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="h-6 w-6 text-amber shrink-0 mt-1" />
                <div>
                  <p className="font-label text-xs text-amber mb-1">WhatsApp Order</p>
                  <a href="https://wa.me/2348098229807" className="text-cream hover:text-amber">08098229807</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram className="h-6 w-6 text-amber shrink-0 mt-1" />
                <div>
                  <p className="font-label text-xs text-amber mb-1">Follow</p>
                  <a href="https://www.instagram.com/relishlounge" target="_blank" rel="noreferrer" className="text-cream hover:text-amber block">Instagram: @relishlounge</a>
                  <a href="https://www.tiktok.com/@relishloungelagos" target="_blank" rel="noreferrer" className="text-cream hover:text-amber block">TikTok: @relishloungelagos</a>
                </div>
              </div>
              <div className="pt-4 border-t border-amber/15">
                <p className="font-label text-xs text-amber mb-1">Kitchen Hours</p>
                <p className="text-cream/85">Monday to Sunday</p>
              </div>

              <form onSubmit={submit} className="mt-10 space-y-4 bg-card border border-amber/15 rounded-2xl p-6">
                <p className="font-display text-2xl text-amber">Send us a message</p>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name" className="w-full bg-input border border-amber/20 rounded-lg px-4 py-3 text-cream focus:border-amber focus:outline-none" />
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone number" className="w-full bg-input border border-amber/20 rounded-lg px-4 py-3 text-cream focus:border-amber focus:outline-none" />
                <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4} placeholder="Your message" className="w-full bg-input border border-amber/20 rounded-lg px-4 py-3 text-cream focus:border-amber focus:outline-none" />
                <button type="submit" className="gradient-amber text-charcoal font-label text-xs px-7 py-3 rounded-full">Send via WhatsApp</button>
                {sent && <p className="text-amber text-sm">Thanks! Opening WhatsApp...</p>}
              </form>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative rounded-2xl overflow-hidden border border-amber/20 h-[600px]">
              <iframe
                title="Relish Lounge map"
                src="https://www.google.com/maps?q=Magodo+Phase+1,+Isheri,+Lagos&output=embed"
                className="w-full h-full"
                style={{ filter: "invert(0.92) hue-rotate(180deg) brightness(0.85)" }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}