'use client'

import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import Marquee from 'react-fast-marquee'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      <Marquee className="bg-secondary py-8 mt-[300px] mb-[150px]">
        <p className="font-bold text-white section-title">Welcome to my Portfolio Website, where you get to know about my skillsets, technical experience level and also reach out to me by just dropping a message ✉</p>
      </Marquee>
      <Reviews />
      <Cta />
    </main>
  );
}
