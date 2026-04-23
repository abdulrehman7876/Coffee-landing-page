const menuItems = [
  {
    name: "Espresso",
    desc: "Pure, intense & bold",
    price: "RS 650",
    img: "/expresso.webp",
  },
  {
    name: "Cappuccino",
    desc: "Velvety foam, rich espresso",
    price: "RS 650",
    img: "/cappuccino.webp",
  },
  {
    name: "Latte",
    desc: "Silky milk, smooth roast",
    price: "RS 650",
    img: "/latte.webp",
  },
  {
    name: "Mocha",
    desc: "Chocolate meets espresso",
    price: "RS 650",
    img: "/mocha.webp",
  },
  {
    name: "Cold Brew",
    desc: "Slow-steeped, refreshing",
    price: "RS 650",
    img: "/coldBrew.webp",
  },
  {
    name: "Hot Chocolate",
    desc: "Indulgent & comforting",
    price: "RS 650",
    img: "/hotChocolate.webp",
  },
];

export default function Menu({ isContactOpen, setIsContactOpen }) {
  return (
    <section
      id="menu"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "#120800" }}
    >
      {/* Top beans image */}
      <div
        className="absolute top-0 left-0 right-0 h-32 overflow-hidden opacity-30 pointer-events-none"
        style={{ transform: "scaleY(-1)" }}
      >
        <img
          src="/beans.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Decorative background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(100,50,10,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-amber-500 text-xs tracking-[0.35em] uppercase font-medium mb-4 block">
            Crafted with Care
          </span>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              lineHeight: 1.1,
            }}
            className="text-5xl sm:text-7xl font-light text-white mb-4"
          >
            Our Menu
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-px bg-amber-700/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <div className="w-16 h-px bg-amber-700/50" />
          </div>
          <p className="text-amber-100/40 text-sm mt-5 tracking-wide font-light">
            Your daily dose of comfort
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {menuItems.map((item, i) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(145deg, rgba(60,25,5,0.8), rgba(40,15,2,0.9))",
                border: "1px solid rgba(201,149,47,0.12)",
                animationDelay: `${i * 0.08}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.img}
                  alt={item.name}
                />
                {/* Image overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,10,2,0.7) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-amber-100 text-2xl font-light"
                    >
                      {item.name}
                    </h3>
                    <p className="text-amber-100/40 text-xs tracking-wide mt-1 font-light">
                      {item.desc}
                    </p>
                  </div>
                  <span
                    className="text-amber-400 text-sm font-medium mt-1"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {item.price}
                  </span>
                </div>

                <div className="gold-line my-4 opacity-30" />

                <button
                  onClick={() => setIsContactOpen(!isContactOpen)}
                  className="w-full py-2.5 text-xs tracking-[0.2em] text-amber-200 border border-amber-700/40 hover:border-amber-400 hover:text-white hover:bg-amber-800/30 transition-all duration-300 cursor-pointer"
                >
                  ORDER NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom beans */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden opacity-25 pointer-events-none">
        <img
          src="/beans.webp"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
