import { Check, Sparkles, UtensilsCrossed } from "lucide-react";
import { venueData } from "../data/venueData";

export default function Facilities() {
  const { facilities } = venueData;

  return (
    <section
      id="facilities"
      className="bg-black px-1 pb-1.25 pt-[calc(176px+0.125rem)] sm:px-1.5 sm:pb-2 sm:pt-[calc(128px+0.25rem)] lg:px-2 min-[900px]:!pt-[calc(72px+2rem)]"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-amber-900/15 bg-white/85 p-4 shadow-sm sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {facilities.title}
          </p>
          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            {facilities.subtitle}
          </h2>
          <p className="mt-3 text-slate-600">{facilities.description}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-sm sm:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-gold">
              <UtensilsCrossed className="h-6 w-6" />
            </div>
            <p className="mt-4 text-lg font-semibold text-navy">{facilities.highlight}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 text-navy">
              <Sparkles className="h-5 w-5 text-gold" />
              <h3 className="text-lg font-semibold">Key Amenities</h3>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {facilities.keyAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 rounded-xl border border-amber-100 bg-cream px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white text-gold ring-1 ring-amber-100">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
