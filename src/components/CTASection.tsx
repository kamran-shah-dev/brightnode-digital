import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryLink?: string;
  secondaryCTA?: string;
  secondaryLink?: string;
}

const CTASection = ({
  title = "Ready to Transform Your Digital Presence?",
  description = "Let's discuss how we can help your business grow with a custom digital solution tailored to your needs.",
  primaryCTA = "Start Your Project",
  primaryLink = "/contact",
  secondaryCTA = "View Our Work",
  secondaryLink = "/services",
}: CTASectionProps) => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl -z-10" />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6">
            <Zap size={16} />
            <span>Let's Build Something Great</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="xl"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl hover:shadow-accent/20"
            >
              <Link to={primaryLink}>
                {primaryCTA}
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              <Link to={secondaryLink}>{secondaryCTA}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
