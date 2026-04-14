import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
    title: "Галерея фото",
    description: "Фотогалерея школы лёгкой атлетики «ФАФ». Тренировки, соревнования, наши воспитанники.",
};

export default function GalleryPage() {
    return (
        <div className="pt-16">
            <div className="bg-gray-900 py-20 text-center">
                <h1 className="text-5xl font-black text-white">Галерея</h1>
                <p className="text-gray-400 mt-3 text-lg">
                    Наши тренировки, соревнования и победы
                </p>
            </div>
            <GalleryClient />
        </div>
    );
}