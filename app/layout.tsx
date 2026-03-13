import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fastrack Driving Institute Puthenvelikara | Best Driving School in Ernakulam, Kerala",
  description:
    "Fastrack Driving Institute Puthenvelikara in Puthenvelikara, Ernakulam offers professional driving training with certified instructors, modern vehicles, and flexible 24/7 scheduling. Enroll today and get your driving license with confidence.",
  keywords:
    "driving school Ernakulam, driving institute Puthenvelikara, learn driving Kerala, driving classes Ernakulam, driving license training Ernakulam, best driving school Kerala, Fastrack Driving Institute, driving school near me Ernakulam, motor driving school Puthenvelikara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
