"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const timeline = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "One espresso machine, a borrowed kitchen, and a belief that Pune deserved a slower kind of cafe. We opened in a 400 sq ft space in Koregaon Park with just six tables.",
  },
  {
    year: "2021",
    title: "Finding Our Rhythm",
    description:
      "We expanded into our current space — a beautiful heritage bungalow with a garden terrace. Started sourcing beans directly from farms in Chikmagalur and Araku Valley.",
  },
  {
    year: "2023",
    title: "Community & Growth",
    description:
      "Launched our weekend brunch series. Began collaborating with local Pune artisans for our tableware and packaging. Voted 'Best Specialty Coffee' by Pune Foodies.",
  },
  {
    year: "Today",
    title: "Still Unhurried",
    description:
      "We serve over 200 cups a day, but the philosophy hasn't changed. Every cup is made with intention. Every plate tells a story of the season. We're still here, still slow.",
  },
];

const team = [
  {
    name: "Ananya Patel",
    role: "Founder & Head of Coffee",
    bio: "Ex-architect who traded blueprints for brewing. Trained at specialty roasteries in Melbourne and Kyoto before returning home to Pune.",
    image: "/images/team-founder.png",
  },
  {
    name: "Vikram Joshi",
    role: "Head Chef",
    bio: "A Kalyani Nagar native who spent five years cooking in London before coming back to build a kitchen around seasonal Indian ingredients.",
    image: "/images/barista-pouring.png",
  },
  {
    name: "Rhea Nair",
    role: "Community & Events",
    bio: "A writer and coffee lover who runs our weekend sessions, open mics, and collaborations with local Pune creatives.",
    image: "/images/coffee-flatlay.png",
  },
];

const values = [
  {
    title: "Sourcing",
    description:
      "Every bean we serve has a story. We work directly with smallholder farms in Karnataka and Andhra Pradesh, paying above fair-trade prices. We roast in small batches, twice a week, to keep things fresh. You'll never get stale coffee here — that's a promise.",
  },
  {
    title: "Community",
    description:
      "We're not just a cafe, we're a neighbourhood living room. From poetry readings to chai-and-sketch sessions, Brew & Blossom is a gathering place for Pune's creative community. Our regulars become friends, and our friends become family.",
  },
  {
    title: "Slowness",
    description:
      "In a world that moves too fast, we believe in the power of slowing down. That's why we don't have Wi-Fi passwords on the tables. It's why our playlists are soft, our lighting is warm, and nobody will ever rush you through your third cup.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 md:pb-28">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <FadeIn>
          <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso mb-8">
            Our Story
          </h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-espresso/70 max-w-2xl leading-relaxed text-lg">
            We started in 2019 with one espresso machine and a belief that Pune 
            deserved a slower kind of cafe. Four years later, the espresso machine 
            has company — but the intention remains the same.
          </p>
        </FadeIn>
      </div>

      {/* Founder Image */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20 md:mb-28">
        <FadeIn>
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src="/images/cafe-exterior.png"
              alt="Brew & Blossom cafe exterior in Koregaon Park"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </FadeIn>
      </div>

      {/* Founder Story */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20 md:mb-28">
        <FadeIn>
          <div className="space-y-6 text-espresso/70 leading-relaxed">
            <p>
              Ananya always loved two things — beautiful spaces and great coffee. 
              After studying architecture in Mumbai and working at a studio in 
              Bengaluru, she found herself spending more time in cafes than at 
              her desk. Not for the caffeine, but for the feeling. That quiet hum 
              of a place where people are doing their own thing, gently.
            </p>
            <p>
              In 2018, she took a sabbatical and spent six months training at 
              specialty coffee shops in Melbourne and Kyoto. She learned about 
              extraction ratios and flavour profiles, yes — but more importantly, 
              she learned about hospitality. About creating a space that makes 
              people feel at home without trying too hard.
            </p>
            <p>
              She came back to Pune with a plan. A quiet lane in Koregaon Park. 
              A heritage bungalow with big windows. A kitchen that cooked with 
              the seasons. And a coffee bar where every cup was made with the same 
              care whether it was the first of the morning or the last of the night.
            </p>

            <blockquote className="text-2xl md:text-3xl text-espresso py-8">
              "I didn't want to open a cafe. I wanted to open a feeling."
            </blockquote>

            <p>
              Today, Brew & Blossom is a small team of twelve people who share 
              one belief: that a good cafe can be a force for good. Good for the 
              farmers who grow the beans. Good for the neighbourhood that gathers 
              here. Good for the person who just needs a quiet corner and a 
              well-made cup.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-6 md:px-10 mb-20 md:mb-28" id="timeline">
        <FadeIn>
          <h2 className="font-serif italic text-3xl md:text-4xl text-espresso mb-14">
            The Journey
          </h2>
        </FadeIn>

        <div className="space-y-12">
          {timeline.map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.1}>
              <div className="grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-6 md:gap-10">
                <div>
                  <span className="font-serif italic text-2xl md:text-3xl text-dusty-rose">
                    {item.year}
                  </span>
                </div>
                <div className="pb-12 border-b border-cream-dark last:border-b-0">
                  <h3 className="font-display text-lg text-espresso mb-3">
                    {item.title}
                  </h3>
                  <p className="text-espresso/60 text-sm leading-relaxed max-w-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20 md:mb-28" id="team">
        <FadeIn>
          <h2 className="font-serif italic text-3xl md:text-4xl text-espresso mb-14">
            The People
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {team.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.12}>
              <div>
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-lg text-espresso mb-1">
                  {person.name}
                </h3>
                <p className="text-dusty-rose text-xs uppercase tracking-wider mb-3">
                  {person.role}
                </p>
                <p className="text-espresso/60 text-sm leading-relaxed">
                  {person.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="max-w-4xl mx-auto px-6 md:px-10" id="values">
        <FadeIn>
          <h2 className="font-serif italic text-3xl md:text-4xl text-espresso mb-14">
            What We Believe In
          </h2>
        </FadeIn>

        <div className="space-y-14">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="border-b border-cream-dark pb-14 last:border-b-0">
                <h3 className="font-display text-xl text-espresso mb-4">
                  {value.title}
                </h3>
                <p className="text-espresso/60 leading-relaxed max-w-2xl">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
