import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const testimonials = [
    {
      quote:
        "ShagunPe has revolutionized how we handle wedding gifts. The digital tracking and instant notifications make managing shagun a breeze.",
      name: "Priya Sharma",
      designation: "Recent Bride",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "As a wedding planner, I recommend ShagunPe to all my clients. It's secure, professional, and makes the whole process seamless.",
      name: "Rahul Verma",
      designation: "Wedding Planner",
      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "The app is so intuitive that even our elderly relatives could use it easily. Perfect blend of tradition and technology.",
      name: "Anjali Patel",
      designation: "User",
      src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ]

  return (
    <main className="bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <section className="bg-gray-50">
        <AnimatedTestimonials testimonials={testimonials} />
      </section>
      <CTASection />
      <Footer />
    </main>
  )
}

