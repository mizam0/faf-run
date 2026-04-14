import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMeta } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = defaultMeta;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
                <Footer />
                <FloatingButtons />
            </body>
        </html>
    );
}