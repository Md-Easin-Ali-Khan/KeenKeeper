import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TimelineProvider } from "@/context/TimelineContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Page"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">
        <TimelineProvider>

          {children}

          <Toaster></Toaster>
        </TimelineProvider>
      </body>
    </html>
  );
}
