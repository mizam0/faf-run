import { ageGroups } from "@/lib/groups";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { GroupPageClient } from "./GroupPageClient";

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const { slug } = await params;
    const group = ageGroups.find((g) => g.slug === slug);
    if (!group) return {};
    return {
        title: `Группа ${group.ageRange} — ${group.title}`,
        description: group.fullDesc,
    };
}

export default async function GroupPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const group = ageGroups.find((g) => g.slug === slug);
    if (!group) notFound();

    return <GroupPageClient group={group} />
}