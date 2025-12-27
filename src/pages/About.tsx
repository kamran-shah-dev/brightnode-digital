import { Target, Eye, Users, Lightbulb, Rocket, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

const processSteps = [
  {
    title: "Discover",
    description: "Understanding goals, users, and requirements.",
    color: "bg-accent",
  },
  {
    title: "Design",
    description: "Crafting intuitive, elegant interfaces.",
    color: "bg-cyan-500",
  },
  {
    title: "Develop",
    description: "Building scalable, secure solutions.",
    color: "bg-blue-500",
  },
  {
    title: "Deploy",
    description: "Launching, monitoring, and optimizing.",
    color: "bg-emerald-500",
  },
];



const About = () => {
  return (
    <Layout
      title="About Us | BrightNode Digital Solutions"
      description="Learn about BrightNode Digital Solutions - our mission, vision, and the team behind smart digital experiences for modern businesses."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              We're BrightNode Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A passionate team of designers, developers, and strategists
              dedicated to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Digital Excellence Since 2014
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  BrightNode Digital Solutions was founded with a simple yet
                  powerful vision: to make professional digital solutions
                  accessible to businesses of all sizes.
                </p>
                <p>
                  Over the past decade, we've partnered with startups, local
                  businesses, and growing enterprises to transform their digital
                  presence. Our approach combines cutting-edge technology with
                  strategic thinking to deliver results that matter.
                </p>
                <p>
                  Today, we're proud to be a trusted digital partner for over
                  200 clients across various industries, from retail and
                  healthcare to education and tech startups.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-8 md:p-10">
              <div className="grid gap-6">
                <div className="bg-card rounded-xl p-6 shadow-custom-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Users size={20} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">50+ Team Members</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Talented professionals across design, development, and strategy.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-custom-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Rocket size={20} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">200+ Projects</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Successfully delivered digital solutions for clients worldwide.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 shadow-custom-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Heart size={20} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">98% Satisfaction</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Client satisfaction rate based on project completion surveys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-secondary/30 bg-gradient-to-br from-accent/20 to-primary/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-custom-md border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, enhance customer experiences, and create lasting
                competitive advantages in an ever-evolving marketplace.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-custom-md border border-border/50">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted digital partner for ambitious businesses,
                known for our commitment to excellence, innovation, and the
                measurable impact we create for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A structured development process that ensures clarity, quality, and success.
            </p>
          </div>

          {/* Process Layout */}
          <div className="relative flex items-end justify-center gap-12">

            {/* Step 01 */}
            <div className="relative flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-accent text-accent-foreground shadow-xl flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Discover</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  Understanding your business goals, audience, and requirements.
                </p>
              </div>
              <div className="w-1 h-16 bg-accent/40 mt-4" />
            </div>

            {/* Center Steps */}
            <div className="relative flex flex-col items-center">

              {/* Top Steps */}
              <div className="flex items-center gap-16 mb-10">
                <div className="w-44 h-44 rounded-full bg-primary text-primary-foreground shadow-xl flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Design</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Crafting intuitive, elegant user experiences.
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center opacity-70">
                  <div className="w-12 h-1 bg-accent" />
                  <div className="w-3 h-3 border-t-[3px] border-r-[3px] border-accent rotate-45 -ml-1" />
                </div>


                <div className="w-44 h-44 rounded-full bg-accent/80 text-accent-foreground shadow-xl flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-lg font-bold mb-2">Develop</h3>
                  <p className="text-sm leading-relaxed opacity-90">
                    Building scalable, secure, high-performance solutions.
                  </p>
                </div>
              </div>

              {/* Arc */}
              <div className="relative">
                <svg width="320" height="100" viewBox="0 0 320 100">
                  <path
                    d="M 20 95 Q 160 -5 300 95"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="24"
                    strokeLinecap="round"
                    opacity="0.35"
                  />
                </svg>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card rounded-xl shadow-lg px-8 py-4 border border-border">
                  <p className="text-sm font-semibold text-foreground text-center">
                    Steps of the Development Process
                  </p>
                </div>
              </div>
            </div>

            {/* Step 04 */}
            <div className="relative flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-primary/90 text-primary-foreground shadow-xl flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Deploy</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  Launching, monitoring, and supporting your product.
                </p>
              </div>
              <div className="w-1 h-16 bg-primary/40 mt-4" />
            </div>

          </div>
        </div>
      </section>




      {/* Values */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              What Guides Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We stay ahead of the curve, embracing new technologies and creative solutions.",
              },
              {
                icon: Users,
                title: "Collaboration",
                description:
                  "We work closely with clients as true partners, not just service providers.",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description:
                  "Every decision we make is focused on delivering measurable outcomes.",
              },
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "We're honest, transparent, and committed to doing what's right.",
              },
              {
                icon: Rocket,
                title: "Excellence",
                description:
                  "We hold ourselves to the highest standards in everything we do.",
              },
              {
                icon: Eye,
                title: "Transparency",
                description:
                  "Clear communication and visibility throughout every project phase.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-custom-sm border border-border/50 text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Want to Work With Us?"
        description="Let's discuss how we can bring our expertise to your next project."
        primaryCTA="Start a Conversation"
        secondaryCTA="View Our Services"
      />
    </Layout>
  );
};

export default About;
