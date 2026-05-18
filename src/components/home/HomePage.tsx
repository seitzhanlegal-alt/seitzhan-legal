"use client";

import { PageShell } from "@/components/layout/PageShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { PracticeAreas } from "@/components/sections/PracticeAreas";
import { FAQ } from "@/components/sections/FAQ";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/seo/JsonLd";
import { SeoHead } from "@/components/seo/SeoHead";

export function HomePage() {
  return (
    <PageShell>
      <SeoHead />
      <JsonLd />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <PracticeAreas />
      <FAQ />
      <Reviews />
      <Contact />
    </PageShell>
  );
}
