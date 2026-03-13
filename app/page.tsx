import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import CoursesSection from "./components/CoursesSection";
import StatsSection from "./components/StatsSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactFormSection from "./components/ContactFormSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <StatsSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactFormSection />
      <CTASection />
      <Footer />
    </main>
  );
}
