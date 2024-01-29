"use client";

import React from "react";
import { notFound } from "next/navigation";
import { categories } from "content/content";

export default function HomePage({ params }: { params: { slug: string } }) {
  const sectionRef = React.useRef<HTMLElement>(null);

  const category = categories.findIndex(
    (category) => category.href.slice(1) === params.slug
  );

  const initialToShow = categories.slice(category, category + 3);
  const [toShow, setToShow] = React.useState(initialToShow);

  React.useEffect(() => {
    setToShow(categories);
  }, []);

  React.useEffect(() => {
    if (sectionRef.current) sectionRef.current.scrollIntoView();
  }, [toShow]);

  // React.useEffect(() => {
  //   if (sectionRef.current) sectionRef.current.scrollIntoView();
  // }, [params.slug]);

  if (category < 0) notFound();

  return (
    <div>
      <h1 className="text-center text-3xl">Choose your stack</h1>
      {toShow.map((category) => (
        <section
          key={category.href}
          id={category.href.slice(1)}
          ref={category.href.slice(1) === params.slug ? sectionRef : undefined}
          className="h-[500px]"
        >
          <h2 className="block p-4">{category.label}</h2>
        </section>
      ))}
    </div>
  );
}
