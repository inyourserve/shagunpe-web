import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHero } from "@/components/contact/contact-hero"
import { SupportCategories } from "@/components/contact/support-categories"
import { ContactForm } from "@/components/contact/contact-form"
import { OfficeLocations } from "@/components/contact/office-locations"

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ContactHero />
      <SupportCategories />
      <ContactForm />
      <OfficeLocations />
      <Footer />
    </main>
  )
}

