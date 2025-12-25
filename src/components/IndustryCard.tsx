import { cn } from "@/lib/utils";
import type { Industry } from "@/data/industries";

interface IndustryCardProps {
  industry: Industry;
  index?: number;
}

const IndustryCard = ({ industry, index = 0 }: IndustryCardProps) => {
  const Icon = industry.icon;

  return (
    <article
      className={cn(
        "group bg-card rounded-2xl p-6 text-center shadow-custom-sm hover:shadow-custom-lg transition-all duration-300 border border-border/50 hover:border-accent/30",
        "opacity-0 animate-fade-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
        <Icon size={32} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
        {industry.name}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {industry.description}
      </p>
    </article>
  );
};

export default IndustryCard;
