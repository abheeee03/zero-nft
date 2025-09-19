import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import WalletProvider from "@/components/WalletProvider";

const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "A Cool NFT Store",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <WalletProvider>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            >
            
        {children}
          </ThemeProvider>
              </WalletProvider>
      </body>
    </html>
  );
}
