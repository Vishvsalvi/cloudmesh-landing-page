"use client";

import { Paintbrush, Zap, Github, SquareX } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const featuredCard = [
  //   {
  //   icon: <Activity className="h-4 w-4 " />,
  //   title: 'Dashboard Preview',
  //   subtitle: 'Experience your unified cloud dashboard in action',
  //   type: 'featured',
  //   color: 'bg-violet-500/20 text-violet-500',
  //   image: '/overview_darkmode.png'
  // },
  // {
  //   icon: <Cpu className="h-4 w-4" />,
  //   title: "Powerful Search",
  //   subtitle: "Search your files across all cloud providers.",
  //   type: 'featured',
  //   color: 'bg-orange-500/20 text-orange-500'
  // },
  {
    icon: <Paintbrush className="h-4 w-4" />,
    title: "Sync your files with ease",
    subtitle:
      "Sync your files with the click of a button. No more switching between tabs.",
    type: "featured",
    color: "bg-blue-500/20 text-blue-500",
    image: "./account_dark.png",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    title: "Fast and Minimal UI",
    subtitle:
      "CloudMesh is designed to be fast and minimal, so you can focus on your work.",
    type: "featured",
    color: "bg-yellow-500/20 text-yellow-500",
    image: "fast.png",
  },
  {
    icon: <SquareX className="h-4 w-4" />,
    title: "No Data Storage",
    subtitle: "CloudMesh does not store any of your files.",
    type: "featured",
    color: "bg-green-500/20 text-green-500",
    image: "./storage.avif",
  },
  {
    icon: <Github className="h-4 w-4" />,
    title: "Open Source",
    subtitle: "CloudMesh is open source to ensure transparency.",
    type: "featured",
    color: "bg-gray-500/20 text-gray-500",
    image: "./github_logo.png",
  },
];
export default function Feature() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const areCardsInView = useInView(cardsRef, { once: true, amount: 0.1 });

  return (
    <section id="features" ref={sectionRef} className="relative py-14">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-2xl sm:text-center"
        >
          <div className="relative z-10">
            <h3 className="font-geist mt-4 text-3xl font-normal tracking-tighter sm:text-4xl md:text-5xl">
              From frustration to solution
            </h3>
            <p className="font-geist text-foreground/60 mt-3">
              CloudMesh solves the everyday challenges of working with multiple
              cloud storage providers.
            </p>
          </div>
          <div className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"></div>
        </motion.div>

        <motion.hr
          initial={{ scaleX: 0 }}
          animate={isTitleInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-foreground/30 mx-auto mt-5 h-px w-1/2 origin-center"
        />

        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0 }}
          animate={areCardsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-12 grid grid-cols-2 gap-4"
        >
          {/* Featured Card */}
          {featuredCard.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={
                areCardsInView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {
                      opacity: 0,
                      y: 40,
                      scale: 0.95,
                    }
              }
              transition={{
                duration: 0.6,
                delay: 0.6 + idx * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="mb-8"
            >
              <div className="bg-background rounded-2xl border border-border p-6 shadow-sm max-w-md mx-auto lg:mx-0 hover:shadow-lg transition-shadow duration-300">
                {/* Icon and Title Section */}

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={areCardsInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.8 + idx * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className={`p-3 rounded-xl shadow-sm ${item.color}`}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-foreground/60 text-md font-medium font-geist">
                      {item.title}
                    </h3>
                  </div>
                  <h2 className="text-foreground text-2xl leading-tight font-geist font-normal">
                    {item.subtitle}
                  </h2>
                </div>

                {/* Empty Content Area for Image */}
                <div className=" rounded-xl h-64 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover scale-110 rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
