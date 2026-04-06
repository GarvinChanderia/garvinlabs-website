import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/icon.svg" alt="GarvinLabs" width={32} height={32} />
              <span className="text-xl font-bold text-brand-dark">
                Garvin<span className="text-brand-green">Labs.</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Website development, n8n automation, software development, and AI consulting
              for businesses ready to grow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Website Development", href: "/services/website-development" },
                { label: "n8n Automation", href: "/services/n8n-automation" },
                { label: "Software Development", href: "/services/software-development" },
                { label: "AI Consulting", href: "/services/ai-consulting" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail size={16} className="text-brand-green shrink-0" />
                <a
                  href="mailto:chanderia.10.garvin@gmail.com"
                  className="hover:text-text-primary transition-colors"
                >
                  chanderia.10.garvin@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Phone size={16} className="text-brand-green shrink-0" />
                <a
                  href="https://wa.me/919356249535"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors"
                >
                  +91 93562 49535
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <MapPin size={16} className="text-brand-green shrink-0" />
                Pune, India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-glass-border text-center text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} GarvinLabs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
