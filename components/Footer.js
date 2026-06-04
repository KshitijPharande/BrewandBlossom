import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Column */}
          <div>
            <span className="font-serif italic text-3xl tracking-tight block mb-6">
              Brew & Blossom
            </span>
            <p className="text-cream/60 text-sm leading-relaxed max-w-sm mb-8">
              A specialty cafe in the heart of Koregaon Park, Pune.
              Where every morning starts with intention, and every
              evening ends with warmth.
            </p>
            <p className="text-cream/40 text-xs">
              © {new Date().getFullYear()} LynkDigital. All rights reserved.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:text-right">
            <div className="mb-8">
              <h4 className="text-cream/40 text-xs uppercase tracking-widest mb-4">
                Visit Us
              </h4>
              <p className="text-cream/80 text-sm leading-relaxed">
                Lane 7, North Main Road<br />
                Koregaon Park, Pune 411001<br />
                Maharashtra, India
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-cream/40 text-xs uppercase tracking-widest mb-4">
                Hours
              </h4>
              <p className="text-cream/80 text-sm">
                Open Daily · 8:00 AM – 10:00 PM
              </p>
            </div>

            <div className="flex gap-8 md:justify-end">
              <a
                href="https://instagram.com/brewandblossompune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 text-sm hover:text-cream transition-colors duration-300 no-underline"
                id="footer-instagram"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 text-sm hover:text-cream transition-colors duration-300 no-underline"
                id="footer-whatsapp"
              >
                WhatsApp
              </a>
              <a
                href="https://maps.google.com/?q=Koregaon+Park+Pune"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/60 text-sm hover:text-cream transition-colors duration-300 no-underline"
                id="footer-maps"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
