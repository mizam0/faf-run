"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "Все" | "Форма" | "Обувь" | "Аксессуары" | "Инвентарь";

interface Product {
    id: number;
    name: string;
    category: Exclude<Category, "Все">;
    price: number;
    oldPrice?: number;
    image: string;
    badge?: string;
    sizes?: string[];
    description: string;
    orderLink: string;
}

const PRODUCTS: Product[] = [
    {
        id: 1,
        name: "Футболка",
        category: "Форма",
        price: 1000,
        image: "/images/shop/tshirts.jpg",
        badge: "Хит",
        sizes: ["XS", "S", "M", "L", "XL"],
        description: "Фирменная футболка Федерации лёгкой атлетики. Подходит для тренировок, соревнований и повседневной носки. Лёгкий материал обеспечивает комфорт даже при интенсивных нагрузках.",
        orderLink: "https://vk.com/javelin_marija"
    },
    {
        id: 2,
        name: "Спортивный рюкзак",
        category: "Аксессуары",
        price: 600,
        image: "/images/shop/backpack.jpg",
        badge: "Новинка",
        description: "Вместительный рюкзак для тренировок и поездок на соревнования. Удобные лямки, прочный материал и достаточно места для формы, обуви и личных вещей.",
        orderLink: "https://vk.com/javelin_marija"
    },
    {
        id: 3,
        name: "Шопер",
        category: "Аксессуары",
        price: 500,
        image: "/images/shop/shopper.jpg",
        description: "Практичная сумка-шопер с фирменной символикой клуба. Подойдёт для спортивной формы, покупок или повседневного использования.",
        orderLink: "https://vk.com/javelin_marija"
    }
];

const CATEGORIES: Category[] = [
    "Все",
    "Форма",
    "Аксессуары"
];

const badgeColors: Record<string, string> = {
    Хит: "bg-amber-500 text-white",
    Новинка: "bg-emerald-500 text-white",
    Скидка: "bg-red-600 text-white",
};

function formatPrice(n: number) {
    return n.toLocaleString("ru-RU") + " ₽";
}

/* Модальное окно с деталями товара */
function ProductModal({
    product,
    onClose,
}: {
    product: Product;
    onClose: () => void;
}) {
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const orderUrl = product.sizes && selectedSize
        ? product.orderLink + (product.orderLink.includes("?") ? "&" : "?") + `size=${selectedSize}`
        : product.orderLink;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Фото */}
                <div className="relative h-64 bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="512px"
                    />
                    {product.badge && (
                        <span
                            className={`absolute top-4 left-4 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-gray-800 text-white"}`}
                        >
                            {product.badge}
                        </span>
                    )}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white w-8 h-8 rounded-full flex items-center justify-center text-gray-700 font-bold shadow transition-colors"
                        aria-label="Закрыть"
                    >
                        ✕
                    </button>
                </div>

                {/* Контент */}
                <div className="p-6">
                    <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-1">
                        {product.category}
                    </p>
                    <h2 className="text-xl font-black text-gray-900 mb-2">{product.name}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {product.description}
                    </p>

                    {/* Размеры */}
                    {product.sizes && (
                        <div className="mb-5">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                                Размер {selectedSize && <span className="text-red-600">— {selectedSize}</span>}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSelectedSize(s === selectedSize ? null : s)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold border transition-all ${selectedSize === s
                                            ? "bg-red-600 border-red-600 text-white"
                                            : "border-gray-200 text-gray-700 hover:border-red-400"
                                            }`}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Цена + кнопка */}
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-2xl font-black text-gray-900">
                                {formatPrice(product.price)}
                            </span>
                            {product.oldPrice && (
                                <span className="ml-2 text-sm text-gray-400 line-through">
                                    {formatPrice(product.oldPrice)}
                                </span>
                            )}
                        </div>
                        <a
                            href={orderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold px-6 py-3 rounded-xl transition-all"
                        >
                            Заказать →
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div >
    );
}

/* Карточка товара */
function ProductCard({
    product,
    onOpen,
}: {
    product: Product;
    onOpen: (p: Product) => void;
}) {
    const discount = product.oldPrice
        ? Math.round((1 - product.price / product.oldPrice) * 100)
        : null;

    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-red-200 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            onClick={() => onOpen(product)}
        >
            {/* Фото */}
            <div className="relative h-56 bg-gray-50 overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Бейдж */}
                {product.badge && (
                    <span
                        className={`absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeColors[product.badge] ?? "bg-gray-800 text-white"}`}
                    >
                        {product.badge}
                    </span>
                )}
                {/* Процент скидки */}
                {discount && (
                    <span className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full">
                        −{discount}%
                    </span>
                )}
                {/* Кнопка «Подробнее» при ховере */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white text-gray-900 font-bold text-sm px-5 py-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        Подробнее
                    </span>
                </div>
            </div>

            {/* Контент */}
            <div className="p-4 flex flex-col flex-1">
                <p className="text-red-500 text-[11px] font-bold uppercase tracking-widest mb-1">
                    {product.category}
                </p>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-2 flex-1">
                    {product.name}
                </h3>
                <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                </p>

                {/* Цена + кнопка */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                    <div className="flex flex-col">
                        <span className="font-black text-gray-900 text-base">
                            {formatPrice(product.price)}
                        </span>
                        {product.oldPrice && (
                            <span className="text-xs text-gray-400 line-through">
                                {formatPrice(product.oldPrice)}
                            </span>
                        )}
                    </div>
                    <a
                        href={product.orderLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all"
                    >
                        Заказать
                    </a>
                </div>
            </div>
        </motion.article >
    );
}

export default function ShopClient() {
    const [activeCategory, setActiveCategory] = useState<Category>("Все");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filtered =
        activeCategory === "Все"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === activeCategory);

    return (
        <section className="container mx-auto px-4 py-12">
            {/* Фильтр по категориям */}
            <div className="flex flex-wrap gap-2 justify-center mb-10">
                {CATEGORIES.map((cat) => (
                    <motion.button
                        key={cat}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-bold border transition-all cursor-pointer ${activeCategory === cat
                            ? "bg-red-600 border-red-600 text-white shadow-md"
                            : "bg-white border-gray-200 text-gray-600 hover:border-red-400 hover:text-red-600"
                            }`}
                    >
                        {cat}
                        {cat !== "Все" && (
                            <span className={`ml-1.5 text-xs ${activeCategory === cat ? "opacity-70" : "text-gray-400"}`}>
                                {PRODUCTS.filter((p) => p.category === cat).length}
                            </span>
                        )}
                    </motion.button>
                ))}
            </div>

            {/* Сетка товаров */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
                <AnimatePresence mode="popLayout">
                    {filtered.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onOpen={setSelectedProduct}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* Пустой фильтр */}
            {filtered.length === 0 && (
                <p className="text-center text-gray-400 py-20 text-lg">
                    В этой категории пока нет товаров
                </p>
            )}

            {/* Баннер «Нет нужного размера?» */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6"
            >
                <div>
                    <h3 className="text-white font-black text-2xl md:text-3xl mb-2">
                        Не нашли нужный размер?
                    </h3>
                    <p className="text-gray-400">
                        Напишите нам — оформим индивидуальный заказ под вас
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                        href="https://t.me/ladinamo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-sky-500 hover:bg-sky-400 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all text-center flex items-center gap-2"
                    >
                        <img src="/images/tg-white.svg" alt="Телеграм" className="w-5 h-5" />
                        Написать в Telegram
                    </a>
                    <a
                        href="https://vk.com/fafrun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all text-center flex items-center gap-2"
                    >
                        <img src="/images/vk.svg" alt="Телеграм" className="w-5 h-5" />
                        ВКонтакте
                    </a>
                </div>
            </motion.div >

            {/* Модалка */}
            <AnimatePresence>
                {
                    selectedProduct && (
                        <ProductModal
                            product={selectedProduct}
                            onClose={() => setSelectedProduct(null)}
                        />
                    )
                }
            </AnimatePresence >
        </section >
    );
}