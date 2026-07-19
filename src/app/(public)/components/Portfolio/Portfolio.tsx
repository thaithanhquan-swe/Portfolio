"use client";

import { PortfolioTab } from "@/types/portfolio.types";
import { useState } from "react";
import PortfolioHeader from "./components/PortfolioHeader/PortfolioHeader";
import PortfolioTabs from "./components/PortfolioTabs/PortfolioTabs";
import ProjectsTab from "./components/ProjectsTab/ProjectsTab";
import TechStackTab from "./components/TechStackTab/TechStackTab";
import { AnimatePresence, motion } from "motion/react";
import ScrollReveal from "@/components/motion/ScrollReveal";

function Portfolio() {
  const [activeTab, setActiveTab] =
    useState<PortfolioTab>("projects");

  return (
    <section
      id="portfolio"
      className="relative scroll-mt-16 overflow-hidden sm:scroll-mt-20 mb-25"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="down">
          <PortfolioHeader />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.08}>
          <PortfolioTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </ScrollReveal>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            className="mt-5 sm:mt-7"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {activeTab === "projects" && <ProjectsTab />}

            {/* {activeTab === "certificates" && (
              <CertificatesTab />
            )} */}

            {activeTab === "tech-stack" && <TechStackTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Portfolio;
