import FadeIn from "./animations/fade-in";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Professor of Computer Science",
      institution: "MIT",
      content:
        "Resonare has revolutionized how I find talented students for my AI research projects. The matching algorithm is incredibly precise.",
      rating: 5,
    },
    {
      name: "Alex Rodriguez",
      role: "PhD Student",
      institution: "Stanford University",
      content:
        "I found my perfect research advisor through Resonare. The platform made it easy to showcase my interests and connect with professors who share my passion.",
      rating: 5,
    },
    {
      name: "Prof. Michael Thompson",
      role: "Research Director",
      institution: "Oxford University",
      content:
        "The quality of student researchers I've connected with through Resonare is outstanding. It's become an essential tool for our lab.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              What Researchers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students and professors who have found their
              perfect research match
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 100}>
              <div className="bg-primary p-8 rounded-xl shadow-sm border border-ring hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                <p className="text-primary-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center text-primary-foreground/80">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm">{testimonial.role}</p>
                    <p className="text-sm font-medium">
                      {testimonial.institution}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <div className="text-center mt-12">
            <div className="flex flex-col md:flex-row items-center space-x-8 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">500+</span>
                <span>Successful Matches</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">50+</span>
                <span>Universities</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl font-bold mr-2">95%</span>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
