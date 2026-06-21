import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      {/* ─── Hero / Intro ─── */}
      <section id="about" className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-5">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1400&auto=format&fit=crop"
                  alt="Pastry chef at Coco Delight piping decorations"
                  className="rounded-sm w-full h-72 object-cover shadow-soft"
                />
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=900&auto=format&fit=crop"
                  alt="Freshly baked croissants at the Coco Delight kitchen"
                  className="rounded-sm w-full h-72 object-cover mt-10 shadow-soft"
                />
              </div>
            </Reveal>

            <Reveal delay={150}>
              <span className="eyebrow mb-5 block">Our Story</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-7">
                Built on butter, patience,
                <br /> and an honest kitchen.
              </h2>
              <p className="text-cacao/75 leading-relaxed mb-5 font-light">
                Coco Delight began in a small home kitchen with one mixer, a
                borrowed oven, and a belief that pastry should taste like
                someone cared. Twelve years later, we run a working
                patisserie and training academy from our Lagos studio, but the
                belief hasn&apos;t changed.
              </p>
              <p className="text-cacao/75 leading-relaxed mb-9 font-light">
                Every cake we send out and every student we train passes
                through the same kitchen, under the same standards. We measure
                success by whether your guests ask for the recipe — or whether
                our graduates open their own bakeries with confidence.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-beige pt-8">
                <div>
                  <p className="font-serif text-3xl text-gold-dark mb-1">100%</p>
                  <p className="text-sm text-cacao/70">
                    Handcrafted, no shortcuts, no premixes
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-gold-dark mb-1">600+</p>
                  <p className="text-sm text-cacao/70">
                    Academy graduates now working professionally
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Mission & Values ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">What Drives Us</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
                A kitchen built on respect — for craft, people, and ingredients.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Reveal>
              <div className="bg-cream p-10 rounded-sm">
                <div className="w-12 h-12 bg-gold-dark/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">Craft First</h3>
                <p className="text-cacao/70 leading-relaxed font-light">
                  We still fold dough by hand, temper chocolate in small batches, and taste every buttercream before it leaves the bowl. The machine helps; the hand decides.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-cream p-10 rounded-sm">
                <div className="w-12 h-12 bg-gold-dark/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">People Over Profit</h3>
                <p className="text-cacao/70 leading-relaxed font-light">
                  Our team is trained, not exploited. Our students are mentored, not rushed. We hire locally, pay fairly, and treat the kitchen as a place of dignity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-cream p-10 rounded-sm">
                <div className="w-12 h-12 bg-gold-dark/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">Honest Pricing</h3>
                <p className="text-cacao/70 leading-relaxed font-light">
                  Good ingredients cost more, and we refuse to hide that. No hidden fees, no surprise charges. You pay for real butter, real chocolate, and real time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Meet the Founder ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000&auto=format&fit=crop"
                  alt="Founder of Coco Delight in the kitchen"
                  className="rounded-sm w-full h-[520px] object-cover shadow-soft"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-sm shadow-soft hidden lg:block">
                  <p className="font-serif text-2xl text-gold-dark">12+</p>
                  <p className="text-sm text-cacao/70">Years of pastry</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <span className="eyebrow mb-5 block">Meet the Founder</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-7">
                From home kitchen to a studio that trains the next generation.
              </h2>
              <p className="text-cacao/75 leading-relaxed mb-5 font-light">
                What started as weekend baking for friends quickly outgrew the family oven. Orders came in faster than flour could be sifted, and soon the dining table became a decorating station, the garage a cold room, and the living room a pickup point.
              </p>
              <p className="text-cacao/75 leading-relaxed mb-5 font-light">
                Today, the same hands that piped those first buttercream roses now lead a team of twelve and mentor hundreds of students a year. The belief remains simple: if you respect the process, the product will speak for itself.
              </p>
              <p className="text-cacao/75 leading-relaxed mb-8 font-light italic">
                &ldquo;I never set out to build an empire. I set out to make a cake that tasted like Sunday afternoon at my grandmother&apos;s house.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-gold-dark"></div>
                <p className="font-serif text-lg">Founder & Head Pastry Chef</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Studio Gallery ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <Reveal>
              <span className="eyebrow mb-4 block">Inside the Studio</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Where the work happens.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-cacao/70 max-w-md mt-4 md:mt-0 font-light">
                A working kitchen, a teaching floor, and a small space where ideas become cakes.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <Reveal>
              <div className="group overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop"
                  alt="Baking station with mixing bowls and ingredients"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="group overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop"
                  alt="Decorated layered cake on display"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="group overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop"
                  alt="Students in a pastry class"
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── What Makes Us Different ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">The Difference</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Why Coco Delight is not just another bakery.
              </h2>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-white p-10 rounded-sm flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gold-dark/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl text-gold-dark">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">One Kitchen, Two Purposes</h3>
                  <p className="text-cacao/70 leading-relaxed font-light">
                    Our working patisserie and training academy share the same space. Students learn on real orders, under real pressure, with real standards.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="bg-white p-10 rounded-sm flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gold-dark/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl text-gold-dark">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Ingredients You Can Pronounce</h3>
                  <p className="text-cacao/70 leading-relaxed font-light">
                    No premixes, no artificial flavours, no shortcuts. If we wouldn&apos;t serve it at our own table, we won&apos;t serve it at yours.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-white p-10 rounded-sm flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gold-dark/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl text-gold-dark">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Graduates Who Actually Bake</h3>
                  <p className="text-cacao/70 leading-relaxed font-light">
                    Our academy isn&apos;t a certificate factory. Over 600 alumni now run their own bakeries or work in professional kitchens across West Africa.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-white p-10 rounded-sm flex gap-6">
                <div className="shrink-0">
                  <div className="w-14 h-14 bg-gold-dark/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-xl text-gold-dark">04</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Made to Order, Not to Shelf</h3>
                  <p className="text-cacao/70 leading-relaxed font-light">
                    Every cake is baked fresh for its event. We don&apos;t freeze, we don&apos;t stockpile, and we don&apos;t compromise on freshness for convenience.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-6">
              Taste the difference honesty makes.
            </h2>
            <p className="text-cream/70 max-w-xl mx-auto mb-10 font-light text-lg">
              Whether you are planning a celebration or starting your own pastry journey, we would love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-dark text-cacao font-medium rounded-sm hover:bg-gold transition-colors"
              >
                Order a Cake
              </a>
              <a
                href="/academy"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors"
              >
                Join the Academy
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}