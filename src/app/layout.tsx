import { Source_Sans_3, Merriweather } from "next/font/google";

import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sans",
  display: "swap",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-serif",
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
        className={`${sourceSans.className} ${sourceSans.variable} ${merriweather.variable}`}>
        {children}
      </body>
    </html>
  );
}
