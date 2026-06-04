"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import GalleryStrip from "@/components/GalleryStrip";

const featuredItems = [
  {
    name: "Lavender Oat Latte",
    description: "House-made lavender syrup, oat milk, single origin espresso",
    price: "₹280",
    image: "/images/matcha-latte.png",
  },
  {
    name: "Sourdough Avocado Toast",
    description: "Smashed avocado, poached egg, chilli flakes, microgreens",
    price: "₹350",
    image: "/images/avocado-toast.png",
  },
  {
    name: "Mushroom Risotto",
    description: "Arborio rice, wild mushrooms, parmesan, truffle oil",
    price: "₹480",
    image: "/images/pasta-dish.png",
  },
  {
    name: "Honey Cardamom Cake",
    description: "Layered sponge, cardamom cream, seasonal berries",
    price: "₹320",
    image: "/images/dessert-cake.png",
  },
];

const testimonials = [
  {
    name: "Priya Kulkarni",
    text: "This place has become my weekend ritual. The coffee is incredible, but it's the quiet warmth of the space that keeps me coming back. Pune needed this.",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    text: "I brought my partner here for our anniversary brunch. The avocado toast is the best in Koregaon Park, and the service feels genuinely personal.",
    stars: 5,
  },
  {
    name: "Sneha Deshpande",
    text: "As someone who works remotely, I've tried every cafe in Pune. Brew & Blossom is the only one where I don't feel rushed. The matcha is perfection.",
    stars: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative h-[92vh] min-h-[600px] overflow-hidden" id="hero">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-cafe.png"
            alt="Brew & Blossom cafe interior with warm morning light"
            fill
            className="object-cover ken-burns"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-espresso/30" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] max-w-3xl mb-6"
          >
            Where Every Morning<br />
            Starts With Intention.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-cream/80 text-base md:text-lg max-w-lg mb-8 font-light"
          >
            Specialty coffee & seasonal plates in the heart of Koregaon Park, Pune.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="/menu"
              className="text-link text-cream/90 hover:text-cream text-sm uppercase tracking-widest"
              id="hero-cta"
            >
              See Our Menu <span className="text-lg">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO STRIP ─── */}
      <section className="py-16 md:py-20 border-b border-cream-dark" id="intro-strip">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm">
                  <Image src="/images/icon-beans.png" alt="Ethically Sourced Beans" fill className="object-cover" />
                </div>
                <p className="text-sm tracking-wide text-espresso/70">
                  Ethically Sourced Beans
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm">
                  <Image src="/images/icon-kitchen.png" alt="Seasonal Kitchen Menu" fill className="object-cover" />
                </div>
                <p className="text-sm tracking-wide text-espresso/70">
                  Seasonal Kitchen Menu
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-sm">
                  <Image src="/images/icon-time.png" alt="Open Daily" fill className="object-cover" />
                </div>
                <p className="text-sm tracking-wide text-espresso/70">
                  Open 8AM – 10PM Daily
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ABOUT SNAPSHOT ─── */}
      <section className="py-20 md:py-28" id="about-snapshot">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden">
                <Image
                  src="/images/cafe-corner.png"
                  alt="A cozy corner at Brew & Blossom"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="max-w-md">
                <h2 className="font-serif italic text-3xl md:text-4xl text-espresso mb-8">
                  A Place for Unhurried Mornings
                </h2>
                <p className="text-espresso/70 leading-relaxed mb-8">
                  We started Brew & Blossom in 2019, in a quiet lane off North Main
                  Road in Koregaon Park. The idea was simple — create a space where
                  people could slow down. Where a cup of coffee wasn't just caffeine,
                  but a small ritual. Where the food was seasonal, the music was soft,
                  and nobody rushed you out the door.
                </p>

                <blockquote className="text-left text-xl md:text-2xl text-espresso-light mb-8 py-6 border-l-2 border-dusty-rose pl-6">
                  "We believe a good cup of coffee is the beginning of a good conversation."
                </blockquote>

                <Link
                  href="/about"
                  className="text-link text-espresso text-sm uppercase tracking-widest"
                  id="about-cta"
                >
                  Our Story <span className="text-lg">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── MENU PREVIEW ─── */}
      <section className="py-20 md:py-28 bg-cream-dark/30" id="menu-preview">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="font-serif italic text-3xl md:text-4xl text-espresso mb-4">
                From Our Kitchen
              </h2>
              <p className="text-espresso/60 text-sm">
                A few things we're especially proud of right now.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {featuredItems.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.1}>
                <div className={`group ${i % 3 === 0 ? "md:row-span-1" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg text-espresso mb-1">
                        {item.name}
                      </h3>
                      <p className="text-espresso/50 text-sm">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-espresso/50 text-sm whitespace-nowrap pt-0.5">
                      {item.price}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-14">
              <Link
                href="/menu"
                className="text-link text-espresso text-sm uppercase tracking-widest justify-center"
                id="menu-preview-cta"
              >
                Explore Full Menu <span className="text-lg">→</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── ATMOSPHERE / GALLERY ─── */}
      <section className="py-20 md:py-28" id="gallery">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-espresso/50 mb-8">
              A Place Worth Lingering In
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <GalleryStrip />
          </FadeIn>
        </div>
      </section>

      {/* ─── RESERVATIONS CTA ─── */}
      <section className="py-24 md:py-32" id="reservations-cta">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-serif italic text-3xl md:text-5xl text-espresso mb-6">
              Join Us For Something Unhurried.
            </h2>
            <p className="text-espresso/60 mb-10">
              Reservations recommended on weekends.
            </p>
            <Link
              href="/reservations"
              className="text-link text-espresso text-sm uppercase tracking-widest justify-center"
              id="reservations-cta-link"
            >
              Book a Table <span className="text-lg">→</span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-20 md:py-28 border-t border-cream-dark" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <FadeIn>
            <p className="text-xs uppercase tracking-[0.2em] text-espresso/50 mb-14 text-center">
              What People Say
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.15}>
                <div className="text-center">
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: t.stars }).map((_, s) => (
                      <span key={s} className="star text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-espresso/70 text-sm leading-relaxed mb-5 italic">
                    "{t.text}"
                  </p>
                  <p className="text-espresso text-xs font-medium uppercase tracking-wider">
                    {t.name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
