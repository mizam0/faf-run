import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="text-white font-bold text-xl mb-3">
                        <span className="text-red-500">⚡</span> FAF
                    </div>
                    <p className="text-sm leading-relaxed">
                        Профессиональная школа лёгкой атлетики для детей и юношества.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Навигация</h3>
                    <ul className="space-y-2 text-sm">
                        {[
                            ["/#groups", "Группы"],
                            ["/#coaches", "Тренеры"],
                            ["/gallery", "Галерея"],
                            ["/contacts", "Контакты"],
                        ].map(([href, label]) => (
                            <li key={href}>
                                <Link href={href} className="hover:text-white transition-colors">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Контакты</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="tel:+79694557515" className="hover:text-white transition-colors">
                                +7 (969) 455-75-15
                            </a>
                        </li>
                        <li>
                            <a href="mailto:info@dinamo-kids.ru" className="hover:text-white transition-colors">
                                info@dinamo-kids.ru
                            </a>
                        </li>
                        <li>г. Краснодар, ул. Красная, 190</li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-xs text-center">
                © {new Date().getFullYear()} Школа лёгкой атлетики «ФАФ». Все права защищены.
            </div>
        </footer>
    );
}