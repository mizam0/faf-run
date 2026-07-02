import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Политика конфиденциальности",
};

export default function PrivacyPage() {
    return (
        <main className="bg-gray-950 text-gray-200 min-h-screen py-20">
            <div className="container mx-auto px-4 max-w-3xl">

                <h1 className="text-4xl font-black text-white mb-8">
                    Политика конфиденциальности
                </h1>

                <div className="space-y-6 text-sm leading-relaxed text-gray-300">

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            1. Общие положения
                        </h2>
                        <p>
                            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных,
                            предоставляемых пользователями при заполнении форм на сайте спортивной школы.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            2. Персональные данные
                        </h2>
                        <p>
                            Мы можем собирать следующие данные:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Имя пользователя</li>
                            <li>Контактный телефон</li>
                            <li>Возраст ребёнка (при необходимости)</li>
                            <li>Текст сообщения</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            3. Цели обработки данных
                        </h2>
                        <p>
                            Данные используются исключительно для связи с пользователем, обработки заявки и предоставления информации
                            о занятиях спортивной школы.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            4. Хранение и защита данных
                        </h2>
                        <p>
                            Мы принимаем необходимые организационные и технические меры для защиты персональных данных от
                            несанкционированного доступа, изменения или уничтожения.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            5. Передача третьим лицам
                        </h2>
                        <p>
                            Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных законодательством.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            6. Срок хранения данных
                        </h2>
                        <p>
                            Данные хранятся до момента достижения целей обработки или до момента удаления по запросу пользователя.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-lg font-bold mb-2">
                            7. Контакты
                        </h2>
                        <p>
                            По вопросам обработки персональных данных вы можете связаться с нами:
                            <br />
                            <span className="text-white">+7 (969) 455-75-15</span>
                        </p>
                    </section>

                    <div className="pt-6 border-t border-white/10 text-gray-500 text-xs">
                        Последнее обновление: 15.04.2026
                    </div>

                </div>
            </div>
        </main>
    );
}