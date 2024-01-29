"use client";

import React from "react";
import Link from "next/link";
import { categories } from "content/content";
import { SearchInput } from "@/components/search-input";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUpdateUrlWithoutNavigation } from "@/hooks/use-a";
import { useActiveItem } from "@/hooks/use-active-item";
import { cn } from "@/utils/classes";

// import { Footer } from "@/components/footer";
// import { Header } from "@/components/header";

export default function Appayout({ children }: { children: React.ReactNode }) {
  const activeItem = useActiveItem(categories.map((category) => category.href.slice(1)));
  useUpdateUrlWithoutNavigation(activeItem);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;
    const section = document.getElementById(href.slice(1));
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <div>
      <div className="fixed left-0 top-0 ">
        <ScrollArea type="always" className="h-screen w-72 border-r p-4">
          <ThemeToggle />
          <SearchInput className="sticky" />
          {activeItem}
          {categories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-lg p-2",
                item.href === "/" ? "bg-black text-white" : ""
              )}
              onClick={handleClick}
            >
              {item.label}
            </Link>
          ))}
        </ScrollArea>
      </div>
      <div className="pl-72">{children}</div>
    </div>
  );
}
