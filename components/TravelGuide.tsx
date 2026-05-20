"use client";

import { motion } from "framer-motion";
import { Plane, Train, Bus, MapPin, Phone, Mail } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

export default function TravelGuide() {
  const { language } = useTranslation();
  const isMr = language === "mr";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-black relative border-t border-[#8c6b42]/30">
      <div className="absolute inset-0 bg-[#d4af37]/5 mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold text-[#d4af37] mb-4 tracking-widest",
            isMr ? "font-yatra tracking-normal" : "font-cinzel"
          )}>
            {isMr ? "कसे पोहोचावे?" : "How To Reach"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#8c6b42] to-transparent mx-auto opacity-70"></div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* By Road */}
          <motion.div variants={item} className="bg-white/5 border border-[#8c6b42]/20 p-8 rounded-3xl backdrop-blur-sm text-center group hover:border-[#d4af37]/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-[#8c6b42]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Bus className="text-[#d4af37]" size={32} />
            </div>
            <h3 className={cn("text-2xl font-bold text-[#cbbba0] mb-4", isMr ? "font-yatra" : "font-cinzel")}>
              {isMr ? "रस्त्याने" : "By Road"}
            </h3>
            <p className="text-white/70">
              {isMr 
                ? "पुणे, मुंबई आणि सोलापूरसारख्या प्रमुख शहरांमधून नियमित बस सेवा उपलब्ध आहेत." 
                : "Regular bus services are available from major cities like Pune, Mumbai, and Solapur."}
            </p>
          </motion.div>

          {/* By Rail */}
          <motion.div variants={item} className="bg-white/5 border border-[#8c6b42]/20 p-8 rounded-3xl backdrop-blur-sm text-center group hover:border-[#d4af37]/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-[#8c6b42]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Train className="text-[#d4af37]" size={32} />
            </div>
            <h3 className={cn("text-2xl font-bold text-[#cbbba0] mb-4", isMr ? "font-yatra" : "font-cinzel")}>
              {isMr ? "रेल्वेने" : "By Rail"}
            </h3>
            <p className="text-white/70">
              {isMr 
                ? "पंढरपूर रेल्वे स्टेशन प्रमुख शहरांशी चांगल्या प्रकारे जोडलेले आहे." 
                : "Pandharpur Railway Station is well connected to major cities."}
            </p>
          </motion.div>

          {/* By Air */}
          <motion.div variants={item} className="bg-white/5 border border-[#8c6b42]/20 p-8 rounded-3xl backdrop-blur-sm text-center group hover:border-[#d4af37]/50 transition-colors">
            <div className="w-16 h-16 mx-auto bg-[#8c6b42]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Plane className="text-[#d4af37]" size={32} />
            </div>
            <h3 className={cn("text-2xl font-bold text-[#cbbba0] mb-4", isMr ? "font-yatra" : "font-cinzel")}>
              {isMr ? "विमानाने" : "By Air"}
            </h3>
            <p className="text-white/70">
              {isMr 
                ? "सर्वांत जवळचे विमानतळ सोलापूर विमानतळ (७२ किमी) आहे." 
                : "Nearest airport is Solapur Airport (72 km)."}
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#8c6b42]/20 to-transparent border border-[#8c6b42]/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="md:w-1/2">
            <h3 className={cn("text-3xl font-bold text-[#d4af37] mb-6", isMr ? "font-yatra" : "font-cinzel")}>
              {isMr ? "श्री विठ्ठल रुक्मिणी मंदिर समिती" : "Shri Vitthal Rukmini Mandir Samiti"}
            </h3>
            <p className="text-white/80 leading-relaxed mb-8">
              {isMr 
                ? "अधिकृत दर्शन आणि पास बुकिंगसाठी थेट मंदिर समितीशी संपर्क साधा किंवा त्यांच्या अधिकृत वेबसाइटला भेट द्या." 
                : "For official live darshan, pass bookings, and donations, contact the temple committee directly or visit their official website."}
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col gap-6 text-white/90">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#d4af37] mt-1 shrink-0" size={24} />
              <p>Shri Vitthal Rukmini Mandir Samiti, Pandharpur - 413304, Dist. Solapur, Maharashtra.</p>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#d4af37] shrink-0" size={24} />
              <p>(02186) 224466, 223550</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#d4af37] shrink-0" size={24} />
              <p>eotemple@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
