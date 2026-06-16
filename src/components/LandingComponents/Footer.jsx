
import { MapPin, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#blog' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
    ],
    support: [
      { label: 'Help Center', href: '#help' },
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQs', href: '#faq' },
      { label: 'Community', href: '#community' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookies', href: '#cookies' },
      { label: 'Security', href: '#security' },
    ],
  };

  const socials = [
    { icon: Mail, href: '#facebook', label: 'Facebook' },
    { icon: Mail, href: '#twitter', label: 'Twitter' },
    { icon: Mail, href: '#instagram', label: 'Instagram' },
    { icon: Mail, href: '#linkedin', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold">TripHub</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your ultimate travel companion for planning unforgettable adventures.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:hello@traphub.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@triphub.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-primary-foreground/70 text-sm text-center md:text-left">
            &copy; {currentYear} TripHub. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
