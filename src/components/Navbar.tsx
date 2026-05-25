import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import logo from "@/assets/relish-logo.jpg";
import { useCart } from "@/context/CartContext";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/lounge", label: "The Lounge" },
  { to: "/kitchen", label: "The Kitchen" },
  { to: "/menu", label: "Menu & Order" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[oklch(0.17_0.02_195_/_0.85)] border-b border-amber/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Relish Lounge Magodo logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-amber/60 group-hover:ring-amber transition" />
          <span className="hidden sm:block">
            <span className="block font-script text-2xl text-amber leading-none">Relish</span>
            <span className="block font-label text-[10px] text-cream/70">Lounge & Kitchen</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <li key={n.to}>
              <Link
                to={n.to}
                className="font-label text-xs text-cream/80 hover:text-amber transition"
                activeProps={{ className: "font-label text-xs text-amber" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative h-10 w-10 grid place-items-center rounded-full border border-amber/40 text-amber hover:bg-amber hover:text-charcoal transition"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 h-5 min-w-5 px-1 grid place-items-center rounded-full bg-amber text-charcoal text-[10px] font-bold">
                {count}
              </span>
            )}
          </button>
          <Link
            to="/menu"
            className="hidden sm:inline-flex gradient-amber text-charcoal font-label text-xs px-5 py-3 rounded-full hover:shadow-amber-glow transition"
          >
            Order Now
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-cream"
            aria-label="Menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-teal-deep border-t border-amber/20">
          <ul className="px-6 py-4 space-y-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="font-label text-sm text-cream block py-2"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}