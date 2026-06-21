import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PRODUCTS = [
  {
    name: "Gold Leaf Layer Cake",
    price: "From ₦45,000",
    img: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Classic Butter Croissant",
    price: "₦2,500 each",
    img: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Seasonal Fruit Tart",
    price: "From ₦12,000",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Macaron Gift Box",
    price: "₦18,000 / box of 12",
    img: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=900&auto=format&fit=crop",
  },
];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1464195244916-405fa0a82545?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1426869981800-95ebf51ce900?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&w=1400&auto=format&fit=crop",
];

const BEHIND_THE_SCENES = [
  {
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=900&auto=format&fit=crop",
    title: "Morning Prep",
    desc: "Dough laminated before sunrise. Butter folded, rested, folded again.",
  },
  {
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=900&auto=format&fit=crop",
    title: "Piping Station",
    desc: "Buttercream roses, ruffles, and hand-piped details on every custom order.",
  },
  {
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop",
    title: "Student Practice",
    desc: "Academy students learning tempering, folding, and finishing under supervision.",
  },
  {
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
    title: "Quality Check",
    desc: "Every item tasted, inspected, and approved before it leaves the kitchen.",
  },
];

const CLIENT_CELEBRATIONS = [
  {
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?q=80&w=900&auto=format&fit=crop",
    event: "Wedding Reception",
    location: "Lagos Island",
    cake: "Four-tier fondant with sugar roses",
  },
  {
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=900&auto=format&fit=crop",
    event: "Corporate Gala",
    location: "Victoria Island",
    cake: "Dessert table for 200 guests",
  },
  {
    img: "https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?q=80&w=900&auto=format&fit=crop",
    event: "Milestone Birthday",
    location: "Ikoyi",
    cake: "Sculpted champagne bottle cake",
  },
];

const SEASONAL_SPECIALS = [
  {
    name: "Valentine's Red Velvet Box",
    season: "February",
    img: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&w=900&auto=format&fit=crop",
    price: "₦25,000",
    available: true,
  },
  {
    name: "Easter Hot Cross Buns",
    season: "April",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop",
    price: "₦8,000 / dozen",
    available: false,
  },
  {
    name: "Christmas Yule Log",
    season: "December",
    img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=900&auto=format&fit=crop",
    price: "From ₦35,000",
    available: false,
  },
];

const ACADEMY_SHOWCASE = [
  {
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=900&auto=format&fit=crop",
    caption: "Buttercream techniques module",
  },
  {
    img: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=900&auto=format&fit=crop",
    caption: "Chocolate tempering masterclass",
  },
  {
    img: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=900&auto=format&fit=crop",
    caption: "Final assessment presentation",
  },
  {
    img: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?q=80&w=900&auto=format&fit=crop",
    caption: "Graduation showcase event",
  },
];

export default function Gallery() {
  return (
    <>
      <Navbar />

      {/* ─── Hero Banner ─── */}
      <section className="relative h-[60vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2000&auto=format&fit=crop"
          alt="Coco Delight pastry display"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-cacao/60" />
        <div className="relative z-10 text-center text-cream px-6 max-w-3xl">
          <Reveal>
            <span className="eyebrow mb-4 block text-gold">The Gallery</span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-tight mb-6">
              Where craft meets celebration.
            </h1>
            <p className="text-cream/80 font-light text-lg max-w-xl mx-auto">
              A visual archive of pastries, cakes, and moments we have had the honour to be part of.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="eyebrow mb-5 block">Signature Selections</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Featured pastries &amp;
                <br className="hidden sm:block" /> celebration cakes.
              </h2>
            </div>
            <a href="#contact" className="btn-outline">
              Request Full Menu
            </a>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="group">
                  <div className="overflow-hidden rounded-sm mb-5 aspect-[4/5] bg-beige">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl mb-1">{p.name}</h3>
                  <p className="text-gold-dark text-sm">{p.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-28 lg:py-36 bg-beige">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow mb-5 block">From Our Kitchen</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              A closer look at the craft.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px] sm:auto-rows-[180px] lg:auto-rows-[220px]">
            {GALLERY_IMAGES.map((src, i) => {
              const isLarge = i === 0 || i === 4;

              return (
                <Reveal
                  key={src}
                  delay={i * 60}
                  className={`overflow-hidden rounded-sm relative ${
                    isLarge ? "row-span-2 col-span-2" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt="Coco Delight pastry detail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Behind the Scenes ─── */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <Reveal>
              <span className="eyebrow mb-5 block">The Process</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                What happens before the first bite.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-cacao/70 leading-relaxed font-light text-lg">
                Every pastry that leaves our kitchen has passed through hands, not just machines. Here is a glimpse of the discipline behind the delight.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEHIND_THE_SCENES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group">
                  <div className="overflow-hidden rounded-sm mb-5 aspect-[4/5] bg-beige">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                  <p className="text-cacao/60 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Client Celebrations ─── */}
      <section className="py-28 lg:py-36 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="max-w-2xl mb-16">
            <span className="eyebrow mb-5 block text-gold">Celebrations</span>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Moments we were honoured to sweeten.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {CLIENT_CELEBRATIONS.map((event, i) => (
              <Reveal key={event.event} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-sm">
                  <div className="aspect-[3/4]">
                    <img
                      src={event.img}
                      alt={event.event}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cacao/90 via-cacao/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-gold text-sm font-medium mb-1">{event.location}</p>
                    <h3 className="font-serif text-2xl mb-2">{event.event}</h3>
                    <p className="text-cream/70 text-sm font-light">{event.cake}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Seasonal Specials ─── */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-5 block">Limited Editions</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                Seasonal specials.
              </h2>
              <p className="text-cacao/70 font-light">
                Available only during their season. Pre-orders open four weeks ahead.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SEASONAL_SPECIALS.map((item, i) => (
              <Reveal key={item.name} delay={i * 100}>
                <div className="bg-cream rounded-sm overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gold-dark text-sm font-medium">
                        {item.season}
                      </span>
                      <span
                        className={`text-xs px-3 py-1 rounded-full ${
                          item.available
                            ? "bg-green-100 text-green-700"
                            : "bg-cacao/10 text-cacao/50"
                        }`}
                      >
                        {item.available ? "Available Now" : "Coming Soon"}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl mb-2">{item.name}</h3>
                    <p className="text-cacao/60 text-sm font-light">{item.price}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Academy Showcase ─── */}
      <section className="py-28 lg:py-36 bg-beige">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <Reveal>
              <span className="eyebrow mb-5 block">The Academy</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
                Where students become pastry chefs.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-cacao/70 leading-relaxed font-light text-lg">
                Our training floor is an extension of our kitchen. Students work on real orders, under real pressure, with real mentors. Here is what that looks like.
              </p>
              <a
                href="/academy"
                className="inline-flex items-center gap-2 mt-6 text-gold-dark font-medium hover:text-gold transition-colors"
              >
                Explore the Academy
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACADEMY_SHOWCASE.map((item, i) => (
              <Reveal key={item.caption} delay={i * 80}>
                <div className="group relative overflow-hidden rounded-sm">
                  <div className="aspect-square">
                    <img
                      src={item.img}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-cacao/0 group-hover:bg-cacao/40 transition-colors duration-500 flex items-end">
                    <p className="text-cream p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 font-light text-sm">
                      {item.caption}
                    </p>
                  </div>
                </div>
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
              See something you like?
            </h2>
            <p className="text-cream/70 max-w-xl mx-auto mb-10 font-light text-lg">
              Every item in this gallery can be customised, scaled, or reimagined for your event. Let us talk about what you have in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold-dark text-cacao font-medium rounded-sm hover:bg-gold transition-colors"
              >
                Start a Custom Order
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors"
              >
                View All Services
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}