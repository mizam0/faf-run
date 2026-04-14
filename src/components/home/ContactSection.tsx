"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

const schema = z.object({
    name: z.string().min(2, "Введите имя"),
    phone: z.string().min(10, "Введите корректный номер"),
    age: z.string().min(1, "Выберите группу"),
    message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = async (data: FormData) => {
        setError("");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!res.ok) throw new Error();
            setSent(true);
            reset();
        } catch {
            setError("Произошла ошибка. Позвоните нам: +7 (495) 123-45-67");
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Запишитесь на пробное занятие
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Первое занятие — бесплатно. Оставьте заявку и мы свяжемся с вами.
                        </p>
                    </motion.div>

                    {sent ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-green-600/20 border border-green-500/30 rounded-2xl p-10 text-center"
                        >
                            <div className="text-5xl mb-4">✅</div>
                            <h3 className="text-white font-bold text-2xl mb-2">
                                Заявка отправлена!
                            </h3>
                            <p className="text-gray-400">
                                Мы перезвоним вам в течение часа в рабочее время.
                            </p>
                            <button
                                onClick={() => setSent(false)}
                                className="mt-6 text-red-400 hover:text-red-300 text-sm transition-colors"
                            >
                                Отправить ещё одну заявку
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-5"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-1.5">
                                        Ваше имя *
                                    </label>
                                    <input
                                        {...register("name")}
                                        placeholder="Иван Иванов"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                    {errors.name && (
                                        <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm mb-1.5">
                                        Телефон *
                                    </label>
                                    <input
                                        {...register("phone")}
                                        placeholder="+7 (___) ___-__-__"
                                        type="tel"
                                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-1.5">
                                    Возрастная группа *
                                </label>
                                <select
                                    {...register("age")}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
                                >
                                    <option value="" className="bg-gray-900">Выберите группу</option>
                                    <option value="3-6" className="bg-gray-900">3–6 лет</option>
                                    <option value="7-10" className="bg-gray-900">7–10 лет</option>
                                    <option value="11-14" className="bg-gray-900">11–14 лет</option>
                                    <option value="15+" className="bg-gray-900">15+ лет</option>
                                </select>
                                {errors.age && (
                                    <p className="text-red-400 text-xs mt-1">{errors.age.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-gray-400 text-sm mb-1.5">
                                    Сообщение (необязательно)
                                </label>
                                <textarea
                                    {...register("message")}
                                    rows={3}
                                    placeholder="Расскажите о ребёнке или задайте вопрос..."
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors resize-none"
                                />
                            </div>

                            {error && (
                                <p className="text-red-400 text-sm text-center">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                {isSubmitting ? "Отправляем..." : "Записаться на пробное занятие"}
                            </button>

                            <p className="text-gray-600 text-xs text-center">
                                Нажимая кнопку, вы соглашаетесь с{" "}
                                <a href="/privacy" className="text-gray-500 underline">
                                    политикой конфиденциальности
                                </a>
                            </p>
                        </motion.form>
                    )}
                </div>
            </div>
        </section>
    );
}