import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';

type ChecklistItem = {
  label: string;
};

const CHECKLIST: ChecklistItem[] = [
  { label: 'Experienced Professionals You Can Trust' },
  { label: 'Clear and Transparent Pricing, No Hidden Fees' },
  { label: 'Genuine Spares Parts' },
];

const TrustedExpertiseSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="rounded-[28px] sm:rounded-[34px] bg-[#0c0c10] border border-white/[0.10] overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,0.55)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 p-6 sm:p-10 lg:p-12">
            {/* Left content */}
            <div className="relative z-10">
              <Box
                className="inline-flex items-center rounded-full bg-white/[0.10] border border-white/[0.14] px-4 py-2"
              >
                <Box className="font-urbanist text-[13px] text-white/90 whitespace-nowrap">
                  Trusted Expertise
                </Box>
              </Box>

              <h2 className="mt-6 font-nichrome font-extrabold uppercase text-[22px] sm:text-[36px] leading-[1.05] tracking-[-0.03em]">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  GET A GREAT DEAL FOR YOUR
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  VEHICLE SELL TO US NOW
                </span>
              </h2>

              <p className="mt-5 font-urbanist text-[15px] sm:text-[16px] text-white/65 leading-[1.7] max-w-[560px]">
                Get the best value for your vehicle with our transparent and straightforward selling process
              </p>

              <div className="mt-6 space-y-4">
                {CHECKLIST.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <Box className="mt-[2px] h-[26px] w-[26px] rounded-full bg-[#1a1a22] border border-white/[0.12] flex items-center justify-center">
                      <CheckIcon sx={{ fontSize: 18, color: '#fff' }} />
                    </Box>
                    <div className="font-urbanist text-[14px] sm:text-[15px] text-white/90 leading-[1.45]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                disableElevation
                disableRipple
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: 16 }} />}
                className="!mt-7 !rounded-[999px] !bg-[#fff] !text-black !font-urbanist !font-semibold !normal-case"
                sx={{
                  paddingLeft: 3,
                  paddingRight: 3,
                  paddingTop: 1.25,
                  paddingBottom: 1.25,
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#f3f3f3', boxShadow: 'none' },
                  whiteSpace: 'nowrap',
                }}
              >
                Get Started Now
              </Button>
            </div>

            {/* Right image */}
            <div className="relative flex items-stretch">
              {/* <div className="w-full rounded-[22px] overflow-hidden bg-black/30 border border-white/[0.08]"> */}
                <Box
                  component="img"
                  src="/home/Expertise.png"
                  alt="Expertise"
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                {/* Subtle premium edge vignette */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0) 40%,rgba(0,0,0,0.45) 100%)]" />
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedExpertiseSection;

