import type { Metadata } from "next";
import { Fonts } from "@/lib/fonts";
import "../styles/globals.css";
import { cn } from "@/utils/cn";
import { ImAppleinc } from "react-icons/im";
import { BiLogoApple } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { IoLogoWindows } from "react-icons/io5";
import { TbBrandWindowsFilled } from "react-icons/tb";

export const metadata: Metadata = {
  title: "OS Portfolio – Emmanuel Odewale",
  description:
    "A portfolio website inspired by operating systems, showcasing the projects and skills of Emmanuel Odewale.",
  authors: [
    { name: "Emmanuel Odewale", url: "https://github.com/Odewale-Emmanuel" },
  ],
  keywords: [
    "operating system",
    "portfolio",
    "web developer",
    "Emmanuel Odewale",
    "Odewale Emmanuel",
    "odewale_mdee",
    "software engineer",
    "frontend",
    "backend",
    "fullstack",
    "projects",
    "personal website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          Fonts.geistSans.className,
          Fonts.geistMono.className,
          Fonts.prompt.className,
          Fonts.inter.className,
          Fonts.roboto.className,
          "antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
