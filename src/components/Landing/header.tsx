"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Loader } from "@/components/loader";
import Link from "next/link";

export const Header = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="h-[56px] z-50 fixed w-full flex items-center justify-between">
      <div className="pl-4">
        <p className="text-xl font-bold">Logo</p>
      </div>
      <div className="pr-2 flex gap-x-2 items-center">
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button variant="ghost">Sign In</Button>
          </SignInButton>
        )}
        {isLoading && <Loader />}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost">
              <Link href="/chatter">Enter Compilers</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <ModeToggle />
      </div>
    </div>
  );
};
