import type { Metadata } from "next";
import { Outfit} from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "DevDeck- Share your projects with the world & Discover what is being launched",
  description: "A project showcase app where an user can share their projects and discover what is being launched",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfit.className} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
