  "use client";

import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-cacao"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1612203985729-442f463387e6?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cacao/95 via-cacao/85 to-cacao" />

      <div className="relative z-10 max-w-site mx-auto px-6 lg:px-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fadeUp" style={{ animationDelay: "0.1s" }}>
            <span className="eyebrow text-gold mb-6 block">
              Lagos &middot; Est. 2014 &middot; Patisserie &amp; Academy
            </span>
            <h1 className="font-serif text-cream text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.05] mb-7">
              Pastry, made to be
              <span className="block italic text-gold">remembered.</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-xl mb-10 leading-relaxed font-light">
              We hand-craft cakes and desserts for the moments that matter,
              and we teach the techniques behind them. Two decades of
              recipes, one standard of quality — yours.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-14">
              <a href="#contact" className="btn-primary">
                Plan Your Order <ArrowRight size={16} />
              </a>
              <a href="#academy" className="btn-outline-light">
                Explore the Academy
              </a>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&auto=format&fit=crop",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-cacao object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 text-gold mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-cream/70 text-xs">
                  Trusted by 3,200+ clients &amp; 600+ graduates
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative hidden lg:block animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1200&auto=format&fit=crop"
                alt="Signature gold-leaf layered cake by Coco Delight"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-10 bg-cream rounded-sm shadow-card px-7 py-5 max-w-[230px]">
              <p className="font-serif text-3xl text-cacao mb-1">12+</p>
              <p className="text-xs uppercase tracking-[0.1em] text-cacao/70">
                Years crafting pastries &amp; pastry chefs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
