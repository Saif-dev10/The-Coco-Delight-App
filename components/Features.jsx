import { ShieldCheck, Leaf, Clock, Award } from "lucide-react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    icon: Leaf,
    title: "Real Ingredients",
    desc: "Cultured butter, single-origin chocolate, and fruit purées — never artificial flavouring or shortcuts.",
  },
  {
    icon: ShieldCheck,
    title: "Food-Safety Certified",
    desc: "HACCP-aligned kitchen practices and daily hygiene audits, from prep table to delivery van.",
  },
  {
    icon: Clock,
    title: "Reliable Timelines",
    desc: "We confirm production schedules in writing and build in buffer time, so your event date is never a risk.",
  },
  {
    icon: Award,
    title: "Chef-Led Quality",
    desc: "Every order is reviewed by a senior chef before it leaves the kitchen — no exceptions, no rush jobs.",
  },
];

const STATS = [
  { value: "12+", label: "Years in business" },
  { value: "3,200+", label: "Events served" },
  { value: "600+", label: "Academy graduates" },
  { value: "98%", label: "Clients who reorder" },
];

export default function Features() {
  return (
    <section className="py-28 lg:py-36 bg-cream">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <Reveal className="max-w-2xl mb-16">
          <span className="eyebrow mb-5 block">Why Choose Coco Delight</span>
          <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
            Quality you can verify,
            <br className="hidden sm:block" /> not just promise.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="border-t-2 border-gold pt-6">
                  <Icon size={28} className="text-cacao mb-5" strokeWidth={1.4} />
                  <h3 className="font-serif text-xl mb-2">{f.title}</h3>
                  <p className="text-cacao/70 text-sm leading-relaxed font-light">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="bg-cacao rounded-sm grid grid-cols-2 lg:grid-cols-4 divide-x divide-cream/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center py-12 px-4">
                <p className="font-serif text-4xl lg:text-5xl text-gold mb-2">
                  {stat.value}
                </p>
                <p className="text-cream/65 text-xs uppercase tracking-[0.12em]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
