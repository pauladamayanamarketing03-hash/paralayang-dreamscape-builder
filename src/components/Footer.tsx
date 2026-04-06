import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h3 className="font-heading text-2xl font-bold mb-4">Paralayang Hotel</h3>
        <p className="font-body text-sm opacity-80 leading-relaxed">
          Affordable comfort and timeless elegance in the heart of Singkawang. Your perfect base for exploring West Kalimantan.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2 font-body text-sm opacity-80">
          <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link to="/rooms" className="hover:opacity-100 transition-opacity">Rooms & Suites</Link>
          <Link to="/facilities" className="hover:opacity-100 transition-opacity">Facilities</Link>
          <Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
        <div className="flex flex-col gap-3 font-body text-sm opacity-80">
          <div className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0"/> Singkawang, West Kalimantan, Indonesia</div>
          <div className="flex items-center gap-2"><Phone size={16} className="shrink-0"/> +62 XXX-XXXX-XXXX</div>
          <div className="flex items-center gap-2"><Mail size={16} className="shrink-0"/> info@paralayanghotel.com</div>
        </div>
      </div>
      <div>
        <h4 className="font-heading text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Facebook size={18}/></a>
          <a href="https://instagram.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Instagram size={18}/></a>
          <a href="https://youtube.com" target="_blank" rel="noopener" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"><Youtube size={18}/></a>
        </div>
        <div className="mt-6 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5!2d108.98!3d0.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTQnMDAuMCJOIDEwOMKwNTgnNDguMCJF!5e0!3m2!1sen!2sid!4v1"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Paralayang Hotel Location"
          />
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 text-center py-6 font-body text-xs opacity-60">
      © 2026 Paralayang Hotel. All rights reserved.
    </div>
  </footer>
);

export default Footer;
