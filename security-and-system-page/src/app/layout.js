"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/navbar/NavBar";
import Footer from "@/Components/footer/Footer";
import { useState, useEffect } from "react";
import Loader from "@/Components/loader/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
