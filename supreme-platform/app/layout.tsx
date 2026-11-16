import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUPRÊME AUTOMOTIVE — Drive Beyond Limits",
  description: "La plateforme automobile SUPRÊME : véhicules, sélection et expérience automobile.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
