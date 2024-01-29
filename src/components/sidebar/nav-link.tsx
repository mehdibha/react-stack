"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRightIcon, AtSignIcon } from "lucide-react";
import { cn } from "@/utils/classes";

export const NavigationLink = () => {
  return (
    <Link
      key={href}
      href={href}
      className={cn(
        "group flex items-center justify-between rounded-lg p-2",
        isActive ? "bg-black text-white" : "hover:bg-gray-200"
      )}
    >
      <span className="flex items-center gap-2">
        {iconCmp}
        <span className={cn("font-medium", isActive && "text-white")}>{label}</span>
      </span>
      {shortcutNumber && (
        <span
          className={cn(
            "hidden h-5 w-5 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid",
            isActive &&
              "border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600"
          )}
          title={`Shortcut key: ${shortcutNumber}`}
        >
          {shortcutNumber}
        </span>
      )}
    </Link>
  );
};
