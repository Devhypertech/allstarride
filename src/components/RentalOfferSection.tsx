// src/components/RentalOfferSection.tsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const checklistLeft = [
  'Expert Certified Mechanics',
  'Get Reasonable Price',
  'Genuine Spares Parts',
];

const checklistRight = [
  'First Class Services',
  '24/7 road assistance',
  'Free Pick-Up & Drop-Offs',
];

const RentalOfferSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Left: poster */}
          <div className="relative w-full">
            <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px] bg-white/5 border border-white/10">
              <Box
                component="img"
                src="/home/Rental.png"
                alt="Rental offer"
                className="w-full h-[340px] sm:h-[400px] lg:h-[460px] object-cover"
              />

              <IconButton
                aria-label="Play"
                disableRipple
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(255,255,255,0.92)',
                  color: '#0b0b0e',
                  border: '1px solid rgba(255,255,255,0.55)',
                  width: 64,
                  height: 64,
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.98)',
                  },
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 28 }} />
              </IconButton>
            </div>
          </div>

          {/* Right: content */}
          <div className="flex flex-col lg:pr-8">
            <Box className="inline-flex w-fit items-center rounded-full bg-white/95 px-4 py-2 text-black font-urbanist text-[13px] sm:text-[14px] font-semibold">
              Best Car Rental System
            </Box>

            <h2 className="mt-5 max-w-[720px] font-nichrome font-extrabold uppercase text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.02] tracking-[-0.03em]">
              <span className="block lg:whitespace-nowrap">RECEIVE A COMPETITIVE OFFER SELL</span>
              <span className="block lg:whitespace-nowrap">YOUR CAR TO US TODAY.</span>
            </h2>

            <p className="mt-4 font-urbanist text-[15px] sm:text-[16px] text-white/65 leading-[1.7] max-w-[560px]">
              We are committed to delivering exceptional service, competitive pricing, and a diverse selection of options for our customers.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 max-w-[620px]">
              <div className="flex flex-col gap-3">
                {checklistLeft.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-urbanist text-white/90 text-[14px] leading-[1.2]"
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        fontSize: 18,
                        color: '#ffffff',
                        flex: '0 0 auto',
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {checklistRight.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 font-urbanist text-white/90 text-[14px] leading-[1.2]"
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        fontSize: 18,
                        color: '#ffffff',
                        flex: '0 0 auto',
                      }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalOfferSection;