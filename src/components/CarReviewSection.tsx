import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

type VideoItem = {
  title: string;
  date: string;
  imageSrc: string;
};

const RIGHT_VIDEOS: VideoItem[] = [
  {
    title: 'Best Midsize 3-row SUVs 2024',
    date: '18 August 2024',
    imageSrc: '/home/videothumb2.png',
  },
  {
    title: '5 Best Luxury sport coupes 2024',
    date: '18 August 2024',
    imageSrc: '/home/videothumb3.png',
  },
  {
    title: 'Best Small hatchbacks 2024 and 2025',
    date: '18 August 2024',
    imageSrc: '/home/videothumb4.png',
  },
];

const PlayCircleButton: React.FC<{ size?: number }> = ({ size = 54 }) => {
  const iconFontSize = Math.max(22, Math.round(size * 0.52));
  return (
    <IconButton
      aria-label="Play"
      disableRipple
      className="!bg-[#f5f5f5] hover:!bg-[#e9e9e9]"
      sx={{
        width: size,
        height: size,
        borderRadius: 999,
        boxShadow: '0 14px 35px rgba(0,0,0,0.45)',
        border: '1px solid rgba(255,255,255,0.25)',
        '&:hover': { boxShadow: '0 14px 35px rgba(0,0,0,0.45)' },
      }}
    >
      <PlayArrowIcon sx={{ fontSize: iconFontSize, color: '#111' }} />
    </IconButton>
  );
};

const FeaturedVideoCard: React.FC<{
  posterSrc: string;
  title: string;
  date: string;
}> = ({ posterSrc, title, date }) => {
  return (
    <Box className="relative overflow-hidden rounded-[26px] bg-black">
      <Box className="h-[340px] sm:h-[370px] md:h-[400px] lg:h-[420px]">
        <Box
          component="img"
          src={posterSrc}
          alt="Featured video"
          className="h-full w-full object-cover"
          draggable={false}
        />
      </Box>

      {/* Bottom gradient for readability */}
      <Box className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Play button */}
      <Box className="absolute inset-0 flex items-center justify-center">
        <PlayCircleButton size={54} />
      </Box>

      {/* Title/date near bottom center */}
      <Box className="absolute left-0 right-0 bottom-0 px-6 pb-6">
        <div className="text-center font-urbanist text-[17px] sm:text-[19px] font-semibold text-white leading-[1.18] whitespace-pre-line">
          {title}
        </div>
        <div className="mt-3 text-center font-urbanist text-[13.5px] text-white/60">
          {date}
        </div>
      </Box>
    </Box>
  );
};

const VideoListItem: React.FC<{ item: VideoItem }> = ({ item }) => {
  return (
    <Box className="flex items-start gap-4">
      <Box className="relative w-[160px] sm:w-[180px] h-[104px] sm:h-[118px] flex-none overflow-hidden rounded-[20px] bg-black">
        <Box
          component="img"
          src={item.imageSrc}
          alt={item.title}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <Box className="absolute inset-0 flex items-center justify-center">
          <PlayCircleButton size={40} />
        </Box>
      </Box>

      <Box className="min-w-0 pt-1">
        <div className="font-urbanist text-[14px] sm:text-[15px] font-semibold text-white leading-[1.25]">
          {item.title}
        </div>
        <div className="mt-2 font-urbanist text-[12.5px] text-white/60">{item.date}</div>
      </Box>
    </Box>
  );
};

const CarReviewSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Top row */}
        <div className="flex items-start justify-between gap-10">
          <div className="max-w-[720px]">
            <h2 className="font-nichrome font-extrabold uppercase text-[30px] sm:text-[36px] leading-[1.05] tracking-[-0.02em]">
              CAR REVIEW
            </h2>
            <p className="mt-3 font-urbanist text-[15px] sm:text-[16px] text-white/65">
              Expert insights and honest evaluations to help you choose the perfect car
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

        {/* Panel */}
        <Box className="mt-10 sm:mt-12 bg-[#0c0c10] border border-white/[0.10] rounded-[30px] sm:rounded-[36px] overflow-hidden">
          <Box className="p-5 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.45fr_0.95fr] gap-8 sm:gap-10 items-start">
              {/* Featured */}
              <div className="w-full">
                <FeaturedVideoCard
                  posterSrc="/home/videothumb1.png"
                  date="18 August 2024"
                  title={'Farewell, BMW M2: will this be\n the last M car of its kind'}
                />
              </div>

              {/* List */}
              <div className="w-full">
                <div className="flex flex-col gap-7 sm:gap-8">
                  {RIGHT_VIDEOS.map((item) => (
                    <VideoListItem key={item.title} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </Box>
        </Box>
      </div>
    </section>
  );
};

export default CarReviewSection;

