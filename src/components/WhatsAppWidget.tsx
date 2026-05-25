import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WA_URL = "https://wa.me/2348098229807?text=" + encodeURIComponent("Hi Relish! I'd like to place an order.");

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-card border border-amber/30 rounded-2xl p-4 shadow-deep w-64 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex justify-between items-start mb-2">
            <p className="font-display text-lg text-amber leading-tight">Order or ask us anything</p>
            <button onClick={() => setOpen(false)} aria-label="Close"><X className="h-4 w-4 text-cream/60" /></button>
          </div>
          <p className="text-xs text-cream/70 mb-3">We reply fast on WhatsApp.</p>
          <a href={WA_URL} target="_blank" rel="noreferrer"
             className="block text-center bg-whatsapp text-cream font-label text-xs py-2.5 rounded-full hover:opacity-90">
            Start Chat
          </a>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full bg-whatsapp text-cream grid place-items-center shadow-deep animate-pulse-ring hover:scale-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}