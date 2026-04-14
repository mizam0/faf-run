"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { href: "/", label: "Главная" },
    { href: "/#groups", label: "Группы" },
    { href: "/#coaches", label: "Тренеры" },
    { href: "/gallery", label: "Галерея" },
    { href: "/contacts", label: "Контакты" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-gray-900" : "text-white"
                        }`}
                >
                    <span className="text-red-600">⚡</span> ФАФ
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className={`text-sm font-medium transition-colors hover:text-red-600 ${scrolled ? "text-gray-700" : "text-white/90"
                                    }`}
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <Link
                            href="/#contact"
                            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
                        >
                            Записаться
                        </Link>
                    </li>
                </ul>

                {/* Mobile burger */}
                <button
                    className={`md:hidden flex flex-col gap-1.5 ${scrolled ? "text-gray-900" : "text-white"
                        }`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                >
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                    />
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-white border-t border-gray-100 shadow-lg"
                    >
                        <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {links.map((l) => (
                                <li key={l.href}>
                                    <Link
                                        href={l.href}
                                        className="block text-gray-700 font-medium hover:text-red-600 transition-colors"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/#contact"
                                    className="block text-center bg-red-600 text-white font-medium py-2.5 rounded-full hover:bg-red-700 transition-colors"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Записаться
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}