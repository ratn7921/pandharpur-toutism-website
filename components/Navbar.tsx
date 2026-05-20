"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/LanguageContext";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: t.nav.home, href: "/#home" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.history, href: "/history" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between border border-white/20 dark:border-white/10 dark:bg-black/40">
          {/* Logo */}
          <Link href="/#home" className="text-xl font-semibold tracking-tighter text-saffron-dark dark:text-saffron flex items-center gap-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-saffron"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> */}
            Pandharpur<span className="text-foreground text-sm font-medium">Tourism</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn("text-sm font-medium hover:text-saffron transition-colors", language === 'mr' ? "font-mukta" : "")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Toggles & Special Links */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 border-l border-foreground/20 pl-4">
              <button
                onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                title="Toggle Language"
              >
                <Languages size={18} />
              </button>
              
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
                  title="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 pt-4 md:hidden"
          >
            <div className="glass dark:bg-black/90 rounded-3xl p-6 flex flex-col gap-4 shadow-xl border border-white/20 dark:border-white/10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn("text-lg font-medium hover:text-saffron transition-colors py-2 border-b border-foreground/10 last:border-0", language === 'mr' ? "font-mukta" : "")}
                >
                  {link.name}
                </Link>
              ))}
              
              <div className="flex gap-4 pt-4 border-t border-foreground/10">
                <button
                  onClick={() => setLanguage(language === "en" ? "mr" : "en")}
                  className="flex items-center gap-2 p-2 rounded-xl bg-foreground/5 w-full justify-center"
                >
                  <Languages size={18} />
                  {language === 'mr' ? 'English' : 'मराठी'}
                </button>
                {mounted && (
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="flex items-center gap-2 p-2 rounded-xl bg-foreground/5 w-full justify-center"
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                    {theme === "dark" ? 'Light' : 'Dark'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
