import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fellah — المنصة الذكية للفلاحين التونسيين",
  description:
    "Gérez votre ferme, diagnostiquez vos cultures avec l'IA, consultez les prix du marché et vendez directement aux acheteurs. La plateforme agri-tech #1 en Tunisie.",
  metadataBase: new URL("https://fellah.tn"),
  openGraph: {
    title: "Fellah — المنصة الذكية للفلاحين التونسيين",
    description:
      "La plateforme agri-tech #1 en Tunisie pour les agriculteurs.",
    url: "https://fellah.tn",
    siteName: "Fellah",
    locale: "fr_TN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fellah — المنصة الذكية للفلاحين التونسيين",
    description:
      "La plateforme agri-tech #1 en Tunisie pour les agriculteurs.",
  },
  alternates: {
    canonical: "https://fellah.tn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
