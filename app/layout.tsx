import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fellah — قريباً · Coming Soon",
  description:
    "La plateforme agri-tech intelligente pour les agriculteurs tunisiens. Marketplace, prix du marché, et conseiller IA. Lancement imminent.",
  metadataBase: new URL("https://fellah.tn"),
  openGraph: {
    title: "Fellah — قريباً · Coming Soon",
    description: "La plateforme agricole intelligente pour les agriculteurs tunisiens.",
    url: "https://fellah.tn",
    siteName: "Fellah",
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellah — قريباً · Coming Soon",
    description: "La plateforme agricole intelligente pour les agriculteurs tunisiens.",
  },
  alternates: { canonical: "https://fellah.tn" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
