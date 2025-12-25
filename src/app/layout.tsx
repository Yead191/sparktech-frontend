import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AntProvider from "@/lib/context/AntProvider";
import { Toaster } from "sonner";
import LenisProvider from "@/lib/context/LenisProvider";
// import dynamic from 'next/dynamic'

// const SmoothScrollProvider = dynamic(
//   () => import('@/ui/SmoothScrollProvider')
// )

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "Sparktech Agency",
  description:
    "An Experience Design Agency focusing on building functional, simple, human-centered digital products for future.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntProvider>
      <html lang="en">
        <body className={`${poppins.variable}  antialiased`}>
          <Toaster position="top-center" duration={2000} />
          <LenisProvider>
            {children}
          </LenisProvider>
        </body>
      </html>
    </AntProvider>
  );
}
