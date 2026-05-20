"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-saffron"></span>
              <h3 className="text-saffron font-medium uppercase tracking-widest text-sm">Our Heritage</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              The Abode of Lord Vitthal
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Nestled on the banks of the sacred Chandrabhaga River, Pandharpur is the spiritual heart of Maharashtra. Every year, millions of devotees embark on the Wari, a centuries-old tradition, to seek the blessings of Lord Vitthal and Goddess Rukmini.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Experience the enchanting chants, the rhythmic beat of the Dindi, and a profound sense of peace that permeates the very air of this ancient holy city.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="border-l-2 border-saffron/30 pl-4">
                <h4 className="text-3xl font-bold text-foreground mb-2">12th <span className="text-lg text-foreground/60 font-normal">Century</span></h4>
                <p className="text-sm text-foreground/70">Historic Origins</p>
              </div>
              <div className="border-l-2 border-saffron/30 pl-4">
                <h4 className="text-3xl font-bold text-foreground mb-2">1M+</h4>
                <p className="text-sm text-foreground/70">Pilgrims Annually</p>
              </div>
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12"
            >
              <img 
                src="/images/3.jpg" 
                alt="Temple Entrance" 
                className="rounded-2xl object-cover aspect-[4/5] w-full shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img 
                src="/images/1.jpg" 
                alt="Temple Shikhar" 
                className="rounded-2xl object-cover aspect-[4/5] w-full shadow-2xl"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
