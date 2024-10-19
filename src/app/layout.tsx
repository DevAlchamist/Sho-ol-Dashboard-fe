import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Extended Metadata for SEO
export const metadata: Metadata = {
  title: "Sho-ol",
  description: "Comprehensive school dashboard website offering features like student records, event management, and more.",
  keywords: "school management, student records, event management, Sho-ol, dashboard, education platform",
  abstract: "Sho-ol is a school management platform designed to streamline administrative tasks, student records, and scheduling.",

  // Open Graph Metadata (used by Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Sho-ol: School Management Dashboard",
    description: "A comprehensive school management platform for student records, event scheduling, and more.",
    url: "https://sho-ol-dashboard-fe.vercel.app", // Update this to your actual website URL
    type: "website",
    images: [
      {
        url: 'https://i.imgur.com/7tIn3Ab.png', // Using imported image
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
