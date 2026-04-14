import { ageGroups } from "@/lib/groups";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";

export function generateStaticParams() {
    return ageGroups.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const group = ageGroups.find((g) => g.slug === params.slug);
    if (!group) return {};
    return {
        title: `Группа ${group.ageRange} — ${group.title}`,
        description: group.fullDesc,
    };
}

export default function GroupPage({ params }: { params: { slug: string } }) {
    const group = ageGroups.find((g) => g.slug === params.slug);
    if (!group) notFound();

    return (
        <div className="pt-16">
            {/* Hero */}
            <div className="relative h-72 md:h-96">
                <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-2">
                        Возрастная группа
                    </p>
                    <h1 className="text-5xl md:text-6xl font-black">{group.ageRange}</h1>
                    <p className="text-xl text-white/80 mt-3">{group.title}</p>
                </div>
            </div>

            {/* Content */}
            <section className="container mx-auto px-4 py-16 max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="font-black text-gray-900 text-lg mb-2">Расписание</h3>
                        <p className="text-gray-600">{group.schedule}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                        <h3 className="font-black text-gray-900 text-lg mb-2">Тренер</h3>
                        <p className="text-gray-600">{group.coach}</p>
                    </div>
                </div>

                <h2 className="text-3xl font-black text-gray-900 mb-4">О программе</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {group.fullDesc}
                </p>

                <Link
                    href="/#contact"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
                >
                    Записаться в эту группу
                </Link>
            </section>

            <ContactSection />
        </div>
    );
}