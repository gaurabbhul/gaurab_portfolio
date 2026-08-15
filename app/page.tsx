"use client";

import { navItems } from "@/data";

import About from "@/components/About";
import Architecture from "@/components/Architecture";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import WhatIDo from "@/components/WhatIDo";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <RecentProjects />
        <WhatIDo />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
