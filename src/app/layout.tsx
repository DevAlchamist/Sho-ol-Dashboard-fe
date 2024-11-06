import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sho-ol : School Management Dashboard",
  description:
    "Comprehensive school dashboard website offering features like student records, event management, and more.",
  keywords:
    "school management, student records, event management, Sho-ol, dashboard, education platform",
  abstract:
    "Sho-ol is a school management platform designed to streamline administrative tasks, student records, and scheduling.",

  openGraph: {
    title: "Sho-ol: School Management Dashboard",
    description:
      "A comprehensive school management platform for student records, event scheduling, and more.",
    url: "https://sho-ol.vercel.app",
    type: "website",
    images: [
      {
        url: "https://i.imgur.com/7tIn3Ab.png",
        width: 1200,
        height: 630,
        alt: "Sho-ol Dashboard",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
