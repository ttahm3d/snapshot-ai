import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/common/Header/Header";

const fonts = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  // weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Snapshot AI",
  description: "AI assistant that helps you curate your Appraisal Summaries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
