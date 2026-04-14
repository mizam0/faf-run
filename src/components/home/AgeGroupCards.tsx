"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ageGroups } from "@/lib/groups";

export default function AgeGroupCards() {
    return (
        <section id="groups" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Возрастные группы
                    </h2>
                    <p className="text-gray-500 text-lg max-w-xl mx-auto">
                        Подберём программу тренировок для каждого возраста и уровня подготовки
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {ageGroups.map((group, i) => (
                        <motion.div
                            key={group.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link href={`/group/${group.slug}`} className="block group">
                                <div className="relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                                    {/* Background image */}
                                    <Image
                                        src={group.image}
                                        alt={group.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/60" />

                                    {/* Default state: age range centered */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-5 transition-all duration-300 group-hover:justify-start group-hover:pt-6">
                                        <h3 className="text-white font-black text-2xl md:text-3xl transition-all duration-300 group-hover:text-xl">
                                            {group.ageRange}
                                        </h3>
                                        <p className="text-white/80 font-medium text-sm mt-1 transition-all duration-300 group-hover:text-xs">
                                            {group.title}
                                        </p>
                                    </div>

                                    {/* Hover state: description at bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                        <p className="text-white/90 text-sm leading-relaxed">
                                            {group.shortDesc}
                                        </p>
                                        <span className="inline-block mt-3 text-red-400 text-sm font-semibold">
                                            Подробнее →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}