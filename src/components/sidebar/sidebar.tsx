"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "@/components/search";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils/classes";
import { siteConfig } from "@/config";

// import { useRouter } from "next/navigation";
// import { useUpdateUrlWithoutNavigation } from "@/hooks/use-a";
// import { useActiveItem } from "@/hooks/use-active-item";

interface SidebarProps {
  items: {
    id: string;
    href: string;
    label: string;
    items?: {
      id: string;
      href: string;
      label: string;
    }[];
  }[];
}

export const Sidebar = (props: SidebarProps) => {
  const { items } = props;

  // const router = useRouter();
  // const { activeItem } = useActiveItem([]);
  // const activeItem = "library"
  const [activeItem, setActiveItem] = React.useState("library");
  // useUpdateUrlWithoutNavigation(`/${activeItem}`);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    item: { id: string; href: string }
  ) => {
    e.preventDefault();
    setActiveItem(item.id);
    // const href = e.currentTarget.getAttribute("href");
    // if (!href) return;

    // const section = document.getElementById(href.slice(1));
    // if (section) {
    //   section.scrollIntoView();
    // } else {
    //   router.push(href);
    // }
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
        <div className="mt-4 space-y-2">
          {items.map((item) => (
            <>
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "group flex items-center justify-between rounded-lg px-3 py-1.5 text-sm font-bold",
                  {
                    "bg-accent text-accent-foreground": item.id === activeItem,
                    "font-normal": !item.items,
                  }
                )}
                onClick={(e) => handleClick(e, item)}
              >
                {item.label}
              </Link>
              {item.items &&
                item.items.length > 0 &&
                item.items.map((subItem) => {
                  return (
                    <Link
                      key={subItem.id}
                      href={subItem.href}
                      className={cn(
                        "subItems-center group ml-2 flex justify-between rounded-lg px-3 py-1.5 text-sm",
                        subItem.id === activeItem
                          ? "bg-accent text-accent-foreground"
                          : ""
                      )}
                      onClick={(e) => handleClick(e, subItem)}
                    >
                      {subItem.label}
                    </Link>
                  );
                })}
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
