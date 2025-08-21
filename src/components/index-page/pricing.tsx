import { cn } from "@/lib/utils";
import FadeIn from "./animations/fade-in";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const plans = [
    {
      name: "Student",
      price: "Free",
      description: "Perfect for students starting their research journey",
      features: [
        "Create research profile",
        "Browse professor profiles",
        "Send 3 connection requests per month",
        "Basic matching algorithm",
        "Email notifications",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professor",
      price: "$19",
      period: "/month",
      description: "Ideal for professors seeking research collaborators",
      features: [
        "Unlimited student connections",
        "Advanced profile customization",
        "Research project management",
        "Priority matching",
        "Analytics dashboard",
        "Custom research preferences",
      ],
      cta: "Start Collaborating",
      popular: true,
    },
    {
      name: "Institution",
      price: "Custom",
      description: "For universities and research institutions",
      features: [
        "Unlimited faculty & student accounts",
        "Institution branding",
        "Custom integration",
        "Advanced analytics",
        "Dedicated support",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your research goals. Start free and
              upgrade as you grow.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 100}>
              <div
                className={cn(
                  "relative p-8 rounded-xl border transition-all duration-300 hover:shadow-lg",
                  plan.popular ? "border-cyan-500 shadow-lg" : "border-ring"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <Check className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.popular ? "default" : "secondary"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
