"use client";

import { LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "../mode-toggle";
import { Button } from "../ui/button";

export const Navbar = () => {
  return (
    <nav className="h-14 w-full dark:bg-slate-800 flex items-center justify-between fixed z-[50]">
      <div>
        <p className="text-2xl ml-4">Logo</p>
      </div>
      <div className="mr-4 flex gap-4 items-center">
        <Button className="md:mr-20 mr-8">Add chatter</Button>
        <UserButton />
        <ModeToggle />
      </div>
    </nav>
  );
};
