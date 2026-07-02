"use client";

import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { useState } from "react";

const photos = [
    { src: "/images/gallery/photo-1.jpg", width: 1707, height: 2560, title: "Забег" },
    { src: "/images/gallery/photo-2.jpg", width: 1707, height: 2560, title: "Забег" },
    { src: "/images/gallery/photo-3.jpg", width: 2560, height: 1707, title: "Забег" },
    { src: "/images/gallery/photo-4.jpg", width: 2560, height: 1707, title: "Забег" },
    { src: "/images/gallery/photo-5.jpg", width: 2560, height: 1707, title: "Забег" },
    { src: "/images/gallery/photo-6.jpg", width: 1707, height: 2560, title: "Забег" },
    { src: "/images/gallery/photo-7.jpg", width: 2560, height: 1707, title: "Забег" },
    { src: "/images/gallery/photo-8.jpg", width: 2560, height: 1707, title: "Забег" },
    { src: "/images/gallery/photo-9.jpg", width: 2560, height: 1707, title: "Забег" },
    { src: "/images/gallery/photo-10.jpg", width: 1707, height: 2560, title: "Забег" },
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