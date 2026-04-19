import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services-data";
import { CheckCircle, Send, ArrowLeft, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    deadline: "",
    budget: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Booking submitted successfully!");
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm transition-all duration-300 ${
      focusedField === field ? "border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]" : "border-border"
    }`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-28 pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="max-w-lg mx-auto text-center glass rounded-2xl p-12 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 hero-gradient opacity-5"
                animate={{ opacity: [0.05, 0.1, 0.05] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                </motion.div>
                <h2 className="text-2xl font-display font-bold mb-4">Booking Confirmed!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you, {form.name}! We've received your booking request for{" "}
                  <strong>{services.find((s) => s.id === form.service)?.name}</strong>. We'll reach out to you at{" "}
                  <strong>{form.email}</strong> within 24 hours.
                </p>
                <Button
                  variant="hero"
                  className="group"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", service: "", description: "", deadline: "", budget: "" });
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                  Book Another Service
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-40 -right-20 w-72 h-72 rounded-full hero-gradient opacity-5 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-64 h-64 rounded-full hero-gradient opacity-5 blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full text-sm font-medium mb-4 text-primary"
            >
              <Sparkles className="w-4 h-4" />
              Get Started Today
            </motion.span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">Book a Service</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Client Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Your name"
                  className={inputClass("name")}
                  required
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="you@example.com"
                  className={inputClass("email")}
                  required
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="+250 788 000 000"
                  className={inputClass("phone")}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Service Type *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass("service")}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.005 }} transition={{ duration: 0.2 }}>
              <label className="block text-sm font-medium mb-2">Project Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                onFocus={() => setFocusedField("description")}
                onBlur={() => setFocusedField(null)}
                placeholder="Tell us about your project, goals, and any specific requirements..."
                rows={4}
                className={inputClass("description")}
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Preferred Deadline</label>
                <input
                  name="deadline"
                  type="date"
                  value={form.deadline}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("deadline")}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass("deadline")}
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Budget Range (RWF)</label>
                <input
                  name="budget"
                  type="text"
                  value={form.budget}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("budget")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="e.g. 150,000 RWF"
                  className={inputClass("budget")}
                />
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.005 }} transition={{ duration: 0.2 }}>
              <label className="block text-sm font-medium mb-2">File Upload</label>
              <input type="file" className="text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-accent file:text-accent-foreground hover:file:bg-accent/80 file:transition-colors file:duration-200 file:cursor-pointer" />
              <p className="text-xs text-muted-foreground mt-1">Upload any reference files or briefs (optional)</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="lg" type="submit" className="w-full group">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                Submit Booking Request
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Booking;
