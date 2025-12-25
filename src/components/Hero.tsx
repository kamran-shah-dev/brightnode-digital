import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8 opacity-0 animate-fade-up">
            <Sparkles size={16} />
            <span>Your Digital Transformation Partner</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
            Building Smart Digital{" "}
            <span className="text-gradient">Experiences</span>{" "}
            for Modern Businesses
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up animation-delay-200">
            We help startups, local businesses, and entrepreneurs create powerful 
            web solutions that drive growth and deliver results.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-border opacity-0 animate-fade-up animation-delay-400">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by innovative companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {["TechVenture", "StartupHub", "LocalFirst", "GrowthCo", "InnovateLab"].map(
                (company, i) => (
                  <span
                    key={company}
                    className="text-muted-foreground/50 font-semibold text-lg tracking-wide"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
