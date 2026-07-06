"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        desktop: "/images/hero-1.webp",
        mobile: "/images/hero-1-mobile.webp",
    },
    {
        desktop: "/images/hero-2.webp",
        mobile: "/images/hero-2-mobile.webp",
    },
    {
        desktop: "/images/hero-3.webp",
        mobile: "/images/hero-3-mobile.webp",
    },
    {
        desktop: "/images/hero-4.webp",
        mobile: "/images/hero-4-mobile.webp",
    },
    {
        desktop: "/images/hero-5.webp",
        mobile: "/images/hero-5-mobile.webp",
    },
    {
        desktop: "/images/hero-6.webp",
        mobile: "/images/hero-6-mobile.webp",
    },
    {
        desktop: "/images/hero-7.webp",
        mobile: "/images/hero-7-mobile.webp",
    },
    {
        desktop: "/images/hero-1.webp",
        mobile: "/images/hero-8-mobile.webp",
    },
    {
        desktop: "/images/hero-2.webp",
        mobile: "/images/hero-9-mobile.webp",
    },
    {
        desktop: "/images/hero-3.webp",
        mobile: "/images/hero-10-mobile.webp",
    },
    {
        desktop: "/images/hero-4.webp",
        mobile: "/images/hero-11-mobile.webp",
    },
    {
        desktop: "/images/hero-5.webp",
        mobile: "/images/hero-12-mobile.webp",
    },
    {
        desktop: "/images/hero-6.webp",
        mobile: "/images/hero-13-mobile.webp",
    },
    {
        desktop: "/images/hero-7.webp",
        mobile: "/images/hero-14-mobile.webp",
    },
    {
        desktop: "/images/hero-6.webp",
        mobile: "/images/hero-15-mobile.webp",
    },
    {
        desktop: "/images/hero-5.webp",
        mobile: "/images/hero-16-mobile.webp",
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
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={false}
                        animate={{
                            opacity: current === index ? 1 : 0,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                    >
                        {/* Desktop */}
                        <Image
                            src={slide.desktop}
                            alt=""
                            fill
                            priority={index === 0}
                            className="hidden md:block object-cover"
                            sizes="100vw"
                        />

                        {/* Mobile */}
                        <Image
                            src={slide.mobile}
                            alt=""
                            fill
                            priority={index === 0}
                            className="block md:hidden object-cover"
                            sizes="100vw"
                        />

                        <div className="absolute inset-0 bg-linear-to-b from-black/45 via-black/20 to-black/70" />
                    </motion.div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                <div className="relative z-10 h-full flex items-end md:items-center">
                    <div className="w-full max-w-6xl mx-auto px-6 pb-14 md:pb-0">

                        <div className="max-w-xl">

                            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                                Растим чемпионов
                            </h1>

                            <p className="mt-3 md:mt-5 text-base md:text-xl text-white/85">
                                Лёгкая атлетика для детей от 3 до 14 лет
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">

                                <Link
                                    href="/#contact"
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition hover:scale-105"
                                >
                                    Записаться бесплатно
                                </Link>

                                <a
                                    href="tel:+79694557515"
                                    className="bg-white/20 backdrop-blur hover:bg-white/30 border border-white/40 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition"
                                >
                                    Позвонить
                                </a>

                            </div>

                        </div>

                    </div>
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