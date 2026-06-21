import { CheckCircle2, ArrowRight, Clock, Users, Award, BookOpen, Calendar, MapPin, Star, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROGRAMS = [
  {
    name: "Foundations of Baking",
    duration: "4 weeks · Weekends",
    level: "Beginner",
    price: "₦180,000",
    description: "Master the essentials: sponge cakes, buttercream, choux pastry, and basic bread. Perfect for hobbyists and home bakers ready to level up.",
    modules: ["Sponge & Butter Cakes", "Buttercream & Ganache", "Choux Pastry", "Yeast Breads", "Kitchen Hygiene & Safety"],
    nextIntake: "July 12, 2026",
  },
  {
    name: "Advanced Cake Artistry",
    duration: "6 weeks · Weekday Evenings",
    level: "Intermediate",
    price: "₦280,000",
    description: "Sculpted cakes, fondant work, sugar flowers, and tiered construction. For bakers who want to create show-stopping centrepieces.",
    modules: ["Fondant Covering & Modelling", "Sugar Flowers & Botanics", "Tiered Cake Construction", "Sculpted Cake Techniques", "Colour Theory & Design"],
    nextIntake: "August 3, 2026",
  },
  {
    name: "Professional Pastry Diploma",
    duration: "12 weeks · Full-Time",
    level: "Career Track",
    price: "₦650,000",
    description: "A comprehensive programme covering patisserie, viennoiserie, chocolate, and business skills. Designed for those entering the industry professionally.",
    modules: ["Advanced Patisserie", "Viennoiserie & Lamination", "Chocolate & Confectionery", "Menu Development", "Business Operations & Costing", "Internship Placement"],
    nextIntake: "September 7, 2026",
  },
];

const INCLUDES = [
  "Small class sizes, taught by senior chefs",
  "All ingredients and equipment provided",
  "Hands-on production in a real working kitchen",
  "Costing, hygiene, and small-business guidance",
  "Certificate of completion on graduation",
  "Post-graduation mentorship access",
];

const STATS = [
  { value: "600+", label: "Graduates Trained" },
  { value: "94%", label: "Employment Rate" },
  { value: "12", label: "Years of Teaching" },
  { value: "8:1", label: "Student-Chef Ratio" },
];

const INSTRUCTORS = [
  {
    name: "Chef Adeola Bakare",
    role: "Head Pastry Chef & Founder",
    bio: "12 years in professional pastry. Trained in Paris and Lagos. Specialises in French patisserie and wedding cake design.",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Chef Emeka Okafor",
    role: "Senior Instructor · Viennoiserie",
    bio: "Former head baker at a leading Lagos hotel. Expert in laminated doughs, sourdough, and artisan bread production.",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Chef Ngozi Eze",
    role: "Instructor · Sugar Art & Design",
    bio: "Specialist in sugar flowers, fondant modelling, and event cake architecture. 8 years teaching advanced decoration.",
    img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?q=80&w=600&auto=format&fit=crop",
  },
];

const TESTIMONIALS = [
  {
    quote: "I came in knowing how to bake a basic cake. I left with the confidence to quote, cost, and deliver a three-tier wedding cake. The mentorship didn't end when the course did.",
    name: "Chioma Nwosu",
    cohort: "Professional Diploma, 2024",
    now: "Owner, Chioma's Cakes, Lekki",
  },
  {
    quote: "The fact that we trained in a real working kitchen made all the difference. I understood pressure, timing, and quality control because I lived it every class.",
    name: "Tunde Balogun",
    cohort: "Advanced Cake Artistry, 2023",
    now: "Pastry Chef, Radisson Blu, Lagos",
  },
  {
    quote: "Weekend classes meant I could keep my job while learning. The instructors were patient, the ingredients were top-quality, and the community was incredible.",
    name: "Amina Yusuf",
    cohort: "Foundations of Baking, 2025",
    now: "Home Baker & Content Creator",
  },
];

const CLASSROOM_IMAGES = [
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop",
];

const FAQS = [
  {
    question: "Do I need any prior baking experience?",
    answer: "Only for the Intermediate and Career Track programmes. Our Foundations course is designed for complete beginners — we start with measuring and mixing and build from there.",
  },
  {
    question: "Are the ingredients and tools included in the fee?",
    answer: "Yes. All ingredients, aprons, and equipment are provided during class hours. You only need to bring a notebook and a willingness to learn.",
  },
  {
    question: "Can I pay in instalments?",
    answer: "Absolutely. We offer a 3-part payment plan: 40% deposit to secure your spot, 30% by week 2, and the final 30% by week 4. Contact us to arrange.",
  },
  {
    question: "Will I get a job after graduating?",
    answer: "While we cannot guarantee employment, 94% of our Career Track graduates find work within three months. We provide internship placements, CV support, and industry introductions.",
  },
  {
    question: "What happens if I miss a class?",
    answer: "Life happens. You can attend a catch-up session the following week or receive written materials and a one-on-one review with your instructor.",
  },
];

export default function Academy() {
  return (
    <>
      <Navbar />

      {/* ─── Hero / Intro ─── */}
      <section id="academy" className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="eyebrow mb-5 block">Coco Delight Academy</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-7">
                Learn the craft from
                <br /> the people who live it.
              </h2>
              <p className="text-cacao/75 leading-relaxed mb-9 font-light max-w-lg">
                Our academy runs inside the same kitchen that fulfills client
                orders, so students train on real techniques, real timelines,
                and real standards — not a simplified classroom version of the
                job.
              </p>

              <ul className="space-y-4 mb-10">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={19} className="text-gold-dark mt-0.5 flex-shrink-0" />
                    <span className="text-cacao/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-primary">
                Enroll in a Program <ArrowRight size={16} />
              </a>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-sm overflow-hidden mb-8 aspect-[16/10] shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200&auto=format&fit=crop"
                  alt="Students learning pastry techniques at Coco Delight Academy"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="divide-y divide-beige border border-beige rounded-sm overflow-hidden">
                {PROGRAMS.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between gap-4 p-6 bg-ivory hover:bg-beige/60 transition-colors duration-300"
                  >
                    <div>
                      <p className="font-serif text-lg mb-1">{p.name}</p>
                      <p className="text-xs text-cacao/60">{p.duration}</p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.08em] text-gold-dark border border-gold/50 rounded-full px-3 py-1 whitespace-nowrap">
                      {p.level}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="py-16 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-center">
                  <p className="font-serif text-4xl lg:text-5xl text-gold mb-2">{stat.value}</p>
                  <p className="text-cream/60 text-sm font-light">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Program Details ─── */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Programmes</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                Choose your path.
              </h2>
              <p className="text-cacao/70 font-light">
                Three structured programmes, each designed for a different goal and schedule.
              </p>
            </Reveal>
          </div>

          <div className="space-y-8">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.name} delay={i * 100}>
                <div className="bg-cream rounded-sm overflow-hidden">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="p-10 lg:border-r border-beige">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs uppercase tracking-[0.08em] text-gold-dark border border-gold/50 rounded-full px-3 py-1">
                          {program.level}
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl mb-3">{program.name}</h3>
                      <p className="text-cacao/70 text-sm leading-relaxed font-light mb-6">
                        {program.description}
                      </p>
                      <div className="space-y-2 text-sm text-cacao/60">
                        <div className="flex items-center gap-2">
                          <Clock size={14} className="text-gold-dark" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gold-dark" />
                          <span>Next intake: {program.nextIntake}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="text-gold-dark" />
                          <span>Coco Delight Studio, Lagos</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-10 lg:border-r border-beige">
                      <p className="text-xs uppercase tracking-[0.08em] text-cacao/50 mb-4">Curriculum</p>
                      <ul className="space-y-3">
                        {program.modules.map((mod) => (
                          <li key={mod} className="flex items-start gap-3 text-sm text-cacao/80">
                            <CheckCircle2 size={14} className="text-gold-dark mt-0.5 flex-shrink-0" />
                            <span>{mod}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-10 flex flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.08em] text-cacao/50 mb-2">Tuition</p>
                        <p className="font-serif text-3xl text-gold-dark mb-2">{program.price}</p>
                        <p className="text-xs text-cacao/50">3-part payment plan available</p>
                      </div>
                      <a
                        href="/contact"
                        className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 bg-cacao text-cream rounded-sm text-sm font-medium hover:bg-cacao/90 transition-colors"
                      >
                        Enroll Now
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instructors ─── */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">The Faculty</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                Learn from chefs who still work the kitchen.
              </h2>
              <p className="text-cacao/70 font-light">
                Our instructors are active pastry professionals. They teach what they do, not what they read.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {INSTRUCTORS.map((instructor, i) => (
              <Reveal key={instructor.name} delay={i * 100}>
                <div className="bg-white rounded-sm overflow-hidden group">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={instructor.img}
                      alt={instructor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl mb-1">{instructor.name}</h3>
                    <p className="text-gold-dark text-sm mb-4">{instructor.role}</p>
                    <p className="text-cacao/70 text-sm leading-relaxed font-light">
                      {instructor.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Student Success Stories ─── */}
      <section className="py-28 lg:py-36 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block text-gold">Graduate Stories</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                Where they started. Where they are now.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="bg-cacao/40 border border-cream/10 p-10 rounded-sm h-full flex flex-col">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-cream/80 leading-relaxed font-light mb-8 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif text-lg">{t.name}</p>
                    <p className="text-cream/50 text-sm mb-1">{t.cohort}</p>
                    <p className="text-gold text-sm">{t.now}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Classroom Environment ─── */}
      <section className="py-28 lg:py-36 bg-beige">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <Reveal>
              <span className="eyebrow mb-5 block">The Space</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
                A working kitchen, not a classroom.
              </h2>
              <p className="text-cacao/70 leading-relaxed font-light mb-6">
                Students work at the same stations where our client orders are prepared. The ovens, mixers, and tools are the same ones used by our professional team. There is no simulation — only real production.
              </p>
              <ul className="space-y-3">
                {[
                  "Commercial-grade equipment from day one",
                  "Maximum 8 students per instructor",
                  "Real client orders integrated into coursework",
                  "Dedicated cooling, decorating, and photography areas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cacao/80">
                    <CheckCircle2 size={14} className="text-gold-dark mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {CLASSROOM_IMAGES.map((src, i) => (
                  <div
                    key={src}
                    className={`overflow-hidden rounded-sm ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
                  >
                    <img
                      src={src}
                      alt="Coco Delight Academy classroom"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Questions</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Before you enrol.
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
              Your kitchen career starts here.
            </h2>
            <p className="text-cream/70 max-w-xl mx-auto mb-10 font-light text-lg">
              Spots are limited and fill quickly. Secure your place in the next cohort and begin training in a real working patisserie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-dark text-cacao font-medium rounded-sm hover:bg-gold transition-colors"
              >
                Enroll Now
                <ArrowRight size={16} />
              </a>
              <a
                href="https://wa.me/234XXXXXXXXXX"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors"
              >
                Ask a Question on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}