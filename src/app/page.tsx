import About from "@/components/About";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <div className="page">
      <Nav />
      <div className="home-grid">
        <Hero />
        <main className="right">
          <About />
          <Changelog />
          <HowIWork />
          <Footer />
        </main>
      </div>
    </div>
  );
}
