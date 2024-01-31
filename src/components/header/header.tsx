"use client";

import React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config";
import { UserAvatar } from "@/modules/auth/components/user-avatar";
import { useSession } from "@/modules/auth/hooks";
import { HeaderMenu } from "./menu";
import { Nav } from "./nav";

export const Header = () => {
  const { status } = useSession();

  return (
    <header className="sticky top-0 z-50 border-b bg-card text-card-foreground shadow-sm">
      <div className="container mx-auto flex h-12 w-full max-w-[1400px] items-center justify-between py-2">
        <div className="flex justify-start md:w-[200px]"></div>
        <Nav items={siteConfig.header.nav.links} className="hidden md:block" />
        <div className="flex items-center justify-end space-x-4 md:w-[200px]">
          {status === "unauthenticated" && (
            <Button asChild size="sm" variant="default" className="hidden md:inline-flex">
              <Link href="/login">Se connecter</Link>
            </Button>
          )}
          <HeaderMenu>
            <Button variant="ghost" size="icon">
              {status === "authenticated" ? (
                <UserAvatar />
              ) : status === "unauthenticated" ? (
                <MenuIcon />
              ) : null}
            </Button>
          </HeaderMenu>
        </div>
      </div>
    </header>
  );
};
