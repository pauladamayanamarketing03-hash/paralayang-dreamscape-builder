import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-hotel.jpg";
import entranceImg from "@/assets/entrance.jpg";
import gardenImg from "@/assets/garden.jpg";
import lobbyImg from "@/assets/lobby.jpg";
import singkawangImg from "@/assets/singkawang.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

const About = () => (
  <Layout>
    {/* Hero banner */}
    <section className="relative h-[50vh] overflow-hidden">
      <img src={heroImg} alt="Paralayang Hotel" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-6xl font-bold text-primary-foreground">
          About Us
        </motion.h1>
      </div>
    </section>

    {/* Main content */}
    <section className="hotel-section max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.2em] text-hotel-maroon mb-3">Our Story</motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-heading text-4xl font-bold text-foreground mb-6">A Haven of Modern Elegance</motion.h2>
          <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground leading-relaxed mb-4">
            Paralayang Hotel delivers an exceptional hospitality experience where quality service meets affordability. Our modern yet elegant design philosophy creates an environment that is both visually captivating and genuinely comfortable.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="font-body text-muted-foreground leading-relaxed mb-4">
            With 24-hour reception, complimentary WiFi throughout all public areas, secure parking, and effortless access to Singkawang's finest culinary destinations, traditional markets, and cultural attractions — we ensure every aspect of your stay is thoughtfully curated.
          </motion.p>
          <motion.p variants={fadeUp} custom={4} className="font-body text-muted-foreground leading-relaxed">
            Our strategic location places you steps away from local shops, minimarkets, and authentic food vendors, making your exploration of Singkawang both seamless and delightful — whether you're visiting for a quick getaway, a family retreat, or an extended stay.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          <img src={entranceImg} alt="Hotel entrance" loading="lazy" className="rounded-2xl w-full h-64 object-cover" />
          <img src={gardenImg} alt="Hotel garden" loading="lazy" className="rounded-2xl w-full h-64 object-cover mt-8" />
          <img src={lobbyImg} alt="Hotel lobby" loading="lazy" className="rounded-2xl w-full h-64 object-cover" />
          <img src={singkawangImg} alt="Singkawang city" loading="lazy" className="rounded-2xl w-full h-64 object-cover mt-8" />
        </motion.div>
      </div>

      {/* Values */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
        <motion.h2 variants={fadeUp} custom={0} className="font-heading text-3xl font-bold text-foreground mb-4">Why Choose Us</motion.h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: "Affordable Luxury", desc: "Premium quality service without the premium price. We believe elegance should be accessible to everyone." },
          { title: "Strategic Location", desc: "Surrounded by Singkawang's best — local eateries, markets, and attractions are just moments away." },
          { title: "Instagramable Design", desc: "Every corner is crafted to be photogenic. Our garden, facade, and interior are your perfect backdrop." },
        ].map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-2xl p-8 text-center border border-border"
          >
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default About;
