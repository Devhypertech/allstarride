import React from 'react';
import { Avatar, Box, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

type UpcomingEvent = {
  imageSrc: string;
  tag: 'Trend' | 'Discovery' | 'News';
  date: string;
  duration: string;
  comments: string;
  title: string;
  authorName: string;
  authorImageSrc?: string;
};

const EVENTS: UpcomingEvent[] = [
  {
    imageSrc: '/home/event1.png',
    tag: 'Trend',
    date: '18 Sep 2024',
    duration: '6 mins',
    comments: '38 comments',
    title: '2025 BMW 5 Series Review: A balanced luxury sedan',
    authorName: 'Steven Job',
  },
  {
    imageSrc: '/home/event2.png',
    tag: 'Discovery',
    date: '18 Sep 2024',
    duration: '6 mins',
    comments: '38 comments',
    title: '2025 Ruf Rodeo is ready to wrangle some rough roads',
    authorName: 'David Jume',
  },
  {
    imageSrc: '/home/event3.png',
    tag: 'News',
    date: '18 Sep 2024',
    duration: '6 mins',
    comments: '38 comments',
    title: '2025 Cadillac Escalade costs more money',
    authorName: 'Jimmy Dave',
  },
];

const TagPill: React.FC<{ tag: UpcomingEvent['tag'] }> = ({ tag }) => {
  return (
    <Box className="absolute right-4 bottom-4">
      <Box className="rounded-full bg-black/60 border border-white/[0.14] px-4 py-1.5">
        <Box className="font-urbanist text-[13px] text-white/90 font-semibold whitespace-nowrap">
          {tag}
        </Box>
      </Box>
    </Box>
  );
};

const PrevNextButton: React.FC<{ direction: 'prev' | 'next' }> = ({ direction }) => {
  return (
    <IconButton
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      size="small"
      sx={{
        backgroundColor: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.10)',
        color: '#fff',
        width: 38,
        height: 38,
        '&:hover': { backgroundColor: 'rgba(255,255,255,0.10)' },
      }}
    >
      {direction === 'prev' ? (
        <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
      ) : (
        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
      )}
    </IconButton>
  );
};

const MetaRow: React.FC<{
  date: string;
  duration: string;
  comments: string;
}> = ({ date, duration, comments }) => {
  return (
    <Box className="flex items-center gap-4 font-urbanist">
      <Box className="flex items-center gap-1.5 text-white/60">
        <CalendarMonthIcon sx={{ fontSize: 18 }} />
        <span className="text-[12.5px] whitespace-nowrap">{date}</span>
      </Box>
      <Box className="flex items-center gap-1.5 text-white/60">
        <AccessTimeIcon sx={{ fontSize: 18 }} />
        <span className="text-[12.5px] whitespace-nowrap">{duration}</span>
      </Box>
      <Box className="flex items-center gap-1.5 text-white/60">
        <ChatBubbleOutlineIcon sx={{ fontSize: 18 }} />
        <span className="text-[12.5px] whitespace-nowrap">{comments}</span>
      </Box>
    </Box>
  );
};

const UpcomingCard: React.FC<{ event: UpcomingEvent }> = ({ event }) => {
  return (
    <Box
      component="article"
      className="bg-[#0b0b0e] border border-white/[0.10] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col"
    >
      <Box className="relative">
        <Box className="h-[220px] sm:h-[240px] bg-black">
          <img
            src={event.imageSrc}
            alt={event.title}
            className="h-full w-full object-cover"
            draggable={false}
          />
        </Box>
        <TagPill tag={event.tag} />
      </Box>

      <Box className="px-6 pt-5 pb-5 flex flex-col gap-3 flex-1">
        <MetaRow date={event.date} duration={event.duration} comments={event.comments} />

        <div className="font-urbanist text-white text-[16px] leading-[1.25] font-semibold">
          {event.title}
        </div>

        <Box className="mt-auto pt-2 flex items-center justify-between gap-4">
          <Box className="flex items-center gap-3 min-w-0">
            <Avatar
              src={event.authorImageSrc ?? event.imageSrc}
              alt={event.authorName}
              sx={{
                width: 34,
                height: 34,
                borderRadius: 999,
                border: '2px solid rgba(255,255,255,0.10)',
                flex: '0 0 auto',
              }}
            />
            <Box className="min-w-0">
              <div className="font-urbanist text-white font-semibold text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
                {event.authorName}
              </div>
            </Box>
          </Box>

          <Button
            variant="contained"
            disableElevation
            disableRipple
            className="!rounded-[16px] !font-urbanist !font-semibold !text-black"
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              boxShadow: 'none',
              paddingLeft: 2.2,
              paddingRight: 2.2,
              height: 40,
              minHeight: 40,
              '&:hover': { backgroundColor: '#f3f3f3', boxShadow: 'none' },
              whiteSpace: 'nowrap',
            }}
          >
            Keep Reading
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const UpcomingCarsEventsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Top row */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="font-nichrome font-extrabold uppercase text-[28px] sm:text-[34px] leading-[1.05] tracking-[-0.02em]">
              UPCOMING CARS &amp; EVENTS
            </h2>
            <p className="mt-3 font-urbanist text-[15px] sm:text-[16px] text-white/65 max-w-[600px]">
              Stay ahead with the latest car releases and upcoming events
            </p>
          </div>

          <div className="flex items-center gap-2">
            <PrevNextButton direction="prev" />
            <PrevNextButton direction="next" />
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event) => (
            <UpcomingCard key={event.title} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingCarsEventsSection;

