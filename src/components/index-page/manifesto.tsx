import FadeIn from "./animations/fade-in";

export default function Manifesto() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-10 text-center">
              Our Mission
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-xl md:text-2xl leading-relaxed mb-12 font-serif text-center">
              Every groundbreaking research project starts with the right
              collaboration. We're here to make those connections happen.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg leading-relaxed text-muted-foreground text-center">
              By connecting passionate students with expert professors, we're
              accelerating the pace of discovery and innovation across all
              fields of research.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
