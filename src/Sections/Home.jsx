export default function Home() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-end overflow-hidden"
      style={{ background: "#120800" }}
    >
      {/* Background image with overlay */}
      <img
        src="/background.webp"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
        loading="eager"
        alt="coffee background"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(18,8,0,0.95) 0%, rgba(18,8,0,0.4) 50%, rgba(18,8,0,0.2) 100%)",
        }}
      />

      {/* Vignette sides */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          boxShadow:
            "inset 80px 0 120px rgba(18,8,0,0.7), inset -80px 0 120px rgba(18,8,0,0.7)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 sm:px-16 lg:px-20 pb-24 sm:pb-32 h-full pt-25">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 mb-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-px bg-amber-500" />
            <span className="text-amber-400 text-xs tracking-[0.3em] font-medium uppercase">
              Est. 2020 · Artisan Coffee
            </span>
          </div>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              lineHeight: 1.05,
            }}
            className="text-5xl sm:text-7xl lg:text-7xl 2xl:text-8xl font-light text-white mb-6 animate-fade-up"
          >
            Awaken
            <br />
            <em className="text-amber-300 not-italic">Your Senses</em>
          </h1>

          {/* Subheadline */}
          <p
            className="text-amber-100/60 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-md animate-fade-up"
            style={{ animationDelay: "0.2s", fontFamily: "'Jost', sans-serif" }}
          >
            Experience the rich aroma and bold flavors of our freshly brewed
            coffee, crafted with passion to make every sip unforgettable.
          </p>

          {/* CTAs */}
          <div
            className="flex gap-4 flex-wrap animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#menu"
              className="px-8 py-3.5 text-xs tracking-[0.25em] text-white font-medium transition-all duration-300 hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #b8763a, #c9952f)",
              }}
            >
              EXPLORE MENU
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 text-xs tracking-[0.25em] text-amber-200 font-medium border border-amber-700/50 hover:border-amber-400 hover:text-amber-300 transition-all duration-300"
            >
              OUR STORY
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-10 z-20 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <span className="text-amber-500/50 text-[10px] tracking-[0.3em] rotate-90 origin-center mb-2">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-500/50 to-transparent" />
      </div>
    </section>
  );
}
