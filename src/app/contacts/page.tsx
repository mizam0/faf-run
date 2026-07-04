import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import Link from "next/link";
import { Phone, Map, Info } from "lucide-react";

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
                        icon: <Map size={35} />,
                        title: "Адрес",
                        lines: ["г. Краснодар", "ул. Красная, 190", "Стадион Динамо"],
                    },
                    {
                        icon: <Phone size={35} />,
                        title: "Телефон",
                        lines: ["+7 (969) 455-75-15", "Пн–Пт: 9:00–20:00", "Сб: 10:00–17:00"],
                    },
                    {
                        icon: <Info size={35} />,
                        title: "О компании",
                        lines: ["Наименование: КРФСОО ФЛАФ", "ИНН: 2308302061", "КПП: 230801001", "ОГРН: 1252300038418" ],
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100"
                    >
                        <div className="mb-4 mx-auto w-fit">{item.icon}</div>
                        <h3 className="font-black text-xl text-gray-900 mb-3">{item.title}</h3>
                        {item.lines.map((line, i) => (
                            <p key={i} className="text-gray-600 text-sm">
                                {line}
                            </p>
                        ))}
                    </div>
                ))}
            </section>

            <section className="flex flex-col gap-3 justify-center items-center mb-6">
                <p className="w-full text-center font-extrabold text-2xl mb-6">Социальные сети</p>
                <div className="flex items-center gap-2">
                    <img src="./images/inst.svg" alt="Instagram" width={40} />
                    <Link href='https://www.instagram.com/abakumova_javelin' target="_blank" className="text-xl">@abakumova_javelin</Link>
                </div>
                <div className="flex items-center gap-2">
                    <img src="./images/inst.svg" alt="Instagram" width={40} />
                    <Link href='https://www.instagram.com/sports_twins2014' target="_blank" className="text-xl">@sports_twins2014</Link>
                </div>
                <div className="flex items-center gap-2">
                    <img src="./images/tg.svg" alt="Telegram" width={40} />
                    <Link href='https://t.me/AbakumovaJavelin' target="_blank" className="text-xl">@AbakumovaJavelin</Link>
                </div>
                <div className="flex items-center gap-2">
                    <img src="./images/tg.svg" alt="Telegram" width={40} />
                    <Link href='https://t.me/ladinamo' target="_blank" className="text-xl">Федерация легкой атлетики и фитнеса</Link>
                </div>
            </section>

            {/* Map placeholder */}
            <section className="container mx-auto px-4 pb-12">
                <div className="rounded-2xl overflow-hidden h-96 bg-gray-200 flex items-center justify-center">
                    <div className="h-full w-full relative overflow-hidden">
                        <a href="https://yandex.ru/maps/org/dinamo/245357791768/?utm_medium=mapframe&utm_source=maps"
                            className="text-[#eee] text-xs absolute top-0">Динамо</a>

                        <a href="https://yandex.ru/maps/35/krasnodar/category/sports_center/184107313/?utm_medium=mapframe&utm_source=maps"
                            className="text-[#eee] text-xs absolute top-[14]">Спортивный комплекс в Краснодаре</a>

                        <a href="https://yandex.ru/maps/35/krasnodar/category/sports_hall_gym/41430094175/?utm_medium=mapframe&utm_source=maps"
                            className="text-[#eee] text-xs absolute top-[28]">Спортивный, тренажёрный зал в Краснодаре</a>

                        <iframe
                            src="https://yandex.ru/map-widget/v1/?ll=38.981908%2C45.053328&mode=search&oid=245357791768&ol=biz&z=18.75"
                            width="100%" height="100%" className="relative" loading="eager"></iframe>
                    </div>
                </div>
            </section>

            {/* Reuse contact form */}
            <ContactSection />
        </div>
    );
}