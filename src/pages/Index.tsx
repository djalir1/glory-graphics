import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Award, Zap, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import { services } from "@/lib/services-data";
import heroBg from "@/assets/hero-bg.jpg";
import { useRef } from "react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "1200+", label: "Projects Done" },
  { icon: Zap, value: "8+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechFlow",
    text: "Glory Graphics transformed our brand identity completely. The attention to detail and creative vision exceeded all expectations.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Marketing Director, GreenLeaf",
    text: "Working with Glory Graphics was seamless. They delivered stunning packaging designs that boosted our shelf presence by 40%.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, Bloom Studio",
    text: "The logo and brand guidelines they created perfectly capture our brand essence. Highly recommend their services!",
    rating: 5,
  },
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-transparent" />
      </motion.div>

      {/* Animated floating shapes */}
      <motion.div
        className="absolute top-32 right-20 w-72 h-72 rounded-full opacity-20 hero-gradient blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-10 w-48 h-48 rounded-full opacity-15 hero-gradient blur-2xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full opacity-10 hero-gradient blur-xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div className="container mx-auto px-4 relative z-10 pt-20" style={{ y: textY, opacity }}>
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm font-medium mb-6 text-primary"
            >
              <Sparkles className="w-4 h-4" />
              Award-Winning Design Studio
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block"
              >
                Creative Graphic
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block"
              >
                Design Solutions{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-gradient block"
              >
                for Your Brand
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              We craft visual stories that captivate audiences and elevate brands. From logos to complete brand identities, we bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild className="group">
                <Link to="/services">
                  View Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="group">
                <Link to="/booking">
                  Book a Service <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

const StatsSection = () => (
  <section className="py-16 relative">
    <div className="container mx-auto px-4">
      <div className="glass rounded-2xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="text-center cursor-default group"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-300" />
              </motion.div>
              <div className="text-3xl font-display font-bold">
                <AnimatedCounter target={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">Our Design Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We offer a comprehensive range of graphic design services to help your brand stand out.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.slice(0, 4).map((service, i) => (
          <ServiceCard key={service.id} {...service} index={i} />
        ))}
      </div>
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Button variant="hero-outline" size="lg" asChild className="group">
          <Link to="/services">
            View All Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-24 bg-accent/50 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute top-0 left-0 w-64 h-64 rounded-full hero-gradient opacity-5 blur-3xl" />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full hero-gradient opacity-5 blur-3xl" />

    <div className="container mx-auto px-4 relative">
      <div className="text-center mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-2">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it — hear from brands we've helped transform.
          </p>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="glass rounded-xl p-8 cursor-default group relative overflow-hidden"
            style={{ boxShadow: "var(--card-shadow)" }}
          >
            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="hero-gradient rounded-2xl p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden"
      >
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-primary-foreground/10 blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-primary-foreground/10 blur-xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-display font-bold mb-4"
          >
            Ready to Elevate Your Brand?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-primary-foreground/80 max-w-lg mx-auto mb-8"
          >
            Let's create something extraordinary together. Book a consultation and bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              variant="hero-outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group"
              asChild
            >
              <Link to="/booking">
                Book a Free Consultation <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
