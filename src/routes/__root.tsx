import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Relish Lounge Magodo — Bar, Kitchen & Casino in Magodo Phase 1, Lagos" },
      { name: "description", content: "Relish Lounge is Magodo's favourite bar, Nigerian restaurant and casino. Cocktails, karaoke nights, authentic Nigerian food. Order online or visit us in Magodo Phase 1." },
      { name: "author", content: "Relish Lounge" },
      { property: "og:site_name", content: "Relish Lounge" },
      { property: "og:title", content: "Relish Lounge Magodo — Bar, Kitchen & Casino in Magodo Phase 1, Lagos" },
      { property: "og:description", content: "Relish Lounge is Magodo's favourite bar, Nigerian restaurant and casino. Cocktails, karaoke nights, authentic Nigerian food. Order online or visit us in Magodo Phase 1." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Relish Lounge Magodo — Bar, Kitchen & Casino in Magodo Phase 1, Lagos" },
      { name: "twitter:description", content: "Relish Lounge is Magodo's favourite bar, Nigerian restaurant and casino. Cocktails, karaoke nights, authentic Nigerian food. Order online or visit us in Magodo Phase 1." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bf6dd9b0-b794-4e37-9eba-bcf845eff1bb/id-preview-293ce2e5--65541a3b-1568-41a1-ac62-ddb5eff67f1d.lovable.app-1779762862368.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bf6dd9b0-b794-4e37-9eba-bcf845eff1bb/id-preview-293ce2e5--65541a3b-1568-41a1-ac62-ddb5eff67f1d.lovable.app-1779762862368.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      { src: "https://js.paystack.co/v1/inline.js", defer: true },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["BarOrPub", "Restaurant"],
          name: "Relish Lounge",
          image: "/og-relish.jpg",
          telephone: "+2348098229807",
          servesCuisine: "Nigerian",
          priceRange: "₦₦",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Gbelegbo Street, Tob Plaza",
            addressLocality: "Magodo Phase 1, Isheri",
            addressRegion: "Lagos",
            addressCountry: "NG",
          },
          openingHours: "Mo-Su",
          sameAs: [
            "https://www.instagram.com/relishlounge",
            "https://www.tiktok.com/@relishloungelagos",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar />
        <main className="min-h-screen pt-0">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppWidget />
        <CartDrawer />
      </CartProvider>
    </QueryClientProvider>
  );
}
