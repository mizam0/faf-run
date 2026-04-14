export interface AgeGroup {
    slug: string;
    title: string;
    ageRange: string;
    shortDesc: string;
    fullDesc: string;
    image: string;
    schedule: string;
    coach: string;
}

export const ageGroups: AgeGroup[] = [
    {
        slug: "3-6",
        title: "Малыши",
        ageRange: "3–6 лет",
        shortDesc: "Игровое физическое развитие",
        fullDesc:
            "Первые шаги в лёгкой атлетике. Развиваем координацию, гибкость и любовь к движению через игры и упражнения в весёлой форме.",
        image: "/images/group-3-6.jpg",
        schedule: "Вт, Чт — 10:00",
        coach: "Елена Смирнова",
    },
    {
        slug: "7-10",
        title: "Дети",
        ageRange: "7–10 лет",
        shortDesc: "Основы техники бега и прыжков",
        fullDesc:
            "Формируем базовую технику бега, прыжков и метания. Участие в первых соревнованиях, воспитание командного духа и настойчивости.",
        image: "/images/group-7-10.jpg",
        schedule: "Пн, Ср, Пт — 16:00",
        coach: "Дмитрий Козлов",
    },
    {
        slug: "11-14",
        title: "Подростки",
        ageRange: "11–14 лет",
        shortDesc: "Специализация и первые разряды",
        fullDesc:
            "Углублённая подготовка, выбор специализации. Тренировки на результат, участие в городских и региональных соревнованиях.",
        image: "/images/group-11-14.jpg",
        schedule: "Пн–Пт — 17:30",
        coach: "Дмитрий Козлов",
    },
    {
        slug: "15-plus",
        title: "Юниоры",
        ageRange: "15+ лет",
        shortDesc: "Профессиональная подготовка",
        fullDesc:
            "Серьёзная спортивная подготовка для тех, кто нацелен на высокие результаты. Индивидуальные планы тренировок, работа с психологом.",
        image: "/images/group-15-plus.jpg",
        schedule: "Ежедневно — 18:00",
        coach: "Александр Петров",
    },
];