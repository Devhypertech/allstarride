import React from 'react';
import { Box } from '@mui/material';

type HowFeature = {
  iconSrc: string;
  title: string;
  description: string;
};

const FEATURES: HowFeature[] = [
  {
    iconSrc: '/home/location.png',
    title: 'Choose a Location',
    description: 'Select the ideal destination to begin your journey with ease',
  },
  {
    iconSrc: '/home/vehicle.png',
    title: 'Choose Your Vehicle',
    description: 'Browse our fleet and find the perfect car for your needs',
  },
  {
    iconSrc: '/home/verification.png',
    title: 'Verification',
    description: 'Review your information and confirm your booking',
  },
  {
    iconSrc: '/home/journey.png',
    title: 'Begin Your Journey',
    description: 'Start your adventure with confidence and ease',
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20">
        {/* Heading block */}
        <div className="flex flex-col items-center text-center">
          <p className="font-urbanist text-[13px] sm:text-[14px] uppercase tracking-[0.22em] text-white/50">
            HOW IT WORKS
          </p>

          <h2 className="mt-5 font-nichrome font-extrabold uppercase text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.02] tracking-[-0.03em] max-w-[900px]">
            PRESENTING YOUR NEW GO-TO CAR
            <br />
            RENTAL EXPERIENCE
          </h2>
        </div>

        {/* Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-x-8">
          {FEATURES.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center px-2">
              <Box
                component="img"
                src={feature.iconSrc}
                alt={feature.title}
                className="h-[70px] w-[70px] sm:h-[78px] sm:w-[78px] object-contain"
                draggable={false}
              />

              <h3 className="mt-5 font-urbanist text-white text-[16px] sm:text-[17px] font-semibold leading-[1.2]">
                {feature.title}
              </h3>
              <p className="mt-3 font-urbanist text-white/60 text-[14px] sm:text-[15px] leading-[1.7] max-w-[280px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

