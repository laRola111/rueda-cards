"use client";

import Image from "next/image";
import { ProfileData } from "@/config/cards";
import ContactButtons from "./ContactButtons";
import { downloadVCard } from "@/utils/vCardGenerator";

export default function WeWrapCard({ profile }: { profile: ProfileData }) {
  return (
    <div 
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 min-h-[85vh] flex flex-col bg-[#111111] text-slate-100"
    >
      {/* Carbon Fiber/Texture Background Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
          backgroundSize: '8px 8px'
        }}
      />

      <div className="relative z-10 flex flex-col items-center pt-12 px-6 pb-8 flex-1 w-full">
        
        {/* Photo in Hexagon/Industrial Shape with Ceramic Shine */}
        <div className="relative w-40 h-44 mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {/* Shine effect behind */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-slate-600 via-slate-300 to-slate-800 rounded-xl blur-sm opacity-50"></div>
          
          <div 
            className="absolute inset-0 bg-slate-900 border-2 border-slate-500 overflow-hidden"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="w-full h-full object-cover"
            />
            {/* Glossy overlay to simulate ceramic coating */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Industrial Typography */}
        <div className="text-center w-full mt-2">
          <h1 
            className="text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400 drop-shadow-sm uppercase"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            {profile.name}
          </h1>
          <h2 
            className="text-sm font-semibold mt-3 tracking-[0.2em] text-blue-400 uppercase"
            style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}
          >
            {profile.title}
          </h2>
        </div>

        {/* Expertise Section */}
        <div className="mt-8 w-full">
          <p className="text-xs text-center text-slate-500 uppercase tracking-widest mb-4">Expertise</p>
          <div className="flex justify-center gap-6 text-slate-300">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shadow-inner group-hover:border-blue-500 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-medium">Full Wrap</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shadow-inner group-hover:border-blue-500 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-medium">PPF</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shadow-inner group-hover:border-blue-500 transition-colors">
                <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
              </div>
              <span className="text-[10px] tracking-wider uppercase font-medium">Window Tint</span>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-[30px]" />

        {/* Social Buttons (Dark Mode Adapters) */}
        <div className="w-full mb-6 flex justify-center opacity-90">
          <ContactButtons profile={profile} />
        </div>

        {/* Metallic Action Button */}
        <button
          onClick={() => downloadVCard(profile)}
          className="relative w-full py-4 rounded-xl font-bold text-lg text-slate-900 shadow-[0_5px_20px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] mt-2 flex items-center justify-center gap-3 overflow-hidden border border-slate-300"
          style={{
            background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 50%, #94a3b8 100%)'
          }}
        >
          {/* Ceramic shine overlay for the button */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] translate-x-[-150%] animate-[shimmer_3s_infinite]" />
          
          <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span style={{ fontFamily: 'var(--font-orbitron), sans-serif' }} className="tracking-widest text-sm relative z-10">BOOK A QUOTE</span>
        </button>

        {/* Brand Logo as the Seal */}
        <div className="mt-8 mb-2 flex justify-center opacity-80">
          <Image 
            src="/logo-wewrap.png" 
            alt="We Wrap It For U" 
            width={120} 
            height={40} 
            className="object-contain"
          />
        </div>
      </div>

      {/* Basic Keyframes for Shimmer effect */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% {
            transform: translateX(150%) skewX(-20deg);
          }
        }
      `}} />
    </div>
  );
}
