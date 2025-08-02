'use client';

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="relative py-14 mx-5 md:mx-0">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={isSectionInView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1 
          } : { 
            opacity: 0, 
            y: 50, 
            scale: 0.95 
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut" 
          }}
          className="mx-auto max-w-screen-lg px-8 py-28 md:px-8 shadow-xl border-2 border-primary/20 rounded-2xl"
        >
            <div className="flex flex-col items-center justify-center gap-8">
                <motion.h2 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-geist font-normal tracking-tighter md:text-6xl text-4xl mt-3 text-center"
                >
                    Sync your data across <span className="text-primary">multiple cloud providers</span> with ease
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
            <Button
              size="lg"
              variant="default"
              className="group bg-primary text-primary-foreground hover:shadow-primary/30 relative overflow-hidden px-6 shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className=" absolute inset-0 z-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            </Button>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default CTA