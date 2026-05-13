import { profiles } from "@/config/cards";
import BusinessCard from "@/components/BusinessCard";
import WeWrapCard from "@/components/WeWrapCard";
import IngenioCard from "@/components/IngenioCard";
import { notFound } from "next/navigation";

// Generar rutas estáticas en build time (opcional, pero recomendado para performance)
export function generateStaticParams() {
  return Object.keys(profiles).map((slug) => ({
    slug,
  }));
}

export default async function CardPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const profile = profiles[slug];

  if (!profile) {
    notFound();
  }

  if (profile.template === "wewrap") {
    return <WeWrapCard profile={profile} />;
  }

  if (profile.template === "ingenio") {
    return <IngenioCard profile={profile} />;
  }

  return <BusinessCard profile={profile} />;
}
