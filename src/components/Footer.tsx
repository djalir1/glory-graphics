import { Palette, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="bg-foreground text-background relative overflow-hidden">
    {/* Decorative gradient */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 font-display text-xl font-bold cursor-default"
          >
            <Palette className="w-6 h-6" />
            Glory Graphics
          </motion.div>
          <p className="text-background/60 text-sm leading-relaxed">
            Transforming brands through exceptional graphic design. We craft visual identities that make lasting impressions.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {["Logo Design", "Brand Identity", "Packaging Design", "Print Design"].map((item) => (
              <li key={item}>
                <Link
                  to="/services"
                  className="hover:text-background transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-background/60">
            {[
              { label: "Home", to: "/" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Book a Service", to: "/booking" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="hover:text-background transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li className="flex items-center gap-2 hover:text-background transition-colors cursor-default">
              <Mail className="w-4 h-4" /> hello@glorygraphics.rw
            </li>
            <li className="flex items-center gap-2 hover:text-background transition-colors cursor-default">
              <Phone className="w-4 h-4" /> +250 788 000 000
            </li>
            <li className="flex items-center gap-2 hover:text-background transition-colors cursor-default">
              <MapPin className="w-4 h-4" /> Kigali, Rwanda
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
        © {new Date().getFullYear()} Glory Graphics. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
