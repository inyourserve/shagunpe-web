import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/about/hero-section"
import { StorySection } from "@/components/about/story-section"
import { ImpactSection } from "@/components/about/impact-section"
import { TeamSection } from "@/components/about/team-section"
import { MissionSection } from "@/components/about/mission-section"

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <StorySection />
      <ImpactSection />
      <TeamSection />
      <MissionSection />
      <Footer />
    </main>
  )
}

