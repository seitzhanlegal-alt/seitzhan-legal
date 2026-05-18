/** Digits only — used in wa.me links */
export const WHATSAPP_PHONE_DIGITS = "77078025000";

export const WHATSAPP_DISPLAY = "+7 7078025000";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE_DIGITS}?text=${encodeURIComponent(message)}`;
}
