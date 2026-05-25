import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Relish Lounge" },
      { name: "description", content: "Cookie policy for the Relish Lounge website." },
    ],
  }),
  component: () => (
    <article className="pt-36 pb-24 max-w-3xl mx-auto px-6">
      <p className="font-label text-xs text-amber mb-3">Legal</p>
      <h1 className="font-display text-5xl text-cream mb-8">Cookie Policy</h1>
      <div className="space-y-6 text-cream/80 leading-relaxed">
        <h2 className="font-display text-2xl text-amber">What Are Cookies</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They help the site work properly and let us understand how visitors use it.</p>
        <h2 className="font-display text-2xl text-amber">How We Use Cookies</h2>
        <p>We use cookies for basic session management (such as keeping items in your cart) and for analytics to understand which pages and dishes are most popular.</p>
        <h2 className="font-display text-2xl text-amber">Managing Cookies</h2>
        <p>You can manage or block cookies through your browser settings. Note that blocking some cookies may affect features like the cart and checkout.</p>
        <h2 className="font-display text-2xl text-amber">Contact</h2>
        <p>For cookie related queries, call us on 08098229807 or message us on WhatsApp.</p>
      </div>
    </article>
  ),
});