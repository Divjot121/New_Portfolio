import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Achievements } from '@/components/sections/Achievements';
import { Skills } from '@/components/sections/Skills';
import { Speaking } from '@/components/sections/Speaking';
import { IdeasExploring } from '@/components/sections/IdeasExploring';
import { CurrentlyBuilding } from '@/components/sections/CurrentlyBuilding';
import { Contact } from '@/components/sections/Contact';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white">
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Skills />
      <Speaking />
      <IdeasExploring />
      <CurrentlyBuilding />
      <Contact />
    </div>
  );
}