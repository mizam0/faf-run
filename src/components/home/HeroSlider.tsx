"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        src: "/images/hero-1.jpg",
        title: "Растим чемпионов",
        subtitle: "Лёгкая атлетика для детей от 3 до 18 лет",
    },
    {
        src: "/images/hero-2.jpg",
        title: "Профессиональные тренеры",
        subtitle: "Опыт подготовки спортсменов всероссийского уровня",
    },
    {
        src: "/images/hero-3.jpg",
        title: "Современный спортивный зал",
        subtitle: "Оборудование для достижения лучших результатов",
    },
];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((c) => (c + 1) % slides.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="relative w-full h-screen min-h-[600] overflow-hidden">
            {/* Slides */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[current].src}
                        alt={slides[current].title}
                        fill
                        className="object-cover"
                        priority={current === 0}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/60" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
                            {slides[current].title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 mb-8">
                            {slides[current].subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-2xl"
                            >
                                Записаться бесплатно
                            </Link>
                            <a
                                href="tel:+74951234567"
                                className="bg-white/20 hover:bg-white/30 backdrop-blur text-white font-bold px-8 py-4 rounded-full text-lg transition-all border border-white/40"
                            >
                                Позвонить
                            </a>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="absolute bottom-8 flex gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Слайд ${i + 1}`}
                            className={`w-3 h-3 rounded-full transition-all ${i === current ? "bg-white scale-125" : "bg-white/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll hint */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-xs flex flex-col items-center gap-1"
            >
                <span>Прокрути вниз</span>
                <span>↓</span>
            </motion.div>
        </section >
    );
}