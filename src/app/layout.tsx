import { Source_Sans_3, Merriweather } from "next/font/google";

import "./globals.css";
import { css } from "styled-system/css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--fonts-sans",
  display: "swap",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--fonts-serif",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${css({ color: "neutralHighContrast" })} ${sourceSans.className} ${sourceSans.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
