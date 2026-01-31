import type { Metadata } from "next";
import { Arimo, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import MobileMenu from "@/components/layout/MobileMenu";
import ProjectTransition from "@/components/transition/ProjectTransition";
import "./globals.css";

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nate Borwick",
  description: "Developer and Designer",
  openGraph: {
    images: ["/media/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${arimo.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" type="image/x-icon" href="/media/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-[family-name:var(--font-arimo)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <MobileMenu />
          <ProjectTransition />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
