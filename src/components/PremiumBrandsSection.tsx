import React from 'react';
import { Box, Link as MuiLink } from '@mui/material';

type Brand = {
  src: string;
  alt: string;
};

const BRAND_LOGOS: Brand[] = [
  { src: '/home/b1.png', alt: 'Brand 1' },
  { src: '/home/b2.png', alt: 'Brand 2' },
  { src: '/home/b3.png', alt: 'Brand 3' },
  { src: '/home/b4.png', alt: 'Brand 4' },
  { src: '/home/b5.png', alt: 'Brand 5' },
  { src: '/home/b6.png', alt: 'Brand 6' },
  { src: '/home/b7.png', alt: 'Brand 7' },
  { src: '/home/b8.png', alt: 'Brand 8' },
  { src: '/home/b9.png', alt: 'Brand 9' },
  { src: '/home/b10.png', alt: 'Brand 10' },
  { src: '/home/b11.png', alt: 'Brand 11' },
  { src: '/home/b12.png', alt: 'Brand 12' },
];

const PremiumBrandsSection: React.FC = () => {
  const items = BRAND_LOGOS;
  const duplicatedItems = [...items, ...items];

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="font-nichrome font-extrabold text-[26px] sm:text-[32px] leading-[1.05] tracking-[-0.02em]">
              PREMIUM BRANDS
            </h2>
            <p className="mt-3 font-urbanist text-[14px] sm:text-[15px] text-white/65 max-w-[560px]">
              Unveil the Finest Selection of High-End Vehicles
            </p>
          </div>

          <MuiLink
            href="#"
            underline="none"
            className="pt-1 font-urbanist text-[14px] sm:text-[15px] text-white hover:text-white transition-colors whitespace-nowrap"
          >
            Show All Brands →
          </MuiLink>
        </div>

        <Box className="mt-10 sm:mt-12 overflow-hidden">
          <Box
            className="premium-brands-marquee-track flex items-center gap-[14px]"
            style={{ ['--premium-marquee-duration' as any]: '24s' }}
          >
            {duplicatedItems.map((brand, idx) => {
              return (
                <Box
                  // eslint-disable-next-line react/no-array-index-key
                  key={`${brand.src}-${idx}`}
                  component="div"
                  className="flex-none h-[60px] sm:h-[66px] w-[98px] sm:w-[106px] rounded-[16px] flex items-center justify-center bg-transparent border-0"
                >
                  <img
                    src={brand.src}
                    alt={brand.alt}
                    className="max-h-[34px] sm:max-h-[38px] max-w-[82px] sm:max-w-[92px] object-contain"
                    draggable={false}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default PremiumBrandsSection;

