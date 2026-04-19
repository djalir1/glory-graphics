import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  index: number;
}

const ServiceCard = ({ name, description, icon: Icon, image, index }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="group relative rounded-xl overflow-hidden flex flex-col border border-border hover:border-primary/40 transition-all duration-500"
    style={{ boxShadow: "var(--card-shadow)" }}
  >
    {/* Image */}
    {image && (
      <div className="relative h-44 overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />
        <div className="absolute top-3 left-3 w-10 h-10 rounded-lg glass flex items-center justify-center text-primary group-hover:hero-gradient group-hover:text-primary-foreground transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>
      </div>
    )}

    {/* Content with glass effect */}
    <div className="relative glass flex-1 flex flex-col p-5 group-hover:bg-accent/30 transition-colors duration-300">
      {!image && (
        <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:hero-gradient group-hover:text-primary-foreground transition-all duration-300 group-hover:shadow-lg">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">{description}</p>
      <Button
        size="sm"
        variant="hero-outline"
        asChild
        className="group/btn"
      >
        <Link to="/booking">
          Book Now <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  </motion.div>
);

export default ServiceCard;
