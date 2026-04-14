import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
    title: "Контакты",
    description:
        "Адрес, телефон и форма записи школы лёгкой атлетики «ФАФ» в Краснодаре.",
};

export default function ContactsPage() {
    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="bg-gray-900 py-20 text-center">
                <h1 className="text-5xl font-black text-white">Контакты</h1>
                <p className="text-gray-400 mt-3 text-lg">Мы рядом — приходите!</p>
            </div>

            {/* Info grid */}
            <section className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: "📍",
                        title: "Адрес",
                        lines: ["г. Москва", "ул. Спортивная, 1", "Зал лёгкой атлетики"],
                    },
                    {
                        icon: "📞",
                        title: "Телефон",
                        lines: ["+7 (495) 123-45-67", "Пн–Пт: 9:00–20:00", "Сб: 10:00–17:00"],
                    },
                    {
                        icon: "✉️",
                        title: "Email",
                        lines: ["info@dinamo-kids.ru", "", "Ответим в течение суток"],
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
                    >
                        <div className="text-4xl mb-4">{item.icon}</div>
                        <h3 className="font-black text-xl text-gray-900 mb-3">{item.title}</h3>
                        {item.lines.map((line, i) => (
                            <p key={i} className="text-gray-600 text-sm">
                                {line}
                            </p>
                        ))}
                    </div>
                ))}
            </section>

            {/* Map placeholder */}
            <section className="container mx-auto px-4 pb-12">
                <div className="rounded-2xl overflow-hidden h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">
                        Вставьте iframe Яндекс.Карт или Google Maps сюда
                    </p>
                </div>
            </section>

            {/* Reuse contact form */}
            <ContactSection />
        </div>
    );
}