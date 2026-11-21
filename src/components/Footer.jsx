import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { venueData } from "../data/venueData";

const year = new Date().getFullYear();

export default function Footer() {
  const { venue, footer } = venueData;
  const path = window.location.pathname.replace(/\/+$/, "");
  const isDedicatedPage =
    path === "/rooms" || path === "/banquet" || path === "/contact" || path === "/facilities";
  const getLinkHref = (href) => (href.startsWith("/") || !isDedicatedPage ? href : `/${href}`);

  return (
    <footer className="bg-navy text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.75fr_1.4fr] lg:gap-12">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <img
                src="/The%20white%20lotus%20logo.png"
                alt={`${venue.name} logo`}
                className="h-12 w-12 flex-none rounded-full object-contain"
              />
              <h3 className="min-w-0 text-lg font-semibold leading-snug text-white sm:text-xl">
                {venue.brandTitle}
              </h3>
            </div>
            <p className="mt-4 text-sm text-amber-100/90">{venue.tagline}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{footer.note}</p>
            <p className="mt-3 text-sm text-slate-400">Contact Person: {venue.contactPerson}</p>
          </div>

          <div className="min-w-0">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={getLinkHref(link.href)}
                    className="text-sm transition hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <span className="min-w-0">{venue.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div className="space-y-1">
                  <div>
                    <a href={`tel:${venue.phoneTel}`} className="hover:text-gold">{venue.phone}</a>
                    <span className="text-slate-400"> (Primary / WhatsApp)</span>
                  </div>
                  {venue.alternatePhones?.map((item) => (
                    <div key={item.number}>
                      <a href={`tel:${item.tel}`} className="hover:text-gold">{item.number}</a>
                      {item.label ? <span className="text-slate-400"> ({item.label})</span> : null}
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <a href={`mailto:${venue.email}`} className="min-w-0 break-words [overflow-wrap:anywhere] hover:text-gold">{venue.email}</a>
              </li>
              {venue.website && (
                <li className="flex gap-3">
                  <Globe className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                  <a
                    href={venue.websiteUrl || `https://${venue.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="min-w-0 break-words [overflow-wrap:anywhere] hover:text-gold"
                  >
                    {venue.website}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700/60 pt-6 text-center text-xs text-slate-400">
          © {year} {venue.brandTitle}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
