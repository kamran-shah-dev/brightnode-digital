import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "detailed";
}

const ServiceCard = ({ service, index = 0, variant = "default" }: ServiceCardProps) => {
  const Icon = service.icon;

  if (variant === "detailed") {
    return (
      <article className="group bg-card rounded-2xl p-8 shadow-custom-sm hover:shadow-custom-xl transition-all duration-300 border border-border/50 hover:border-accent/30">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
            <Icon size={28} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-5">
              {service.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-5">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits</h4>
                <ul className="space-y-1.5">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Use Cases</h4>
                <ul className="space-y-1.5">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
  <Link
    to="/services"
    className={cn(
      "group relative block rounded-2xl p-[2px] overflow-hidden",
      "opacity-0 animate-fade-up"
    )}
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Animated Border */}
    <span
      className="
        absolute inset-0
        bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        animate-border
      "
    />

    {/* White Card */}
    <div
      className="
        relative bg-card rounded-2xl
        p-6 md:p-8
        shadow-custom-sm group-hover:shadow-custom-xl
        transition-all duration-300
        hover:-translate-y-1
        border border-border/50
      "
    >
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent transition-all duration-300">
        <Icon size={24} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {service.description}
      </p>

      <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all duration-200">
        Learn more <ArrowRight size={16} />
      </span>
    </div>
  </Link>
);


export default ServiceCard;
