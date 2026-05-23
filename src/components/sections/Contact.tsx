"use client";

import { FormEvent, useState } from "react";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { WHATSAPP_DISPLAY, WHATSAPP_PHONE_DIGITS } from "@/lib/whatsapp";

export function Contact() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    const form = e.currentTarget;
    const formData = new FormData(form);
  
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const message = String(formData.get("message") || "");
  
    try {
      const response = await fetch("https://seitzhanlegalbot.onrender.com/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          message,
        }),
      });
  
      if (!response.ok) {
        alert("Ошибка при отправке заявки");
        return;
      }
  
      form.reset();
      setSent(true);
  
      setTimeout(() => {
        setSent(false);
      }, 5000);
    } catch (error) {
      alert("Ошибка при отправке заявки");
    }
  }
  return (
    <section id="contact" className="bg-[#f7f8fa] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            {t.contact.subtitle}
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#c9a24d]">
                {t.contact.lawyerName}
              </p>
              <p className="mt-1 text-lg font-semibold text-[#0a1628]">
                {t.brand.lawyerTitle}
              </p>
              <p className="mt-1 text-sm text-slate-600">{t.brand.firmName}</p>
            </div>

            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-[#0a1628]">{t.contact.phoneLabel}</dt>
                <dd className="mt-1">
                  <a
                    className="text-slate-700 underline-offset-2 hover:text-[#0a1628] hover:underline"
                    href={`tel:+${WHATSAPP_PHONE_DIGITS}`}
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0a1628]">{t.contact.emailLabel}</dt>
                <dd className="mt-1">
                  <a
                    className="text-slate-700 underline-offset-2 hover:text-[#0a1628] hover:underline"
                    href={`mailto:${t.office.email}`}
                  >
                    {t.office.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0a1628]">{t.contact.addressLabel}</dt>
                <dd className="mt-1 text-slate-700">{t.office.address}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[#0a1628]">{t.contact.hoursLabel}</dt>
                <dd className="mt-1 text-slate-700">{t.office.hours}</dd>
              </div>
            </dl>

            <WhatsAppButton variant="primary" className="w-full sm:w-auto">
              {t.contact.writeWhatsApp}
            </WhatsAppButton>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#f4f6f9] p-6 shadow-md ring-1 ring-[#0a1628]/5 sm:p-8 lg:col-span-3">
            <form
              className="space-y-5"
              onSubmit={handleSubmit}
              noValidate
              aria-label={t.contact.title}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm font-medium text-[#0a1628]">
                  {t.contact.form.name}
                  <input
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-inner outline-none ring-0 transition focus:border-[#c9a24d] focus:ring-2 focus:ring-[#c9a24d]/30"
                    autoComplete="name"
                  />
                </label>
                <label className="block text-sm font-medium text-[#0a1628]">
                  {t.contact.form.phone}
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-inner outline-none transition focus:border-[#c9a24d] focus:ring-2 focus:ring-[#c9a24d]/30"
                    autoComplete="tel"
                  />
                </label>
              </div>
              <label className="block text-sm font-medium text-[#0a1628]">
                {t.contact.form.message}
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-inner outline-none transition focus:border-[#c9a24d] focus:ring-2 focus:ring-[#c9a24d]/30"
                />
              </label>
              <p className="text-xs leading-relaxed text-slate-500">
                {t.contact.form.note}
              </p>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#0a1628] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#132a45] hover:shadow-xl active:scale-[0.99] sm:w-auto"
              >
                {t.contact.form.submit}
              </button>
              {sent ? (
                <p
                  className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 animate-fade-up"
                  role="status"
                >
                  {t.contact.form.success}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
