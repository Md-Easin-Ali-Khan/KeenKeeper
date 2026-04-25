import { Geist } from "next/font/google"
import "./globals.css";

const geist = Geist({
  subsets: ['latin'],
})

export const metadata = {
  title: "Home Page"
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC]">

        {children}

      </body>
    </html>
  );
}
