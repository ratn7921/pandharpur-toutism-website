"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";
import { cn } from "@/lib/utils";

const posts = [
  {
    type: "image",
    src: "/images/SnapInsta.to_639514282_18315948253248610_8612203752931998059_n.jpg",
    caption: "The divine presence of Lord Vitthal. #Pandharpur #Wari",
    captionMr: "भगवान विठ्ठलाची दिव्य उपस्थिती. #पंढरपूर #वारी",
    likes: "12.4K",
  },
  {
    type: "video",
    src: "/images/SnapInsta.to_AQN5frUIxx6Q6YY9hrXCMgDmNFuL7fm9f4hCXBXrW73qnEFwvDnzHwwty2897lKp9wx3SjS5o93ZOQl6jpxYY-vo79lHq0M2ir2sOWQ.mp4",
    caption: "Experience the energy of the Dindi! #Vithumauli",
    captionMr: "दिंडीचा उत्साह अनुभवा! #विठूमाऊली",
    likes: "45.2K",
  },
  {
    type: "image",
    src: "/images/SnapInsta.to_534463625_18338593375207030_6345527660775111859_n.jpg",
    caption: "Beautiful moments at the Chandrabhaga River. #Spirituality",
    captionMr: "चंद्रभागेच्या तीरावरील सुंदर क्षण. #आध्यात्म",
    likes: "8.9K",
  },
  {
    type: "image",
    src: "/images/SnapInsta.to_536465894_18338593357207030_3562112817813212015_n.jpg",
    caption: "Every step is a prayer. #Warkari",
    captionMr: "प्रत्येक पाऊल ही एक प्रार्थना आहे. #वारकरी",
    likes: "15.1K",
  },
  {
    type: "video",
    src: "/images/SnapInsta.to_AQNDzXR7eDfgSrH7PQSOw9nfwiXAn23EnAEWi8XSSo5KxqEGHu10G9cmTzw9yHz9qPIwFaJW_9MtOgaAKPuQ7cB6TPad9jp5wr3O6oA.mp4",
    caption: "Chanting the holy name. Ram Krishna Hari! #Vitthal",
    captionMr: "पवित्र नामाचा जप. राम कृष्ण हरी! #विठ्ठल",
    likes: "32.8K",
  },
  {
    type: "image",
    src: "/images/SnapInsta.to_575612169_17929546836134343_428448798331724892_n.jpg",
    caption: "A magnificent view of the temple shikhar. #Maharashtra",
    captionMr: "मंदिराच्या शिखराचे विहंगम दृश्य. #महाराष्ट्र",
    likes: "21.5K",
  }
];

export default function InstagramFeed() {
  const { language } = useTranslation();
  const isMr = language === 'mr';

  return (
    <section id="gallery" className="py-24 bg-background px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", isMr ? "font-yatra" : "")}>
            {isMr ? "आमची गॅलरी" : "Our Gallery"}
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            {isMr ? "पंढरपूरची काही खास आणि दिव्य क्षणचित्रे." : "Glimpses of the divine moments in Pandharpur."}
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="break-inside-avoid glass rounded-2xl overflow-hidden border border-white/10 dark:border-white/5 dark:bg-black/40 shadow-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-purple-500 p-[2px]">
                    <div className="w-full h-full rounded-full bg-background overflow-hidden border-2 border-background">
                      <img src="/images/5.jpg" alt="Pandharpur" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-none">pandharpur</p>
                    <p className="text-xs text-foreground/50">Pandharpur, Maharashtra</p>
                  </div>
                </div>
                <MoreHorizontal size={20} className="text-foreground/60" />
              </div>

              {/* Media */}
              <div className="w-full bg-black/5 aspect-square flex items-center justify-center overflow-hidden">
                {post.type === "image" ? (
                  <img src={post.src} alt="Post" className="w-full h-full object-cover" />
                ) : (
                  <video src={post.src} controls className="w-full h-full object-cover bg-black" />
                )}
              </div>

              {/* Actions & Caption */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-3">
                  <Heart size={24} className="hover:text-red-500 transition-colors cursor-pointer" />
                  <MessageCircle size={24} className="hover:text-foreground/60 transition-colors cursor-pointer" />
                  <Send size={24} className="hover:text-foreground/60 transition-colors cursor-pointer" />
                  <Bookmark size={24} className="ml-auto hover:text-foreground/60 transition-colors cursor-pointer" />
                </div>
                <p className="text-sm font-semibold mb-1">{post.likes} likes</p>
                <p className="text-sm">
                  <span className="font-semibold mr-2">pandharpur</span>
                  <span className={cn("text-foreground/80", isMr ? "font-mukta" : "")}>
                    {isMr ? post.captionMr : post.caption}
                  </span>
                </p>
                <p className="text-xs text-foreground/40 mt-2 uppercase tracking-wide">2 Days Ago</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
