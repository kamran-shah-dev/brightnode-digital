import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import {useState} from "react";

const Contact = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <Layout
      title="Contact Us | BrightNode Digital Solutions"
      description="Get in touch with BrightNode Digital Solutions. Schedule a free consultation and let's discuss how we can help your business grow."
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-3 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ready to transform your digital presence? Get in touch and let's
              discuss how we can help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-10">
                Have a project in mind? We'd love to hear from you. Send us a
                message and we'll respond within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <a
                      href="mailto:hello@brightnode.io"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      hello@brightnode-digital.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +92-XXXXXXXXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Brewry Road
                      <br />
                      Quetta 87500, BA, PK
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Business Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              

            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>


      <section className="section-padding">
        <div className="px-[120px]">
        <div className="relative rounded-2xl overflow-hidden aspect-video border border-border/50">
          <iframe
            title="Quetta Location Map"
              src="https://www.google.com/maps?q=Quetta,+Pakistan&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
          ></iframe>

          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
        </div>
      </section>
      

      {/* FAQ Teaser */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground mb-8">
              Have questions? Here are some common ones we hear from clients.
            </p>

            <div className="text-left space-y-3">
              {[
                {
                  q: "What's your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months.",
                },
                {
                  q: "Do you offer ongoing maintenance?",
                  a: "Yes! We offer flexible maintenance packages to keep your digital solutions secure, updated, and performing optimally.",
                },
                {
                  q: "What's included in the free consultation?",
                  a: "During the consultation, we'll discuss your project goals, provide initial recommendations, and give you a rough estimate of timeline and investment.",
                },
              ].map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border/50 shadow-custom-sm overflow-hidden"
                  >
                    {/* Question */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <h3 className="font-semibold text-foreground text-base md:text-lg">
                        {faq.q}
                      </h3>

                      <span
                        className={`ml-3 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden px-4 pb-4">
                        <p className="text-base text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>


          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
