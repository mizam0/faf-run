"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PencilLine, Phone } from "lucide-react";

export default function FloatingButtons() {
    const [open, setOpen] = useState(false);

    const buttons = [
        {
            href: "tel:+79694557515",
            label: "Позвонить",
            icon: <Phone />,
            color: "bg-green-500 hover:bg-green-600",
        },
        {
            href: "/#contact",
            label: "Записаться",
            icon: <PencilLine />,
            color: "bg-red-600 hover:bg-red-700",
        },
        {
            href: "https://t.me/school_run_bot",
            target: true,
            label: "Telegram",
            icon: <img src="/images/tg-white.svg" alt="Перейти в телеграм" className="w-6 h-6" />,
            color: "bg-sky-500 hover:bg-sky-600",
        },
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {open &&
                    buttons.map((btn, i) => (
                        <motion.div
                            key={btn.label}
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.8 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-center gap-2"
                        >
                            <span className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                                {btn.label}
                            </span>
                            <Link
                                href={btn.href}
                                className={`${btn.color} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-xl transition-colors`}
                                target={btn.target ? '_blank' : '_self'}
                            >
                                {btn.icon}
                            </Link>
                        </motion.div>
                    ))}
            </AnimatePresence>

            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setOpen(!open)}
                className="cursor-pointer bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-colors text-2xl"
                aria-label="Связаться с нами"
            >
                <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    {open ? "✕" : "☎"}
                </motion.span>
            </motion.button>
        </div>
    );
}