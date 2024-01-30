// "use client";
import React from "react";
import { MDX } from "@/components/mdx";

interface SectionsViewProps {
  sections: {
    id: string;
    title: string;
    content: string;
  }[];
  currentSectionId: string;
}

export const SectionsView = (props: SectionsViewProps) => {
  const { sections, currentSectionId } = props;

  // const sectionRef = React.useRef<HTMLElement>(null);

  // React.useEffect(() => {
  //   if (sectionRef.current) sectionRef.current.scrollIntoView();
  // }, [sections]);

  return (
    <main className="prose prose-quoteless prose-neutral dark:prose-invert prose-lead:leading-none max-w-full">
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          // ref={section.id === currentSectionId ? sectionRef : undefined}
        >
          <h2>{section.title}</h2>
          {section.content && <MDX source={section.content} />}
        </section>
      ))}
    </main>
  );
};
