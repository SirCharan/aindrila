import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Destinations />
      <About />
      <Gallery />
      <Connect />
      <Footer />
    </main>
  );
}
