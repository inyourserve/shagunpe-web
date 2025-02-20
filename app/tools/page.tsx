import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ToolsHero } from "@/components/tools/tools-hero"
import { ExploreTools } from "@/components/tools/explore-tools"

export default function ToolsPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ToolsHero />
      <ExploreTools />
      <Footer />
    </main>
  )
}

