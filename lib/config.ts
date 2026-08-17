// ---------------------------------------------------------------------------
// SITE CONFIGURATION
// Edit the values below to update contact details, site URL and social
// links across the entire website. Nothing else in the codebase needs to
// change when these values are updated.
// ---------------------------------------------------------------------------

export const siteConfig = {
  name: "IZON",
  tagline: "Your Vision. Our Code. Your Success.",
  signature: "Design • Develop • Deliver",
  description:
    "IZON is a digital development studio designing and building modern websites, web applications, mobile apps and digital experiences for businesses and entrepreneurs.",

  // Used for metadata, Open Graph, sitemap and canonical URLs.
  // Replace with your real production domain once it is connected in Vercel.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://izon-website.vercel.app",

  contact: {
    phone: "9489392601",
    phoneDisplay: "+91 94893 92601",
    // WhatsApp requires the number without symbols, prefixed with the
    // country code (91 for India).
    whatsappNumber: "919489392601",
    email: "izon.websolutions@gmail.com"
  },

  whatsappMessage: "Hello IZON, I would like to discuss a website/project.",

  // Add real URLs when these accounts exist. Leave empty to hide the icon —
  // see components/sections/Footer.tsx / Contact.tsx, which only render a
  // link when the value below is non-empty.
  social: {
    instagram: "",
    linkedin: "",
    github: "",
    facebook: ""
  },

  // Fill these in once accounts are created. See README for instructions.
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "",
    googleSearchConsoleVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || ""
  }
};

export function getWhatsAppUrl(message: string = siteConfig.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}
