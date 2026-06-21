import {
  Cake,
  CalendarHeart,
  Utensils,
  GraduationCap,
  PartyPopper,
  Croissant,
  MessageCircle,
  Clock,
  Truck,
  Palette,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    icon: Cake,
    title: "Custom Cakes",
    desc: "Layered, sculpted, or minimal — designed around your event and built to slice as beautifully as it looks.",
  },
  {
    icon: Croissant,
    title: "Artisan Pastries",
    desc: "Croissants, tarts, and viennoiserie baked fresh daily for retail, gifting, and wholesale partners.",
  },
  {
    icon: Utensils,
    title: "Dessert Catering",
    desc: "Dessert tables and plated finales for weddings, corporate functions, and private dinners of any size.",
  },
  {
    icon: PartyPopper,
    title: "Event Desserts",
    desc: "Favours, grazing tables, and themed treats that match your event's colour palette and story.",
  },
  {
    icon: GraduationCap,
    title: "Pastry Training",
    desc: "Structured, hands-on classes for hobbyists and aspiring professionals, taught by working chefs.",
  },
  {
    icon: CalendarHeart,
    title: "Bridal & Milestone",
    desc: "Wedding cakes and milestone celebration desserts, planned with you from tasting to delivery.",
  },
];

const PROCESS = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Consultation",
    desc: "We listen. Tell us your vision, your guest count, your flavour preferences, and your budget. Every order starts with a conversation.",
  },
  {
    icon: Palette,
    step: "02",
    title: "Design & Quote",
    desc: "You receive a detailed sketch or mood board, a flavour profile, and a transparent quote with no hidden costs.",
  },
  {
    icon: Clock,
    step: "03",
    title: "Baking & Crafting",
    desc: "We bake fresh, never frozen. Your order is prepared in our Lagos studio by the same team you meet during consultation.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Delivery & Setup",
    desc: "Carefully transported and, where needed, assembled on-site. We don't leave until it looks exactly as promised.",
  },
];

const PRICING = [
  {
    tier: "Essential",
    price: "From ₦45,000",
    desc: "Perfect for intimate gatherings and weekday treats.",
    features: [
      "6-inch custom cake (serves 8–12)",
      "2 flavour layers",
      "Basic buttercream finish",
      "Standard box packaging",
      "48-hour lead time",
    ],
    cta: "Start an Order",
    popular: false,
  },
  {
    tier: "Signature",
    price: "From ₦120,000",
    desc: "Our most requested tier for celebrations that matter.",
    features: [
      "8–10 inch tiered cake (serves 25–40)",
      "Up to 4 flavour layers",
      "Fondant or textured buttercream",
      "Custom toppers & accents",
      "Premium gift packaging",
      "Priority scheduling",
    ],
    cta: "Start an Order",
    popular: true,
  },
  {
    tier: "Bespoke",
    price: "Custom Quote",
    desc: "For weddings, corporate events, and show-stopping centrepieces.",
    features: [
      "Multi-tier sculpted or architectural cakes",
      "Unlimited flavour combinations",
      "Hand-modelled sugar flowers",
      "On-site assembly & styling",
      "Dedicated event coordinator",
      "Tasting session included",
    ],
    cta: "Book a Consultation",
    popular: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The cake was the first thing every guest commented on. Not just how it looked — how it tasted. You could tell it was made with real ingredients and real care.",
    name: "Amara Okafor",
    event: "Wedding, Ikoyi",
  },
  {
    quote:
      "I trained with Coco Delight for six months and left with the confidence to open my own bakery. The mentorship didn't stop when the course ended.",
    name: "Tunde Balogun",
    event: "Academy Graduate, 2024",
  },
  {
    quote:
      "We ordered dessert catering for a 200-person corporate gala. The presentation was flawless, the flavours were memorable, and the team was professional from start to finish.",
    name: "Ngozi Eze",
    event: "Corporate Event, Victoria Island",
  },
];

const FAQS = [
  {
    question: "How far in advance should I place my order?",
    answer:
      "For standard cakes, we require at least 48 hours notice. For tiered wedding cakes and large event orders, we recommend booking 4–6 weeks ahead. During peak season (November–December), earlier is always better.",
  },
  {
    question: "Do you offer tastings before I commit?",
    answer:
      "Yes. Tasting sessions are included with all Bespoke tier bookings and available as a paid add-on for Signature orders. We schedule tastings at our Lagos studio by appointment.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "We offer eggless and nut-free options for most of our cake flavours. Please inform us of any allergies or dietary needs during your consultation so we can advise on the safest choices.",
  },
  {
    question: "Do you deliver outside Lagos?",
    answer:
      "We deliver across Lagos and neighbouring Ogun State. For deliveries outside this zone, please contact us to discuss logistics and packaging solutions.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Orders cancelled more than 7 days before the event receive a full refund minus a 10% processing fee. Cancellations within 7 days are eligible for a 50% refund or full credit toward a future order.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      {/* ─── Hero Services Grid ─── */}
      <section id="services" className="py-28 lg:py-36 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow mb-5 block text-gold">What We Offer</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Every service, finished with
              <br className="hidden sm:block" /> the same care.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/10 rounded-sm overflow-hidden">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={i * 80}>
                  <div className="bg-cacao p-9 h-full hover:bg-cacao/60 transition-colors duration-500 group">
                    <Icon
                      size={30}
                      className="text-gold mb-6 group-hover:-translate-y-1 transition-transform duration-300"
                      strokeWidth={1.4}
                    />
                    <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                    <p className="text-cream/65 text-sm leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Our Process</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                From first message to final slice.
              </h2>
              <p className="text-cacao/70 font-light">
                Transparent, personal, and never rushed. Here is how we work with you.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {PROCESS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 100}>
                  <div className="relative">
                    <div className="w-14 h-14 bg-gold-dark/10 rounded-full flex items-center justify-center mb-6">
                      <Icon size={22} className="text-gold-dark" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif text-5xl text-gold-dark/20 absolute top-0 right-0">
                      {step.step}
                    </span>
                    <h3 className="font-serif text-xl mb-2">{step.title}</h3>
                    <p className="text-cacao/70 text-sm leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Pricing Tiers ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Investment</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                Clear pricing. No surprises.
              </h2>
              <p className="text-cacao/70 font-light">
                Choose a starting point. Every tier can be customised to match your exact needs.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRICING.map((plan, i) => (
              <Reveal key={plan.tier} delay={i * 100}>
                <div
                  className={`relative p-10 rounded-sm h-full flex flex-col ${
                    plan.popular
                      ? "bg-cacao text-cream shadow-xl"
                      : "bg-cream text-cacao"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-dark text-cacao text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                  <p
                    className={`text-sm font-medium mb-2 ${
                      plan.popular ? "text-gold" : "text-gold-dark"
                    }`}
                  >
                    {plan.tier}
                  </p>
                  <p className="font-serif text-3xl mb-3">{plan.price}</p>
                  <p
                    className={`text-sm mb-8 font-light ${
                      plan.popular ? "text-cream/70" : "text-cacao/70"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <ul className="space-y-3 mb-10 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle2
                          size={16}
                          className={`shrink-0 mt-0.5 ${
                            plan.popular ? "text-gold" : "text-gold-dark"
                          }`}
                        />
                        <span
                          className={`font-light ${
                            plan.popular ? "text-cream/80" : "text-cacao/80"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-sm font-medium transition-colors ${
                      plan.popular
                        ? "bg-gold-dark text-cacao hover:bg-gold"
                        : "bg-cacao text-cream hover:bg-cacao/90"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Kind Words</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                What our clients say.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="bg-white p-10 rounded-sm h-full flex flex-col">
                  <svg
                    className="w-8 h-8 text-gold-dark/30 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-cacao/80 leading-relaxed font-light mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif text-lg">{t.name}</p>
                    <p className="text-sm text-cacao/60">{t.event}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Questions</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                What you might want to know.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group bg-cream rounded-sm">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-serif text-lg pr-4">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-gold-dark transition-transform group-open:rotate-180"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-cacao/70 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-6">
              Ready to talk details?
            </h2>
            <p className="text-cream/70 max-w-xl mx-auto mb-10 font-light text-lg">
              Whether you know exactly what you want or need help figuring it out, we are here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-dark text-cacao font-medium rounded-sm hover:bg-gold transition-colors"
              >
                Book a Consultation
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors"
              >
                Message on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}