"use client";

import { motion } from "motion/react";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/lib/config";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Have an Idea? Let's Build It."
        description="Tell us what you're building and let's explore how IZON can bring it to life."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="glass flex flex-col gap-3 rounded-2xl p-6 transition-colors hover:border-teal/40"
        >
          <MessageCircle size={20} className="text-teal" />
          <div>
            <p className="text-xs font-medium tracking-widest text-mist">CALL / WHATSAPP</p>
            <p className="mt-1 text-lg font-semibold text-cloud">{siteConfig.contact.phoneDisplay}</p>
          </div>
        </a>

        <a
          href={`tel:+91${siteConfig.contact.phone}`}
          className="glass flex flex-col gap-3 rounded-2xl p-6 transition-colors hover:border-teal/40"
        >
          <Phone size={20} className="text-coral" />
          <div>
            <p className="text-xs font-medium tracking-widest text-mist">CALL DIRECTLY</p>
            <p className="mt-1 text-lg font-semibold text-cloud">{siteConfig.contact.phoneDisplay}</p>
          </div>
        </a>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="glass flex flex-col gap-3 rounded-2xl p-6 transition-colors hover:border-teal/40"
        >
          <Mail size={20} className="text-dusk" />
          <div>
            <p className="text-xs font-medium tracking-widest text-mist">EMAIL</p>
            <p className="mt-1 break-all text-lg font-semibold text-cloud">{siteConfig.contact.email}</p>
          </div>
        </a>
      </motion.div>

      {socialEntries.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          <span className="text-xs font-medium tracking-widest text-mist">DM US:</span>
          {socialEntries.map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium capitalize text-teal underline underline-offset-4"
            >
              {platform}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
