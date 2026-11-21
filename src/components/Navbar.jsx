import { Phone } from "lucide-react";
import { venueData } from "../data/venueData";

function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.86 11.86 0 0 0 5.77 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.46-8.44ZM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.86 9.86 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.89 7c0 5.45-4.44 9.89-9.89 9.89Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

export default function Navbar() {
  const { venue, navLinks } = venueData;
  const path = window.location.pathname.replace(/\/+$/, "");
  const isDedicatedPage =
    path === "/rooms" || path === "/banquet" || path === "/contact" || path === "/facilities";
  const getNavHref = (href) => (href.startsWith("/") || !isDedicatedPage ? href : `/${href}`);
  const waLink = `https://wa.me/${venue.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${venue.name}, I would like to inquire about rooms or the banquet hall.`
  )}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-black/95 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-2 px-3 sm:gap-3 sm:px-6 lg:px-8">
        <a href={isDedicatedPage ? "/" : "#home"} className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <img
            src="/The%20white%20lotus%20logo.png"
            alt={`${venue.name} logo`}
            className="h-10 w-10 flex-none rounded-full object-contain ring-1 ring-amber-100 sm:h-12 sm:w-12"
          />
          <span className="brand-font whitespace-nowrap text-[19px] font-bold leading-none tracking-tight text-white sm:text-[25px]">
            {venue.name}
          </span>
        </a>

        <nav className="hidden items-center gap-3 min-[900px]:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getNavHref(link.href)}
              className="inline-flex whitespace-nowrap rounded-full border border-amber-100 bg-white px-2 py-2 text-[11px] font-extrabold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:bg-amber-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold xl:px-3 xl:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-1.5 sm:gap-2">
          <a
            href={`tel:${venue.phoneTel}`}
            aria-label="Call The White Lotus"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white text-xs font-bold text-black transition hover:border-gold hover:bg-amber-50 hover:text-gold sm:w-auto sm:gap-2 sm:px-3 lg:h-11 lg:px-4 lg:text-sm"
          >
            <Phone className="h-4 w-4" /> <span className="hidden sm:inline">Call</span>
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact The White Lotus on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white shadow-md shadow-green-700/10 transition hover:-translate-y-0.5 hover:bg-green-700 sm:w-auto sm:gap-2 sm:px-3 lg:h-11 lg:px-4 lg:text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" /> <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className="grid grid-cols-2 gap-2 border-t border-slate-800 px-3 py-2 sm:grid-cols-4 min-[900px]:hidden"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={getNavHref(link.href)}
            className="inline-flex min-h-10 items-center justify-center rounded-full border border-amber-100 bg-white px-2 py-2 text-center text-xs font-extrabold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:bg-amber-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-sm"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
