import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hotel-real.jpg";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: "1", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your reservation request has been received. We'll contact you shortly.");
    setForm({ name: "", email: "", phone: "", checkin: "", checkout: "", guests: "1", message: "" });
  };

  return (
    <Layout>
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroImg} alt="Paralayang Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground">
            Contact & Reservations
          </motion.h1>
        </div>
      </section>

      <section className="hotel-section max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Make a Reservation</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Full Name" className="px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email" className="px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Phone / WhatsApp" className="px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">Check-in</label>
                  <input type="date" required value={form.checkin} onChange={(e) => setForm({ ...form, checkin: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">Check-out</label>
                  <input type="date" required value={form.checkout} onChange={(e) => setForm({ ...form, checkout: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground mb-1 block">Guests</label>
                  <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>
              <textarea
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Special requests or message..." rows={4}
                className="px-4 py-3 rounded-lg border border-border bg-card font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button type="submit" className="px-8 py-4 rounded-full hotel-gradient-maroon text-primary-foreground font-body font-semibold tracking-wide hover:opacity-90 transition-opacity">
                Submit Reservation
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
            <div className="flex flex-col gap-5 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><MapPin size={18} className="text-primary"/></div>
                <div><p className="font-body font-semibold text-foreground">Address</p><p className="font-body text-sm text-muted-foreground">Singkawang, West Kalimantan, Indonesia</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Phone size={18} className="text-primary"/></div>
                <div><p className="font-body font-semibold text-foreground">Phone / WhatsApp</p><p className="font-body text-sm text-muted-foreground">+62 XXX-XXXX-XXXX</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Mail size={18} className="text-primary"/></div>
                <div><p className="font-body font-semibold text-foreground">Email</p><p className="font-body text-sm text-muted-foreground">info@paralayanghotel.com</p></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Clock size={18} className="text-primary"/></div>
                <div><p className="font-body font-semibold text-foreground">Reception</p><p className="font-body text-sm text-muted-foreground">Open 24 hours, 7 days a week</p></div>
              </div>
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"><Facebook size={20}/></a>
              <a href="https://instagram.com" target="_blank" rel="noopener" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"><Instagram size={20}/></a>
              <a href="https://youtube.com" target="_blank" rel="noopener" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:opacity-80 transition-opacity"><Youtube size={20}/></a>
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Find Us</h3>
            <div className="rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5!2d108.98!3d0.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwNTQnMDAuMCJOIDEwOMKwNTgnNDguMCJF!5e0!3m2!1sen!2sid!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Paralayang Hotel Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
