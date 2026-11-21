import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { venueData } from "../data/venueData";

const today = new Date().toISOString().split("T")[0];

export default function Contact() {
  const { venue, inquiry } = venueData;
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    serviceType: inquiry.serviceTypes[0] || "General Inquiry",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi ${venue.name}, I would like to make an inquiry.`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service Type: ${form.serviceType}`,
      `Preferred Date: ${form.date || "Not specified"}`,
    ];
    if (form.message.trim()) {
      lines.push(`Message: ${form.message.trim()}`);
    }
    lines.push("", "Please share availability and details. Thank you.");
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${venue.whatsappNumber}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="bg-black px-1 pb-1.25 pt-[calc(176px+0.125rem)] sm:px-1.5 sm:pb-2 sm:pt-[calc(128px+0.25rem)] lg:px-2 min-[900px]:!pt-[calc(72px+2rem)]"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-amber-900/15 bg-white/85 p-4 shadow-sm sm:p-8 lg:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact & Location</p>
          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            Plan Your Stay or Event
          </h2>
          <p className="mt-3 text-slate-600">
            Reach out for room bookings, banquet hall inquiries, or custom menu &amp; catering quotes. We&apos;ll be happy to assist.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 bg-cream p-6">
              <h3 className="text-lg font-semibold text-navy">Get in Touch</h3>
              <ul className="mt-4 space-y-4 text-sm text-slate-700">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span>{venue.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <div className="space-y-1">
                    <p className="font-medium text-navy">
                      Contact Person: {venue.contactPerson}
                    </p>
                    <div>
                      <a href={`tel:${venue.phoneTel}`} className="hover:text-gold">
                        {venue.phone}
                      </a>{" "}
                      <span className="text-slate-500">(Primary / WhatsApp)</span>
                    </div>
                    {venue.alternatePhones?.map((item) => (
                      <div key={item.number}>
                        <a href={`tel:${item.tel}`} className="hover:text-gold">
                          {item.number}
                        </a>
                        {item.label ? (
                          <span className="text-slate-500"> ({item.label})</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <a href={`mailto:${venue.email}`} className="hover:text-gold break-all">
                    {venue.email}
                  </a>
                </li>
                {venue.website && (
                  <li className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center text-gold font-semibold">
                      W
                    </span>
                    <a
                      href={venue.websiteUrl || `https://${venue.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gold break-all"
                    >
                      {venue.website}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <iframe
                title={`${venue.name} location`}
                src={venue.mapEmbedUrl}
                className="h-72 w-full sm:h-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold text-navy">Inquiry Form</h3>
            <p className="mt-1 text-sm text-slate-600">
              Submit to send a pre-filled inquiry on WhatsApp.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    value={form.name}
                    onChange={onChange}
                    className="mt-1 min-h-12 w-full rounded-xl border border-slate-300 px-3.5 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={onChange}
                    className="mt-1 min-h-12 w-full rounded-xl border border-slate-300 px-3.5 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-700">
                    Event / Stay Date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={onChange}
                    className="mt-1 min-h-12 w-full rounded-xl border border-slate-300 px-3.5 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  />
                </div>
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={form.serviceType}
                    onChange={onChange}
                    className="mt-1 min-h-12 w-full rounded-xl border border-slate-300 px-3.5 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  >
                    {inquiry.serviceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                  Message <span className="font-normal text-slate-400">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                  placeholder="Tell us about your requirement (guest count, occasion, preferences...)"
                />
              </div>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 text-sm font-extrabold text-white shadow-md shadow-green-700/10 transition hover:-translate-y-0.5 hover:bg-green-700"
              >
                <Send className="h-4 w-4" /> Send Inquiry on WhatsApp
              </button>
              <p className="text-center text-xs text-slate-500">
                This will open WhatsApp with your details pre-filled. No data is stored on this site.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
