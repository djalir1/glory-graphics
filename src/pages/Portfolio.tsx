import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye } from "lucide-react";
import portfolioImg from "@/assets/portfolio-grid.jpg";

const categories = ["All", "Brand Identity", "Logo Design", "Packaging Design", "Publication", "Advertising", "Business Cards"];

const projects = [
  { title: "TechFlow Brand Identity", category: "Brand Identity", color: "from-blue-500 to-indigo-600" },
  { title: "GreenLeaf Packaging", category: "Packaging Design", color: "from-emerald-500 to-teal-600" },
  { title: "Bloom Studio Logo", category: "Logo Design", color: "from-pink-500 to-rose-600" },
  { title: "Meridian Annual Report", category: "Publication", color: "from-amber-500 to-orange-600" },
  { title: "Skyline App Banners", category: "Advertising", color: "from-cyan-500 to-blue-600" },
  { title: "Nova Business Cards", category: "Business Cards", color: "from-violet-500 to-purple-600" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2">Our Work</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Our Portfolio</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A showcase of our finest work across branding, print, and digital design.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? "hero-gradient text-primary-foreground shadow-lg"
                    : "glass text-foreground/70 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            className="mb-16 rounded-2xl overflow-hidden card-shadow group cursor-pointer relative"
          >
            <img src={portfolioImg} alt="Portfolio showcase" className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="glass rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <Eye className="w-6 h-6 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 0.8 }}
                    className="text-sm font-medium uppercase tracking-wider mb-2"
                    style={{ color: "white" }}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-xl font-display font-bold" style={{ color: "white" }}>
                    {project.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass rounded-full p-3">
                    <Eye className="w-5 h-5" style={{ color: "white" }} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
