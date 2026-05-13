"use client";

import Image from "next/image";
import { ProfileData } from "@/config/cards";
import ContactButtons from "./ContactButtons";
import { downloadVCard } from "@/utils/vCardGenerator";

export default function BusinessCard({ profile }: { profile: ProfileData }) {
  const { theme } = profile;

  return (
    <div 
      className="relative w-full overflow-hidden rounded-3xl shadow-2xl transition-all duration-300 min-h-[85vh] flex flex-col bg-white"
      style={{ color: theme.text }}
    >
      {/* Top Half Area */}
      <div className="relative w-full pt-6 pb-4">
        {/* Discreet Logo Top Right */}
        <div className="absolute top-6 right-6 z-20 opacity-80 hover:opacity-100 transition-opacity">
          <Image 
            src="/logo-rueda.png" 
            alt="Rueda La Rola Media" 
            width={48} 
            height={48} 
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-4 mt-4 px-6 relative z-10">
          {/* Asymmetric Photo with Gradient Border */}
          <div className="relative inline-block w-[140px] h-[160px]">
            {/* Gradient Border Background that 'hugs' the image */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-blue-500 rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[20px] rounded-br-[20px] scale-[1.04]" />
            {/* The actual image container with the same organic shape */}
            <div className="absolute inset-0 bg-white overflow-hidden rounded-tr-[80px] rounded-bl-[80px] rounded-tl-[20px] rounded-br-[20px]">
              <img 
                src={profile.avatarUrl} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name & Title, starting fluidly where the photo ends */}
          <div className="mt-2 text-left">
            <h1 
              className="text-4xl sm:text-5xl font-bold tracking-tight leading-none text-slate-800"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {profile.name.split(' ').map((word, i) => (
                <span key={i} className={i > 0 ? "block text-pink-600 mt-1" : "block"}>
                  {word.toUpperCase()}
                </span>
              ))}
            </h1>
            <h2 
              className="text-lg sm:text-xl font-medium mt-3 text-slate-500 tracking-wide uppercase"
            >
              {profile.title}
            </h2>
            {profile.company && (
              <p className="text-xs uppercase tracking-widest mt-1 opacity-60 font-semibold text-blue-600">
                {profile.company}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Spacer for elegance */}
      <div className="h-4 sm:h-8" />

      {/* Bottom Half Area: Contact Data and Whitespace */}
      <div className="flex-1 px-6 pb-10 flex flex-col items-center justify-between">
        
        {/* Contact Info Text List */}
        <div className="w-full space-y-4 mb-8 text-sm sm:text-base text-slate-600 text-left pl-2 border-l-2 border-pink-100">
          {profile.social.whatsapp && (
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>{profile.social.whatsapp.replace('+1', '')}</span>
            </div>
          )}
          {profile.social.email && (
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>{profile.social.email}</span>
            </div>
          )}
          {profile.address && (
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-pink-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="max-w-[220px] leading-snug">{profile.address}</span>
            </div>
          )}
          {profile.social.website && (
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              <a href={profile.social.website} target="_blank" rel="noreferrer" className="underline decoration-pink-300 underline-offset-4">{profile.social.website.replace('https://', '')}</a>
            </div>
          )}
        </div>

        {/* Social Buttons Block */}
        <div className="w-full mb-6 flex justify-center">
          <ContactButtons profile={profile} />
        </div>

        {/* Add to Contacts Button */}
        <button
          onClick={() => downloadVCard(profile)}
          className="w-full py-4 rounded-2xl font-semibold text-lg text-white shadow-[0_10px_30px_-10px_rgba(236,72,153,0.5)] transition-all hover:shadow-[0_15px_40px_-15px_rgba(59,130,246,0.6)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] mt-2 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-blue-500"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span style={{ fontFamily: 'var(--font-playfair), serif' }} className="tracking-wide">Añadir a Contactos</span>
        </button>
      </div>
    </div>
  );
}
