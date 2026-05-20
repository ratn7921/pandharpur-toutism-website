import type { Metadata } from "next";
import { Geist, Geist_Mono, Yatra_One, Mukta, Cinzel } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yatraOne = Yatra_One({
  weight: "400",
  variable: "--font-yatra",
  subsets: ["devanagari", "latin"],
});

const mukta = Mukta({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Pandharpur Tourism | The Spiritual Capital",
  description: "Experience the eternal devotion and rich heritage of Pandharpur, the spiritual capital of Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${yatraOne.variable} ${mukta.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300 font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
