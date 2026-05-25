import { useState } from "react";
import { X, Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatNaira } from "@/data/menu";

// Paystack: insert your public key below (test or live). Get from https://dashboard.paystack.com/#/settings/developer
const PAYSTACK_PUBLIC_KEY = "pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxx";
const OPAY_MERCHANT_NOTE = "Send your payment to OPAY: 08098229807 (Relish Lounge). After paying, send screenshot via WhatsApp.";

type Step = "cart" | "details" | "pay" | "done";

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [info, setInfo] = useState({ name: "", phone: "", address: "", mode: "delivery" as "delivery" | "pickup", notes: "" });
  const [ref, setRef] = useState("");

  if (!open) return null;

  const orderSummary = items.map((i) => `${i.qty}x ${i.name} - ${formatNaira(i.price * i.qty)}`).join("%0A");
  const waMsg = `Hi Relish! I'd like to order:%0A${orderSummary}%0A%0ATotal: ${formatNaira(total)}%0AName: ${info.name}%0APhone: ${info.phone}%0A${info.mode === "delivery" ? "Address: " + info.address : "Pickup / Dine In"}%0ANotes: ${info.notes || "-"}`;
  const waUrl = `https://wa.me/2348098229807?text=${waMsg}`;

  const payWithPaystack = () => {
    // @ts-expect-error - Paystack injected globally via index head
    const PaystackPop = (window as any).PaystackPop;
    if (!PaystackPop) {
      alert("Paystack is loading. Please try again in a moment.");
      return;
    }
    const handler = PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: `${info.phone || "guest"}@relishlounge.ng`,
      amount: total * 100,
      currency: "NGN",
      ref: "RL-" + Date.now(),
      metadata: {
        custom_fields: [
          { display_name: "Name", variable_name: "name", value: info.name },
          { display_name: "Phone", variable_name: "phone", value: info.phone },
          { display_name: "Address", variable_name: "address", value: info.address || "Pickup" },
          { display_name: "Order", variable_name: "order", value: items.map((i) => `${i.qty}x ${i.name}`).join(", ") },
        ],
      },
      callback: (resp: { reference: string }) => {
        setRef(resp.reference);
        setStep("done");
        clear();
      },
      onClose: () => {},
    });
    handler.openIframe();
  };

  return (
    <div className="fixed inset-0 z-[60] flex">
      <button className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} aria-label="Close cart" />
      <aside className="w-full max-w-md bg-charcoal border-l border-amber/20 flex flex-col h-full">
        <header className="flex items-center justify-between p-5 border-b border-amber/15">
          <h2 className="font-display text-2xl text-amber">Your Order</h2>
          <button onClick={() => setOpen(false)} aria-label="Close"><X className="text-cream" /></button>
        </header>

        <div className="flex-1 overflow-y-auto p-5">
          {step === "cart" && (
            items.length === 0 ? (
              <p className="text-cream/60 text-center mt-20">Your cart is empty. Add a few dishes from the menu.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((i) => (
                  <li key={i.name} className="flex items-center gap-3 pb-4 border-b border-amber/10">
                    <div className="flex-1">
                      <p className="text-cream">{i.name}</p>
                      <p className="text-amber text-sm">{formatNaira(i.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => setQty(i.name, i.qty - 1)} className="h-7 w-7 grid place-items-center rounded-full border border-amber/40 text-amber"><Minus className="h-3 w-3" /></button>
                      <span className="w-6 text-center">{i.qty}</span>
                      <button onClick={() => setQty(i.name, i.qty + 1)} className="h-7 w-7 grid place-items-center rounded-full border border-amber/40 text-amber"><Plus className="h-3 w-3" /></button>
                      <button onClick={() => remove(i.name)} aria-label="Remove" className="ml-2 text-cream/50 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </li>
                ))}
              </ul>
            )
          )}

          {step === "details" && (
            <div className="space-y-4">
              <Field label="Full Name" value={info.name} onChange={(v) => setInfo({ ...info, name: v })} />
              <Field label="Phone Number" value={info.phone} onChange={(v) => setInfo({ ...info, phone: v })} type="tel" />
              <div>
                <p className="font-label text-[11px] text-cream/70 mb-2">Order Type</p>
                <div className="grid grid-cols-2 gap-2">
                  {(["delivery","pickup"] as const).map((m) => (
                    <button key={m} onClick={() => setInfo({ ...info, mode: m })}
                      className={`py-2.5 rounded-full font-label text-xs border ${info.mode === m ? "bg-amber text-charcoal border-amber" : "border-amber/30 text-cream/70"}`}>
                      {m === "delivery" ? "Delivery" : "Pickup / Dine In"}
                    </button>
                  ))}
                </div>
              </div>
              {info.mode === "delivery" && (
                <Field label="Delivery Address" value={info.address} onChange={(v) => setInfo({ ...info, address: v })} />
              )}
              <Field label="Special Instructions" value={info.notes} onChange={(v) => setInfo({ ...info, notes: v })} />
            </div>
          )}

          {step === "pay" && (
            <div className="space-y-3">
              <p className="text-cream/80 text-sm mb-4">Choose how you'd like to pay. You can also send your order on WhatsApp.</p>
              <button onClick={payWithPaystack} className="w-full gradient-amber text-charcoal font-label py-3 rounded-full hover:shadow-amber-glow">
                Pay with Paystack
              </button>
              <button onClick={() => { setRef("OPAY-" + Date.now()); setStep("done"); }} className="w-full bg-teal text-cream font-label py-3 rounded-full border border-amber/30">
                Pay with Opay
              </button>
              <a href={waUrl} target="_blank" rel="noreferrer" className="block w-full text-center bg-whatsapp text-cream font-label py-3 rounded-full">
                Order via WhatsApp Instead
              </a>
              <p className="text-xs text-cream/60 mt-3">{OPAY_MERCHANT_NOTE}</p>
            </div>
          )}

          {step === "done" && (
            <div className="text-center py-8">
              <div className="h-16 w-16 mx-auto rounded-full gradient-amber grid place-items-center mb-5 shadow-amber-glow">
                <span className="text-2xl text-charcoal">✓</span>
              </div>
              <h3 className="font-display text-2xl text-cream mb-2">Your order is confirmed!</h3>
              <p className="text-cream/70 text-sm mb-1">We will get it ready and reach out if we need anything.</p>
              <p className="text-amber font-label text-xs mt-3">Ref: {ref}</p>
              <p className="text-cream/60 text-sm mt-6">Thank you for choosing Relish.</p>
            </div>
          )}
        </div>

        {step !== "done" && items.length > 0 && (
          <footer className="p-5 border-t border-amber/15 space-y-3">
            <div className="flex justify-between font-label text-xs text-cream/70">
              <span>Total</span>
              <span className="text-amber text-lg font-display">{formatNaira(total)}</span>
            </div>
            {step === "cart" && (
              <button onClick={() => setStep("details")} className="w-full gradient-amber text-charcoal font-label py-3 rounded-full">
                Continue
              </button>
            )}
            {step === "details" && (
              <button
                disabled={!info.name || !info.phone || (info.mode === "delivery" && !info.address)}
                onClick={() => setStep("pay")}
                className="w-full gradient-amber text-charcoal font-label py-3 rounded-full disabled:opacity-40">
                Go to Payment
              </button>
            )}
            <a href={waUrl} target="_blank" rel="noreferrer" className="block text-center text-xs text-amber hover:underline">
              or order via WhatsApp
            </a>
          </footer>
        )}
      </aside>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="block">
      <span className="font-label text-[11px] text-cream/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full bg-input border border-amber/20 rounded-lg px-3 py-2.5 text-cream focus:border-amber focus:outline-none"
      />
    </label>
  );
}