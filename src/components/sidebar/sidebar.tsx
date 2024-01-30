"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "@/components/search";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUpdateUrlWithoutNavigation } from "@/hooks/use-a";
import { useActiveItem } from "@/hooks/use-active-item";
import { cn } from "@/utils/classes";
import { siteConfig } from "@/config";

interface SidebarProps {
  sections: {
    id: string;
    href: string;
    label: string;
  }[];
}

export const Sidebar = (props: SidebarProps) => {
  const { sections } = props;

  const router = useRouter();
  const { activeItem } = useActiveItem(sections.map((section) => section.id));
  useUpdateUrlWithoutNavigation(`/${activeItem}`);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const section = document.getElementById(href.slice(1));
    if (section) {
      section.scrollIntoView();
    } else {
      router.push(href);
    }
  };

  return (
    <div className="fixed left-0 top-0 bg-background">
      <ScrollArea type="always" className="h-screen w-60 border-r p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="duration-150 hover:opacity-80">
            <Image
              src={siteConfig.global.logo}
              alt={siteConfig.global.name}
              width={60}
              height={80}
              className="h-[32px] w-[30px] object-contain"
            />
          </Link>
          <ThemeToggle />
        </div>
        <Search className="mt-4" />
        <div className="mt-4">
          {sections.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center justify-between rounded-lg p-2 text-sm",
                item.id === activeItem ? "bg-accent text-accent-foreground" : ""
              )}
              onClick={handleClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
