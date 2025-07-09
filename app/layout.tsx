import type { Metadata } from "next";
import { Fonts } from "@/lib/fonts";
import "../styles/globals.css";

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
      <body className={`${Fonts.geistSans} ${Fonts.geistMono} antialiased`}>
        {children}
      </body>
    </html>
  );
}
