import HeroSlider from "@/components/home/HeroSlider";
import AgeGroupCards from "@/components/home/AgeGroupCards";
import { CoachesSection, ChampionsSection } from "@/components/home/ScrollCards";
import ContactSection from "@/components/home/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Школа лёгкой атлетики «ФАФ» — Главная",
    description:
        "Запишите ребёнка в лучшую школу лёгкой атлетики Москвы. Группы от 3 до 18 лет, опытные тренеры, первое занятие бесплатно.",
};

export default function Home() {
    return (
        <>
            <HeroSlider />
            <AgeGroupCards />
            <CoachesSection />
            <ChampionsSection />
            <ContactSection />
        </>
    );
}