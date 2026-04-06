import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Facebook, Instagram, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/rooms", label: "Rooms" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" className="text-primary">
            <path d="M16 4L8 16h16L16 4z" fill="currentColor" opacity="0.3"/>
            <path d="M16 8l-6 10h12L16 8z" fill="currentColor"/>
            <path d="M10 18c-2 4-4 8-4 8h20s-2-4-4-8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <circle cx="16" cy="6" r="1.5" fill="currentColor"/>
          </svg>
          <span className="font-heading text-xl font-bold text-primary tracking-wide">Paralayang Hotel</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm tracking-wider uppercase transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://facebook.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors"><Facebook size={18}/></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors"><Instagram size={18}/></a>
          <a href="https://youtube.com" target="_blank" rel="noopener" className="text-muted-foreground hover:text-primary transition-colors"><Youtube size={18}/></a>
          <Link to="/contact" className="ml-4 px-5 py-2 rounded-full hotel-gradient-maroon text-primary-foreground text-sm font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Book Now
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground">
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`font-body text-sm tracking-wider uppercase ${
                    location.pathname === l.to ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="px-5 py-2 rounded-full hotel-gradient-maroon text-primary-foreground text-sm font-semibold text-center">
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
