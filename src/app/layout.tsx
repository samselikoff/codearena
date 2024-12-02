import Logo from "@/components/logo";
import type { Metadata } from "next";
import { Tektur } from "next/font/google";
import "./globals.css";

const tektur = Tektur({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-tektur",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tektur.variable}`}>
      <body className="bg-gray-300 text-gray-500 antialiased">
        <header className="px-4 py-2">
          <Logo />
        </header>
        <main className="px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
