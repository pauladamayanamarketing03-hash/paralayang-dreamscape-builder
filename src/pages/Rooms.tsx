import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wifi, Wind, Droplets, Tv, Coffee } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-rooms.jpg";
import standardImg from "@/assets/room-standard.jpg";
import deluxeImg from "@/assets/room-deluxe.jpg";
import familyImg from "@/assets/room-family.jpg";

const rooms = [
  {
    name: "Standard Room",
    desc: "A refined retreat designed for restful comfort. Enjoy a plush queen bed, modern amenities, and serene natural light — perfect for solo travelers or couples seeking an elegant yet affordable stay.",
    img: standardImg,
    amenities: ["Queen Bed", "AC", "Free WiFi", "Hot Shower", "TV"],
  },
  {
    name: "Deluxe Room",
    desc: "Elevated sophistication with generous space and premium appointments. The Deluxe Room features a king bed with luxurious linens, an ensuite bathroom with rainfall shower, and curated maroon-cream interiors.",
    img: deluxeImg,
    amenities: ["King Bed", "AC", "Free WiFi", "Rainfall Shower", "Mini Bar"],
  },
  {
    name: "Family Room",
    desc: "Spacious comfort for the whole family. Two premium beds, ample living space, and family-friendly touches ensure a memorable stay for parents and children alike.",
    img: familyImg,
    amenities: ["Two Beds", "AC", "Free WiFi", "Hot Shower", "Sitting Area"],
  },
];

const iconMap: Record<string, typeof Wifi> = { "Free WiFi": Wifi, "AC": Wind, "Hot Shower": Droplets, "Rainfall Shower": Droplets, "TV": Tv, "Mini Bar": Coffee };

const Rooms = () => (
  <Layout>
    <section className="relative h-[40vh] overflow-hidden">
      <img src={heroImg} alt="Paralayang Hotel" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground">
          Rooms & Suites
        </motion.h1>
      </div>
    </section>

    <section className="hotel-section max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.2em] text-hotel-maroon mb-3">Accommodations</p>
        <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Your Perfect Room Awaits</h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">Each room is thoughtfully designed with our signature cream-and-maroon palette, ensuring comfort and elegance at every turn.</p>
      </div>

      <div className="flex flex-col gap-16">
        {rooms.map((room, i) => (
          <motion.div
            key={room.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
          >
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <div className="overflow-hidden rounded-2xl">
                <img src={room.img} alt={room.name} loading="lazy" className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
            <div className={i % 2 === 1 ? "lg:order-1" : ""}>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">{room.name}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{room.desc}</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {room.amenities.map((a) => {
                  const Icon = iconMap[a];
                  return (
                    <span key={a} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-body text-xs">
                      {Icon && <Icon size={14}/>} {a}
                    </span>
                  );
                })}
              </div>
              <Link to="/contact" className="inline-block px-6 py-3 rounded-full hotel-gradient-maroon text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
                Book This Room
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Rooms;
