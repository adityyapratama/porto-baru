import About from "@/components/About";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowIWork from "@/components/HowIWork";
import Reveal from "@/components/Reveal";


export default function Home() {
  return (
    <div className="page">
      {/* <Nav /> */}
      <div className="home-grid">
        <Hero />
        <main className="right">
          <Reveal variant="left" delay={0.1}><About /></Reveal>
          <Reveal variant="left"><Changelog /></Reveal>
          <HowIWork />
          <Reveal variant="left"><Footer /></Reveal>

        </main>
      </div>
    </div>
  );
}
