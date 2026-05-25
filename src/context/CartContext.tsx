import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartLine = { name: string; price: number; qty: number };

type CartCtx = {
  items: CartLine[];
  add: (name: string, price: number) => void;
  remove: (name: string) => void;
  setQty: (name: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("relish-cart");
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try { sessionStorage.setItem("relish-cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add = (name: string, price: number) =>
    setItems((prev) => {
      const i = prev.findIndex((p) => p.name === name);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: next[i].qty + 1 };
        return next;
      }
      return [...prev, { name, price, qty: 1 }];
    });
  const remove = (name: string) => setItems((p) => p.filter((x) => x.name !== name));
  const setQty = (name: string, qty: number) =>
    setItems((p) => p.map((x) => (x.name === name ? { ...x, qty: Math.max(1, qty) } : x)));
  const clear = () => setItems([]);
  const total = items.reduce((s, x) => s + x.price * x.qty, 0);
  const count = items.reduce((s, x) => s + x.qty, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, total, count, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used inside CartProvider");
  return c;
};