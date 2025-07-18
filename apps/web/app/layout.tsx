import type { Metadata } from "next";
import localFont from "next/font/local";
import { headers } from "next/headers";
import { TRPCReactProvider } from "../trpc/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TRPCReactProvider headers={await headers()}>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
