"use client";

import { ProfileData } from "@/config/cards";

export default function ContactButtons({ profile }: { profile: ProfileData }) {
  const { social, theme } = profile;

  return (
    <div className="flex justify-center gap-4 mt-6">
      {social.whatsapp && (
        <a
          href={`https://wa.me/${social.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-105 shadow-md"
          style={{ backgroundColor: theme.primary, color: theme.buttonText }}
          aria-label="WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
             <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.12.548 4.186 1.587 6.009L.416 22.5l4.636-1.215c1.745.96 3.738 1.467 5.795 1.467 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 20.893c-1.802 0-3.565-.484-5.111-1.401l-.367-.217-3.447.904.92-3.361-.238-.378a9.882 9.882 0 01-1.51-5.35c0-5.464 4.444-9.908 9.908-9.908 5.463 0 9.907 4.444 9.907 9.908 0 5.463-4.444 9.908-9.907 9.908zm5.441-7.447c-.298-.15-1.765-.872-2.038-.971-.274-.1-.473-.15-.672.15-.2.298-.771.971-.945 1.17-.174.199-.348.224-.647.075-2.008-1.006-3.418-1.921-4.71-3.69-.174-.249-.019-.385.131-.534.135-.134.298-.348.448-.522.149-.174.199-.298.298-.497.099-.199.05-.373-.025-.522-.075-.15-.672-1.62-.921-2.218-.243-.585-.487-.506-.672-.515-.174-.009-.373-.009-.572-.009-.199 0-.522.075-.796.373-.274.298-1.045 1.021-1.045 2.489s1.07 2.888 1.219 3.087c.149.199 2.104 3.21 5.097 4.501 2.21.956 3.033.847 3.582.722.684-.155 1.765-.722 2.014-1.42.249-.697.249-1.295.174-1.42-.074-.124-.273-.199-.572-.348z" />
          </svg>
        </a>
      )}

      {social.email && (
        <a
          href={`mailto:${social.email}`}
          className="w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-105 shadow-md"
          style={{ backgroundColor: theme.primary, color: theme.buttonText }}
          aria-label="Email"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M2 5.5V18.5C2 19.3284 2.67157 20 3.5 20H20.5C21.3284 20 22 19.3284 22 18.5V5.5C22 4.67157 21.3284 4 20.5 4H3.5C2.67157 4 2 4.67157 2 5.5ZM20 6.43825L12 11.7716L4 6.43825V5.5H20V6.43825ZM4 8.2482L12 13.5815L20 8.2482V18.5H4V8.2482Z" />
          </svg>
        </a>
      )}

      {social.instagram && (
        <a
          href={`https://instagram.com/${social.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-105 shadow-md"
          style={{ backgroundColor: theme.primary, color: theme.buttonText }}
          aria-label="Instagram"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </a>
      )}
    </div>
  );
}
