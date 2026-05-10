import { MdMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";

function Header({ isContactOpen, setIsContactOpen }) {
  const [showHeader, setShowHeader] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = ["HOME", "MENU", "ABOUT", "CONTACT"];

  return (
    <>
      {/* Mobile drawer */}
      <div
        className={
          `h-full w-3/4 fixed sm:hidden z-[70] flex flex-col p-10 pt-24 gap-8 transition-all duration-500 ease-in-out` +
          (isOpen ? " left-0" : " -left-full")
        }
        style={{
          background: "linear-gradient(160deg, #1a0900 0%, #3d1e08 100%)",
        }}
        onClick={() => setIsOpen(false)}
      >
        <RxCross1
          className="text-3xl absolute top-8 right-6 text-amber-300 cursor-pointer hover:text-white transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        />
        <div className="gold-line mb-4" />
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-amber-100/80 text-lg tracking-[0.2em] font-light hover:text-amber-300 transition-colors"
          >
            {item}
          </a>
        ))}
        <div className="gold-line mt-4" />
        <button
          aria-label="order now"
          onClick={() => {
            setIsContactOpen(true);
            setIsOpen(false);
          }}
          className="mt-2 py-3 px-6 text-white text-sm font-medium rounded-none"
        >
          ORDER NOW
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Contact modal overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-[60] backdrop-blur-md transition-opacity duration-300 ${isContactOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsContactOpen(false)}
      />

      {/* Contact modal */}
      <div className="fixed inset-0 flex items-center justify-center z-[70] pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-md mx-4 rounded-2xl p-10 text-white relative transition-all duration-500 ${isContactOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"}`}
          style={{
            background: "linear-gradient(145deg, #1a0900, #3d1e08)",
            border: "1px solid rgba(201,149,47,0.3)",
          }}
        >
          <RxCross1
            className="text-2xl absolute top-6 right-6 text-amber-300/60 cursor-pointer hover:text-amber-300 transition-colors"
            onClick={() => setIsContactOpen(false)}
          />
          <div className="text-center mb-6">
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl font-light text-amber-200 mb-2"
            >
              Get In Touch
            </h2>
            <div className="gold-line" />
          </div>
          <div className="space-y-4 text-amber-100/80 font-light">
            <div className="flex items-center gap-3">
              <span className="text-amber-400 text-xs tracking-widest">
                EMAIL
              </span>
              <span className="flex-1 h-px bg-amber-900/50" />
              <span>info@thecafe.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 text-xs tracking-widest">
                PHONE
              </span>
              <span className="flex-1 h-px bg-amber-900/50" />
              <span>+92 456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 text-xs tracking-widest">
                LOCATION
              </span>
              <span className="flex-1 h-px bg-amber-900/50" />
              <span>Near University, ETC Town</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        style={{
          background: scrolled ? "rgba(18,8,0,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,149,47,0.15)" : "none",
          transition: "all 0.4s ease",
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-400 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-10 flex justify-between items-center h-20">
          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-amber-200 text-3xl p-1"
            aria-label="mobile menu"
          >
            <MdMenu />
          </button>

          {/* Logo */}
          <div className="flex items-center gap-3 ml-12 sm:ml-0">
            <img
              className="w-12 h-12 object-contain"
              src="/Logo.png"
              alt="The Cafe"
            />
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="hidden sm:block text-amber-100 text-2xl font-light tracking-[0.15em]"
            >
              THE CAFÉ
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-8">
            {["HOME", "MENU", "ABOUT"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-amber-100/70 text-xs tracking-[0.2em] hover:text-amber-300 transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => setIsContactOpen(!isContactOpen)}
            style={{ border: "1px solid rgba(201,149,47,0.6)" }}
            className="text-amber-200 text-xs px-2
            py-3 sm:text-xs tracking-[0.2em] sm:px-6 sm:py-2.5 hover:bg-amber-700/30 transition-colors duration-200 hover:cursor-pointer"
            aria-label="order now"
          >
            ORDER NOW
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
