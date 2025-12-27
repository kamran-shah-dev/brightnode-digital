import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="BrightNode Digital Solutions Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">BrightNode</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">
                  Digital Solutions
                </span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Building smart digital experiences for modern businesses. Your trusted partner in digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@brightnode.io"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
              >
                <Mail size={16} />
                hello@brightnode.io
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200"
              >
                <Phone size={16} />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Innovation Drive<br />Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-primary-foreground/60">
              Mon - Fri: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} BrightNode Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-primary-foreground/60 hover:text-accent transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
