import { useEffect, useRef, useState } from "react";
import { Check, Clock3, Play, Video, X } from "lucide-react";
import { venueData } from "../data/venueData";

export default function Rooms() {
  const { venue, rooms } = venueData;
  const [activeVideo, setActiveVideo] = useState(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const roomGridRef = useRef(null);
  const roomThemes = {
    "non-ac": {
      card: "border-amber-200 bg-amber-50/70",
      header: "from-amber-50 to-yellow-100/70",
      button: "bg-amber-800 hover:bg-amber-900",
    },
    ac: {
      card: "border-sky-200 bg-sky-50/70",
      header: "from-sky-50 to-blue-100/70",
      button: "bg-sky-900 hover:bg-sky-950",
    },
    deluxe: {
      card: "border-violet-200 bg-violet-50/70",
      header: "from-violet-50 to-fuchsia-100/70",
      button: "bg-violet-900 hover:bg-violet-950",
    },
  };

  useEffect(() => {
    if (!activeVideo) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeVideo]);

  useEffect(() => {
    const grid = roomGridRef.current;
    if (!grid) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setCardsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(grid);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="rooms"
        className="bg-black px-1 pb-1.25 pt-[calc(176px+0.125rem)] sm:px-1.5 sm:pb-2 sm:pt-[calc(128px+0.25rem)] lg:px-2 min-[900px]:!pt-[calc(72px+2rem)]"
      >
        <div className="mx-auto max-w-7xl rounded-3xl border border-amber-900/15 bg-white/85 p-4 shadow-sm sm:p-8 lg:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {rooms.title}
          </p>
          <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            {rooms.subtitle}
          </h2>
          <p className="mt-3 text-slate-600">{rooms.description}</p>
          <p className="mt-2 text-sm font-medium text-navy">
            Total {rooms.totalRooms} Rooms Available
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-1 rounded-full border border-amber-100 bg-white px-5 py-2 text-sm text-slate-700 shadow-sm">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-gold" /> Check-in:{" "}
              <span className="font-semibold text-navy">{rooms.timings.checkIn}</span>
            </span>
            <span className="hidden h-4 w-px bg-slate-200 sm:inline-block" />
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-gold" /> Check-out:{" "}
              <span className="font-semibold text-navy">{rooms.timings.checkOut}</span>
            </span>
          </div>
        </div>

        <div ref={roomGridRef} className="mt-8 grid grid-cols-3 gap-2 sm:mt-12 sm:gap-4 lg:gap-6">
          {rooms.types.map((room, index) => {
            const msg = encodeURIComponent(
              `Hi ${venue.name}, I would like to book a ${room.name}. Please share availability and details.`
            );
            const theme = roomThemes[room.id] || roomThemes["non-ac"];
            return (
              <article
                key={room.id}
                className={`group flex min-w-0 flex-col overflow-hidden rounded-xl border ${theme.card} shadow-[0_8px_20px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(15,23,42,0.12)] sm:rounded-[20px] ${cardsVisible ? (index % 2 === 0 ? "room-card-enter-up" : "room-card-enter-down") : ""}`}
                style={cardsVisible ? { animationDelay: `${index * 0.55}s` } : undefined}
              >
                <div className="w-full overflow-hidden bg-navy">
                  {room.videoUrl ? (
                    <button
                      type="button"
                      className="group/video relative flex aspect-[9/16] w-full items-center justify-center overflow-hidden bg-navy sm:aspect-auto sm:h-64"
                      onClick={() => setActiveVideo({ name: room.name, url: room.videoUrl })}
                      aria-label={`Open ${room.name} video`}
                    >
                      <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src={room.videoUrl}
                        muted
                        playsInline
                        preload="metadata"
                        aria-hidden="true"
                      />
                      <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-navy/20 text-white transition group-hover/video:bg-navy/40 sm:gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy shadow-lg sm:h-12 sm:w-12">
                          <Play className="ml-0.5 h-4 w-4 fill-current sm:ml-1 sm:h-5 sm:w-5" />
                        </span>
                        <span className="text-[9px] font-bold sm:text-sm">Watch</span>
                      </span>
                    </button>
                  ) : (
                    <div className="flex aspect-[9/16] flex-col items-center justify-center gap-1 bg-gradient-to-br from-navy-light to-navy text-white/80 sm:aspect-auto sm:h-64 sm:gap-2">
                      <Video className="h-5 w-5 text-gold sm:h-8 sm:w-8" aria-hidden="true" />
                      <span className="text-center text-[9px] font-semibold sm:text-sm">Room video coming soon</span>
                    </div>
                  )}
                </div>
                <div className={`border-b border-white/70 bg-gradient-to-r ${theme.header} px-3 py-2 sm:p-5`}>
                  <div className="flex w-full flex-col items-center gap-1">
                    <h3 className="flex min-h-[2.4em] w-full items-center justify-center text-center text-base font-bold leading-tight text-navy sm:text-2xl">
                      {room.name}
                    </h3>
                  </div>
                  <div className="mt-1 flex w-full items-center justify-center whitespace-nowrap rounded-full bg-white/90 px-1.5 py-1 text-[10px] font-bold text-navy shadow-sm ring-1 ring-slate-200 sm:mt-3 sm:px-3 sm:py-1 sm:text-base">
                    ₹{room.pricePerNight.toLocaleString("en-IN")}
                    <span className="ml-0.5 font-normal text-slate-500 sm:ml-1">/night</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-2 sm:p-5">
                  <ul className="space-y-1 sm:space-y-1.5">
                    {room.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-1 text-[9px] leading-tight text-slate-700 sm:gap-2 sm:text-sm">
                        <Check className="mt-0.5 h-3 w-3 flex-shrink-0 text-gold sm:h-4 sm:w-4" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2 sm:pt-5">
                    <a
                      href={`https://wa.me/${venue.whatsappNumber}?text=${msg}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex min-h-8 w-full items-center justify-center rounded-full px-1 text-center text-[8px] font-extrabold leading-tight text-white shadow-md transition hover:-translate-y-0.5 sm:min-h-12 sm:px-4 sm:text-sm ${theme.button}`}
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 sm:mt-6 sm:p-8">
          <h3 className="text-lg font-semibold text-navy">Room Amenities</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {rooms.amenities.map((amenity) => (
              <span
                key={amenity}
                className="inline-flex items-center gap-2 rounded-full border border-amber-100 bg-cream px-3 py-1.5 text-sm text-slate-700"
              >
                <Check className="h-4 w-4 text-gold" /> {amenity}
              </span>
            ))}
          </div>
        </div>
        </div>
      </section>
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.name} video`}
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative flex max-h-[90vh] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -right-2 -top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-navy shadow-lg transition hover:bg-amber-50"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              className="h-[85vh] max-h-[85vh] max-w-full aspect-[9/16] rounded-xl bg-black object-contain shadow-2xl"
              src={activeVideo.url}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </>
  );
}
