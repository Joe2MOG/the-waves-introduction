import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Waves | Precious & Joseph",
  description:
    "The Marriage Introduction of Precious and Joseph — 26 December 2026.",
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
