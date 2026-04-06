import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wifi, ShieldCheck, Clock, Camera, Utensils, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-hotel.jpg";
import gardenImg from "@/assets/garden.jpg";
import photoSpotImg from "@/assets/photospot.jpg";
import lobbyImg from "@/assets/lobby.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-screen overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img src={heroImg} alt="Paralayang Hotel at golden hour" className="w-full h-full object-cover" width={1920} height={1080} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-hotel-gold/60"
          style={{ left: `${15 + i * 15}%`, top: `${30 + (i % 3) * 20}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-hotel-gold mb-6"
          >
            Welcome to
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Paralayang Hotel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="font-heading text-xl md:text-2xl text-primary-foreground/80 italic mb-4"
          >
            Affordable Comfort, Timeless Elegance in Singkawang
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="font-body text-base text-primary-foreground/60 mb-10 max-w-xl mx-auto"
          >
            Quality service at friendly prices in a strategic and photogenic location.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="px-8 py-4 rounded-full hotel-gradient-maroon text-primary-foreground font-body font-semibold tracking-wide hover:opacity-90 transition-opacity">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="px-8 py-4 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-body font-semibold tracking-wide hover:bg-primary-foreground/10 transition-colors">
              Explore Our Rooms
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
      >
        <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
      </motion.div>
    </section>

    {/* Features strip */}
    <section className="bg-primary py-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-6">
        {[
          { icon: Clock, label: "24/7 Reception" },
          { icon: Wifi, label: "Free WiFi" },
          { icon: ShieldCheck, label: "Secure Parking" },
          { icon: Camera, label: "Photo Spots" },
          { icon: Utensils, label: "Breakfast" },
          { icon: MapPin, label: "Strategic Location" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-primary-foreground/80 font-body text-sm">
            <Icon size={16} />
            {label}
          </div>
        ))}
      </div>
    </section>

    {/* Instagramable spots */}
    <section className="hotel-section max-w-7xl mx-auto">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
        <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.2em] text-hotel-maroon mb-3">Discover</motion.p>
        <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Photogenic Moments Await</motion.h2>
        <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground max-w-2xl mx-auto">Every corner of Paralayang Hotel is designed to be your next perfect photo backdrop.</motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { img: gardenImg, title: "Tropical Garden", desc: "Lush greenery and floral archways" },
          { img: photoSpotImg, title: "Instagram Wall", desc: "Our signature neon & floral backdrop" },
          { img: lobbyImg, title: "Grand Lobby", desc: "Elegant marble and warm lighting" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
          >
            <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-1">{item.title}</h3>
              <p className="font-body text-sm text-primary-foreground/70">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* About teaser */}
    <section className="hotel-section bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} custom={0} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Where Elegance Meets Affordability
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="font-body text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Nestled in the vibrant heart of Singkawang, Paralayang Hotel blends modern sophistication with warm Indonesian hospitality. Experience premium comfort without the premium price tag.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link to="/about" className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-body font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
              Discover Our Story
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
