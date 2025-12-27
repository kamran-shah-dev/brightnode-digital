import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";
import { industries } from "@/data/industries";




const Industries = () => {
  return (
    <Layout
      title="Industries We Serve | BrightNode Digital Solutions"
      description="Explore how BrightNode serves retail, healthcare, education, local businesses, and startups with tailored digital solutions."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Industries We Serve
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Expertise Across Sectors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We bring deep industry knowledge to every project, understanding
              the unique challenges and opportunities in each sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isEven = index % 2 === 0;

              return (
                <article
                  key={industry.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center opacity-0 animate-fade-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                      <Icon size={32} className="text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {industry.name}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {industry.description}
                    </p>
                    <div className="space-y-3">
                      {getIndustryDetails(industry.id).map((detail) => (
                        <div key={detail} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`${
                      isEven ? "order-2" : "order-2 lg:order-1"
                    } relative overflow-hidden rounded-3xl aspect-square group`}
                  >
                    {/* Image */}
                    <img
                      src={industry.image}
                      alt={industry.name}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay for readability + brand consistency */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-primary/25" />
                  </div>

                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Industry */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Why BrightNode
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Industry-Specific Expertise
            </h2>
            <p className="text-muted-foreground text-lg">
              Our team brings specialized knowledge to deliver solutions that
              truly understand your industry's needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Regulatory Compliance",
                description:
                  "We ensure your digital solutions meet industry-specific regulations and standards.",
              },
              {
                title: "Best Practices",
                description:
                  "Leveraging proven strategies and patterns that work in your sector.",
              },
              {
                title: "Scalable Solutions",
                description:
                  "Built to grow with your business and adapt to changing market demands.",
              },
              {
                title: "Integration Ready",
                description:
                  "Seamless integration with industry-standard tools and platforms.",
              },
              {
                title: "Security First",
                description:
                  "Robust security measures tailored to your industry's requirements.",
              },
              {
                title: "Ongoing Support",
                description:
                  "Dedicated support team that understands your industry challenges.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-card rounded-2xl p-6 shadow-custom-sm border border-border/50 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Let's Discuss Your Industry Needs"
        description="Our team has the expertise to tackle your specific industry challenges."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="Explore Our Services"
        secondaryLink="/services"
      />
    </Layout>
  );
};

// Helper function for industry details
function getIndustryDetails(industryId: string): string[] {
  const details: Record<string, string[]> = {
    retail: [
      "E-commerce platforms with advanced product management",
      "Omnichannel customer experience solutions",
      "Inventory and order management systems",
      "Customer loyalty and rewards programs",
    ],
    healthcare: [
      "HIPAA-compliant patient portals",
      "Telemedicine and virtual care platforms",
      "Appointment scheduling and management",
      "Electronic health record integrations",
    ],
    education: [
      "Learning management systems (LMS)",
      "Virtual classroom environments",
      "Student and parent portals",
      "Assessment and grading tools",
    ],
    "local-business": [
      "Professional business websites",
      "Local SEO and Google Business optimization",
      "Online booking and reservation systems",
      "Customer review and reputation management",
    ],
    startups: [
      "MVP development and rapid prototyping",
      "Scalable cloud-based architecture",
      "Investor-ready presentation materials",
      "Growth-focused analytics and tracking",
    ],
  };
  return details[industryId] || [];
}

export default Industries;
