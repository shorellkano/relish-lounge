import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Relish Lounge" },
      { name: "description", content: "Terms and conditions for using the Relish Lounge website and ordering service." },
    ],
  }),
  component: () => (
    <article className="pt-36 pb-24 max-w-3xl mx-auto px-6">
      <p className="font-label text-xs text-amber mb-3">Legal</p>
      <h1 className="font-display text-5xl text-cream mb-8">Terms and Conditions</h1>
      <div className="space-y-6 text-cream/80 leading-relaxed">
        <h2 className="font-display text-2xl text-amber">Use of Website</h2>
        <p>By using the Relish Lounge website, you agree to use it for lawful purposes only and not to interfere with its operation or other users.</p>
        <h2 className="font-display text-2xl text-amber">Online Ordering</h2>
        <p>Menu items, prices and availability may change without notice. We will confirm your order before fulfilment. We reserve the right to refuse or cancel any order.</p>
        <h2 className="font-display text-2xl text-amber">Payment Processing</h2>
        <p>Payments are processed by Paystack and Opay. By paying, you agree to the terms of the chosen payment provider in addition to these terms.</p>
        <h2 className="font-display text-2xl text-amber">Refund and Cancellation</h2>
        <p>Once an order has been prepared, it cannot be cancelled. If your order is incorrect or unsatisfactory, please contact us within 24 hours and we will make it right.</p>
        <h2 className="font-display text-2xl text-amber">Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, Relish Lounge is not liable for indirect or consequential losses arising from use of this website or our services.</p>
        <h2 className="font-display text-2xl text-amber">Governing Law</h2>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria.</p>
        <h2 className="font-display text-2xl text-amber">Contact</h2>
        <p>Questions about these terms? Reach us on 08098229807.</p>
      </div>
    </article>
  ),
});