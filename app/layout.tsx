import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import { LoadingProvider } from "@/components/LoadingContext";
import { AuthProvider } from "@/context/AuthContext";
import AdminLoginModal from "@/components/AdminLoginModal";
import CookieConsentBanner from "@/components/CookieConsentBanner";

const playfairDisplay = Playfair_Display({ subsets: ['cyrillic'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Fincom Africa - ICT Solutions",
  description: "Created by Mark, a Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LoadingProvider>
      <AuthProvider>
    <html lang="en">
      <body
        className={`${playfairDisplay.className} ${poppins.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Preloader />
        <Navbar />
        <CustomCursor />
          <AdminLoginModal />
        {children}
        <CookieConsentBanner />
        <Footer />
      </body>
    </html>
    </AuthProvider>
    </LoadingProvider>
  );
}