"use client";

import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-40 sm:bottom-8 sm:right-8">
      <WhatsAppButton variant="floating" />
    </div>
  );
}
