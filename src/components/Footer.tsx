import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";
import logo from "@/assets/relish-logo.jpg";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M16.5 3a5.7 5.7 0 0 0 4.5 4.5v3a8.7 8.7 0 0 1-4.5-1.3v6.6a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a3 3 0 1 0 2 2.7V3h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-teal-deep text-cream/80 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Relish Lounge logo" className="h-14 w-14 rounded-full ring-2 ring-amber/60" loading="lazy" />
            <div>
              <p className="font-script text-2xl text-amber leading-none">Relish</p>
              <p className="font-label text-[10px] text-cream/60">Lounge & Casino</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/65">
            Magodo's favourite neighborhood lounge, bar and Nigerian kitchen. Open daily.
          </p>
        </div>

        <div>
          <h4 className="font-label text-xs text-amber mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber">Home</Link></li>
            <li><Link to="/lounge" className="hover:text-amber">The Lounge</Link></li>
            <li><Link to="/kitchen" className="hover:text-amber">The Kitchen</Link></li>
            <li><Link to="/menu" className="hover:text-amber">Menu and Order</Link></li>
            <li><Link to="/events" className="hover:text-amber">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-amber">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-label text-xs text-amber mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-amber shrink-0 mt-0.5" /> Gbelegbo Street, Tob Plaza, Magodo Phase 1, Isheri near Berger, Lagos</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-amber shrink-0 mt-0.5" /> 08098229807 / 09150791878</li>
            <li>
              <a href="https://wa.me/2348098229807" className="hover:text-amber inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-amber" /> WhatsApp Order
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label text-xs text-amber mb-4">Follow & Legal</h4>
          <div className="flex gap-3 mb-5">
            <a href="https://www.instagram.com/relishlounge" target="_blank" rel="noreferrer" aria-label="Instagram @relishlounge"
               className="h-10 w-10 grid place-items-center rounded-full border border-amber/40 text-amber hover:bg-amber hover:text-charcoal transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://www.tiktok.com/@relishloungelagos" target="_blank" rel="noreferrer" aria-label="TikTok @relishloungelagos"
               className="h-10 w-10 grid place-items-center rounded-full border border-amber/40 text-amber hover:bg-amber hover:text-charcoal transition">
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a href="https://wa.me/2348098229807" aria-label="WhatsApp"
               className="h-10 w-10 grid place-items-center rounded-full border border-amber/40 text-amber hover:bg-whatsapp hover:text-cream hover:border-transparent transition">
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-amber">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-amber">Terms and Conditions</Link></li>
            <li><Link to="/cookies" className="hover:text-amber">Cookie Policy</Link></li>
          </ul>
          <p className="font-label text-[10px] text-cream/50 mt-4">
            Instagram: @relishlounge · TikTok: @relishloungelagos
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-14 pt-6 border-t border-amber/15 text-center">
        <p className="text-xs text-cream/60">2025 Relish Lounge. All rights reserved.</p>
        <p className="font-label text-[10px] text-amber/70 mt-1">Restaurant and Casino, Magodo Phase 1, Lagos</p>
      </div>
    </footer>
  );
}