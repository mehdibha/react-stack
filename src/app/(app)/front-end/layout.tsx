import React from "react";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

// import { getAllSections } from "@/lib/sections";

export default function Appayout({ children }: { children: React.ReactNode }) {
  // const sections = getAllSections({ includeContent: false, subject: "front-end" });

  return (
    <div>
      <Sidebar
        items={[
          {
            id: "getting_started",
            label: "Getting started",
            href: "/front-end/getting_started",
          },
          {
            id: "boilerplate",
            label: "Boilerplate",
            href: "/front-end/boilerplate",
            items: [
              {
                id: "language",
                label: "Choose your language",
                href: "/front-end/language",
              },
              { id: "library", label: "Select a library", href: "/front-end/language" },
              { id: "framework", label: "Pick a framework", href: "/front-end/language" },
              { id: "tools", label: "Language", href: "/front-end/language" },
            ],
          },
        ]}
      />
      <div className="pl-60">
        <Header />
        <div className="container">{children}</div>
      </div>
    </div>
  );
}
