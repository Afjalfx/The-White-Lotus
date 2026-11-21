import { useEffect, useState } from "react";
import { Play } from "lucide-react";
import { venueData } from "../data/venueData";

const showcaseSlides = [
  { src: "/clip1.mp4", title: "Luxury Rooms & Stay", tab: "Rooms" },
  { src: "/clip2.mp4", title: "Birthdays & Celebrations", tab: "Birthdays" },
  { src: "/clip3.mp4", title: "Royal Weddings & Receptions", tab: "Weddings" },
  { src: "/clip4.mp4", title: "Book The White Lotus", tab: "Book Now" },
];

function getCardStyle(index, activeIndex) {
  const offset = (index - activeIndex + showcaseSlides.length) % showcaseSlides.length;
  const cardPositions = [
    { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, zIndex: 30 },
    { x: 37, y: -3, rotation: 8, scale: 0.88, opacity: 0.9, zIndex: 20 },
    { x: 0, y: -11, rotation: 0, scale: 0.76, opacity: 0.55, zIndex: 10 },
    { x: -37, y: -3, rotation: -8, scale: 0.88, opacity: 0.9, zIndex: 20 },
  ];
  const position = cardPositions[offset];

  return {
    transform: `translate(-50%, -50%) translate(${position.x}%, ${position.y}%) rotate(${position.rotation}deg) scale(${position.scale})`,
    opacity: position.opacity,
    zIndex: position.zIndex,
  };
}

export default function Hero() {
  const { venue } = venueData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const activeSlide = showcaseSlides[activeIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((index) => (index + 1) % showcaseSlides.length);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [activeIndex, timerKey]);

  const selectSlide = (index) => {
    setActiveIndex(index);
    setTimerKey((key) => key + 1);
  };

  return (
    <section
      id="home"
      className="bg-black px-1 pb-1.25 pt-[calc(176px+0.125rem)] sm:px-1.5 sm:pb-2 sm:pt-[calc(128px+0.25rem)] lg:px-2 min-[900px]:!pt-[calc(72px+2rem)]"
    >
      <div className="relative mx-auto grid min-h-[min(760px,88vh)] max-w-7xl grid-cols-1 items-center overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-navy via-navy-light to-slate-900 shadow-xl lg:grid-cols-2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,138,42,0.2),transparent_38%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_32%)]"
        />

        <div className="relative z-10 flex min-h-[320px] flex-col justify-center px-6 py-10 text-center sm:px-10 lg:min-h-0 lg:px-12 lg:py-12 lg:text-left">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-300 sm:text-lg">
            {venue.subtitle}
          </p>
          <h1 className="mt-3 text-[46px] font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[72px]">
            {venue.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-amber-100 sm:text-2xl">
            {venue.tagline}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="/rooms"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-7 text-sm font-extrabold text-white shadow-lg shadow-gold/30 transition hover:-translate-y-0.5 hover:bg-gold-dark"
            >
              Book Room
            </a>
            <a
              href="/banquet"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-extrabold text-white shadow-inner backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Inquire for Banquet
            </a>
          </div>
        </div>

        <div className="relative z-10 flex min-h-[480px] items-center justify-center px-3 py-8 sm:min-h-[560px] sm:px-6 lg:min-h-0 lg:px-5 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-4/5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/20 blur-3xl"
          />
          <div
            className="relative h-[460px] w-full max-w-[580px] sm:h-[min(580px,72vh)] sm:min-h-[450px]"
            aria-label="The White Lotus video showcase"
          >
            {showcaseSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={slide.src}
                  aria-hidden={!isActive}
                  className="hero-showcase-card absolute left-1/2 top-1/2 aspect-[4/5] w-[82%] max-w-[26rem] overflow-hidden rounded-3xl border border-amber-400/50 bg-navy shadow-2xl shadow-black/50"
                  style={getCardStyle(index, activeIndex)}
                >
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    tabIndex={-1}
                  />
                  {!isActive && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-navy/45 backdrop-blur-[1px]"
                    />
                  )}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 bg-black/10" />
                      <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
                        <Play className="h-4 w-4 fill-current" aria-hidden="true" />
                        Showcase
                      </div>
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/85 to-transparent px-4 pb-4 pt-20 text-white sm:px-6 sm:pb-5">
                        <h2 className="text-center text-xl font-semibold leading-tight sm:text-2xl">
                          {activeSlide.title}
                        </h2>
                        <div
                          className="mt-4 h-1 overflow-hidden rounded-full bg-white/25"
                          aria-hidden="true"
                        >
                          <span
                            key={`${activeIndex}-${timerKey}`}
                            className="hero-showcase-progress block h-full rounded-full bg-gold"
                          />
                        </div>
                        <div className="mt-4 grid grid-cols-4 gap-1.5 sm:gap-2">
                          {showcaseSlides.map((tab, tabIndex) => (
                            <button
                              key={tab.tab}
                              type="button"
                              aria-pressed={tabIndex === activeIndex}
                              onClick={() => selectSlide(tabIndex)}
                              className={`min-h-9 rounded-full border px-1 text-[9px] font-semibold leading-tight transition sm:px-2 sm:text-xs ${
                                tabIndex === activeIndex
                                  ? "border-gold bg-gold text-white shadow-md shadow-gold/30"
                                  : "border-white/20 bg-white/10 text-white hover:bg-white/20"
                              }`}
                            >
                              {tab.tab}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
