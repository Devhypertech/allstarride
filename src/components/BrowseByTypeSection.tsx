import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type BrowseCard = {
  title: string;
  imageSrc: string;
  countText: string;
};

const BROWSE_CARDS: BrowseCard[] = [
  { title: 'SUV', imageSrc: '/home/SUV.png', countText: '24 Vehicles' },
  { title: 'Hatchback', imageSrc: '/home/Hatchback.png', countText: '16 Vehicles' },
  { title: 'Sedan', imageSrc: '/home/Sedan.png', countText: '150 Vehicles' },
  { title: 'Crossover', imageSrc: '/home/Crossover.png', countText: '25 Vehicles' },
  { title: 'Minivan', imageSrc: '/home/Minivan.png', countText: '56 Vehicles' },
  { title: 'Coupe', imageSrc: '/home/Coupe.png', countText: '25 Vehicles' },
  { title: 'Sport Cars', imageSrc: '/home/Sport.png', countText: '125 Vehicles' },
  { title: 'Pickup Truck', imageSrc: '/home/Pickup.png', countText: 'Vehicles' },
];

const BrowseByTypeSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top row */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="font-nichrome font-extrabold uppercase text-[30px] sm:text-[36px] leading-[1.05] tracking-[-0.02em]">
              Browse by Type
            </h2>
            <p className="mt-3 font-urbanist text-[15px] sm:text-[16px] text-white/65 max-w-[520px]">
              Find the perfect ride for any occasion
            </p>
          </div>

          <Button
            disableElevation
            variant="contained"
            endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '999px',
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 700,
              textTransform: 'none',
              paddingLeft: 3,
              paddingRight: 2.5,
              paddingY: 1.2,
              boxShadow: 'none',
              '&:hover': { backgroundColor: '#f2f2f2', boxShadow: 'none' },
            }}
          >
            View More
          </Button>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BROWSE_CARDS.map((card) => (
            <Box
              key={card.title}
              component="article"
              className="group relative bg-[#0c0c10] border border-white/[0.10] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              {/* Image */}
              <Box className="relative">
                <Box className="h-[150px] sm:h-[165px] bg-black">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </Box>

                {/* Count pill */}
                <Box className="absolute left-4 bottom-[-14px]">
                  <Box className="inline-flex items-center rounded-full bg-[#1a1a22] border border-white/[0.10] px-3 py-1 font-urbanist text-[12px] text-white/70 shadow-[0_10px_25px_rgba(0,0,0,0.35)] whitespace-nowrap">
                    {card.countText}
                  </Box>
                </Box>
              </Box>

              {/* Body */}
              <Box className="px-5 pt-[26px] pb-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-urbanist text-[15px] font-semibold text-white leading-[1.2]">
                    {card.title}
                  </h3>

                  <IconButton
                    aria-label={`Open ${card.title}`}
                    size="small"
                    sx={{
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      width: 34,
                      height: 34,
                      borderRadius: 999,
                      color: '#fff',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,0.10)' },
                    }}
                  >
                    <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                </div>
              </Box>

              {/* Subtle hover affordance without changing structure */}
              <Box
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                sx={{
                  background:
                    'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
                }}
              />
            </Box>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByTypeSection;

