import React from 'react';
import { motion } from 'framer-motion';
import { BgImg } from '../base/bg-img';

export type HeroSectionData = {
  kind: 'hero';
  imgUrl: string;
  title: string;
  subtitle: string;
};

type HeroSectionProps = {
  sectionData: HeroSectionData;
};

export const HeroSection = ({
  sectionData: { imgUrl, title, subtitle },
}: HeroSectionProps) => {
  return (
    <section>
      <div className="relative bg-center bg-cover w-full hero-bg">
        <BgImg imgUrl={imgUrl} />
        <div className="absolute inset-0 flex justify-center items-center sm:justify-start sm:items-end">
          <div className="container relative">
            <div className="relative sm:pb-16">
              <motion.h1
                className="text-white text-4xl sm:text-6xl text-center sm:text-left uppercase opacity-0"
                animate={{ opacity: 1, y: -10 }}
                transition={{ delay: 1, duration: 1 }}
              >
                {title}
              </motion.h1>
              <motion.h2
                className="text-white text-2xl sm:text-4xl text-center sm:text-left opacity-0"
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
