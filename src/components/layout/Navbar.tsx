"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const links = [
    { href: "/#groups", label: "Группы" },
    { href: "/#coaches", label: "Тренеры" },
    { href: "/shop", label: "Магазин" },
    { href: "/gallery", label: "Мероприятия" },
    { href: "/contacts", label: "Контакты" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm`}
        >
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className={`flex gap-2 items-center font-bold text-xl tracking-tight transition-colors text-gray-900`}
                >
                    <Image
                        src="/images/logo.webp"
                        alt="Логотип сайта"
                        width={30}
                        height={30}
                        className="rounded-full object-cover w-8 h-8"
                    />
                    FAF
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className={`text-sm font-medium transition-colors hover:text-red-600 text-gray-700`}
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                    <li className="flex gap-1">
                        <Link
                            href="https://t.me/ladinamo"
                            target="_blank"
                            className="bg-red-600 hover:bg-red-700 rounded-full p-2 transition-colors flex items-center justify-center"
                        >
                            <img src="/images/tg-white.svg" alt="Телеграм" className="w-5 h-5 object-cover" />
                        </Link>
                        <Link
                            href="https://vk.com/fafrun"
                            target="_blank"
                            className="bg-red-600 hover:bg-red-700 rounded-full p-2 transition-colors flex items-center justify-center"
                        >
                            <img src="/images/vk.svg" alt="ВК" className="w-5 h-5 object-cover" />
                        </Link>
                        <Link
                            href="#contact"
                            className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
                        >
                            Записаться
                        </Link>
                    </li>
                </ul>

                {/* Mobile burger */}
                <button
                    className={`md:hidden flex flex-col gap-1.5 text-gray-900`}
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
                            <li className="flex gap-1">
                                <Link
                                    href="https://t.me/ladinamo"
                                    target="_blank"
                                    className="bg-red-600 hover:bg-red-700 rounded-full p-2.5 w-[52] transition-colors flex items-center justify-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <img src="/images/tg-white.svg" alt="Телеграм" className="w-5 h-5 object-cover" />
                                </Link>
                                <Link
                                    href="https://vk.com/fafrun"
                                    target="_blank"
                                    className="bg-red-600 hover:bg-red-700 rounded-full p-2.5 w-[52] transition-colors flex items-center justify-center"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <img src="/images/vk.svg" alt="ВК" className="w-5 h-5 object-cover" />
                                </Link>
                                <Link
                                    href="#contact"
                                    className="bg-red-600 hover:bg-red-700 text-center text-white font-medium py-2.5 rounded-full transition-colors block w-full"
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