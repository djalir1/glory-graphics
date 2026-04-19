import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services-data";
import { useState } from "react";
import { Search, X, Sparkles } from "lucide-react";

const Services = () => {
  const [search, setSearch] = useState("");
  const filtered = services.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 -right-32 w-80 h-80 rounded-full hero-gradient opacity-5 blur-3xl" />
        <div className="absolute bottom-40 -left-20 w-60 h-60 rounded-full hero-gradient opacity-5 blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-primary"
            >
              <Sparkles className="w-4 h-4" />
              What We Offer
            </motion.span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Explore our full range of graphic design services crafted to bring your brand vision to life.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative max-w-md mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-xl glass text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-all duration-300"
              />
              <AnimatePresence>
                {search && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-accent transition-colors"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </motion.button>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <ServiceCard {...service} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence>
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-center mt-12 glass rounded-xl p-12"
              >
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-30" />
                <p className="text-muted-foreground">No services found matching "{search}"</p>
                <button onClick={() => setSearch("")} className="text-primary text-sm mt-2 hover:underline">
                  Clear search
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
