import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type ServiceCard = {
  title: string;
  imageSrc: string;
  countText: string;
};

const SERVICES: ServiceCard[] = [
  { title: 'Amsterdam', imageSrc: '/home/service1.png', countText: '356 Properties' },
  { title: 'Budapest', imageSrc: '/home/service2.png', countText: '356 Properties' },
  { title: 'New York', imageSrc: '/home/service3.png', countText: '356 Properties' },
  { title: 'Amsterdam', imageSrc: '/home/service4.png', countText: '356 Properties' },
];

const ServiceCardItem: React.FC<{ card: ServiceCard }> = ({ card }) => {
  return (
    <Box
      component="article"
      className="relative bg-[#0c0c10] border border-white/[0.10] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
    >
      {/* Image */}
      <Box className="h-[300px] sm:h-[325px] lg:h-[350px] bg-black">
        <img
          src={card.imageSrc}
          alt={card.title}
          className="h-full w-full object-cover"
          draggable={false}
        />
      </Box>

      {/* Overlay panel */}
      <Box className="absolute left-0 right-0 bottom-0 bg-black/65 backdrop-blur-[6px] px-5 py-4">
        <Box className="flex items-start justify-between gap-4">
          <Box className="min-w-0">
            <div className="font-urbanist text-[16px] sm:text-[17px] font-semibold text-white leading-[1.15]">
              {card.title}
            </div>
            <div className="mt-1 font-urbanist text-[13px] text-white/65">{card.countText}</div>
          </Box>

          <IconButton
            aria-label={`Explore ${card.title}`}
            size="small"
            sx={{
              backgroundColor: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.14)',
              width: 38,
              height: 38,
              borderRadius: 999,
              color: '#fff',
              '&:hover': { backgroundColor: 'rgba(0,0,0,0.65)' },
              flex: '0 0 auto',
            }}
          >
            <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const OurServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Top row */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="font-nichrome font-extrabold uppercase text-[30px] sm:text-[36px] leading-[1.05] tracking-[-0.02em]">
              OUR SERVICES
            </h2>
            <p className="mt-3 font-urbanist text-[15px] sm:text-[16px] text-white/65 max-w-[560px]">
              Serving You with Quality, Comfort, and Convenience
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
              whiteSpace: 'nowrap',
            }}
          >
            View More
          </Button>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((card, idx) => (
            <ServiceCardItem key={`${card.title}-${idx}`} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;

