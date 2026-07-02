import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
    title: "Магазин",
    description:
        "Официальная экипировка и атрибутика школы лёгкой атлетики «FAF». Форма, кроссовки, аксессуары для тренировок.",
};

export default function ShopPage() {
    return (
        <div className="pt-16">
            <div className="bg-gray-900 py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-400 rounded-full blur-2xl" />
                </div>
                <div className="relative z-10">
                    <p className="text-red-500 font-bold text-sm uppercase tracking-widest mb-3">
                        Официальная экипировка
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black text-white">Магазин</h1>
                    <p className="text-gray-400 mt-4 text-lg max-w-md mx-auto">
                        Всё для тренировок и соревнований — с символикой школы
                    </p>
                </div>
            </div>
            <ShopClient />
        </div>
    );
}