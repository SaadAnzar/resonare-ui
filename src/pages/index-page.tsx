import Header from "@/components/index-page/header";
import Hero from "@/components/index-page/hero";
import Manifesto from "@/components/index-page/manifesto";
import About from "@/components/index-page/about";
import Pricing from "@/components/index-page/pricing";
import Testimonials from "@/components/index-page/testimonials";
import Footer from "@/components/index-page/footer";

export default function IndexPage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Manifesto />
      <About />
      <Pricing />
      <Testimonials />
      <Footer />
    </main>
  );
}
