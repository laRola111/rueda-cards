import type { Metadata } from "next";
import { Inter, Playfair_Display, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Business Card",
  description: "Rueda La Rola Media - Digital Business Cards",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} ${orbitron.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-md mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
