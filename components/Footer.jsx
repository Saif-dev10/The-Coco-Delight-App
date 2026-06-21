import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const LINK_GROUPS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Academy",
    links: [
      { label: "Foundations of Baking", href: "/academy" },
      { label: "Advanced Cake Artistry", href: "/academy" },
      { label: "Professional Diploma", href: "/academy" },
      { label: "Student Stories", href: "/academy" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Delivery Areas", href: "/contact" },
      { label: "Order Policy", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/80 pt-20 pb-10">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-cream/10">
          <div className="lg:col-span-4">
            <span className="font-serif text-2xl text-cream block mb-4">
              Coco Delight
            </span>
            <p className="text-sm leading-relaxed font-light mb-6 max-w-xs">
              Handcrafted pastries and a working academy, built around one
              standard of quality from our Lagos studio.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Coco Delight social media"
                  className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-charcoal transition-colors duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-xs uppercase tracking-[0.12em] text-gold mb-5">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-cream/65 hover:text-cream transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.12em] text-gold mb-5">
              Visit Us
            </p>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 flex-shrink-0 text-cream/50" />
              <p className="text-sm text-cream/65">
                HK4, Road 8, Brick City Estate, Phase 1, Kubwa, Abuja, FCT, Nigeria
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={16} className="mt-0.5 flex-shrink-0 text-cream/50" />
              <p className="text-sm text-cream/65">+234 000 000 0000</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={16} className="mt-0.5 flex-shrink-0 text-cream/50" />
              <p className="text-sm text-cream/65">cocodelight@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-cream/45">
          <p>&copy; {new Date().getFullYear()} Coco Delight Patisserie &amp; Academy. All rights reserved.</p>
          <p>Crafted with care in Lagos, Nigeria.</p>
        </div>
      </div>
    </footer>
  );
}
