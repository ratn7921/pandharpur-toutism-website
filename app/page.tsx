import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import InstagramFeed from "@/components/InstagramFeed";
import PlacesGrid from "@/components/PlacesGrid";
import Footer from "@/components/Footer";
import CharacterStories from "@/components/CharacterStories";
import TravelGuide from "@/components/TravelGuide";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground selection:bg-saffron/30">
      <Navbar />
      <Hero />
      <About />
      <InstagramFeed />
      <CharacterStories />
      <PlacesGrid />
      <TravelGuide />
      <Footer />
    </main>
  );
}
