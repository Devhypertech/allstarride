import React from 'react';
import { Box, Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

type Testimonial = {
  title: string;
  text: string;
  name: string;
  city: string;
  imageSrc: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    title: 'Fast and Easy to Use',
    text: "We used many car rental platforms before, but All-Star Rides' booking system is hands down the best! The process is so smooth and straightforward.",
    name: 'Sophia Moore',
    city: 'New York',
    imageSrc: '/home/testi1.png',
  },
  {
    title: 'Super Convenient',
    text: 'The booking system on this site is top-notch. Everything is laid out clearly, and there are multiple payment options, which makes things super convenient.',
    name: 'Atend John',
    city: 'Tokyo',
    imageSrc: '/home/testi2.png',
  },
  {
    title: 'Great Features and Process',
    text: 'I was impressed by the range of features available when booking. The calendar tool for selecting dates was especially useful and I appreciated the live availability feature.',
    name: 'Sara Mohamed',
    city: 'Jakarta',
    imageSrc: '/home/testi3.png',
  },
  {
    title: 'Easy to Understand',
    text: 'The attention to detail in the booking process made our trip stress-free. Allowing us to focus on creating lasting memories together.',
    name: 'Sara Mohamed',
    city: 'Jakarta',
    imageSrc: '/home/testi1.png',
  },
];

function StarsRow({ count = 5 }: { count?: number }) {
  return (
    <Box className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <Box
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className="w-[18px] h-[18px] rounded-[4px] bg-[#15151c] flex items-center justify-center"
        >
          <StarIcon sx={{ fontSize: 12, color: '#fff' }} />
        </Box>
      ))}
    </Box>
  );
}

const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  return (
    <Box
      component="article"
      className="bg-[#141414] border border-white/[0.10] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col min-h-[255px]"
    >
      <Box className="px-6 pt-6 pb-5 flex-1 flex flex-col">
        <div className="font-urbanist text-[15.5px] sm:text-[16.5px] font-semibold text-white">
          {item.title}
        </div>

        <p className="mt-3 font-urbanist text-[13.5px] text-white/65 leading-[1.65]">
          {item.text}
        </p>

        <div className="mt-auto pt-5 flex items-center justify-between gap-4">
          <Box className="flex items-center gap-3 min-w-0">
            <Avatar
              src={item.imageSrc}
              alt={item.name}
              sx={{
                width: 38,
                height: 38,
                borderRadius: 999,
                border: '2px solid rgba(255,255,255,0.10)',
                flex: '0 0 auto',
              }}
            />
            <Box className="min-w-0">
              <div className="font-urbanist text-[14px] font-semibold text-white whitespace-nowrap overflow-hidden text-ellipsis leading-[1.1]">
                {item.name}
              </div>
              <div className="font-urbanist text-[12.5px] text-white/55 whitespace-nowrap overflow-hidden text-ellipsis">
                {item.city}
              </div>
            </Box>
          </Box>

          <StarsRow count={5} />
        </div>
      </Box>
    </Box>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      {/* Heading block stays padded/centered */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 text-center">
        <div className="inline-flex items-center gap-3 rounded-full bg-white/[0.08] border border-white/[0.12] px-5 py-2">
          <Box className="flex items-center -space-x-2">
            <Avatar
              src="/home/testi1.png"
              alt="Avatar"
              sx={{
                width: 22,
                height: 22,
                borderRadius: 999,
                border: '2px solid rgba(0,0,0,1)',
              }}
            />
            <Avatar
              src="/home/testi2.png"
              alt="Avatar"
              sx={{
                width: 22,
                height: 22,
                borderRadius: 999,
                border: '2px solid rgba(0,0,0,1)',
              }}
            />
            <Avatar
              src="/home/testi3.png"
              alt="Avatar"
              sx={{
                width: 22,
                height: 22,
                borderRadius: 999,
                border: '2px solid rgba(0,0,0,1)',
              }}
            />
          </Box>
          <div className="font-urbanist text-[13px] sm:text-[14px] font-semibold text-white/90 whitespace-nowrap">
            Testimonials
          </div>
        </div>

        <h2 className="mt-6 font-nichrome font-extrabold uppercase text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.03em]">
          WHAT THEY SAY ABOUT US?
        </h2>
      </div>

      {/* Testimonials loop: full-bleed row (edge-to-edge cards) */}
      <div className="w-full overflow-hidden">
        <style>
          {`
            @keyframes testimonialsLoop {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .testimonials-track {
              display: flex;
              width: 200%;
              animation: testimonialsLoop 22s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .testimonials-track { animation: none; }
            }
          `}
        </style>

        <div className="testimonials-track">
          {/* page 1 */}
          <div className="w-full flex-shrink-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap lg:items-stretch lg:justify-start gap-[10px]">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={`p1-${item.title}-${idx}`}
                  className={[
                    'w-full',
                    'lg:w-[calc(25%_-_7.5px)]',
                    'lg:flex-shrink-0',
                  ].join(' ')}
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>

          {/* page 2 (duplicate for seamless loop) */}
          <div className="w-full flex-shrink-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap lg:items-stretch lg:justify-start gap-[10px]">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={`p2-${item.title}-${idx}`}
                  className={[
                    'w-full',
                    'lg:w-[calc(25%_-_7.5px)]',
                    'lg:flex-shrink-0',
                  ].join(' ')}
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

