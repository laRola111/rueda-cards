"use client";

import Image from "next/image";
import { ProfileData } from "@/config/cards";

export default function IngenioCard({ profile }: { profile: ProfileData }) {
  return (
    <div className="min-h-[100dvh] w-full max-w-[420px] mx-auto bg-white flex flex-col font-sans relative overflow-x-hidden shadow-[0_0_50px_rgba(0,0,0,0.05)]">
      
      {/* Abstract Background Branding */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        {/* Left: Circuit lines */}
        <svg className="absolute -left-12 top-10 w-64 h-64 text-black" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M-20,40 L20,40 L30,20 L60,20" />
          <path d="M-20,60 L20,60 L30,80 L60,80" />
          <circle cx="20" cy="40" r="1.5" />
          <circle cx="60" cy="20" r="1.5" />
          <circle cx="20" cy="60" r="1.5" />
          <circle cx="60" cy="80" r="1.5" />
        </svg>
        {/* Right: Lightbulb watermark */}
        <svg className="absolute -right-20 bottom-10 w-64 h-64 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 21h6m-3-18c-3.866 0-7 3.134-7 7 0 2.22.95 4.22 2.472 5.59C9.284 16.327 10 17.585 10 19v1h4v-1c0-1.415.716-2.673 1.528-3.41C17.05 14.22 18 12.22 18 10c0-3.866-3.134-7-7-7z" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center pt-5 px-6 pb-4 flex-1">
        
        {/* Top Logo Section */}
        <div className="flex flex-col items-center mb-3">
          <img 
            src="/ingenio_logo.png" 
            alt="Ingenio AD Logo" 
            className="h-16 object-contain drop-shadow-sm"
          />
        </div>

        {/* Profile Image */}
        <div className="relative w-24 h-24 mb-2">
          <div className="absolute inset-[-4px] rounded-full border border-yellow-500/20 pointer-events-none" />
          <div className="absolute inset-[-2px] rounded-full border border-yellow-400 pointer-events-none shadow-[0_0_15px_rgba(234,179,8,0.2)]" />
          <div className="w-full h-full rounded-full overflow-hidden bg-white shadow-md">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="w-full h-full object-cover scale-105"
            />
          </div>
        </div>

        {/* Name & Position */}
        <div className="text-center w-full mb-3">
          <h1 className="text-lg font-black tracking-widest text-black mb-0.5 uppercase">
            {profile.name}
          </h1>
          <h2 className="text-[10px] font-semibold tracking-[0.3em] text-yellow-500 uppercase">
            {profile.title}
          </h2>
        </div>

        {/* Contact Information Section */}
        <div className="w-full flex flex-col items-start gap-0 mb-3 px-1 relative">
          {/* Subtle left decorative border */}
          <div className="absolute left-0 top-1 bottom-1 w-0.5 bg-gradient-to-b from-yellow-500/0 via-yellow-400 to-yellow-500/0 rounded-full"></div>
          
          <div className="flex flex-col w-full pl-3 text-[11px] text-slate-700 font-normal">
            {profile.social.whatsapp && (
              <div className="flex items-center gap-2 py-1.5 w-full border-b border-slate-100 group">
                <svg className="w-3.5 h-3.5 text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className="tracking-wide text-black group-hover:text-yellow-600 transition-colors">
                  {profile.social.whatsapp.replace(/^(\+57)(\d{3})(\d{3})(\d{4})$/, '$1 $2 $3 $4')}
                </span>
              </div>
            )}
            {profile.social.email && (
              <div className="flex items-center gap-2 py-1.5 w-full border-b border-slate-100 group">
                <svg className="w-3.5 h-3.5 text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="tracking-wide text-black group-hover:text-yellow-600 transition-colors truncate">{profile.social.email}</span>
              </div>
            )}
            {profile.social.website && (
              <div className="flex items-center gap-2 py-1.5 w-full border-b border-slate-100 group">
                <svg className="w-3.5 h-3.5 text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                <span className="tracking-wide text-black group-hover:text-yellow-600 transition-colors">{profile.social.website}</span>
              </div>
            )}
            {profile.address && (
              <div className="flex items-start gap-2 py-1.5 w-full group">
                <svg className="w-3.5 h-3.5 text-yellow-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="tracking-wide text-black group-hover:text-yellow-600 transition-colors leading-relaxed pr-2">{profile.address}</span>
              </div>
            )}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="w-full flex flex-col items-center mb-3 relative">
          {/* Yellow Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-yellow-400/10 blur-2xl rounded-full pointer-events-none"></div>
          
          <div className="relative w-36 h-36 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] p-2 border border-yellow-400/50 flex items-center justify-center transition-transform hover:scale-[1.02] duration-300 group">
            <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <img src="/qr_ingenio.png" alt="Scan QR Code" className="w-full h-full object-contain" />
          </div>
          <p className="text-[8px] text-slate-500 uppercase tracking-[0.2em] font-medium mt-2">Scan for Full Profile & Portfolio</p>
        </div>

        {/* WhatsApp CTA Button */}
        {profile.social.whatsapp && (
          <a
            href={`https://wa.me/${profile.social.whatsapp.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold text-[12px] tracking-widest uppercase py-2.5 rounded-xl mb-3 transition-all duration-300 shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] active:scale-[0.98]"
          >
            <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escribir por WhatsApp
          </a>
        )}

        <div className="flex-1" />

        {/* Social Media & Footer */}
        <div className="w-full flex flex-col items-center pt-3 border-t border-slate-100">
          <div className="flex gap-4 mb-2">
            {profile.social.facebook && (
              <a href={`https://facebook.com/${profile.social.facebook}`} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-md">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            )}
            {profile.social.instagram && (
              <a href={`https://instagram.com/${profile.social.instagram}`} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-md">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            )}
            {profile.social.tiktok && (
              <a href={`https://tiktok.com/@${profile.social.tiktok}`} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 shadow-md">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            )}
          </div>
          <p className="text-[8px] uppercase tracking-[0.3em] text-slate-400 font-light">INGENIO ADS SAS</p>
        </div>
      </div>

    </div>
  );
}
