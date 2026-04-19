import { Brush, Layers, Image, FileText, Hexagon, Package, CreditCard, BookOpen } from "lucide-react";
import serviceLogoDesign from "@/assets/service-logo-design.jpg";
import serviceBrandIdentity from "@/assets/service-brand-identity.jpg";
import serviceBanners from "@/assets/service-banners.jpg";
import servicePosterFlyer from "@/assets/service-poster-flyer.jpg";
import serviceLogos from "@/assets/service-logos.jpg";
import servicePackaging from "@/assets/service-packaging.jpg";
import serviceBusinessCards from "@/assets/service-business-cards.jpg";
import servicePublication from "@/assets/service-publication.jpg";

export const services = [
  {
    id: "logo-design",
    name: "Logo Design",
    description: "Memorable logos that capture your brand essence and make a lasting first impression.",
    icon: Brush,
    image: serviceLogoDesign,
  },
  {
    id: "brand-identity",
    name: "Brand Identity Design",
    description: "Complete visual identity systems including color palettes, typography, and brand guidelines.",
    icon: Layers,
    image: serviceBrandIdentity,
  },
  {
    id: "advertising-banners",
    name: "Advertising Banners",
    description: "Eye-catching digital and print banners designed to maximize engagement and conversions.",
    icon: Image,
    image: serviceBanners,
  },
  {
    id: "poster-flyer",
    name: "Poster & Flyer Design",
    description: "Striking posters and flyers that communicate your message with visual impact.",
    icon: FileText,
    image: servicePosterFlyer,
  },
  {
    id: "logos-design",
    name: "Logos Design",
    description: "Custom logo variations including monograms, wordmarks, and icon-based logos.",
    icon: Hexagon,
    image: serviceLogos,
  },
  {
    id: "packaging-design",
    name: "Packaging Design",
    description: "Product packaging that stands out on shelves and elevates your brand experience.",
    icon: Package,
    image: servicePackaging,
  },
  {
    id: "business-cards",
    name: "Business Cards",
    description: "Professional business card designs that leave a memorable impression at every handshake.",
    icon: CreditCard,
    image: serviceBusinessCards,
  },
  {
    id: "publication-print",
    name: "Publication & Print",
    description: "Magazine layouts, brochures, and print materials with polished editorial design.",
    icon: BookOpen,
    image: servicePublication,
  },
];
