"use client";

import { Footer } from "@/components/Landing/footer";
import { Header } from "@/components/Landing/header";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="w-full min-h-full flex flex-col items-center">
      <Header />
      <div className="flex flex-col items-center justify-center mt-[144px] gap-4">
        <h2 className="font-semibold text-2xl lg:text-4xl">Landing Page</h2>
        <div className="flex flex-col items-center justify-center gap-4  px-10 py-24 bg-slate-200 rounded-md shadow-md dark:bg-slate-600">
          <p className="font-semibold text-xl  lg:text-2xl">Hello Hakacthon</p>
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <Button className="w-full font-semibold">Sign in</Button>
            </SignInButton>
          )}
          {isLoading && <Loader size="md" />}
          {isAuthenticated && !isLoading && (
            <Button className="w-full font-semibold">
              <Link
                href="/chatter"
                className=" flex items-center justify-center"
              >
                Enter Compilers <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
