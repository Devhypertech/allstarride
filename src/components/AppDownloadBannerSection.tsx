import React from 'react';
import { Box } from '@mui/material';

const AppDownloadBannerSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <Box
          className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] border border-white/[0.10]"
          sx={{
            backgroundImage: "url('/home/bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Premium dark overlay for readability */}
          <Box className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/55" />

          <Box className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.12fr_0.88fr] gap-10 items-center">
              {/* Left content */}
              <div>
                <h2 className="font-nichrome font-extrabold uppercase text-[30px] sm:text-[40px] leading-[1.05] tracking-[-0.03em]">
                  ALL-STAR RIDES APP IS AVAILABLE
                </h2>
                <p className="mt-4 font-urbanist text-[15px] sm:text-[16px] text-white/65 leading-[1.65] max-w-[560px]">
                  Manage all your car rentals on the go with the All-Star Rides app
                </p>

                <div className="mt-7 flex items-center gap-4">
                  <Box
                    component="img"
                    src="/home/google.png"
                    alt="Google Play"
                    className="h-[52px] w-auto"
                    draggable={false}
                  />
                  <Box
                    component="img"
                    src="/home/apple.png"
                    alt="App Store"
                    className="h-[52px] w-auto"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Right image */}
              <div className="flex justify-center lg:justify-end">
                <Box
                  component="img"
                  src="/home/allrides.png"
                  alt="All-Star Rides app"
                  className="w-full max-w-[520px] h-auto"
                  draggable={false}
                />
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default AppDownloadBannerSection;

