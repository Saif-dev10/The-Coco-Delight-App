"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/academy", label: "Academy" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-site mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl tracking-wide text-cacao">
            Coco Delight
          </span>
          <span className="eyebrow text-[0.6rem] mt-1 hidden sm:block">
            Patisserie &amp; Academy
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);

            return (
              <li key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`text-[0.8rem] uppercase tracking-[0.12em] transition-colors duration-300 ${
                    active
                      ? "text-gold-dark"
                      : "text-cacao/80 hover:text-gold-dark"
                  }`}
                >
                  {link.label}

                  {/* underline (same design, just added logic) */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-gold-dark transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/login"
          className="hidden lg:inline-flex btn-primary !py-3 !px-6"
        >
          Order Now
        </Link>

        <button
          aria-label="Toggle navigation menu"
          className="lg:hidden text-cacao"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-cream border-t border-beige mt-4 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm uppercase tracking-[0.12em] ${
                      active ? "text-gold-dark" : "text-cacao/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center w-full"
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}