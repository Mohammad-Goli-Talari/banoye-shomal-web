// src/app/layout.tsx

import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import { Providers } from "@/providers";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: {
    default: "بانوی شمال",
    template: "%s | بانوی شمال",
  },

  description: "بانوی شمال؛ فروش محصولات غذایی خانگی، غذاهای آماده، خدمات کترینگ و آموزش تخصصی آشپزی شمالی.",
  icons: {
    icon: "/icon.png",
  },
  keywords: [
  "بانوی شمال",
  "محصولات شمالی",
  "غذای شمالی",
  "کترینگ",
  "آموزش آشپزی",
  "ترشی",
  "مربا",
  "زیتون پرورده",
],
openGraph: {
  title: "بانوی شمال",
  description:
    "محصولات غذایی خانگی و آموزش آشپزی",
  type: "website",
  locale: "fa_IR",
},
robots: {
  index: true,
  follow: true,
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
