import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/Navbar/NavBar";
import { Footer } from "../components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Creative and user-focused UX/UI Designer crafting intuitive digital experiences. Explore my portfolio of design projects, case studies, and prototypes. Let's build seamless, beautiful interfaces together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${geistSans.className}  antialiased  bg-[#fffff]`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

// bg-[#f8f8f8]