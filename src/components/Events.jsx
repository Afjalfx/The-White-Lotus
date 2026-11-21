import { useState } from "react";
import { BedDouble, IndianRupee, MessageCircle, Music, Users } from "lucide-react";
import { venueData } from "../data/venueData";

const today = new Date().toISOString().split("T")[0];

export default function Events() {
  const { venue, events, rooms } = venueData;
  const [quote, setQuote] = useState({
    eventType: "",
    customEventType: "",
    guests: "",
    date: "",
    services: [],
  });
  const isOtherEvent = quote.eventType === "Other";
  const selectedEventType = isOtherEvent ? quote.customEventType.trim() : quote.eventType;
  const guestsCount = Number(quote.guests);
  const canSubmit =
    Boolean(selectedEventType) &&
    Number.isInteger(guestsCount) &&
    guestsCount >= 50 &&
    guestsCount <= 500 &&
    Boolean(quote.date) &&
    quote.date >= today;

  const onQuoteSubmit = (event) => {
    event.preventDefault();
    if (!canSubmit) return;
    const message = [
      `Hi ${venue.name}, I would like to discuss my event.`,
      `Event Type: ${selectedEventType}`,
      `Expected Guests: ${quote.guests}`,
      `Event Date: ${quote.date}`,
      ...(quote.services.length > 0 ? [`Event Services: ${quote.services.join(", ")}`] : []),
    ].join("\n");
    const url = `https://wa.me/${venue.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="events"
      className="bg-black px-1 pb-1.25 pt-[calc(176px+0.125rem)] sm:px-1.5 sm:pb-2 sm:pt-[calc(128px+0.25rem)] lg:px-2 min-[900px]:!pt-[calc(72px+2rem)]"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-amber-900/15 bg-white/85 p-4 shadow-sm sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {events.title}
          </p>
          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            {events.subtitle}
          </h2>
          <p className="mt-3 text-slate-600">{events.description}</p>
        </div>

        <div className="mt-8 grid items-stretch gap-6 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-cream p-6 shadow-sm sm:p-8">
            <p className="text-sm font-medium uppercase tracking-wide text-gold">Banquet Hall</p>
            <h3 className="mt-1 text-2xl font-semibold text-navy">{events.hallName}</h3>

            <div className="mt-5">
              <h4 className="text-sm font-semibold text-navy">Ideal For</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {events.idealFor.map((occasion) => (
                  <span
                    key={occasion}
                    className="rounded-full border border-amber-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm"
                  >
                    {occasion}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4">
                <div className="flex items-center gap-2 text-navy">
                  <Users className="h-5 w-5 text-gold" />
                  <span className="font-semibold">Total Guest Capacity</span>
                </div>
                <p className="mt-1 text-lg font-semibold text-navy">{events.totalCapacity}</p>
              </div>
              <div className="rounded-xl bg-white p-4">
                <div className="flex items-center gap-2 text-navy">
                  <Users className="h-5 w-5 text-gold" />
                  <span className="font-semibold">Chair Seating Capacity</span>
                </div>
                <p className="mt-1 text-lg font-semibold text-navy">{events.seatingCapacity}</p>
              </div>
              <div className="rounded-xl bg-white p-4 sm:col-span-2">
                <div className="flex items-center gap-2 text-navy">
                  <IndianRupee className="h-5 w-5 text-gold" />
                  <span className="font-semibold">Hall Rent</span>
                </div>
                <p className="mt-1 text-2xl font-semibold text-navy">{events.hallRent}</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 font-semibold text-navy">
                <Music className="h-5 w-5 text-gold" /> Event Services Available
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {events.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto flex items-center gap-2 rounded-xl border border-amber-200 bg-white/80 px-4 py-3 text-sm font-semibold text-navy sm:mt-8">
              <BedDouble className="h-5 w-5 flex-shrink-0 text-gold" />
              <span>{rooms.totalRooms} Rooms available on-site for wedding &amp; event guests</span>
            </div>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-amber-100 bg-gradient-to-br from-navy to-navy-light p-6 text-white shadow-sm sm:p-8">
            <div className="flex items-center gap-3 text-amber-100">
              <MessageCircle className="h-6 w-6 text-gold" />
              <span className="text-base font-semibold uppercase tracking-wide">Direct Owner Contact</span>
            </div>
            <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">{events.ownerInquiry.title}</h3>
            <p className="mt-3 text-base text-slate-200">{events.ownerInquiry.detail}</p>

            <form onSubmit={onQuoteSubmit} className="mt-7 flex flex-1 flex-col justify-center">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="quote-event-type" className="block text-sm font-semibold text-amber-100">
                    Event Type
                  </label>
                  <select
                    id="quote-event-type"
                    required
                    value={quote.eventType}
                    onChange={(event) =>
                      setQuote((previous) => ({ ...previous, eventType: event.target.value }))
                    }
                    className="mt-2 min-h-14 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-base text-white outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20 [&>option]:bg-navy [&>option]:text-white"
                  >
                    <option value="" disabled>Select event type</option>
                    {events.ownerInquiry.eventTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-guests" className="block text-sm font-semibold text-amber-100">
                    Expected Guests
                  </label>
                  <input
                    id="quote-guests"
                    type="number"
                    min="50"
                    max="500"
                    step="1"
                    required
                    value={quote.guests}
                    onChange={(event) =>
                      setQuote((previous) => ({ ...previous, guests: event.target.value }))
                    }
                    placeholder="e.g. 200"
                    className="mt-2 min-h-14 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-base text-white outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
                  />
                  <p className="mt-2 text-xs text-slate-300">Choose between 50 and 500 guests</p>
                </div>

                {isOtherEvent && (
                  <div className="sm:col-span-2">
                    <label htmlFor="quote-custom-event" className="block text-sm font-semibold text-amber-100">
                      Enter Event Type
                    </label>
                    <input
                      id="quote-custom-event"
                      type="text"
                      maxLength="100"
                      required
                      value={quote.customEventType}
                      onChange={(event) =>
                        setQuote((previous) => ({
                          ...previous,
                          customEventType: event.target.value,
                        }))
                      }
                      placeholder="Type your event type"
                      className="mt-2 min-h-14 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-base text-white outline-none transition placeholder:text-slate-400 focus:border-gold focus:ring-4 focus:ring-gold/20"
                    />
                  </div>
                )}

                <div className="sm:col-span-2">
                  <label htmlFor="quote-date" className="block text-sm font-semibold text-amber-100">
                    Event Date
                  </label>
                  <input
                    id="quote-date"
                    type="date"
                    min={today}
                    required
                    value={quote.date}
                    onChange={(event) =>
                      setQuote((previous) => ({ ...previous, date: event.target.value }))
                    }
                    className="mt-2 min-h-14 w-full rounded-xl border border-white/15 bg-white/10 px-4 text-base text-white outline-none transition [color-scheme:dark] focus:border-gold focus:ring-4 focus:ring-gold/20"
                  />
                </div>

                <fieldset className="sm:col-span-2">
                  <legend className="text-sm font-semibold text-amber-100">
                    Event Services (optional)
                  </legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {events.services.map((service) => (
                      <label
                        key={service}
                        className="inline-flex min-h-12 cursor-pointer items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 text-sm text-white transition hover:border-gold/70"
                      >
                        <input
                          type="checkbox"
                          checked={quote.services.includes(service)}
                          onChange={(event) =>
                            setQuote((previous) => ({
                              ...previous,
                              services: event.target.checked
                                ? [...previous.services, service]
                                : previous.services.filter((item) => item !== service),
                            }))
                          }
                          className="h-4 w-4 accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full px-6 text-base font-extrabold text-white shadow-lg shadow-black/10 transition ${
                  canSubmit
                    ? "bg-gold hover:-translate-y-0.5 hover:bg-gold-dark"
                    : "cursor-not-allowed bg-slate-500/60 shadow-none"
                }`}
              >
                {events.ownerInquiry.ctaLabel}
              </button>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
