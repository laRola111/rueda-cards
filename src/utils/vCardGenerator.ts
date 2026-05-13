import { ProfileData } from "@/config/cards";

export const generateVCard = (profile: ProfileData): string => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:;${profile.name};;;`,
    `FN:${profile.name}`,
    `ORG:${profile.company}`,
    `TITLE:${profile.title}`,
  ];

  if (profile.social.whatsapp) {
    vcard.push(`TEL;type=CELL;type=VOICE;type=pref:${profile.social.whatsapp}`);
  }

  if (profile.social.email) {
    vcard.push(`EMAIL;type=INTERNET;type=WORK;type=pref:${profile.social.email}`);
  }

  if (profile.social.website) {
    vcard.push(`URL:${profile.social.website}`);
  }

  if (profile.social.instagram) {
    vcard.push(`X-SOCIALPROFILE;type=instagram:https://instagram.com/${profile.social.instagram}`);
  }

  if (profile.bio) {
    vcard.push(`NOTE:${profile.bio}`);
  }

  if (profile.address) {
    vcard.push(`ADR;type=WORK:;;${profile.address};;;;`);
  }

  vcard.push("END:VCARD");

  return vcard.join("\n");
};

export const downloadVCard = async (profile: ProfileData) => {
  const vcardData = generateVCard(profile);
  const fileName = `${profile.name.replace(/\s+/g, '_')}.vcf`;
  const file = new File([vcardData], fileName, { type: "text/vcard" });

  // Try using the Web Share API (native share sheet on mobile)
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: `${profile.name} - Contacto`,
      });
      return; // Success, exit early
    } catch (err) {
      console.log('Share failed or was cancelled', err);
      // If share fails, we continue to the fallback download method below
    }
  }

  // Fallback: standard web download (desktop)
  const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
