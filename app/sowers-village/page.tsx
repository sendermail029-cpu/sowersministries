"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Bus, 
  MapPin, 
  Heart, 
  BookOpen, 
  Church, 
  Users, 
  Gamepad2, 
  Construction, 
  ArrowUpRight,
  Sparkles,
  Calendar
} from 'lucide-react';

// --- CUSTOM COMPONENTS ---
import PageHero from '@/components/PageHero';
import FadeInSection from '@/components/FadeInSection';
import CTASection from '@/components/CTASection';

// --- DATA TYPES ---
interface VillageActivity {
  title: string;
  category: string;
  description: string;
  image: string;
  images?: string[];
  icon: React.ReactNode;
}

// --- DATA: THE FIVE PILLARS ---
const villageActivities: VillageActivity[] = [
  {
    title: 'Skill Development Centre',
    category: 'Biblical Training',
    description: 'Equipping believers through intensive Biblical studies and communication development. We focus on training individuals in effective teaching, public speaking, and theological clarity.',
    image: '/sv (2).webp',
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: 'Embracing Life',
    category: 'Counseling',
    description: 'A specialized sanctuary for those in the darkest emotional valleys. We offer a safe, confidential space for those facing depression and suicidal thoughts through compassionate prayer.',
    image: '/sv (1).webp',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Play & Recreation',
    category: 'Youth & Children',
    description: 'A joyful environment for the next generation to gather and grow. Beyond physical activity, this center focuses on building lasting friendships and fostering discipline through sports.',
    image: '/sv (6).webp',
    images: ['/sv (6).webp', '/sv (4).webp'],
    icon: <Gamepad2 className="w-6 h-6" />,
  },
  {
    title: 'The Village Church',
    category: 'Spiritual Heart',
    description: 'The moral and spiritual compass of Sowers Village. Planned as a vibrant place of worship and Biblical teaching, it offers fellowship and encouragement to the surrounding community.',
    image: '/village-opt.webp',
    icon: <Church className="w-6 h-6" />,
  },
  {
    title: 'Missionary Stay',
    category: 'Hospitality',
    description: 'A global bridge for ministry and service. This dedicated space hosts visiting ministers and partners, ensuring a constant exchange of wisdom and skills that enriches our local village.',
    image: '/sv (5).webp',
    icon: <Users className="w-6 h-6" />,
  },
];

const layoutImages = [
  { title: 'Site Planning View', image: '/sv (1).webp' },
  { title: 'Village Layout Plan', image: '/sv (2).webp' },
  { title: 'Community Design', image: '/sv (3).webp' },
  { title: 'Construction Progress', image: '/sv (4).webp' },
  { title: 'Future Expansion', image: '/sv (5).webp' },
  { title: 'Youth & Children Area', image: '/sv (6).webp' },
  { title: 'Site Planning Concept', image: '/sv (7).webp' },
];

export default function SowersVillagePage() {
  return (
    <div className="bg-[#FCFBFA] selection:bg-gold-200">
      <PageHero
        eyebrow="Ministry Vision"
        title="Sowers Village"
        subtitle="A community development centre architected for hope, skill, and spiritual restoration."
        bgImage="/village-opt.webp"
      />

      {/* --- SECTION 1: VISION DASHBOARD --- */}
      <section className="relative -mt-12 z-10 mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 overflow-hidden rounded-3xl bg-white shadow-2xl border border-gold-100">
          <div className="p-8 border-b md:border-b-0 md:border-r border-gold-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gold-50 rounded-2xl text-gold-600"><Calendar className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl">Phase 1</h4>
            </div>
            <p className="text-sm text-navy-900/60">Site preparation and foundational infrastructure currently under active development.</p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-r border-gold-50">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-navy-50 rounded-2xl text-navy-600"><Sparkles className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl">The Purpose</h4>
            </div>
            <p className="text-sm text-navy-900/60">A 5-pillar approach to spiritual, emotional, and vocational empowerment.</p>
          </div>
          <div className="p-8 bg-[linear-gradient(135deg,#1b5e20_0%,#2e8a44_55%,#6edc5a_130%)] text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-2xl text-white"><Construction className="w-6 h-6" /></div>
              <h4 className="font-serif text-xl">Current Status</h4>
            </div>
            <p className="text-sm text-white/80">Planning is complete; physical construction is advancing steadily.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE FIVE PILLARS (Z-PATTERN SCROLL) --- */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-20 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600 block mb-4">Our Foundations</span>
            <h2 className="font-serif text-4xl md:text-6xl text-navy-950 mb-6">The Five Pillars</h2>
            <div className="h-1 w-20 bg-gold-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col gap-24 lg:gap-40">
            {villageActivities.map((activity, i) => (
              <FadeInSection key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`flex flex-col items-center gap-12 lg:gap-20 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2">
                    {activity.images ? (
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        {activity.images.map((imageSrc, imageIndex) => (
                          <div
                            key={imageSrc}
                            className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold-100 shadow-2xl group"
                          >
                            <Image
                              src={imageSrc}
                              alt={`${activity.title} image ${imageIndex + 1}`}
                              fill
                              className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {imageIndex === 0 && (
                              <div className="absolute top-6 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-100 bg-white/90 font-serif text-2xl text-gold-600 shadow-lg backdrop-blur-md">
                                0{i + 1}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] shadow-2xl group border border-gold-100">
                        <Image 
                          src={activity.image} 
                          alt={activity.title} 
                          fill 
                          className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        {/* Decorative Number Overlay */}
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md w-14 h-14 flex items-center justify-center rounded-2xl font-serif text-2xl text-gold-600 shadow-lg border border-gold-100">
                          0{i + 1}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-gold-50 rounded-xl text-gold-600">
                        {activity.icon}
                      </div>
                      <span className="text-sm font-bold uppercase tracking-widest text-gold-600">
                        {activity.category}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl lg:text-5xl font-serif text-navy-950 mb-6 leading-tight">
                      {activity.title}
                    </h3>
                    
                    <p className="text-lg lg:text-xl text-navy-900/60 leading-relaxed max-w-xl">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: BUS STOP --- */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-navy-950 rounded-[3rem] p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-14 text-white relative overflow-hidden">
            <div className="lg:w-1/2 z-10">
              <div className="bg-gold-600 inline-flex p-4 rounded-2xl mb-8 text-white shadow-xl shadow-gold-600/20">
                <Bus className="w-8 h-8" />
              </div>
              <h2 className="font-serif text-4xl lg:text-6xl mb-8 leading-tight">Region-Wide <br/><span className="italic text-gold-400">Accessibility.</span></h2>
              <p className="text-white/70 leading-relaxed mb-10 text-lg lg:text-xl">
                True restoration requires connection. We are coordinating with local transport 
                authorities to secure a designated bus stop at Sowers Village.
              </p>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl w-fit backdrop-blur-md">
                <MapPin className="w-6 h-6 text-gold-500" />
                <span className="text-sm font-medium tracking-wide uppercase">Request Status: Under Review</span>
              </div>
            </div>
            <div className="lg:w-[42%] w-full rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white/5">
                <Image src="/svbsp-opt.webp" alt="Bus Stop Location" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MASTER PLAN GRID --- */}
      <section className="py-24 bg-[#FCFBFA]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-600 block mb-4">Architecture</span>
              <h2 className="font-serif text-4xl lg:text-5xl text-navy-950">Site Planning</h2>
            </div>
            <p className="text-navy-900/50 max-w-xs text-right hidden md:block">Visualizing the future of our physical campus in Sowers Village.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {layoutImages.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1} direction="up">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[2.2rem] bg-white border border-gold-100/50 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-navy-950/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-10 text-center backdrop-blur-sm">
                      <p className="text-white font-serif text-3xl mb-6">{item.title}</p>
                      <div className="p-4 bg-gold-600 rounded-full text-white"><ArrowUpRight className="w-6 h-6" /></div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Stand With Sowers Village"
        subtitle="Your partnership helps this vision move forward through construction and community outreach."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Give to SOWERS"
        secondaryHref="/donate"
        dark={false}
        lightBgClassName="bg-[#f3ead8]"
      />
    </div>
  );
}
