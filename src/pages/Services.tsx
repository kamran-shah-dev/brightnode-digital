import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

const Services = () => {
  return (
    <Layout
      title="Our Services | BrightNode Digital Solutions"
      description="Explore our comprehensive digital services including web development, e-commerce, UI/UX design, SEO optimization, and custom web applications."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From concept to launch, we provide end-to-end digital services
              tailored to your unique business needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                variant="detailed"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Deliver Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              Every project follows our proven methodology to ensure quality,
              transparency, and results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Planning",
                items: [
                  "Requirements gathering",
                  "Market research",
                  "Technical architecture",
                  "Project timeline",
                ],
              },
              {
                phase: "Phase 2",
                title: "Design & Development",
                items: [
                  "UI/UX design",
                  "Iterative development",
                  "Quality assurance",
                  "Client feedback loops",
                ],
              },
              {
                phase: "Phase 3",
                title: "Launch & Support",
                items: [
                  "Deployment",
                  "Performance optimization",
                  "Training & documentation",
                  "Ongoing maintenance",
                ],
              },
            ].map((phase, index) => (
              <div
                key={phase.phase}
                className="bg-card rounded-2xl p-8 shadow-custom-md border border-border/50 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-accent font-medium text-sm">{phase.phase}</span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-muted-foreground text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Start Your Project?"
        description="Tell us about your project and get a free consultation with our experts."
        primaryCTA="Get a Free Quote"
        secondaryCTA="Learn About Us"
        secondaryLink="/about"
      />
    </Layout>
  );
};

export default Services;
