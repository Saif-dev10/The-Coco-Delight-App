import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle2,
  // Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+234 *** *** ****",
    href: "tel:+234*********",
    desc: "Best for urgent orders and same-day inquiries.",
    hours: "Mon–Sat, 8am–7pm",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+234 *** *** ****",
    href: "https://wa.me/2340000000000",
    desc: "Fast replies for quotes, photos, and menu requests.",
    hours: "Usually within 30 minutes",
  },
  {
    icon: Mail,
    label: "Email",
    value: "cocodelight@gmail.com",
    href: "mailto:cocodelight@gmail.com",
    desc: "Best for detailed event briefs and corporate inquiries.",
    hours: "Replied within 24 hours",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@cocodelightng",
    href: "https://instagram.com/cocodelightng",
    desc: "See our latest work and send a DM.",
    hours: "Stories daily, DMs open",
  },
];

const HOURS = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed — Academy & Studio" },
  { day: "Public Holidays", time: "Open for pre-orders only" },
];

const CLIENT_LOGOS = [
  "Radisson Blu",
  "GTBank",
  "Eko Hotel",
  "Access Bank",
  "The Wheatbaker",
  "Andela",
];

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* ─── Hero Banner (EDITED) ─── */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center overflow-hidden bg-cacao">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop"
            alt="Coco Delight kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-cacao/10" />
        <div className="relative z-10 text-center text-cream px-6 max-w-3xl">
          <Reveal>
            <span className="eyebrow mb-4 block text-gold">Let&apos;s Get Started</span>
            <h1 className="font-serif text-5xl lg:text-7xl leading-tight mb-6">
              Your event deserves dessert this good.
            </h1>
            <p className="text-cream/70 font-light text-lg max-w-xl mx-auto mb-10">
              Whether you are planning a celebration, placing a wholesale order, or starting your pastry journey — we are listening.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-cacao font-medium rounded-sm hover:bg-cream transition-colors"
              >
                Request a Quote
                <ArrowRight size={16} />
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

      {/* ─── Contact Methods ─── */}
      <section className="py-24 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Reveal>
              <span className="eyebrow mb-4 block">Reach Us</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-4">
                However you prefer to talk.
              </h2>
              <p className="text-cacao/70 font-light">
                Choose the channel that works for you. We respond to every inquiry personally.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTACT_METHODS.map((method, i) => {
              const Icon = method.icon;
              return (
                <Reveal key={method.label} delay={i * 80}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block bg-white p-8 rounded-sm h-full hover:shadow-soft transition-shadow duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gold-dark/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-dark/20 transition-colors">
                      <Icon size={22} className="text-gold-dark" strokeWidth={1.5} />
                    </div>
                    <p className="text-xs uppercase tracking-[0.08em] text-cacao/50 mb-2">{method.label}</p>
                    <p className="font-serif text-lg mb-3 group-hover:text-gold-dark transition-colors">{method.value}</p>
                    <p className="text-cacao/60 text-sm font-light mb-4">{method.desc}</p>
                    <p className="text-xs text-gold-dark flex items-center gap-1">
                      <Clock size={12} />
                      {method.hours}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Main Contact Form + Studio Info ─── */}
      <section id="contact" className="py-28 lg:py-36 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <Reveal>
              <span className="eyebrow mb-5 block">Get in Touch</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-8">
                Tell us about your occasion.
              </h2>
              <p className="text-cacao/75 leading-relaxed font-light mb-10 max-w-md">
                Share a few details about your event or the program
                you&apos;re interested in, and a member of our team will
                follow up with pricing, availability, and next steps.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-gold-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Studio &amp; Academy</p>
                    <p className="text-cacao/65 text-sm">
                      HK4, Road 8, Brick City Estate, Phase 1, Kubwa, Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-gold-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Call or WhatsApp</p>
                    <p className="text-cacao/65 text-sm">+234 000 000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-gold-dark mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-cacao/65 text-sm">cocodelight@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-10 pt-8 border-t border-beige">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={16} className="text-gold-dark" />
                  <p className="font-medium text-sm">Opening Hours</p>
                </div>
                <div className="space-y-2">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-cacao/60">{h.day}</span>
                      <span className="text-cacao font-medium">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-beige">
                <p className="font-medium text-sm mb-4">Follow Along</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/cocodelightng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cacao text-cream rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://facebook.com/cocodelightng"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-cacao text-cream rounded-full flex items-center justify-center hover:bg-gold-dark transition-colors"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} id="contact-form">
              <form className="bg-ivory border border-beige rounded-sm p-8 lg:p-10 shadow-soft space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full bg-transparent border-b border-cacao/25 py-2.5 focus:border-gold-dark outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      className="w-full bg-transparent border-b border-cacao/25 py-2.5 focus:border-gold-dark outline-none transition-colors"
                      placeholder="+234"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-cacao/25 py-2.5 focus:border-gold-dark outline-none transition-colors"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2">
                    I&apos;m Interested In
                  </label>
                  <select
                    id="interest"
                    className="w-full bg-transparent border-b border-cacao/25 py-2.5 focus:border-gold-dark outline-none transition-colors"
                  >
                    <option>Custom Cake Order</option>
                    <option>Dessert Catering</option>
                    <option>Event Desserts</option>
                    <option>Pastry Academy</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="event-date" className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2">
                    Event Date (if applicable)
                  </label>
                  <input
                    id="event-date"
                    type="date"
                    className="w-full bg-transparent border-b border-cacao/25 py-2.5 focus:border-gold-dark outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-[0.1em] text-cacao/60 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-cacao/25 py-2.5 focus:border-gold-dark outline-none transition-colors resize-none"
                    placeholder="Tell us about your event date, guest count, or program of interest"
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                  Send Message <Send size={16} />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Map Embed Placeholder ─── */}
      <section className="bg-beige">
        <div className="max-w-site mx-auto px-6 lg:px-10 py-4">
          <Reveal>
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden bg-cacao/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={40} className="text-gold-dark/30 mx-auto mb-4" />
                <p className="font-serif text-2xl text-cacao/40 mb-2">Map Loading</p>
                <p className="text-cacao/40 text-sm font-light">
                  Embed your Google Maps or Mapbox iframe here
                </p>
              </div>
              {/* Location embed: */}
              <iframe
                src="https://www.google.com/maps?q=HK4,+Road+8,+Brick+City+Estate,+Phase+1,+Kubwa,+Abuja,+FCT,+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Response Promise ─── */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow mb-5 block">Our Promise</span>
              <h2 className="font-serif text-4xl lg:text-5xl leading-tight mb-6">
                Every message gets a human reply.
              </h2>
              <p className="text-cacao/70 leading-relaxed font-light mb-8">
                We do not use chatbots or auto-responders for inquiries. When you reach out, a real person from our team reads your message and replies with care. Whether you are asking about a wedding cake or a career change, you deserve a thoughtful response.
              </p>
              <div className="space-y-4">
                {[
                  "WhatsApp inquiries replied within 30 minutes during business hours",
                  "Email responses within 24 hours, guaranteed",
                  "Phone calls answered personally — no hold music",
                  "Follow-up calls for complex orders to confirm every detail",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-gold-dark mt-0.5 flex-shrink-0" />
                    <span className="text-cacao/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="grid grid-cols-2 gap-5">
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop"
                  alt="Coco Delight team at work"
                  className="rounded-sm w-full h-64 object-cover shadow-soft"
                />
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=800&auto=format&fit=crop"
                  alt="Chef preparing order"
                  className="rounded-sm w-full h-64 object-cover mt-10 shadow-soft"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── Client Logos ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <Reveal className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.12em] text-cacao/40">
              Trusted by leading brands and venues across Lagos
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              {CLIENT_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="font-serif text-xl lg:text-2xl text-cacao/20 hover:text-cacao/40 transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-28 bg-cacao text-cream">
        <div className="max-w-site mx-auto px-6 lg:px-10 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl lg:text-6xl leading-tight mb-6">
              We are ready when you are.
            </h2>
            <p className="text-cream/70 max-w-xl mx-auto mb-10 font-light text-lg">
              No question is too small, no event is too large. Reach out and let us start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/2348021457732"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-cacao font-medium rounded-sm hover:bg-cream transition-colors"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+2348021457732"
                className="inline-flex items-center justify-center px-8 py-4 border border-cream/30 text-cream font-medium rounded-sm hover:bg-cream/10 transition-colors"
              >
                <Phone size={18} />
                Call Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}