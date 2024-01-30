import React from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { getAllSections } from "@/lib/sections";

export default function Appayout({ children }: { children: React.ReactNode }) {
  const sections = getAllSections({ includeContent: false, subject: "front-end" });

  return (
    <div>
      <Sidebar
        sections={sections.map((section) => ({
          id: section.slug,
          href: `/${section.slug}`,
          label: section.metadata.title,
        }))}
      />
      <div className="pl-60">
        <Header />
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
