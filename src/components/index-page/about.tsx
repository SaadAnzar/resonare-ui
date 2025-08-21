import FadeIn from "./animations/fade-in";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <FadeIn className="md:col-span-5">
            <div className="flex flex-col space-y-6">
              <div>
                <span className="text-sm md:text-base font-medium mb-2 inline-block">
                  About us
                </span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6">
                  Bridging the gap between brilliant minds
                </h2>
              </div>

              <p className="text-lg text-muted-foreground">
                Research collaboration shouldn't be left to chance. We're
                building the future where every student finds their ideal
                professor, and every professor discovers their next breakthrough
                collaborator.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform uses advanced matching algorithms to connect
                researchers based on interests, expertise, and research goals -
                creating meaningful partnerships that drive innovation forward.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="md:col-span-7">
            <div className="relative h-[500px] lg:h-[600px] w-full rounded-lg overflow-hidden">
              <img
                src="/resonare-about.png"
                alt="Interior with palm trees and ornate architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
