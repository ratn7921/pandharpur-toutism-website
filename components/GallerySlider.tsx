"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
];

export default function GallerySlider() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="gallery" ref={targetRef} className="relative h-[250vh] bg-foreground">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-12 left-6 md:left-12 z-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-background">
            Glimpses of <span className="text-saffron">Devotion</span>
          </h2>
          <p className="text-background/70 mt-2 text-lg">Scroll to explore</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6 md:px-12 mt-20">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-[80vw] sm:w-[50vw] md:w-[40vw] h-[60vh] shrink-0 rounded-3xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
