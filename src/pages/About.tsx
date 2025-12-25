import { Target, Eye, Users, Lightbulb, Rocket, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import CTASection from "@/components/CTASection";

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
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl p-8 md:p-10">
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
      <section className="section-padding bg-secondary/30">
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
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A proven process that ensures successful outcomes for every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                description:
                  "We dive deep into understanding your business, goals, and target audience.",
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Our designers create intuitive, beautiful interfaces that align with your brand.",
              },
              {
                step: "03",
                title: "Develop",
                description:
                  "Our engineers build robust, scalable solutions using modern technologies.",
              },
              {
                step: "04",
                title: "Deploy",
                description:
                  "We launch your solution and provide ongoing support for continued success.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative bg-card rounded-2xl p-6 shadow-custom-sm border border-border/50 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-5xl font-bold text-accent/10 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="relative">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
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
