import React from "react";
import { FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/utils/classes";

interface SearchProps {
  className?: string;
}

export const Search = (props: SearchProps) => {
  const { className } = props;

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-32 justify-start w-full bg-card text-sm font-normal text-muted-foreground",
          className
        )}
        onClick={() => setOpen(true)}
      >
        <span>Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {/* {docsConfig.mainNav
              .filter((navitem) => !navitem.external)
              .map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <FileIcon className="mr-2 h-4 w-4" />
                  {navItem.title}
                </CommandItem>
              ))} */}
          </CommandGroup>
          {/* <CommandSeparator /> */}
        </CommandList>
      </CommandDialog>
    </>
  );
};
