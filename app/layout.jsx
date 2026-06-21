import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "Coco Delight | Handcrafted Pastries & Pastry Academy",
  description:
    "Coco Delight crafts premium cakes, pastries, and dessert experiences for life's most important occasions, and trains the next generation of pastry professionals through hands-on academy programs.",
  keywords: [
    "premium pastry",
    "custom cakes",
    "dessert catering",
    "pastry academy",
    "baking classes",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-sans bg-cream text-cacao">{children}</body>
    </html>
  );
}
