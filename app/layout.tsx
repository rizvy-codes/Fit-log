import type { Metadata } from "next";
import "react-toastify/dist/ReactToastify.css";

import "./globals.css";

import Navbar from "@/app/components/shared/Navbar";
import Footer from "@/app/components/shared/Footer";
import WorkoutProvider from "@/context/WorkoutContext";

import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "FitLog | Workout Library",
  description: "Train with intent. Log every set.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0b0c0f]">
        <WorkoutProvider>
          <Navbar />

          {children}

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="dark"
          />
        </WorkoutProvider>
      </body>
    </html>
  );
}