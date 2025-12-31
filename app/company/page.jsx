'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Target, Eye, TrendingUp, ShieldCheck, Zap, 
  Headphones, Trophy, Users, ChevronRight, 
  MousePointer2, Sparkles, Building2 
} from 'lucide-react';
import Link from 'next/link';

export default function CompanyOverview() {
  const containerRef = useRef(null);
  
  // Parallax Effect for the Hero
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Data
  const stats = [
    { label: "Years Experience", value: "15+", icon: <Trophy size={20} /> },
    { label: "Clients Globally", value: "500+", icon: <Users size={20} /> },
    { label: "Projects Done", value: "1.2k", icon: <Sparkles size={20} /> },
    { label: "Expert Advisors", value: "50+", icon: <Building2 size={20} /> },
  ];

  const reasons = [
    { title: "Fastest Claims", desc: "Settled in record time", icon: <Zap />, color: "from-amber-400 to-orange-500" },
    { title: "Expert Analysis", desc: "Data-driven risk maps", icon: <TrendingUp />, color: "from-blue-400 to-indigo-600" },
    { title: "24/7 Support", desc: "Always by your side", icon: <Headphones />, color: "from-emerald-400 to-teal-600" },
    { title: "Proven Track", desc: "Trusted by industry leaders", icon: <Trophy />, color: "from-purple-400 to-pink-600" }
  ];

  return (
    <main ref={containerRef} className="bg-white overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Brand Background */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r
          from-[#0B1440]
          via-[#243B8F]
          to-[#C9CEDF]"
        />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], x: [0, -50, 0], y: [0, -40, 0] }}
            transition={{ duration: 15, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px]" 
          />

        <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block px-6 py-1 border border-blue-400/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold mb-6"
          >
            OUR JOURNEY SINCE 2010
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Resilience.</span>
          </h1>
          <p className="text-md text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Vestigo fakt insurance nathi, pan tamara business na growth mate nu ek safety shield che. 
            We turn uncertainty into opportunity.
          </p>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs font-bold tracking-widest uppercase">Scroll to explore</span>
            <MousePointer2 size={20} />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. FLOATING STATS GRID */}
      <section className="relative z-20 -mt-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-slate-900 mb-1">{stat.value}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INNOVATION & MISSION (Split Text/Visual) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              A Mission to Protect <br />
              <span className="text-blue-600 italic font-serif">Every Ambition.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We started with a simple belief: that risk shouldn&apos;t stop progress. In the last 15 years, 
              we have evolved from a local consultancy to a technology-driven insurance powerhouse.
            </p>
            
            <div className="space-y-4">
              {["Transparent Settlements", "AI-Driven Risk Mapping", "Human-Centric Support"].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-900 font-bold">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div 
              whileHover={{ x: 20 }}
              className="p-10 rounded-[3rem] text-white relative overflow-hidden group
              bg-gradient-to-r
              from-[#0B1440]
              via-[#243B8F]
              to-[#C9CEDF]"
            >
              <Target className="absolute -right-8 -top-8 w-40 h-40 text-white/5 group-hover:text-blue-500/10 transition-colors duration-500" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-blue-400" /> Our Mission
              </h3>
              <p className="text-white/80 text-lg">
                Protective future banavvu e amari priority che. Delivering excellence in every claim.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ x: 20 }}
              className="p-10 rounded-[3rem] text-white relative overflow-hidden group
              bg-gradient-to-r
              from-[#0B1440]
              via-[#243B8F]
              to-[#C9CEDF]"
            >
              <Eye className="absolute -right-8 -top-8 w-40 h-40 text-white/10 group-hover:text-white/20 transition-colors duration-500" />
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Eye className="text-white" /> Our Vision
              </h3>
              <p className="text-white/85 text-lg">
                Digital insurance ma global benchmark banvu. To be the world&apos;s most trusted partner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC BENEFITS (3D Cards) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">The Vestigo Edge</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {reasons.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-64 bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col items-center justify-center text-center shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                {/* Background Gradient Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:bg-white/20 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon, { size: 32 })}
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 group-hover:text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400 group-hover:text-blue-50/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM & CTA */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16 tracking-tight">The Minds Behind Your Security</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((m) => (
              <motion.div 
                key={m}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden mb-6 relative group">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/40 transition-all duration-500 flex items-center justify-center">
                    <Users className="text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all" size={48} />
                  </div>
                  {/* <Image src={`/team-${m}.jpg`} fill className="object-cover" /> */}
                  <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50">
                     <Users size={64} />
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-slate-900">Executive Leader {m}</h4>
                <p className="text-blue-600 font-medium">Managing Director</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-24 p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="text-left">
              <h3 className="text-3xl font-bold mb-2">Want to meet our full team?</h3>
              <p className="text-blue-100">Explore the experts who make risk management look easy.</p>
            </div>
            <Link href="/company/ourteam" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-50 transition-colors">
              Our Full Team <ChevronRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}