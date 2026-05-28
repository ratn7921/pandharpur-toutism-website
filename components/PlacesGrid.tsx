"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

const places = [
  {
    name: "Vitthal Rukmini Temple",
    description: "The main temple dedicated to Lord Vitthal and Goddess Rukmini. The spiritual center of Pandharpur.",
    image: "/images/2.jpg",
  },
  {
    name: "Chandrabhaga River",
    description: "The crescent-shaped river where millions of pilgrims take a holy dip during the Wari.",
    image: "/images/Chandrabhaga_River.jpg",
  },
  {
    name: "Vishnupad Temple",
    description: "Located on the banks of Chandrabhaga, known for the footprints of Lord Krishna on a stone.",
    image: "/images/Vishnupad_Temple.jpg",
  },
  {
    name: "Pundalik Temple",
    description: "Dedicated to Bhakta Pundalik, whose devotion brought Lord Vitthal to Pandharpur.",
    image: "/images/Pundalik_Temple.jpg",
  },
  {
    name: "Kala Maruti Mandir",
    description: "Devoted to Lord Hanuman, famous for its distinctive black idol of the deity.",
    image: "/images/3.jpg",
  },
  {
    name: "Padmavati Mata Mandir",
    description: "Dedicated to Goddess Padmavati, the consort of Lord Vitthal. A peaceful spot for prayer and meditation.",
    image: "/images/shri-padmavati-mandir-6430413.png",
  },
  {
    name: "Sant Namdev Maharaj Mandir",
    description: "Built in dedication to Saint Namdev, showing his teachings and philosophy.",
    image: "/images/SnapInsta.to_629256037_18315948262248610_7040101930188775267_n.jpg",
  },
  {
    name: "Shri Gopalkrishna Temple",
    description: "Dedicated to Lord Krishna in his Gopala form, known for its beautiful idols and serene atmosphere.",
    image: "/images/SnapInsta.to_616422600_18308011927266147_2934674065074266050_n.jpg",
  },
];

export default function PlacesGrid() {
  const { language } = useTranslation();
  const isMr = language === 'mr';
  const [activeMapQuery, setActiveMapQuery] = useState("Pandharpur, Maharashtra");

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="places" className="py-24 md:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {isMr ? "पवित्र ठिकाणे" : "Sacred Destinations"}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl">
              {isMr 
                ? "शहरातील अशी ऐतिहासिक आणि आध्यात्मिक ठिकाणे एक्सप्लोर करा ज्यांना अनन्यसाधारण महत्त्व आहे."
                : "Explore the divine spots around the city that hold immense historical and spiritual significance."}
            </p>
          </div>
          <button className="flex items-center gap-2 text-saffron font-medium hover:text-saffron-dark transition-colors group mx-auto md:mx-0">
            {isMr ? "सर्व पहा" : "View All"} <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {places.map((place, index) => (
            <motion.div 
              key={index} 
              variants={item}
              onMouseEnter={() => setActiveMapQuery(`${place.name}, Pandharpur, Maharashtra`)}
              className="group relative overflow-hidden rounded-3xl h-[400px] cursor-pointer"
            >
              <img 
                src={place.image} 
                alt={place.name} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 text-saffron mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <MapPin size={18} />
                  <span className="text-sm font-medium tracking-wider uppercase">Pandharpur</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{place.name}</h3>
                <p className="text-white/80 line-clamp-2">
                  {place.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Map & Attractions Section */}
        <div className="mt-32">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {isMr ? "मार्ग आणि आकर्षणे" : "Map & Attractions"}
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl">
              {isMr 
                ? "महाराष्ट्रातील सोलापूर जिल्ह्यात वसलेले पंढरपूर सहज पोहोचण्यायोग्य आहे. येथे शहराचा अधिकृत नकाशा आणि इस्कॉन मंदिर (ISKCON Temple), गजानन महाराज मठ, कैकाडी महाराज मठ यांसारखी प्रमुख आकर्षणे आहेत."
                : "Located in the Solapur district of Maharashtra, Pandharpur is easily accessible. Here is the official map of the city and its major attractions like the ISKCON temple, Gajanan Maharaj Math, and Kaikadi Maharaj Math."}
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-foreground/10 h-[500px] relative transition-all duration-500">
            <iframe 
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeMapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 filter dark:invert dark:hue-rotate-180 hover:filter-none transition-all duration-1000"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
