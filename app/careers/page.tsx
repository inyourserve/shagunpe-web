import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CareersHero } from "@/components/careers/careers-hero"
import { Benefits } from "@/components/careers/benefits"
import { OpenPositions } from "@/components/careers/open-positions"
import { Culture } from "@/components/careers/culture"
import { JoinProcess } from "@/components/careers/join-process"
import { CareersFAQ } from "@/components/careers/careers-faq"

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <CareersHero />
      <Benefits />
      <OpenPositions />
      <Culture />
      <JoinProcess />
      <CareersFAQ />
      <Footer />
    </main>
  )
}

