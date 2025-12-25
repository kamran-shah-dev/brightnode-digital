import { Link } from "react-router-dom";
// Home page component
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import IndustryCard from "@/components/IndustryCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { industries, technologies, valuePropositions } from "@/data/industries";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Digital Solutions That Drive Results
            </h2>
            <p className="text-muted-foreground text-lg">
              From stunning websites to custom applications, we deliver
              end-to-end digital solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/services">
                Explore All Services
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Expertise Across Sectors
            </h2>
            <p className="text-muted-foreground text-lg">
              We understand the unique challenges and opportunities in each
              industry we serve.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Stack */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Tech Stack
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Built with Modern Technologies
            </h2>
            <p className="text-muted-foreground text-lg">
              We use industry-leading tools and frameworks to build scalable,
              high-performance solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="px-6 py-3 bg-card rounded-full border border-border shadow-custom-sm hover:shadow-custom-md hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Why BrightNode
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Your Trusted Partner in Digital Transformation
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We combine technical excellence with business understanding to
                deliver solutions that truly make a difference for your
                organization.
              </p>

              <div className="space-y-4">
                {valuePropositions.map((prop, index) => (
                  <div
                    key={prop.title}
                    className="flex items-start gap-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {prop.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-6 text-center shadow-custom-md">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      10+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center shadow-custom-md">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      200+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Delivered
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center shadow-custom-md">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      98%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center shadow-custom-md">
                    <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
};

export default Home;
