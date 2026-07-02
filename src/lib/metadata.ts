import type { Metadata } from "next";

export const defaultMeta: Metadata = {
    metadataBase: new URL("https://ваш-домен.ru"),
    title: {
        default: "Школа бега «FAF» — Краснодар",
        template: "%s | Школа лёгкой атлетики «ФАФ»",
    },
    description:
        "Приучите ребёнка к правильным привычкам с детства. Модное хобби? Спорт. Беги красиво — живи легко. Школа легкой атлетики.",
    keywords: [
        "школа лёгкой атлетики",
        "лёгкая атлетика для детей",
        "спортивная секция Москва",
        "детский спорт",
        "бег для детей",
        "прыжки дети",
        "Динамо",
    ],
    openGraph: {
        type: "website",
        locale: "ru_RU",
        url: "https://faf-run.ru",
        siteName: "Школа лёгкой атлетики «ФАФ»",
        title: "Школа лёгкой атлетики «ФАФ» — Краснодар",
        description:
            "Профессиональная школа лёгкой атлетики для детей от 3 до 18 лет.",
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Школа лёгкой атлетики «ФАФ»",
        description: "Профессиональная школа лёгкой атлетики для детей от 3 лет.",
    },
    robots: { index: true, follow: true },
    alternates: { canonical: "https://faf-run.ru" },
};