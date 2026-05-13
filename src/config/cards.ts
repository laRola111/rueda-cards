export type SocialLinks = {
  whatsapp?: string;
  email?: string;
  instagram?: string;
  website?: string;
};

export type ThemeColors = {
  primary: string;
  secondary: string;
  text: string;
  background: string;
  buttonText: string;
};

export type ProfileData = {
  slug: string;
  name: string;
  title: string;
  company: string;
  bio?: string;
  address?: string;
  avatarUrl: string;
  social: SocialLinks;
  theme: ThemeColors;
  template?: 'rueda' | 'wewrap' | 'ingenio';
};

export const profiles: Record<string, ProfileData> = {
  "ingenio-gerente": {
    slug: "ingenio-gerente",
    name: "Andres Deaza",
    title: "Gerente",
    company: "Ingenio AD s.a.s.",
    bio: "Design that Shines",
    address: "Calle 18 N° 10 - 33 local 382",
    avatarUrl: "/ingenio_ceo.jpg",
    template: "ingenio",
    social: {
      whatsapp: "+57 3214914397",
      email: "contacto@mockup-ingenio.com",
      website: "mockup",
      facebook: "ingenioads",
      instagram: "ingenio_ad",
      tiktok: "ingenio_ad"
    },
    theme: {
      primary: "#eab308", // Mustard yellow
      secondary: "#000000",
      text: "#171717",
      background: "#ffffff",
      buttonText: "#000000"
    }
  },
  ceo: {
    slug: "ceo",
    name: "Patricia Martinez",
    title: "CEO",
    company: "Rueda La Rola Media",
    bio: "Liderando la visión y estrategia en Rueda La Rola Media.",
    address: "1706 Dungan Ln Suite A101, Austin, TX 78754",
    avatarUrl: "/Patricia_martinez.jpeg",
    template: "rueda",
    social: {
      whatsapp: "+14694286018",
      email: "patricia@ruedalarolamedia.com",
      instagram: "ruedalarola",
      website: "https://ruedalarolamedia.com"
    },
    theme: {
      primary: "#1e293b", // Slate 800
      secondary: "#334155", // Slate 700
      text: "#0f172a", // Slate 900
      background: "#ffffff",
      buttonText: "#ffffff"
    }
  },
  "wewrap-ceo": {
    slug: "wewrap-ceo",
    name: "Patricia Martinez",
    title: "CEO & Founder",
    company: "We Wrap It For U",
    address: "1706 Dungan Ln Suite A101, Austin, TX 78754",
    avatarUrl: "/Patricia_martinez.jpeg",
    template: "wewrap",
    social: {
      whatsapp: "+14694286018",
      email: "patricia@ruedalarolamedia.com",
      website: "https://ruedalarolamedia.com"
    },
    theme: {
      primary: "#111111", // Satin Black
      secondary: "#1e3a8a", // Blue accent
      text: "#f8fafc", // White/Silver
      background: "#0f172a", // Dark background fallback
      buttonText: "#ffffff"
    }
  },
  tecnologia: {
    slug: "tecnologia",
    name: "Nombre Tecnología",
    title: "Director de Tecnología",
    company: "Rueda La Rola Media",
    bio: "Desarrollando soluciones innovadoras para nuestros clientes.",
    avatarUrl: "https://ui-avatars.com/api/?name=Tecnologia&background=random&size=200",
    template: "rueda",
    social: {
      whatsapp: "1234567890",
      email: "tech@ruedalarola.com",
      instagram: "ruedalarola"
    },
    theme: {
      primary: "#0369a1", // Sky 700
      secondary: "#0284c7", // Sky 600
      text: "#0c4a6e", // Sky 900
      background: "#f0f9ff", // Sky 50
      buttonText: "#ffffff"
    }
  },
  contaduria: {
    slug: "contaduria",
    name: "Nombre Contaduría",
    title: "Director de Contaduría",
    company: "Rueda La Rola Media",
    bio: "Gestión financiera y administrativa.",
    avatarUrl: "https://ui-avatars.com/api/?name=Contaduria&background=random&size=200",
    template: "rueda",
    social: {
      whatsapp: "1234567890",
      email: "contaduria@ruedalarola.com"
    },
    theme: {
      primary: "#15803d", // Green 700
      secondary: "#16a34a", // Green 600
      text: "#14532d", // Green 900
      background: "#f0fdf4", // Green 50
      buttonText: "#ffffff"
    }
  },
  diseno: {
    slug: "diseno",
    name: "Nombre Diseño",
    title: "Director de Diseño",
    company: "Rueda La Rola Media",
    bio: "Creando identidades visuales impactantes.",
    avatarUrl: "https://ui-avatars.com/api/?name=Diseno&background=random&size=200",
    template: "rueda",
    social: {
      whatsapp: "1234567890",
      email: "diseno@ruedalarola.com",
      instagram: "ruedalarola"
    },
    theme: {
      primary: "#be185d", // Pink 700
      secondary: "#db2777", // Pink 600
      text: "#831843", // Pink 900
      background: "#fdf2f8", // Pink 50
      buttonText: "#ffffff"
    }
  }
};
