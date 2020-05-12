import React from 'react';
import { motion } from 'framer-motion';
import { BgImg } from 'components/base/bg-img';

export type HeroSectionData = {
  kind: 'hero';
} & HeroSectionProps;

type HeroSectionProps = {
  imgSrc: string;
  imgSrcset: string;
  title: string;
  subtitle: string;
};

export const HeroSection = ({
  imgSrc,
  imgSrcset,
  title,
  subtitle,
}: HeroSectionProps) => {
  return (
    <section>
      <div className="relative w-full hero-bg">
        <BgImg imgSrc={imgSrc} imgSrcset={imgSrcset} />
        <div className="absolute inset-0 flex items-center justify-center sm:justify-start sm:items-end">
          <div className="container relative">
            <div className="relative sm:pb-16">
              <motion.h1
                className="text-4xl text-center text-white uppercase opacity-0 sm:text-6xl sm:text-left"
                animate={{ opacity: 1, y: -10 }}
                transition={{ delay: 1, duration: 1 }}
              >
                {title}
              </motion.h1>
              <motion.h2
                className="text-2xl text-center text-white opacity-0 sm:text-4xl sm:text-left"
                animate={{ opacity: 1, y: -10 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {subtitle}
              </motion.h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
