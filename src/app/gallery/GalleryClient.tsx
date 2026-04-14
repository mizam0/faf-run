"use client";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";

// Замените на реальные фото. width/height обязательны для корректной верстки masonry
const photos = [
    { src: "/images/gallery/photo-1.jpg", width: 1200, height: 800, title: "Тренировка" },
    { src: "/images/gallery/photo-2.jpg", width: 800, height: 1200, title: "Соревнования" },
    { src: "/images/gallery/photo-3.jpg", width: 1600, height: 900, title: "Награждение" },
    { src: "/images/gallery/photo-4.jpg", width: 900, height: 900, title: "Наши малыши" },
    { src: "/images/gallery/photo-5.jpg", width: 1200, height: 1600, title: "Прыжки" },
    { src: "/images/gallery/photo-6.jpg", width: 1600, height: 1000, title: "Спринт" },
    { src: "/images/gallery/photo-7.jpg", width: 800, height: 1000, title: "Команда" },
    { src: "/images/gallery/photo-8.jpg", width: 1200, height: 800, title: "Зал" },
];

export default function GalleryClient() {
    const [index, setIndex] = useState(-1);

    return (
        <section className="container mx-auto px-4 py-12">
            <PhotoAlbum
                layout="rows"
                photos={photos}
                targetRowHeight={300}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                slides={photos.map((p) => ({ src: p.src, title: p.title }))}
                plugins={[Zoom, Captions]}
            />
        </section>
    );
}