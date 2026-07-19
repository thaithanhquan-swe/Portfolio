"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const scrollToSection = (id: string) => {
    setActive(id);
    setMobileMenuOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];
    let frameId: number | null = null;

    const updateActiveSection = () => {
      frameId = null;

      if (window.scrollY <= 32) {
        setActive("home");
        return;
      }

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (pageBottom >= documentHeight - 2) {
        setActive(sections.at(-1)?.id ?? "home");
        return;
      }

      const activationLine = window.innerHeight * 0.32;
      let currentSection = sections[0]?.id ?? "home";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActive((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    const scheduleUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    const closeMobileMenu = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeMobileMenu);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("resize", closeMobileMenu);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <motion.header
      initial={
        shouldReduceMotion
          ? { x: "-50%" }
          : { opacity: 0, y: -18, x: "-50%" }
      }
      animate={{ opacity: 1, y: 0, x: "-50%" }}
      transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-2 left-1/2 z-50 w-[calc(100%-16px)] sm:top-4 sm:w-[calc(100%-32px)]"
    >
      <nav className="relative mx-auto flex h-12 w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#111111]/90 px-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6 lg:px-7">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="max-w-[70%] cursor-pointer truncate font-mono text-xs tracking-[0.14em] text-neutral-400 transition-colors hover:text-white sm:text-sm sm:tracking-[0.18em]"
        >
          quanthai.dev
        </button>

        <div className="hidden h-full items-center gap-5 md:flex lg:gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              className={`relative flex h-full cursor-pointer items-center font-mono text-xs tracking-[0.1em] transition-colors lg:text-[15px] lg:tracking-[0.14em] ${
                active === item.id
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-200"
              }`}
            >
              {item.label}

              <span
                className={`absolute right-0 bottom-0 left-0 mx-auto h-px bg-white transition-all duration-300 ${
                  active === item.id
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
                }`}
              />
            </motion.button>
          ))}
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/10 hover:text-white md:hidden"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-14 right-0 left-0 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl md:hidden"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-2xl px-4 py-3.5 text-left font-mono text-sm tracking-[0.12em] transition-colors ${
                    active === item.id
                      ? "bg-white/10 text-white"
                      : "text-neutral-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`size-1.5 rounded-full bg-white transition-opacity ${
                      active === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
