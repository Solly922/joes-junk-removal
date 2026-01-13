import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { OurStory } from "@/components/OurStory"
import { Reviews } from "@/components/Reviews"
import { OurWork } from "@/components/OurWork"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services id="services" />
        <OurStory id="story" />
        <Reviews id="reviews" />
        <OurWork id="work" />
      </main>
      <Footer />
    </>
  )
}
