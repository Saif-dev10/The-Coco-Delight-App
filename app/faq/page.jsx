"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQS = [
  {
    q: "How far in advance should I order a cake?",
    a: "We recommend 7 days for standard cakes and 4–6 weeks for weddings or large events.",
    category: "orders",
  },
  {
    q: "Can you accommodate allergies or dietary preferences?",
    a: "Yes. We offer egg-free, dairy-reduced, and low-sugar options on request.",
    category: "orders",
  },
  {
    q: "Do you deliver outside Lagos?",
    a: "Yes. We deliver across Lagos and nearby states for larger orders.",
    category: "orders",
  },
  {
    q: "Do I need baking experience for the academy?",
    a: "No. Beginners are welcome in all foundation-level courses.",
    category: "academy",
  },
  {
    q: "Is the academy certificate recognised?",
    a: "Yes. It reflects practical commercial kitchen training valued by employers.",
    category: "academy",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? FAQS : FAQS.filter((f) => f.category === filter);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative h-[40vh] min-h-[320px] flex items-center justify-center bg-cacao">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
            className="w-full h-full object-cover"
            alt="FAQ background"
          />
        </div>
        <div className="absolute inset-0 bg-cacao/70" />
        <div className="relative text-center text-cream px-6">
          <Reveal>
            <h1 className="font-serif text-5xl">FAQs</h1>
            <p className="text-cream/70 mt-3">
              Clear answers. No confusion.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-16 bg-cream">
        <div className="max-w-site mx-auto px-6">
          <div className="flex gap-3 justify-center mb-10">
            {["all", "orders", "academy"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-sm text-sm ${
                  filter === f
                    ? "bg-cacao text-cream"
                    : "bg-white text-cacao/70"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* FAQ LIST */}
          <div className="max-w-3xl mx-auto">
            {filtered.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div key={i} className="border-b border-cacao/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex justify-between py-5 text-left"
                  >
                    <span className="font-serif text-lg">{item.q}</span>
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all ${
                      isOpen ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-cacao/70 text-sm">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FALLBACK (MINIMAL ONLY) */}
      <section id="contact" className="py-20 bg-beige">
        <div className="max-w-2xl mx-auto text-center px-6">
          <Reveal>
            <h2 className="font-serif text-3xl mb-4">
              Still need help?
            </h2>
            <p className="text-cacao/70 mb-8">
              Reach us directly if your question isn’t covered above.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348034567890"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-cacao text-cream rounded-sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>

              <a
                href="mailto:hello@cocodelight.ng"
                className="px-6 py-3 border border-cacao text-cacao rounded-sm"
              >
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-cacao text-cream text-center">
        <Reveal>
          <h2 className="font-serif text-4xl mb-4">
            Ready to order?
          </h2>
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-dark text-cacao rounded-sm"
          >
            View Menu <ArrowRight size={16} />
          </a>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}