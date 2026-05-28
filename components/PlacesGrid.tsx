"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Clock } from "lucide-react";
import { useTranslation } from "@/lib/LanguageContext";

const places = [
  {
    nameEn: "Shree Vitthal Rukmini Temple",
    nameMr: "श्री विठ्ठल रुक्मिणी मंदिर",
    descEn: "The central 13th-century attraction dedicated to Lord Vitthal and Goddess Rukmini. Open until 11:00 PM tonight. Devotees are traditionally allowed to touch the feet of the deity (Padsparsha Darshan) or opt for Mukh Darshan.",
    descMr: "भगवान विठ्ठल आणि रुक्मिणी मातेला समर्पित १३ व्या शतकातील मुख्य केंद्र. आज रात्री ११:०० वाजेपर्यंत खुले. भाविकांना देवाच्या चरणांना स्पर्श करण्याची (पदस्पर्श दर्शन) परवानगी असते किंवा ते मुख दर्शनाचा पर्याय निवडू शकतात.",
    image: "/images/2.jpg",
  },
  {
    nameEn: "Shri Sant Gajanan Maharaj Sansthan",
    nameMr: "श्री संत गजानन महाराज संस्थान",
    descEn: "Known for exceptional cleanliness and disciplined environment, this highly recommended spiritual retreat is open 24/7 and offers clean, affordable accommodation and satvik prasad meals.",
    descMr: "उत्कृष्ट स्वच्छता आणि शिस्तप्रिय वातावरणासाठी ओळखले जाणारे हे आध्यात्मिक केंद्र २४ तास खुले असते. येथे स्वच्छ, परवडणारे निवासस्थान आणि सात्विक महाप्रसाद भोजन मिळते.",
    image: "/images/mandir.jpg",
  },
  {
    nameEn: "Vishnupad Temple",
    nameMr: "विष्णुपद मंदिर",
    descEn: "Located right in the bed of the Chandrabhaga river, this unique rock structure features Lord Vishnu's footprints. Open 24/7 with a serene atmosphere where Lord Krishna is said to have danced with cows.",
    descMr: "चंद्रभागेच्या पात्रात खडकांवर बांधलेले हे एक अद्वितीय मंदिर असून येथे भगवान विष्णूच्या पावलांचे ठसे आहेत. २४ तास उघडे असणारे हे मंदिर शांत वातावरण आणि कृष्ण-विष्णूच्या लीलांसाठी प्रसिद्ध आहे.",
    image: "/images/Vishnupad_Temple.jpg",
  },
  {
    nameEn: "Tulsi Vrindavan",
    nameMr: "तुळशी वृंदावन",
    descEn: "A charming garden that is particularly beautiful in the evenings, featuring a musical fountain and beautifully lit basil plants. Closes at 8:00 PM tonight.",
    descMr: "विविध प्रकारच्या तुळशीची रोपे आणि रात्री उजळून निघणाऱ्या संगीतमय कारंज्यासह संध्याकाळच्या वेळी अत्यंत विलोभनीय दिसणारी एक सुंदर बाग. आज रात्री ८:०० वाजता बंद होईल.",
    image: "/images/4.jpg",
  },
  {
    nameEn: "Chandrabhaga River",
    nameMr: "चंद्रभागा नदी",
    descEn: "The crescent-shaped riverfront is the soul of Pandharpur. Pilgrims take a holy dip at the ghats before visiting the main shrine. The riverside walks offer a peaceful and transcendent atmosphere.",
    descMr: "अर्धचंद्राकृती नदीकाठ हा पंढरपूरचा आत्मा आहे. भाविक मुख्य मंदिराला भेट देण्यापूर्वी घाटावर पवित्र स्नान करतात. नदीकाठचा परिसर अतिशय शांत आणि दैवी अनुभव देतो.",
    image: "/images/Chandrabhaga_River.jpg",
  },
  {
    nameEn: "ISKCON Pandharpur",
    nameMr: "इस्कॉन पंढरपूर",
    descEn: "Situated on the eastern bank of the river, this center is known for its peaceful, clean environment, beautiful Krishna temple, and spiritual meditation retreats.",
    descMr: "नदीच्या पूर्व किनाऱ्यावर वसलेले हे केंद्र अत्यंत शांत, स्वच्छ वातावरण आणि विलोभनीय कृष्ण मंदिरासाठी प्रसिद्ध असून ध्यानसाधनेसाठी उत्तम स्थान आहे.",
    image: "/images/SnapInsta.to_616422600_18308011927266147_2934674065074266050_n.jpg",
  },
  {
    nameEn: "Kaikadi Maharaj Mandir",
    nameMr: "कैकाडी महाराज मंदिर",
    descEn: "A unique temple math housing nearly 1,000 intricately carved idols that depict various gods, saints, and rich mythological scenes from Hindu scriptures.",
    descMr: "विविध देवी-देवता, संत आणि पौराणिक प्रसंग दर्शवणाऱ्या सुमारे १,००० हून अधिक भव्य मूर्ती असलेले एक अद्वितीय आणि प्रेक्षणीय मंदिर व मठ.",
    image: "/images/3.jpg",
  },
];

export default function PlacesGrid() {
  const { language } = useTranslation();
  const isMr = language === 'mr';
  const [activeMapQuery, setActiveMapQuery] = useState("Pandharpur, Maharashtra");
  const [currentTime, setCurrentTime] = useState("");

  // Interactive Card & Direction states
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [startPoints, setStartPoints] = useState<{ [key: number]: string }>({});
  const [routeQueries, setRouteQueries] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const formatTime = () => {
      const now = new Date();
      return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };
    setCurrentTime(formatTime());
    const interval = setInterval(() => {
      setCurrentTime(formatTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const getPlaceStatus = (placeId: number) => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    const isOpen24 = [1, 2, 4].includes(placeId);
    if (isOpen24) return { status: "open" as const, textEn: "Open 24/7", textMr: "२४ तास उघडे" };

    let openHour = 6;
    let closeHour = 20;

    if (placeId === 0) {
      openHour = 6;
      closeHour = 23;
    } else if (placeId === 3) {
      openHour = 9;
      closeHour = 20;
    } else if (placeId === 5) {
      openHour = 4.5;
      closeHour = 20.5;
    } else if (placeId === 6) {
      openHour = 6;
      closeHour = 20;
    }

    const currentDecimalTime = hour + minute / 60;

    if (currentDecimalTime >= openHour && currentDecimalTime < closeHour) {
      if (closeHour - currentDecimalTime <= 0.5) {
        return { status: "soon" as const, textEn: "Closing Soon", textMr: "लवकरच बंद होईल" };
      }
      return { status: "open" as const, textEn: "Open Now", textMr: "आता उघडे आहे" };
    } else {
      return { status: "closed" as const, textEn: "Closed", textMr: "बंद आहे" };
    }
  };

  const getPlaceMapUrl = (index: number, placeNameEn: string) => {
    const route = routeQueries[index];
    if (route) {
      return `https://maps.google.com/maps?saddr=${encodeURIComponent(route)}&daddr=${encodeURIComponent(placeNameEn + ", Pandharpur, Solapur, Maharashtra")}&t=&z=14&ie=UTF8&iwloc=&output=embed`;
    }
    return `https://maps.google.com/maps?q=${encodeURIComponent(placeNameEn + ", Pandharpur, Solapur, Maharashtra")}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  };

  const handleGetDirections = (index: number, e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const start = startPoints[index] || "";
    if (start.trim()) {
      setRouteQueries(prev => ({ ...prev, [index]: start }));
    }
  };

  const handleQuickSelect = (index: number, city: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setStartPoints(prev => ({ ...prev, [index]: city }));
    setRouteQueries(prev => ({ ...prev, [index]: city }));
  };

  const handleResetDirections = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setStartPoints(prev => ({ ...prev, [index]: "" }));
    setRouteQueries(prev => {
      const copy = { ...prev };
      delete copy[index];
      return copy;
    });
  };

  const container: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: any = {
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

        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-saffron/10 via-amber-500/5 to-transparent border border-saffron/20 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-3xl -z-10" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  {isMr ? "थेट आध्यात्मिक मार्गदर्शक" : "Live Spiritual Guide"}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {isMr 
                  ? "पंढरपूर - भारताचे 'दक्षिण काशी'" 
                  : "Pandharpur - The 'South Kashi' of India"}
              </h3>
              <p className="text-foreground/80 leading-relaxed max-w-4xl text-sm md:text-base">
                {isMr 
                  ? `पंढरपूर हे भगवान विठ्ठलाच्या आराधनेचे मुख्य केंद्र आहे. सध्या रात्रीचे ${currentTime || "०७:५०"} वाजले असल्याने, काही प्रमुख आध्यात्मिक स्थळे रात्रीच्या दर्शनासाठी किंवा चंद्रभागेच्या घाटावर शांत चिंतनासाठी खुली आहेत.`
                  : `Pandharpur, known as the "South Kashi" of India, is a major pilgrimage hub centered around the worship of Lord Vitthal. Since it is currently ${currentTime || "7:50 PM"}, several iconic spiritual sites remain open for late-evening darshan or peaceful reflection by the river.`}
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center p-6 bg-background/60 border border-foreground/10 rounded-2xl min-w-[160px] shadow-lg backdrop-blur-md">
              <span className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-1 flex items-center gap-1">
                <Clock size={12} /> {isMr ? "स्थानिक वेळ" : "Local Time"}
              </span>
              <span className="text-2xl font-bold font-mono text-saffron tracking-wider">
                {currentTime || "07:50 PM"}
              </span>
            </div>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {places.map((place, index) => {
            const isActive = activeCardIndex === index;
            const placeMapUrl = getPlaceMapUrl(index, place.nameEn);

            return (
              <motion.div 
                key={index} 
                layout
                variants={item}
                onClick={(e) => {
                  if (!isActive) {
                    setActiveCardIndex(index);
                    setActiveMapQuery(`${place.nameEn}, Pandharpur, Maharashtra`);
                  }
                }}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 border border-foreground/10 ${
                  isActive 
                    ? "h-[650px] md:h-[500px] md:col-span-2 shadow-2xl ring-2 ring-saffron/30" 
                    : "h-[400px] col-span-1 hover:border-saffron/30"
                }`}
              >
                {/* Background Image - Always Visible */}
                <img 
                  src={place.image} 
                  alt={isMr ? place.nameMr : place.nameEn} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Normal State Info View */}
                {!isActive ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Live Status Badge */}
                    <div className="absolute top-6 right-6 z-20">
                      {(() => {
                        const info = getPlaceStatus(index);
                        const statusColors = {
                          open: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
                          soon: "bg-amber-500/20 text-amber-300 border-amber-500/30 animate-pulse",
                          closed: "bg-rose-500/20 text-rose-300 border-rose-500/30"
                        };
                        return (
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md ${statusColors[info.status]}`}>
                            <span className={`h-2 w-2 rounded-full ${
                              info.status === "open" ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" :
                              info.status === "soon" ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]" :
                              "bg-rose-400"
                            }`} />
                            {isMr ? info.textMr : info.textEn}
                          </span>
                        );
                      })()}
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center gap-2 text-saffron mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        <MapPin size={18} />
                        <span className="text-sm font-medium tracking-wider uppercase">Pandharpur</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{isMr ? place.nameMr : place.nameEn}</h3>
                      <p className="text-white/80 line-clamp-2">
                        {isMr ? place.descMr : place.descEn}
                      </p>
                      
                      {/* Click to open indicator */}
                      <span className="text-xs text-saffron/80 font-semibold tracking-wider uppercase mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                        {isMr ? "📍 नकाशा आणि मार्ग उघडण्यासाठी क्लिक करा" : "📍 Click to open map & get directions"}
                      </span>
                    </div>
                  </>
                ) : (
                  /* Active State Map & Direction Finder View */
                  <div 
                    onClick={(e) => e.stopPropagation()} 
                    className="absolute inset-0 w-full h-full flex flex-col md:flex-row bg-black/85 backdrop-blur-md z-30 transition-all duration-500"
                  >
                    {/* Left Column: Info & Start Point input */}
                    <div className="w-full md:w-5/12 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 h-[50%] md:h-full overflow-y-auto">
                      <div className="space-y-4">
                        {/* Header with back button */}
                        <div className="flex items-center justify-between">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCardIndex(null);
                            }}
                            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-saffron hover:text-saffron-dark transition-colors py-1 px-3 border border-saffron/20 rounded-full hover:border-saffron/40"
                          >
                            ← {isMr ? "मागे" : "Back"}
                          </button>
                          
                          {/* Mini Live Status */}
                          {(() => {
                            const info = getPlaceStatus(index);
                            return (
                              <span className="text-[10px] md:text-xs font-semibold text-[#cbbba0] flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                                <span className={`h-1.5 w-1.5 rounded-full ${
                                  info.status === "open" ? "bg-emerald-400" :
                                  info.status === "soon" ? "bg-amber-400 animate-pulse" :
                                  "bg-rose-400"
                                }`} />
                                {isMr ? info.textMr : info.textEn}
                              </span>
                            );
                          })()}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-white font-cinzel mt-2">
                          {isMr ? place.nameMr : place.nameEn}
                        </h3>
                        <p className="text-[#cbbba0] text-xs md:text-sm leading-relaxed">
                          {isMr ? place.descMr : place.descEn}
                        </p>
                      </div>

                      {/* Direction form */}
                      <form onSubmit={(e) => handleGetDirections(index, e)} className="my-4 md:my-6 space-y-4">
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold text-saffron uppercase tracking-wider">
                            {isMr ? "तुमचे सुरुवातीचे ठिकाण टाका:" : "Enter your starting point:"}
                          </label>
                          <input 
                            type="text"
                            value={startPoints[index] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              setStartPoints(prev => ({ ...prev, [index]: val }));
                            }}
                            placeholder={isMr ? "उदा. सोलापूर, पुणे, रेल्वे स्टेशन..." : "e.g., Solapur, Pune, Railway Station..."}
                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron text-sm transition-all"
                          />
                        </div>

                        <div className="flex gap-2">
                          <button
                            type="submit"
                            className="flex-1 py-2.5 bg-gradient-to-r from-saffron to-amber-500 hover:from-saffron-dark hover:to-amber-600 text-white font-semibold rounded-xl text-xs md:text-sm transition-all shadow-[0_0_15px_rgba(255,153,51,0.15)] flex items-center justify-center gap-1.5"
                          >
                            🗺️ {isMr ? "मार्ग दाखवा" : "Get Directions"}
                          </button>
                          {(startPoints[index] || routeQueries[index]) && (
                            <button
                              type="button"
                              onClick={(e) => handleResetDirections(index, e)}
                              className="px-3 py-2.5 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl text-xs transition-all flex items-center justify-center"
                              title={isMr ? "पुन्हा सेट करा" : "Reset Route"}
                            >
                              🔄
                            </button>
                          )}
                        </div>

                        {/* Popular Quick Selects */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[10px] md:text-xs text-white/40">
                            {isMr ? "त्वरित निवड:" : "Quick Select:"}
                          </span>
                          {["Solapur", "Pune", "Mumbai"].map((city) => (
                            <button
                              key={city}
                              type="button"
                              onClick={(e) => handleQuickSelect(index, city, e)}
                              className="text-[10px] md:text-xs px-2.5 py-1 bg-white/5 hover:bg-white/10 text-saffron border border-white/10 rounded-full transition-all"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </form>

                      {/* Map Action */}
                      <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                        <a 
                          href={routeQueries[index] 
                            ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(routeQueries[index])}&destination=${encodeURIComponent(place.nameEn + ", Pandharpur, Maharashtra")}`
                            : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.nameEn + ", Pandharpur, Maharashtra")}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-saffron hover:underline flex items-center gap-1"
                        >
                          🌐 {isMr ? "गुगल मॅप्सवर उघडा" : "Open in Google Maps"} ↗
                        </a>

                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveCardIndex(null);
                          }}
                          className="text-xs text-white/50 hover:text-white transition-colors"
                        >
                          ✕ {isMr ? "बंद करा" : "Close"}
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Google Map Embed */}
                    <div className="w-full md:w-7/12 h-[50%] md:h-full relative bg-black/10">
                      <iframe 
                        src={placeMapUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full filter dark:invert dark:hue-rotate-180 hover:filter-none transition-all duration-1000"
                      ></iframe>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
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
              src="https://maps.google.com/maps?q=Pandharpur,%20Solapur,%20Maharashtra,%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
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