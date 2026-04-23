export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1c0d03 0%, #0d0500 100%)", borderTop: "1px solid rgba(201,149,47,0.12)" }}
    >
      {/* Top gold accent line */}
      <div className="gold-line opacity-40" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              loading="lazy"
              className="h-16 w-auto object-contain mb-4"
              src="/Logo.png"
              alt="The Café"
            />
            <h3
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-amber-200 text-2xl font-light mb-3"
            >
              THE CAFÉ
            </h3>
            <p className="text-amber-100/40 text-sm font-light leading-relaxed max-w-[180px]">
              Crafting exceptional coffee experiences since 2020.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Contact
            </h4>
            <ul className="space-y-3 text-amber-100/55 font-light text-sm">
              <li>info@thecafe.com</li>
              <li>+92 302 617 692</li>
              <li className="leading-relaxed">Near University<br/>ETC Town</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Hours
            </h4>
            <ul className="space-y-2 text-amber-100/55 font-light text-sm">
              <li><span className="text-amber-300/70">Mon – Fri</span><br />7:00am – 8:00pm</li>
              <li className="pt-1"><span className="text-amber-300/70">Sat – Sun</span><br />8:00am – 9:00pm</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="text-amber-400 text-xs tracking-[0.25em] uppercase mb-5 font-medium">
              Follow Us
            </h4>
            <ul className="space-y-3 text-amber-100/55 font-light text-sm">
              <li className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-pointer">
                <span className="w-4 h-4 rounded-sm bg-amber-700/40 flex items-center justify-center text-[9px] text-amber-400">ig</span>
                @thecafe
              </li>
              <li className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-pointer">
                <span className="w-4 h-4 rounded-sm bg-amber-700/40 flex items-center justify-center text-[9px] text-amber-400">fb</span>
                The Café
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-line opacity-20 mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-amber-100/25 text-xs tracking-wider font-light">
            &copy; {new Date().getFullYear()} THE CAFÉ. All rights reserved.
          </p>
          <p className="text-amber-100/20 text-xs font-light">
            Crafted with passion · Served with love
          </p>
        </div>
      </div>
    </footer>
  );
}
