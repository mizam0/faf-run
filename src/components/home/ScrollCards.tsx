"use client";

import { useRef } from "react";
import Image from "next/image";
import {
    useScroll,
    useTransform,
    motion,
    MotionValue,
} from "framer-motion";

interface CardData {
    name: string;
    role: string;
    bio: string;
    image: string;
    achievements?: string;
}

const coaches: CardData[] = [
    {
        name: "Александр Петров",
        role: "Главный тренер",
        bio: "Мастер спорта России. 20 лет тренерской работы. Воспитал более 50 призёров всероссийских соревнований.",
        image: "/images/coach-1.jpg",
        achievements: "МСМК по лёгкой атлетике",
    },
    {
        name: "Дмитрий Козлов",
        role: "Тренер по бегу",
        bio: "КМС по спринту. Специализация — бег на короткие и средние дистанции. Работает с детьми 8 лет.",
        image: "/images/coach-2.jpg",
        achievements: "КМС по спринту",
    },
    {
        name: "Елена Смирнова",
        role: "Тренер дошкольного отделения",
        bio: "Специалист по физическому воспитанию дошкольников. Автор программы адаптации малышей к спорту.",
        image: "/images/coach-3.jpg",
        achievements: "Педагог высшей категории",
    },
];

const champions: CardData[] = [
    {
        name: "Иван Громов",
        role: "Выпускник 2022",
        bio: "Чемпион России среди юниоров в беге на 400 м. Выступает за сборную Москвы.",
        image: "/images/champion-1.jpg",
        achievements: "🥇 ЧР среди юниоров",
    },
    {
        name: "Мария Власова",
        role: "Выпускница 2021",
        bio: "Призёр первенства России в прыжках в высоту. Участница юношеского чемпионата Европы.",
        image: "/images/champion-2.jpg",
        achievements: "🥈 Первенство России",
    },
    {
        name: "Артём Лебедев",
        role: "Действующий воспитанник",
        bio: "14 лет. Рекордсмен Москвы среди своей возрастной группы в беге на 100 м.",
        image: "/images/champion-3.jpg",
        achievements: "📍 Рекорд Москвы",
    },
    {
        name: "Кира Фёдорова",
        role: "Выпускница 2023",
        bio: "Мастер спорта. Победительница Кубка России, участница национального первенства.",
        image: "/images/champion-4.jpg",
        achievements: "🏆 Кубок России",
    },
];

function useCardTransform(
    progress: MotionValue<number>,
    index: number,
    total: number,
    spread: number
) {
    const center = 0.5;
    const offset = (index - (total - 1) / 2) * spread;
    const x = useTransform(progress, [0, 1], [0, offset]);
    const scale = useTransform(progress, [0, 0.5, 1], [0.88, 0.95, 1]);
    const opacity = useTransform(progress, [0, 0.3], [0.7, 1]);
    return { x, scale, opacity };
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
        offset: ["start 80%", "end 60%"],
    });

    const spread = cards.length <= 3 ? 320 : 240;

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

            <div
                ref={containerRef}
                className="relative flex justify-center items-center"
                style={{ height: "520px" }}
            >
                {cards.map((card, i) => {
                    const { x, scale, opacity } = useCardTransform(
                        scrollYProgress,
                        i,
                        cards.length,
                        spread
                    );
                    const zIndex = i === Math.floor(cards.length / 2) ? 10 : i;

                    return (
                        <motion.div
                            key={card.name}
                            style={{ x, scale, opacity, zIndex }}
                            className="absolute w-72 bg-white rounded-3xl overflow-hidden shadow-2xl"
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
                                    <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {card.achievements}
                                    </div>
                                )}
                            </div>
                            <div className="p-5">
                                <h3 className="font-black text-gray-900 text-lg">{card.name}</h3>
                                <p className="text-red-600 text-sm font-semibold mb-3">{card.role}</p>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    {card.bio}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
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