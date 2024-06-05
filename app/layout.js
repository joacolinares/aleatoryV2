import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aleatory",
  description: "Aleatory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} !font-[morePerfect] bg-black relative`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
