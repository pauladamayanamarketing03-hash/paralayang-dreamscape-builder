import { motion } from "framer-motion";
import { Clock, Wifi, ShieldCheck, Baby, Coffee, ShoppingBag, Camera, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-hotel.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import breakfastImg from "@/assets/breakfast.jpg";
import gardenImg from "@/assets/garden.jpg";
import parkingImg from "@/assets/parking.jpg";
import photoSpotImg from "@/assets/photospot.jpg";
import singkawangImg from "@/assets/singkawang.jpg";

const facilities = [
  { icon: Clock, title: "24-Hour Reception", desc: "Our dedicated team is always available to assist you, day or night.", img: lobbyImg },
  { icon: Wifi, title: "Free WiFi", desc: "Stay connected with complimentary high-speed internet across all public areas.", img: null },
  { icon: ShieldCheck, title: "Secure Parking", desc: "Ample, well-lit parking with 24-hour security monitoring for your peace of mind.", img: parkingImg },
  { icon: Baby, title: "Childcare Services", desc: "Babysitting and childcare available so parents can enjoy their stay worry-free.", img: null },
  { icon: Coffee, title: "Breakfast Area", desc: "Start your day with a curated selection of local and international breakfast options.", img: breakfastImg },
  { icon: ShoppingBag, title: "Culinary & Shopping Access", desc: "Steps away from local markets, minimarkets, and Singkawang's best street food.", img: singkawangImg },
  { icon: Camera, title: "Instagramable Photo Spots", desc: "Curated backdrops throughout the hotel and garden — perfect for your feed.", img: photoSpotImg },
  { icon: Leaf, title: "Nature Relaxation Corners", desc: "Unwind in our tropical garden oasis surrounded by lush greenery and gentle breezes.", img: gardenImg },
];

const Facilities = () => (
  <Layout>
    <section className="relative h-[40vh] overflow-hidden">
      <img src={heroImg} alt="Paralayang Hotel" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center text-center px-6">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground mb-3">
            Facilities & Experiences
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="font-heading text-xl text-primary-foreground/70 italic">
            Comfort, Convenience, and Perfect Photo Moments
          </motion.p>
        </div>
      </div>
    </section>

    <section className="hotel-section max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl overflow-hidden border border-border group"
          >
            {f.img && (
              <div className="h-48 overflow-hidden">
                <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            )}
            <div className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Facilities;
