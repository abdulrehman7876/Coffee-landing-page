export default function Aboutus() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "linear-gradient(180deg, #120800 0%, #1c0d03 50%, #120800 100%)" }}
    >
      {/* Decorative circle */}
      <div
        className="absolute -right-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(184,118,58,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <span className="text-amber-500 text-xs tracking-[0.35em] uppercase font-medium mb-4 block">
            Our Story
          </span>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}
            className="text-5xl sm:text-7xl font-light text-white"
          >
            The Café
          </h2>
          <div className="flex items-center gap-4 mt-5">
            <div className="w-16 h-px bg-amber-600/50" />
            <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-amber-400 text-xl sm:text-2xl font-light italic">
              Where Every Sip Begins
            </p>
          </div>
        </div>

        {/* Main content block */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div
              className="absolute -inset-3 opacity-30 rounded-3xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(201,149,47,0.3), transparent)" }}
            />
            <div className="relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(201,149,47,0.15)" }}>
              <img
                className="w-full h-72 sm:h-96 object-cover"
                src="/aboutImage.webp"
                alt="The Café interior"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(18,8,0,0.5) 0%, transparent 50%)" }}
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full flex flex-col items-center justify-center"
              style={{ background: "linear-gradient(135deg, #b8763a, #c9952f)", border: "3px solid #120800" }}
            >
              <span className="text-white text-xs text-center leading-tight font-medium">EST<br/>2020</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-amber-100/65 leading-relaxed text-base sm:text-lg font-light mb-6">
              At The Café, we're passionate about crafting the perfect cup. From
              selecting premium beans to brewing with care, we bring you rich
              flavors and irresistible aromas — one sip at a time.
            </p>
            <p className="text-amber-100/55 leading-relaxed text-base font-light mb-8">
              We are a passionate team of coffee lovers dedicated to bringing
              you the finest quality coffee experiences. Our journey began with
              a simple idea: to create a space where every cup tells a story and
              every visit feels like coming home.
            </p>
            {/* Stats */}
            <div className="flex gap-10">
              {[
                { num: "5+", label: "Years of Craft" },
                { num: "20+", label: "Blends & Brews" },
                { num: "10K+", label: "Happy Guests" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-amber-300 text-3xl font-light"
                  >
                    {s.num}
                  </div>
                  <div className="text-amber-100/40 text-xs tracking-wide mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line my-10 opacity-30" />

        {/* Extra paragraph */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-100/50 leading-loose text-base font-light">
            We meticulously source our beans from sustainable farms around the world,
            ensuring that each cup is not only delicious but also ethically produced.
            Our baristas are artisans, trained to craft each drink with precision and care.
            Beyond coffee, we are committed to fostering a welcoming community space
            where people can gather, share ideas, and create memories.
          </p>
        </div>
      </div>
    </section>
  );
}
