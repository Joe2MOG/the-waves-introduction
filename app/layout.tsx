import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Waves | Precious & Joseph",
  description:
    "The Marriage Introduction of Precious and Joseph — 26 December 2026.",

  openGraph: {
    title: "The Waves | Precious & Joseph",
    description:
      "Marriage Introduction • 26 December 2026 • Ibadan, Oyo State",
    url: "https://the-waves-introduction.vercel.app",
    siteName: "The Waves",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Waves — Precious & Joseph Marriage Introduction",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Waves | Precious & Joseph",
    description:
      "Marriage Introduction • 26 December 2026 • Ibadan, Oyo State",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
