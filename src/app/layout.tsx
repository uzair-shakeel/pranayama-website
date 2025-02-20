import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import localFont from "next/font/local";

export const myFont = localFont({
  src: "../../public/fonts/TAN-NIMBUS.woff2",
  variable: "--font-nimbus", 
});


export const metadata: Metadata = {
  title: "Pranayama - Encuentra calma en cada respiro",
  description: "Aprende técnicas de respiración para mejorar tu energía, reducir el estrés y aumentar tu concentración.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${myFont.variable} ${GeistSans.className}`}>
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
