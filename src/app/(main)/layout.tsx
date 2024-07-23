"use client";

import { Loader } from "@/components/loader";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Loader size="md" />
      </div>
    );
  }
  if (!isAuthenticated) {
    redirect("/");
  }

  return <div>{children}</div>;
};
export default MainLayout;
