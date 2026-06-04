"use client";

import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";

const menuSections = [
  {
    title: "Morning ☀️",
    chefPick: 0,
    items: [
      {
        name: "Single Origin Pour Over",
        description: "Rotating beans from Chikmagalur, Araku Valley & beyond",
        price: "₹250",
        tags: ["V"],
        image: "/images/coffee-flatlay.png",
      },
      {
        name: "Espresso",
        description: "Double shot, house blend — chocolate and stone fruit notes",
        price: "₹180",
        tags: ["V"],
      },
      {
        name: "Oat Milk Flat White",
        description: "Silky oat milk, double ristretto, latte art",
        price: "₹280",
        tags: ["V", "Vegan"],
      },
      {
        name: "Masala Chai",
        description: "Whole spices, Assam leaf, simmered slowly",
        price: "₹150",
        tags: ["V", "GF"],
      },
      {
        name: "Sourdough Avocado Toast",
        description: "Smashed avocado, poached egg, chilli flakes, microgreens",
        price: "₹350",
        tags: ["V"],
      },
      {
        name: "Granola Bowl",
        description: "House granola, seasonal fruit, coconut yoghurt, honey",
        price: "₹320",
        tags: ["V", "GF"],
      },
      {
        name: "Eggs Benedict",
        description: "Sourdough, poached eggs, hollandaise, roasted cherry tomatoes",
        price: "₹380",
        tags: ["V"],
      },
    ],
  },
  {
    title: "Afternoon ☕",
    chefPick: 1,
    items: [
      {
        name: "Cold Brew",
        description: "18-hour steep, served over ice, zero bitterness",
        price: "₹280",
        tags: ["V", "GF"],
      },
      {
        name: "Lavender Oat Latte",
        description: "House-made lavender syrup, oat milk, single origin espresso",
        price: "₹280",
        tags: ["V", "Vegan"],
        image: "/images/matcha-latte.png",
      },
      {
        name: "Matcha Latte",
        description: "Ceremonial grade matcha, steamed milk of your choice",
        price: "₹300",
        tags: ["V"],
      },
      {
        name: "Iced Rose Lemonade",
        description: "Fresh lemon, rose water, sparkling water, dried petals",
        price: "₹200",
        tags: ["V", "Vegan", "GF"],
      },
      {
        name: "Grilled Cheese & Tomato Soup",
        description: "Three-cheese sourdough melt, roasted tomato bisque",
        price: "₹380",
        tags: ["V"],
      },
    ],
  },
  {
    title: "Evening 🌙",
    chefPick: null,
    items: [
      {
        name: "Turmeric Golden Latte",
        description: "Warming spices, oat milk, a touch of honey",
        price: "₹220",
        tags: ["V", "Vegan", "GF"],
      },
      {
        name: "Hot Chocolate",
        description: "Belgian dark chocolate, steamed milk, house marshmallow",
        price: "₹280",
        tags: ["V"],
      },
      {
        name: "Chai Affogato",
        description: "Masala chai ice cream, double espresso shot",
        price: "₹300",
        tags: ["V"],
      },
    ],
  },
  {
    title: "Small Plates 🍽️",
    chefPick: 2,
    items: [
      {
        name: "Bruschetta Trio",
        description: "Roasted pepper, olive tapenade, and ricotta-honey on sourdough",
        price: "₹340",
        tags: ["V"],
      },
      {
        name: "Hummus & Za'atar Platter",
        description: "House hummus, warm pita, olive oil, toasted seeds",
        price: "₹320",
        tags: ["V", "Vegan"],
      },
      {
        name: "Sweet Potato Fries",
        description: "Crispy, with chipotle aioli and lime",
        price: "₹260",
        tags: ["V", "Vegan", "GF"],
        image: "/images/avocado-toast.png",
      },
      {
        name: "Soup of the Day",
        description: "Ask your server — changes with the season",
        price: "₹240",
        tags: ["V"],
      },
    ],
  },
  {
    title: "Mains",
    chefPick: 0,
    items: [
      {
        name: "Mushroom Risotto",
        description: "Arborio rice, wild mushrooms, parmesan, truffle oil",
        price: "₹480",
        tags: ["V", "GF"],
        image: "/images/pasta-dish.png",
      },
      {
        name: "Grilled Chicken Salad",
        description: "Mixed greens, cherry tomatoes, feta, balsamic reduction",
        price: "₹420",
        tags: ["GF"],
      },
      {
        name: "Pesto Pasta",
        description: "Fresh basil pesto, sun-dried tomatoes, pine nuts, parmesan",
        price: "₹400",
        tags: ["V"],
      },
      {
        name: "Falafel Bowl",
        description: "House falafel, hummus, tabbouleh, pickled onion, tahini",
        price: "₹380",
        tags: ["V", "Vegan"],
      },
      {
        name: "Fish & Chips",
        description: "Beer-battered catch of the day, hand-cut fries, tartar sauce",
        price: "₹520",
        tags: [],
      },
    ],
  },
  {
    title: "Desserts",
    chefPick: 1,
    items: [
      {
        name: "Baked Cheesecake",
        description: "Classic New York style, seasonal berry compote",
        price: "₹340",
        tags: ["V"],
      },
      {
        name: "Honey Cardamom Cake",
        description: "Layered sponge, cardamom cream, seasonal berries",
        price: "₹320",
        tags: ["V"],
        image: "/images/dessert-cake.png",
      },
      {
        name: "Chocolate Fondant",
        description: "Warm centre, vanilla bean ice cream, cocoa dust",
        price: "₹380",
        tags: ["V"],
      },
      {
        name: "Affogato",
        description: "Vanilla gelato, double espresso, biscotti",
        price: "₹280",
        tags: ["V"],
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="pt-32 pb-20 md:pb-28">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 mb-16 md:mb-24">
        <FadeIn>
          <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Our Menu
          </h1>
          <p className="text-espresso/60 max-w-lg leading-relaxed">
            Everything is made fresh, with ingredients sourced seasonally. Our beans come 
            from small farms across India, roasted in small batches here in Pune.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex gap-6 mt-8 text-xs text-espresso/50">
            <span>[V] Vegetarian</span>
            <span>[GF] Gluten Free</span>
            <span>[Vegan] Plant Based</span>
          </div>
        </FadeIn>
      </div>

      {/* Menu Sections */}
      {menuSections.map((section, sectionIndex) => (
        <section key={section.title} className="mb-16 md:mb-24" id={`menu-${section.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}>
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <FadeIn>
              <h2 className="font-serif italic text-2xl md:text-3xl text-espresso mb-10 pb-4 border-b border-cream-dark">
                {section.title}
              </h2>
            </FadeIn>

            <div className="space-y-0">
              {section.items.map((item, itemIndex) => {
                const isChefPick = section.chefPick === itemIndex;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.6,
                      delay: itemIndex * 0.06,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  >
                    {isChefPick && item.image ? (
                      /* Chef's Pick with image */
                      <div className="py-6 border-b border-cream-dark">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="relative w-full md:w-32 h-32 md:h-24 flex-shrink-0 overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="128px"
                            />
                          </div>
                          <div className="flex-1 w-full">
                            <div className="flex items-start justify-between gap-4 mb-1">
                              <div className="flex items-center gap-3">
                                <h3 className="font-display text-base text-espresso">
                                  {item.name}
                                </h3>
                                <span className="text-[10px] uppercase tracking-widest text-dusty-rose font-medium">
                                  Chef&apos;s Pick
                                </span>
                              </div>
                              <span className="text-espresso/50 text-sm whitespace-nowrap">
                                {item.price}
                              </span>
                            </div>
                            <p className="text-espresso/50 text-sm mb-2">
                              {item.description}
                            </p>
                            {item.tags.length > 0 && (
                              <div className="flex gap-2">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[10px] text-espresso/40 uppercase tracking-wider"
                                  >
                                    [{tag}]
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Regular item */
                      <div className="py-5 border-b border-cream-dark last:border-b-0">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-base text-espresso">
                              {item.name}
                            </h3>
                            {isChefPick && (
                              <span className="text-[10px] uppercase tracking-widest text-dusty-rose font-medium">
                                Chef&apos;s Pick
                              </span>
                            )}
                          </div>
                          <span className="text-espresso/50 text-sm whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-espresso/50 text-sm mb-1.5">
                          {item.description}
                        </p>
                        {item.tags.length > 0 && (
                          <div className="flex gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] text-espresso/40 uppercase tracking-wider"
                              >
                                [{tag}]
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
