import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/shared/Navbar";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}