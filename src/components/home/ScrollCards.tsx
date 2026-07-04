"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import {
    useScroll,
    useTransform,
    motion,
    MotionValue,
} from "framer-motion";

interface CardData {
    name: string;
    bio: string;
    image: string;
    role?: string;
    achievements?: string;
}

const coaches: CardData[] = [
    {
        name: "Абакумова Галина Викторовна",
        bio: "Стаж работы 40 лет. Ставит технику бега с нуля до золотых медалей.",
        image: "/images/coach-1.webp",
        achievements: "Заслуженный тренер России",
    },
    {
        name: "Абакумова Мария Васильевна",
        bio: "Заслуженный мастер спорта России по легкой атлетике. Стаж работы тренером 8 лет.",
        image: "/images/coach--2.webp",
        achievements: "Чемпионка мира 2011 года",
    },
    {
        name: "Гребенюк Виктория Константиновна",
        bio: "Стаж работы тренером 3 года. Девиз: «С нами бег становится лёгким»",
        image: "/images/coach--3.webp",
        achievements: "КМС по легкой атлетике",
    },
    {
        name: "Сизова Юлия Валентиновна",
        bio: "Стаж работы 2 года. Девиз: «Cтавим технику, заряжаем энергией»",
        image: "/images/coach--4.webp",
        achievements: "КМС по легкой атлетике",
    },
];

const champions: CardData[] = [
    {
        name: "Виктория Романаускас",
        role: "Бег на 1км - 3.26",
        bio: "Чемпионка Сириус-Автодром 2026\nЧемпионка города",
        image: "/images/champion-1.jpg",
        achievements: "",
    },
    {
        name: "Ева Свистунова",
        role: "Бег на 1км - 4.02",
        bio: "Призер первенства города 2025/26\nПризер Кросс Нации 2026",
        image: "/images/champion-2.jpg",
        achievements: "",
    },
    {
        name: "Максим Банин",
        role: "Бег на 1км - 3.25",
        bio: "Чемпион Кросс Нациии 2025\nЧемпион города 2026\nПобедить пробега HARD RUN",
        image: "/images/champion-3.jpg",
        achievements: "",
    },
    {
        name: "Виктория Резвухина",
        role: "Бег на 1км - 4.02",
        bio: "Победительница кросса нации 2025\nПризер первенства города\nПобедить пробега HDRD RUN",
        image: "/images/champion-7.jpg",
        achievements: "",
    },
    {
        name: "Кира Тарабина",
        role: "Бег на 1 км - 3.25",
        bio: "Чемпионка края\nЧемпионка Сириус автодром\nЧемпионка Совкомбанк Сочи марафон",
        image: "/images/champion-5.jpg",
        achievements: "",
    },
];

function useCardTransform(
    progress: MotionValue<number>,
    index: number,
    total: number,
    spread: number
) {
    const center = (total - 1) / 2;
    const distance = index - center;

    const x = useTransform(
        progress,
        [0, 0.5, 1],
        [0, distance * spread, distance * spread]
    );

    const scale = useTransform(
        progress,
        [0, 0.5, 1],
        [0.88, 1, 0.95]
    );

    const opacity = useTransform(
        progress,
        [0, 0.2, 0.5],
        [0.6, 1, 1]
    );

    const rotateZ = useTransform(
        progress,
        [0, 0.5, 1],
        [0, distance * 1.5, distance * 1.5]
    );

    return { x, scale, opacity, rotateZ };
}

function ScrollCardSection({
    title,
    subtitle,
    cards,
    id,
}: {
    title: string;
    subtitle: string;
    cards: CardData[];
    id: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "center center", "end 15%"],
    });

    const spread = useMemo(() => {
        if (typeof window === "undefined") return 220;
        return Math.min(340, Math.max(300, window.innerWidth * 0.18));
    }, []);

    return (
        <section id={id} className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 text-lg"
                >
                    {subtitle}
                </motion.p>
            </div>

            {/* DESKTOP */}
            <div
                ref={containerRef}
                className="hidden md:flex relative w-full justify-center items-center overflow-visible"
                style={{ height: "560px" }}
            >
                {cards.map((card, i) => {
                    const { x, scale, opacity, rotateZ } = useCardTransform(
                        scrollYProgress,
                        i,
                        cards.length,
                        spread
                    );

                    const zIndex = i === Math.floor(cards.length / 2) ? 50 : i;

                    return (
                        <motion.div
                            key={card.name}
                            style={{
                                x,
                                scale,
                                opacity,
                                rotateZ,
                                zIndex,
                            }}
                            className="absolute left-1/2 -translate-x-1/2 w-72 bg-white rounded-3xl overflow-hidden shadow-2xl will-change-transform"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={card.image}
                                    alt={card.name}
                                    fill
                                    className="object-cover"
                                    sizes="288px"
                                />
                                {card.achievements && (
                                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {card.achievements}
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <h3 className="font-black text-gray-900 text-lg">
                                    {card.name}
                                </h3>
                                <p className="text-red-600 text-sm font-semibold mb-3">
                                    {card.role}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 whitespace-pre-wrap">
                                    {card.bio}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* MOBILE */}
            <div className="md:hidden px-4">
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6">
                    {cards.map((card) => (
                        <div
                            key={card.name}
                            className="min-w-[280] snap-center bg-white rounded-3xl shadow-xl overflow-hidden"
                        >
                            <div className="relative h-44">
                                <Image
                                    src={card.image}
                                    alt={card.name}
                                    fill
                                    className="object-cover"
                                />
                                {card.achievements && (
                                    <div className="absolute bottom-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {card.achievements}
                                    </div>
                                )}
                            </div>

                            <div className="p-5">
                                <h3 className="font-black text-gray-900 text-lg">
                                    {card.name}
                                </h3>
                                <p className="text-red-600 text-sm font-semibold mb-3">
                                    {card.role}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {card.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CoachesSection() {
    return (
        <ScrollCardSection
            id="coaches"
            title="Наши тренеры"
            subtitle="Опыт, результаты и любовь к своему делу"
            cards={coaches}
        />
    );
}

export function ChampionsSection() {
    return (
        <ScrollCardSection
            id="champions"
            title="Наши воспитанники"
            subtitle="Гордость школы — спортсмены с большим будущим"
            cards={champions}
        />
    );
}