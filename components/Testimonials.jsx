import { Quote } from "lucide-react";
import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    quote:
      "Our wedding cake was the most photographed thing at the reception. It tasted even better than it looked, and the team delivered three hours early so we never worried about timing.",
    name: "Amara O.",
    role: "Bride, Lekki",
  },
  {
    quote:
      "We've used Coco Delight for every corporate event in the last two years. The dessert table is always the first thing to disappear, and the ordering process is painless.",
    name: "Tunde A.",
    role: "Events Lead, Marbleridge Co.",
  },
  {
    quote:
      "I told them my daughter loves lavender and honey, and they built an entire birthday cake around it. That kind of listening is rare.",
    name: "Folake I.",
    role: "Parent & Repeat Client",
  },
];

const STUDENT_STORIES = [
  {
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?q=80&w=600&auto=format&fit=crop",
    name: "Chidinma E.",
    outcome: "Opened Whisk & Co. Bakery, 2023",
    quote:
      "The academy didn't just teach me recipes — it taught me costing, sourcing, and how to run a kitchen under pressure.",
  },
  {
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop",
    name: "Bayo S.",
    outcome: "Head Pastry Chef, Lagoon Hotel",
    quote:
      "I walked in knowing how to bake at home. I walked out knowing how to bake for two hundred covers a night.",
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    name: "Ngozi P.",
    outcome: "Freelance Cake Designer",
    quote:
      "The mentorship after graduation mattered as much as the classes. They still answer my questions today.",
  },
];

export default function Testimonials() {
  return (
    <>
      <section className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow mb-5 block">Client Stories</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Words from the people we&apos;ve served.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="bg-ivory border border-beige rounded-sm p-8 h-full flex flex-col shadow-soft">
                  <Quote className="text-gold mb-5" size={26} strokeWidth={1.4} />
                  <p className="text-cacao/80 leading-relaxed font-light mb-7 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif text-lg">{t.name}</p>
                    <p className="text-xs uppercase tracking-[0.1em] text-cacao/50">
                      {t.role}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow text-gold mb-5 block">Academy Outcomes</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Student success stories.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-8">
            {STUDENT_STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 100}>
                <div className="text-center sm:text-left">
                  <img
                    src={s.img}
                    alt={`${s.name}, Coco Delight Academy graduate`}
                    className="w-20 h-20 rounded-full object-cover mx-auto sm:mx-0 mb-5 border-2 border-gold"
                  />
                  <p className="text-cream/75 leading-relaxed font-light mb-4 text-sm">
                    &ldquo;{s.quote}&rdquo;
                  </p>
                  <p className="font-serif text-lg">{s.name}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-gold/80">
                    {s.outcome}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
