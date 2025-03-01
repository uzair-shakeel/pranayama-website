import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import "aos/dist/aos.css";

// Configure Montserrat as the primary font
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you need
  display: "swap", // Prevents FOUT (Flash of Unstyled Text)
});

// Configure custom font as secondary
const nimbus = localFont({
  src: "../../public/fonts/TAN-NIMBUS.woff2",
  variable: "--font-nimbus",
});

export const metadata: Metadata = {
  title: "Pranayama - Encuentra calma en cada respiro",
  description:
    "Aprende técnicas de respiración para mejorar tu energía, reducir el estrés y aumentar tu concentración.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.className} ${nimbus.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
