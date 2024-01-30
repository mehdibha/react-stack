import React from "react";
import { notFound } from "next/navigation";
import { SectionsView } from "@/components/sections-view";
import { getAllSections, getSectionBySlug } from "@/lib/sections";

export default function SectionPage({ params }: { params: { slug: string } }) {
  const currentSection = getSectionBySlug({
    slug: params.slug ?? "intro",
    subject: "front-end",
  });

  if (!currentSection) return notFound();

  const sections = getAllSections({ includeContent: true, subject: "front-end" });

  return (
    <SectionsView
      sections={sections.map((section) => ({
        id: section.slug,
        title: section.metadata.title,
        content: section.content,
      }))}
      currentSectionId={params.slug}
    />
  );
}
