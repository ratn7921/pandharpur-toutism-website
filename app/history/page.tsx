"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HindupediaContent from "@/components/HindupediaContent";
import OfficialTempleLore from "@/components/OfficialTempleLore";
import { useTranslation } from "@/lib/LanguageContext";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function HistoryPage() {
  const { language, t } = useTranslation();
  const isMarathi = language === 'mr';

  return (
    <main className="flex flex-col min-h-screen bg-[#110c09] text-[#e8dcb8] transition-colors duration-300">
      <Navbar />
      
      {/* Ancient Texture Background Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] z-0"></div>
      
      <div className="flex-1 pt-32 pb-32 px-6 max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="p-8 md:p-16 rounded-sm border-double border-8 border-[#8c6b42]/30 bg-[#1a1412]/80 backdrop-blur-sm shadow-2xl relative"
        >
          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#8c6b42]"></div>
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#8c6b42]"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#8c6b42]"></div>
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#8c6b42]"></div>

          {/* Section 1: History */}
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-16 text-[#d4af37] text-center drop-shadow-lg tracking-widest", 
            isMarathi ? "font-yatra" : "font-cinzel"
          )}>
            {t.pages.history.title}
          </h1>
          
          <div className="flex flex-col gap-10">
            {t.pages.history.chapters.map((chapter, index) => (
              <motion.p 
                key={`hist-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className={cn(
                  "text-lg md:text-2xl leading-[2.2] text-[#cbbba0] text-justify", 
                  isMarathi ? "font-mukta" : "font-cinzel tracking-wide"
                )}
              >
                {index === 0 && (
                  <span className={cn(
                    "float-left text-7xl md:text-8xl mr-4 mt-2 text-[#8c6b42]",
                    isMarathi ? "font-yatra" : "font-cinzel"
                  )}>
                    {chapter.charAt(0)}
                  </span>
                )}
                {index === 0 ? chapter.slice(1) : chapter}
              </motion.p>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-full flex justify-center my-24 opacity-50">
            <svg width="150" height="30" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10H40M60 10H100M50 0L55 10L50 20L45 10L50 0Z" fill="#8c6b42"/>
            </svg>
          </div>

          {/* Section 2: Krishna & Vitthal */}
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-16 text-[#d4af37] text-center drop-shadow-lg tracking-widest", 
            isMarathi ? "font-yatra" : "font-cinzel"
          )}>
            {t.pages.krishnaVitthal.title}
          </h1>
          
          <div className="flex flex-col gap-10">
            {t.pages.krishnaVitthal.chapters.map((chapter, index) => (
              <motion.p 
                key={`kv-${index}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
                className={cn(
                  "text-lg md:text-2xl leading-[2.2] text-[#cbbba0] text-justify", 
                  isMarathi ? "font-mukta" : "font-cinzel tracking-wide"
                )}
              >
                {index === 0 && (
                  <span className={cn(
                    "float-left text-7xl md:text-8xl mr-4 mt-2 text-[#8c6b42]",
                    isMarathi ? "font-yatra" : "font-cinzel"
                  )}>
                    {chapter.charAt(0)}
                  </span>
                )}
                {index === 0 ? chapter.slice(1) : chapter}
              </motion.p>
            ))}
          </div>

          {/* Section 3: Lord Pundalika */}
          <h1 className={cn(
            "text-4xl md:text-6xl font-bold mb-16 text-[#d4af37] text-center drop-shadow-lg tracking-widest", 
            isMarathi ? "font-yatra" : "font-cinzel"
          )}>
            {t.pages.pundalika.title}
          </h1>
          
          <div className="flex flex-col gap-10">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className={cn(
                "text-lg md:text-2xl leading-[2.2] text-[#cbbba0] text-justify", 
                isMarathi ? "font-mukta" : "font-cinzel tracking-wide"
              )}
            >
              <span className={cn(
                "float-left text-7xl md:text-8xl mr-4 mt-2 text-[#8c6b42]",
                isMarathi ? "font-yatra" : "font-cinzel"
              )}>
                {t.pages.pundalika.content.charAt(0)}
              </span>
              {t.pages.pundalika.content.slice(1)}
            </motion.p>
          </div>

          {/* Final Divider before Hindupedia */}
          <div className="w-full flex justify-center mt-24 mb-24 opacity-50">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10H40M60 10H100M50 0L55 10L50 20L45 10L50 0Z" fill="#8c6b42"/>
            </svg>
          </div>

          <HindupediaContent isMarathi={isMarathi} />

          {/* Final Divider before Official Temple Lore */}
          <div className="w-full flex justify-center mt-24 mb-24 opacity-50">
            <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10H40M60 10H100M50 0L55 10L50 20L45 10L50 0Z" fill="#8c6b42"/>
            </svg>
          </div>

          <OfficialTempleLore />

        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
