import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-gallery.jpg";
import entranceImg from "@/assets/entrance.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import standardImg from "@/assets/room-standard.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import familyImg from "@/assets/room-family.jpg";
import gardenImg from "@/assets/garden.jpg";
import photoSpotImg from "@/assets/photospot.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import parkingImg from "@/assets/parking.jpg";
import singkawangImg from "@/assets/singkawang.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

const images = [
  { src: heroImg, alt: "Hotel Facade at Golden Hour" },
  { src: entranceImg, alt: "Illuminated Entrance" },
  { src: lobbyImg, alt: "Grand Lobby" },
  { src: deluxeImg, alt: "Deluxe Room" },
  { src: standardImg, alt: "Standard Room" },
  { src: familyImg, alt: "Family Room" },
  { src: bathroomImg, alt: "Modern Bathroom" },
  { src: gardenImg, alt: "Tropical Garden" },
  { src: photoSpotImg, alt: "Instagram Photo Spot" },
  { src: breakfastImg, alt: "Breakfast Area" },
  { src: parkingImg, alt: "Secure Parking" },
  { src: singkawangImg, alt: "Singkawang City" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <Layout>
      <section className="relative h-[40vh] overflow-hidden">
        <img src={heroImg} alt="Paralayang Hotel" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground">
            Gallery
          </motion.h1>
        </div>
      </section>

      <section className="hotel-section max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group"
              onClick={() => setSelected(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground hover:opacity-70" onClick={() => setSelected(null)}>
              <X size={32}/>
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-8 text-primary-foreground font-body text-sm">{images[selected].alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
