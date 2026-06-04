import { Cormorant_Garamond, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "sonner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Brew & Blossom — Specialty Coffee & Seasonal Plates | Pune",
  description:
    "A specialty cafe in the heart of Koregaon Park, Pune. Ethically sourced coffee, seasonal kitchen menu, and a space worth lingering in. Open 8AM–10PM daily.",
  keywords: "cafe pune, specialty coffee pune, koregaon park cafe, brunch pune, brew and blossom",
  openGraph: {
    title: "Brew & Blossom — Cafe, Pune",
    description: "Specialty coffee & seasonal plates in Koregaon Park, Pune.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${playfair.variable} ${dmSans.variable}`}
    >
      <body>
        <Navbar />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Footer />
        <WhatsAppButton />
        <Toaster position="bottom-center" toastOptions={{
          style: {
            background: '#FAF7F2',
            color: '#2C1810',
            border: '1px solid #F0EBE3',
            fontFamily: 'var(--font-sans)',
            borderRadius: '0px'
          }
        }} />
      </body>
    </html>
  );
}
