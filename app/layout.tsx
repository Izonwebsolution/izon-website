import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "IZON | Web & Digital Solutions",
    template: "%s | IZON"
  },
  description:
    "IZON designs and develops modern websites, web applications, mobile apps and digital solutions — including SEO, analytics and deployment support — for businesses and entrepreneurs.",
  keywords: [
    "website development",
    "web application development",
    "mobile app development",
    "business website",
    "e-commerce website",
    "SEO",
    "IZON"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: "IZON | Web & Digital Solutions",
    description: siteConfig.description,
    siteName: "IZON"
  },
  twitter: {
    card: "summary_large_image",
    title: "IZON | Web & Digital Solutions",
    description: siteConfig.description
  },
  ...(siteConfig.analytics.googleSearchConsoleVerification && {
    verification: { google: siteConfig.analytics.googleSearchConsoleVerification }
  })
};

export const viewport: Viewport = {
  themeColor: "#080B14",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-midnight text-cloud font-body antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
