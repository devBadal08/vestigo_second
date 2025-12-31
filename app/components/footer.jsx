'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} />, href: 'https://facebook.com' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com' },
    { name: 'Google', icon: <Globe size={18} />, href: 'https://google.com' },
  ];

  return (
    <footer className="bg-[#0B1120] pt-5 pb-10 text-slate-400 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: 6-column logic to keep everything in one line on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
          
          {/* 1. Logo & About (1 Column) */}
          <div className="lg:col-span-1 space-y-6">
            <Image
              src="/logo.jpg"
              alt="Vestigo Logo"
              width={120}
              height={35}
              className="invert opacity-90"
            />
            <p className="text-[12px] leading-relaxed pr-2">
              Innovative digital insurance solutions protecting businesses worldwide.
            </p>
            <div className="flex gap-2.5 pt-1">
              {socialLinks.map((social) => (
                <Link 
                  key={social.name} 
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-700/50"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Company (1 Column) */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-7 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3.5 text-[12px]">
              <li><Link href="/company/whoweare" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Who We Are</Link></li>
              <li><Link href="/company/whyus" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Why Us</Link></li>
              <li><Link href="/company/ourteam" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Our Team</Link></li>
              <li><Link href="/company/ourpartners" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Our Partners</Link></li>
            </ul>
          </div>

          {/* 3. Industries (Spans 2 Columns for the double list) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] ml-17 mb-7 relative inline-block">
              Industries Works
              <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
            </h3>
            <div className="grid grid-cols-2 gap-x-4 text-[12px]">
              <ul className="space-y-3.5">
                <li><Link href="/industries/automobile" className="hover:text-blue-400 transition-all hover:translate-x-1 block truncate">Auto Mobile</Link></li>
                <li><Link href="/industries/BFSI" className="hover:text-blue-400 transition-all hover:translate-x-1 block">BFSI</Link></li>
                <li><Link href="/industries/chemical&pharmaceuticals" className="hover:text-blue-400 transition-all hover:translate-x-1 block truncate">Chemical & Pharma</Link></li>
                <li><Link href="/industries/e-commerce" className="hover:text-blue-400 transition-all hover:translate-x-1 block">E-Commerce</Link></li>
                <li><Link href="/industries/engineering" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Engineering</Link></li>
                <li><Link href="/industries/greenenergy" className="hover:text-blue-400 transition-all hover:translate-x-1 block truncate">Green Energy</Link></li>
                <li><Link href="/industries/hospital&education" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Hospital & Education</Link></li>
                <li><Link href="/industries/hospitality" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Hospitality</Link></li>
              
              </ul>
              <ul className="space-y-3.5">
                <li><Link href="/industries/it" className="hover:text-blue-400 transition-all hover:translate-x-1 block">IT & TECH</Link></li>
                <li><Link href="/industries/packaging" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Packaging</Link></li>
                <li><Link href="/industries/shipping&odccargo" className="hover:text-blue-400 transition-all hover:translate-x-1 block truncate">Shipping & Cargo</Link></li>
                <li><Link href="/industries/SME&MSME" className="hover:text-blue-400 transition-all hover:translate-x-1 block">SME & MSME</Link></li>
                <li><Link href="/industries/papermills" className="hover:text-blue-400 transition-all hover:translate-x-1 block truncate">Paper Mills</Link></li>
                <li><Link href="/industries/plastic" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Plastic</Link></li>
                <li><Link href="/industries/texttile" className="hover:text-blue-400 transition-all hover:translate-x-1 block">TextTile</Link></li>
                <li><Link href="/industries/wood&laminates" className="hover:text-blue-400 transition-all hover:translate-x-1 block truncate">Wood & Laminates</Link></li>
              </ul>
            </div>
          </div>

          {/* 4. Services (1 Column) */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-7 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-3.5 text-[12px]">
              <li><Link href="/solutions" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Risk Solutions</Link></li>
              <li><Link href="/industries" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Industries</Link></li>
              <li><Link href="/blogs" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Latest Insights</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-all hover:translate-x-1 block">Careers</Link></li>
            </ul>
          </div>

          {/* 5. Contact Us (1 Column) */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-7 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-6 h-0.5 bg-blue-600"></span>
            </h3>
            <ul className="space-y-5 text-[12px]">
              <li>
                <a href="tel:+1234567890" className="group flex items-center gap-3 hover:text-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/40 flex items-center justify-center group-hover:bg-blue-600 transition-all border border-slate-700/50 flex-shrink-0">
                    <Phone size={12} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-slate-300 transition-colors group-hover:text-white tracking-tight">+1 234 567 890</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@vestigo.com" className="group flex items-center gap-3 hover:text-white transition-all">
                  <div className="w-8 h-8 rounded-lg bg-slate-800/40 flex items-center justify-center group-hover:bg-blue-600 transition-all border border-slate-700/50 flex-shrink-0">
                    <Mail size={12} className="text-blue-400 group-hover:text-white" />
                  </div>
                  <span className="font-medium text-slate-300 transition-colors group-hover:text-white truncate">info@vestigo.com</span>
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-slate-800/40 flex items-center justify-center border border-slate-700/50 flex-shrink-0">
                  <MapPin size={12} className="text-blue-400" />
                </div>
                <span className="font-medium text-slate-300 leading-snug">New York, NY</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Vestigo Risk Solutions. CREATED BY ROHAN MOGA</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}