import type { Metadata } from "next";
import { Geist, Geist_Mono, STIX_Two_Text, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* The book face — STIX Two Text is the scientific publishing serif
   (same design lineage as the STIX math fonts, sits naturally next to KaTeX). */
const stixSerif = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

/* Handwritten chalkboard & notebook study font for sketches and diagrams */
const caveatFont = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "StudyVerse — Master Every Book, Interactively",
  description:
    "The interactive study platform for mastering textbooks. Full master content from your books — logic, proofs, sets, algorithms, number theory, counting, probability, relations, graphs, trees, Boolean algebra and computation — with 3D animations, interactive diagrams, labs and quizzes.",
  keywords: [
    "study",
    "discrete mathematics",
    "Rosen",
    "interactive learning",
    "logic",
    "graphs",
    "algorithms",
    "quizzes",
  ],
  authors: [{ name: "StudyVerse" }],
  openGraph: {
    title: "StudyVerse — Master Every Book, Interactively",
    description:
      "Interactive master content, 3D visualizations, labs and quizzes for your entire book library.",
    siteName: "StudyVerse",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${stixSerif.variable} ${caveatFont.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
