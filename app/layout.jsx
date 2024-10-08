import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";
import Providers from "./Providers";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "Eze Ebuka Jude",
  description: "Welcome to my Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={outfit.className}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <Providers>
            <Header />
              {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
