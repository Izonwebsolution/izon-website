"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <motion.a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="glass flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-cloud shadow-glass hover:border-teal/50"
        aria-label="Chat with IZON on WhatsApp"
      >
        <MessageCircle size={18} className="text-teal" />
        <span className="hidden sm:inline">LET&rsquo;S TALK ↗</span>
      </motion.a>
    </div>
  );
}
