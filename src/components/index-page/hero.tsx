import FadeIn from "./animations/fade-in";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/resonare-hero.jpg"
          alt="Resonare Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-tight mb-6">
              Resonare
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-white/90 mb-4">
              Connecting Brilliant Minds for Groundbreaking Research
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Where students meet professors, ideas meet expertise, and
              innovation takes flight.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
