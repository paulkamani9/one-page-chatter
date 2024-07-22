"use client";

import { Loader } from "@/components/loader";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    <div className="w-full h-full flex items-center justify-center">
      return <Loader size="md" />
    </div>;
  }

  if(!isAuthenticated){
    redirect("/")
  }

  return <div>{children}</div>;
};
export default MainLayout;
