import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

const FloatingBookButton = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    className="fixed bottom-6 right-6 z-50"
  >
    <Link
      to="/contact"
      className="flex items-center gap-2 px-6 py-3 rounded-full hotel-gradient-maroon text-primary-foreground font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      <CalendarCheck size={18}/>
      Book Now
    </Link>
  </motion.div>
);

export default FloatingBookButton;
