"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function OfficialTempleLore() {
  return (
    <div className="w-full flex flex-col items-center">
      
      {/* 1. Shri Vitthal & Rukmini Section */}
      <div className="max-w-4xl w-full mx-auto px-6 py-16 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-[#d4af37] mb-6 drop-shadow-lg tracking-widest">
            The Relevance of Shri Vitthal
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-[#8c6b42] to-transparent mx-auto opacity-50 mb-10"></div>
          
          <div className="space-y-8 text-lg md:text-xl font-cinzel text-[#cbbba0] text-justify leading-[2.2] tracking-wide">
            <p>
              <span className="float-left text-7xl md:text-8xl mr-4 mt-2 font-cinzel text-[#8c6b42]">T</span>
              he parabrahma or the God of Pandharpur is worshipped and lovingly called by his devotees with many names in different course of the time, like Pandharinath, Pandurang, Pandhariraya, Vithai, Vithoba, Vithumauli, Vitthal gururao, Pandurang, Hari etc. However, today this God is well-known as Pandurang and Shri Vitthal.
            </p>
            <p>
              Many historians and researchers tried to find out the etymological origin of the word “Vitthal”. Some scholars believe that it is a distorted form of the original word Vishnu. The Great Saint poet Tukaram defines the word Vithoba in one of his abhangas that stands for ‘Knowledge’ + Thoba Stands for ‘form’. Thus Vithoba stands for the ‘form of ultimate Knowledge’ or ‘idol of ultimate Knowledge’. It is also believed that Vi stands for bird Eagle + Thoba Stands for sitting place, thus Vithoba stands for the ‘God who sits on Eagle’.
            </p>
            <p>
              Vithoba is God Vishnu, standing on a brick and resting his arms on his waist. It is believed that Shri Krishna, Shri Vishnu and Shri Vithoba are all different names and forms of the one and the same God. Shri Krishna is known as incarnation of Shri Vishnu which took place on Wednesday (Shravan Vadya Ashtami) at the end of Dwaparyuga. Vithoba is Shri Krishna only. Wednesday is known as the day of Vithoba. So devotees (varkari) of Vithoba never leave Pandharpur on Wednesday even now.
            </p>
          </div>
        </motion.div>

        {/* The Sculpture */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 border-2 border-[#8c6b42]/30 rounded-3xl bg-black/40 backdrop-blur-sm"
        >
          <h3 className="text-3xl font-bold font-cinzel text-[#d4af37] mb-6 text-center">About the Sculpture (Idol)</h3>
          <p className="text-lg font-cinzel text-[#cbbba0] text-justify leading-relaxed">
            Vitthal is benevolent for the downtrodden and is bhaktakamkalpadrum and yogiyadurlabh. The sculpture is self made up of sand stone. He has cap just like crown on his head. It is known as shivlinga as it looks like the shivlinga. Face of Shri Vitthal is long, cheeks are bulky, his eyes are looking horizontally straight. He wear’s Makar kundale in his ear. A Kaustubhmni is there around his neck like necklace. Shinke are on his back and on his shrivatsalanchhan. Angads are there on his both arms and on his both wrists he has Manibandhs. Shri Vitthal put his both hands on his waist. In his right hand he has a Kambal and in left hand he has Shankha. On his chest, there is a spot where Bhrugurishi had put his feet. Thus this sculpture is standing on a brick.
          </p>
        </motion.div>

        {/* Rukmini */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-cinzel text-[#d4af37] mb-8 text-center tracking-widest">
            Mother Rukmini
          </h2>
          <div className="space-y-6 text-lg font-cinzel text-[#cbbba0] text-justify leading-relaxed">
            <p>
              Rukmini, the principal queen of Lord Krishna, is worshipped as the divine consort of Lord Vitthal in Pandharpur. She is considered an incarnation of Goddess Lakshmi and represents devotion, patience, and divine love. Her temple, situated on the banks of the Chandrabhaga River, stands as a testament to her spiritual significance in the Varkari tradition.
            </p>
            <p className="italic text-center text-[#d4af37] border-y border-[#8c6b42]/30 py-6 my-8">
              "In the sacred town of Pandharpur, where the Chandrabhaga flows with grace, Rukmini stands as the eternal mother, blessing devotees with divine embrace."
            </p>
            <p>
              Devotees visiting Pandharpur make it a point to seek blessings at both the Vitthal temple and the Rukmini temple. Special prayers and rituals are performed during festivals, particularly during Kartik Ekadashi and Ashadhi Ekadashi. The tradition of visiting both temples symbolizes the complete spiritual experience, as Rukmini and Vitthal are considered inseparable in divine union.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex justify-center mt-12 mb-12 opacity-50">
        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10H40M60 10H100M50 0L55 10L50 20L45 10L50 0Z" fill="#8c6b42"/>
        </svg>
      </div>

      {/* 2. Scriptures & Lore */}
      <div className="max-w-4xl w-full mx-auto px-6 py-12">
        <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-[#d4af37] mb-16 text-center drop-shadow-lg tracking-widest">
          Ancient Scriptures
        </h2>

        <div className="space-y-16">
          {/* Padmapuran */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold font-cinzel text-[#d4af37] mb-4">Padmapuran Illustration</h3>
            <p className="text-lg font-cinzel text-[#cbbba0] leading-relaxed text-justify mb-4">
              Varahsanhita in Paddyapuran explains the significance of God Pandurang or Vitthal. This is comprised of 32 chapters. There is a reference that it was first narrated by Lord Shankar to Devi Parvati. Pandurang mahatmya throws light on how Pandurang/Vitthal came in Pandharpur. Pandharpur is a sort of design in which Lord Vitthal is situated at the center. Pandharpur is as holy as Kashi, Neera Narasingpur is as Prayag and Korti or Vishnupad is like Gaya.
            </p>
          </motion.div>

          {/* Skandapuran */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold font-cinzel text-[#d4af37] mb-4">Skandapuran Illustration</h3>
            <div className="bg-black/30 p-6 rounded-xl border-l-4 border-[#8c6b42] mb-4">
              <p className="font-yatra text-2xl text-[#d4af37] mb-2">पुष्करात् त्रिगुणं पुण्यं, केदारात् षड्गुणं भवेत् | वाराणस्याद् दशगुणं, अनन्तं श्रीगिरेरपि ||</p>
              <p className="font-cinzel text-[#cbbba0] italic">Pushkara is three times more sacred, Kedarnath is six times greater. Ten times more sacred is Varanasi, and infinite is the glory of Shri Giri.</p>
            </div>
            <p className="text-lg font-cinzel text-[#cbbba0] leading-relaxed text-justify">
              This place is spiritually fruitful three times more than Pushkar, six times more than Kedarnath, ten times more than Varanashi and many more times than Shrishaila. In this place the greatest of all Lord Yogishvara, Mahavishnu resides here with His nine divine powers.
            </p>
          </motion.div>

          {/* Abhang */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 className="text-3xl font-bold font-cinzel text-[#d4af37] mb-4">Saint Tukaram's Abhang</h3>
            <div className="bg-[#8c6b42]/10 p-8 rounded-2xl border border-[#8c6b42]/30 text-center space-y-4">
              <p className="font-yatra text-2xl md:text-3xl text-[#d4af37] leading-relaxed">
                अवघीच तीर्थे घडली एक वेळा | चंद्रभागा डोळा देखिललया ||<br/>
                अवघीच पापे गेली दिगंतरी | वैकुंठ पंढरी देखिललया ||
              </p>
              <p className="font-cinzel text-[#cbbba0] text-lg italic mt-4">
                Avaghīch tīrthe ghaḍalī eka vēḷā | Candrabhāgā ḍoḷā dekhilalayā ||<br/>
                Avaghīch pāpe gelī digantarī | Vaikuṇṭha Paṇḍharī dekhilalayā ||
              </p>
              <p className="font-cinzel text-white/80 mt-6 text-sm">
                Meaning: Visiting Pandharpur leads to spiritual liberation, and just seeing the Chandrabhaga clears away lifetimes of sins.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12 mb-12 opacity-50">
        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10H40M60 10H100M50 0L55 10L50 20L45 10L50 0Z" fill="#8c6b42"/>
        </svg>
      </div>

      {/* 3. The Yatras & Dindi */}
      <div className="max-w-5xl w-full mx-auto px-6 py-12">
        <h2 className="text-4xl md:text-6xl font-bold font-cinzel text-[#d4af37] mb-16 text-center drop-shadow-lg tracking-widest">
          Sacred Yatras & Dindi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { title: "Ashadhi Yatra", desc: "Also known as Devashayani Ekadashi. Marks the beginning of the holy Chaturmas. The largest gathering of Varkaris takes place in Pandharpur. The grand procession of Saint Dnyaneshwar and Saint Tukaram converges at Santanagar." },
            { title: "Chaitri Yatra", desc: "Chaitra is the first month of the Hindu calendar. On Chaitra shudha ekadashi (Kamda Ekadashi), the first pilgrimage of the year is held. Devotees walk in large Dindis, singing Abhangas." },
            { title: "Kartiki Yatra", desc: "Celebrated in October-November. It is believed Lord Vitthal gets up from His sleep on this day. The Vitthala Rukmini Temple remains open 24 hours for continuous darshan." },
            { title: "Maghi Yatra", desc: "Held during the Shukla Ekadashi of the Magh month (Jaya Ekadashi). The entire atmosphere of Pandharpur is dissolved into a devotional mood with massive gatherings." }
          ].map((yatra, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-[#8c6b42]/30 p-8 rounded-2xl hover:border-[#d4af37]/50 transition-colors"
            >
              <h4 className="text-2xl font-bold font-cinzel text-[#d4af37] mb-4">{yatra.title}</h4>
              <p className="font-cinzel text-[#cbbba0] leading-relaxed">{yatra.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold font-cinzel text-[#d4af37] mb-6">The Varkari Tradition</h3>
          <p className="text-lg font-cinzel text-[#cbbba0] text-justify leading-relaxed max-w-4xl mx-auto">
            Dindi or vari is the pilgrimage on foot that the devotees of Lord Vithoba undertake from distant towns and villages of Maharashtra to the Vithoba Temple to honor the Lord. Being a "Varkari" comes with its own code of conduct. This includes good moral behavior, humility, and respect for all life forms regardless of caste, creed, and wealth. Varkaris strictly avoid intoxicating substances and maintain a satvik vegetarian diet, wearing a rosary made from the Tulasi plant. During the entire journey, continuous chanting of the Lord's name (Nam Japa) and singing of holy songs (Abhang) is performed.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
