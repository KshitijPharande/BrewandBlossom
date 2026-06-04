"use client";

import FadeIn from "@/components/FadeIn";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 md:pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <FadeIn>
          <h1 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-espresso mb-6">
            Find Us
          </h1>
          <p className="text-espresso/60 max-w-lg leading-relaxed mb-16">
            We're tucked away in a quiet lane in Koregaon Park — the kind of 
            place you discover by word of mouth, and keep coming back to.
          </p>
        </FadeIn>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Map */}
          <FadeIn>
            <div className="relative w-full aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-cream-dark overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.065056092078!2d73.89!3d18.536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMyJzA5LjYiTiA3M8KwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.8) contrast(0.9)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brew & Blossom Location"
                className="absolute inset-0"
                id="contact-map"
              />
            </div>
          </FadeIn>

          {/* Right — Details */}
          <FadeIn delay={0.15}>
            <div className="space-y-12">
              {/* Address */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-espresso/40 mb-4">
                  Address
                </h3>
                <p className="text-espresso leading-relaxed">
                  Brew & Blossom Cafe<br />
                  Lane 7, North Main Road<br />
                  Koregaon Park, Pune 411001<br />
                  Maharashtra, India
                </p>
                <a
                  href="https://maps.google.com/?q=Koregaon+Park+Pune+Lane+7+North+Main+Road"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link text-espresso text-sm uppercase tracking-widest mt-4 inline-flex"
                  id="contact-directions"
                >
                  Get Directions <span className="text-lg">→</span>
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-espresso/40 mb-4">
                  Hours
                </h3>
                <div className="space-y-2 text-espresso">
                  <div className="flex justify-between max-w-xs">
                    <span>Monday – Friday</span>
                    <span className="text-espresso/60">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span>Saturday – Sunday</span>
                    <span className="text-espresso/60">8:00 AM – 11:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-espresso/40 mb-4">
                  Reach Out
                </h3>
                <div className="space-y-3 text-espresso">
                  <p>
                    <span className="text-espresso/50 text-sm">Phone: </span>
                    <a
                      href="tel:+91XXXXXXXXXX"
                      className="no-underline text-espresso hover:text-espresso/70 transition-colors"
                      id="contact-phone"
                    >
                      +91 XXXXX XXXXX
                    </a>
                  </p>
                  <p>
                    <span className="text-espresso/50 text-sm">WhatsApp: </span>
                    <a
                      href="https://wa.me/91XXXXXXXXXX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline text-espresso hover:text-espresso/70 transition-colors"
                      id="contact-whatsapp"
                    >
                      Message Us
                    </a>
                  </p>
                  <p>
                    <span className="text-espresso/50 text-sm">Instagram: </span>
                    <a
                      href="https://instagram.com/brewandblossompune"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline text-espresso hover:text-espresso/70 transition-colors"
                      id="contact-instagram"
                    >
                      @brewandblossompune
                    </a>
                  </p>
                </div>
              </div>

              {/* Neighbourhood Note */}
              <div className="pt-6 border-t border-cream-dark">
                <h3 className="text-xs uppercase tracking-[0.2em] text-espresso/40 mb-4">
                  Getting Here
                </h3>
                <p className="text-espresso/60 text-sm leading-relaxed max-w-md">
                  We're a 5-minute walk from the ABC Farms junction in Koregaon Park. 
                  If you're coming from Kalyani Nagar, cross the Aga Khan Palace bridge 
                  and take the first left onto North Main Road. Look for the terracotta 
                  pots at the entrance. Street parking is available on the lane, and 
                  there's a paid lot 100 meters further on Bund Garden Road.
                </p>
              </div>

              {/* Nearby */}
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] text-espresso/40 mb-4">
                  Also Nearby
                </h3>
                <p className="text-espresso/60 text-sm leading-relaxed">
                  Osho Ashram · Aga Khan Palace · Bund Garden · 
                  Kalyani Nagar High Street · Viman Nagar
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
