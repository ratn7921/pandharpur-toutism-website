"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function CharacterStories() {
  const { language, t } = useTranslation();
  const isMarathi = language === "mr";

  const images = [
    "/images/TheVasudev.jpg",
    "/images/wp15707418-warkari-wallpapers.jpg",
    "/images/संत तुकाराम महाराज .png",
    "/images/wp9649336-dnyaneshwar-mauli-wallpapers.jpg"
  ];

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/old-wall.png")' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-[#d4af37] mb-6 drop-shadow-md",
            isMarathi ? "font-yatra tracking-normal" : "font-cinzel tracking-widest"
          )}>
            {t.pages.figures.title}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto opacity-70"></div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {t.pages.figures.items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={cn(
                "flex flex-col md:flex-row items-center gap-12 lg:gap-20",
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              )}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/5] w-full rounded-tl-3xl rounded-br-3xl overflow-hidden p-2 border-2 border-[#8c6b42]/40 shadow-2xl group">
                  <div className="absolute inset-0 bg-[#d4af37]/10 z-10 group-hover:bg-transparent transition-all duration-700 pointer-events-none"></div>
                  <Image 
                    src={images[index]} 
                    alt={item.name}
                    fill
                    className="object-cover rounded-tl-2xl rounded-br-2xl filter sepia-[0.3] hover:sepia-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold text-[#d4af37] mb-8 drop-shadow-sm",
                  isMarathi ? "font-yatra" : "font-cinzel"
                )}>
                  {item.name}
                </h3>
                <p className={cn(
                  "text-lg md:text-xl leading-relaxed text-[#cbbba0] text-justify",
                  isMarathi ? "font-mukta" : "font-cinzel tracking-wide"
                )}>
                  <span className={cn(
                    "float-left text-6xl md:text-7xl mr-3 mt-1 text-[#8c6b42]",
                    isMarathi ? "font-yatra" : "font-cinzel"
                  )}>
                    {item.description.charAt(0)}
                  </span>
                  {item.description.slice(1)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
