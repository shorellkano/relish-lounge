import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Relish Lounge" },
      { name: "description", content: "Privacy policy for Relish Lounge Magodo." },
    ],
  }),
  component: () => (
    <article className="pt-36 pb-24 max-w-3xl mx-auto px-6 prose-invert">
      <p className="font-label text-xs text-amber mb-3">Legal</p>
      <h1 className="font-display text-5xl text-cream mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-cream/80 leading-relaxed">
        <p>This Privacy Policy explains how Relish Lounge ("we", "us", "our") collects, uses and protects information when you use this website or place an order with us.</p>
        <h2 className="font-display text-2xl text-amber">Information We Collect</h2>
        <p>When you place an order or contact us, we collect your name, phone number, delivery address, and any special instructions you provide. We may also collect basic technical data such as device and browser type for analytics.</p>
        <h2 className="font-display text-2xl text-amber">How We Use Your Information</h2>
        <p>We use your information to prepare and deliver your order, confirm details with you, respond to enquiries, and improve our service. We do not sell your personal data.</p>
        <h2 className="font-display text-2xl text-amber">Storage and Security</h2>
        <p>Order information is stored securely and retained only as long as needed for operational and legal purposes.</p>
        <h2 className="font-display text-2xl text-amber">Third Party Payment Processors</h2>
        <p>Payments are handled by trusted third party providers, including Paystack and Opay. When you pay, the relevant card or transaction data is processed directly by them under their own privacy policies. We do not store full card details on our servers.</p>
        <h2 className="font-display text-2xl text-amber">Your Rights</h2>
        <p>Under applicable Nigerian data protection law, you may request access to, correction of, or deletion of your personal data held by us.</p>
        <h2 className="font-display text-2xl text-amber">Contact</h2>
        <p>For any privacy related questions or data requests, please call 08098229807 or message us on WhatsApp at the same number.</p>
      </div>
    </article>
  ),
});