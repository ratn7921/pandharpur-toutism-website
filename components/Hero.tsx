"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Hero() {
  const { language, t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  };

  const isMarathi = language === 'mr';

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background z-10" />
        <img
          src="/images/home.jpg"
          alt="Devotees in Pandharpur"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_30s_ease-in-out_infinite_alternate]"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className={cn("inline-block px-4 py-1.5 mb-6 rounded-full glass border-saffron/30 text-white text-sm font-medium tracking-wide uppercase", isMarathi ? "font-mukta" : "")}
        >
          {t.hero.tagline}
        </motion.div>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl",
            isMarathi ? "font-yatra text-6xl md:text-8xl lg:text-9xl tracking-normal" : ""
          )}
        >
          {isMarathi ? (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-white to-gold">{t.hero.title}</span>
          ) : (
            <>Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-gold">Pandharpur</span></>
          )}
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className={cn(
            "text-lg md:text-2xl text-white/90 font-light max-w-3xl mb-12 drop-shadow-md leading-relaxed",
            isMarathi ? "font-mukta text-xl md:text-3xl font-medium" : ""
          )}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Link
            href="/#about"
            className={cn(
              "flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-saffron to-saffron-dark text-white rounded-full transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,153,51,0.4)] hover:shadow-[0_0_60px_rgba(255,153,51,0.6)] group",
              isMarathi ? "font-mukta text-lg font-bold" : "font-medium"
            )}
          >
            {t.hero.cta}
            <ArrowDown size={20} className="group-hover:animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
