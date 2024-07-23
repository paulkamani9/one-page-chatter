
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-providers";

const font = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Our app here",
  description: "Fred Sam Paul, at a hackathon",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/next.svg", //our light mode logo goes here
        href: "/next.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/next.svg", //our dark mode logo goes here
        href: "/vercel.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className, "antialiased")}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="chat app"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
