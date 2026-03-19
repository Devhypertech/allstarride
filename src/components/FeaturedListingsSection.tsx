import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

type FeatureKey = 'mileage' | 'transmission' | 'fuel' | 'seats';

type VehicleFeature = {
  key: FeatureKey;
  label: string;
  value: string;
  icon: React.ReactNode;
};

type VehicleListing = {
  imageSrc: string;
  title: string;
  location: string;
};

const LISTINGS: VehicleListing[] = [
  {
    imageSrc: '/home/listing1.png',
    title: 'Volkswagen Golf GTD',
    location: 'Manchester, England',
  },
  {
    imageSrc: '/home/listing2.png',
    title: 'Volvo S60 D4 R-Design',
    location: 'New South Wales, Australia',
  },
  {
    imageSrc: '/home/listing3.png',
    title: 'Jaguar XE 2.0d R-Sport',
    location: 'Manchester, England',
  },
  {
    imageSrc: '/home/listing4.png',
    title: 'Lexus IS 300h F Sport',
    location: 'Manchester, England',
  },
];

const RATING_TEXT = '4.96 (672 reviews)';
const PRICE_TEXT = '$498.25';

const VEHICLE_FEATURES: VehicleFeature[] = [
  {
    key: 'mileage',
    label: 'Mileage',
    value: '25,100 miles',
    icon: <SpeedIcon sx={{ fontSize: 18 }} />,
  },
  {
    key: 'transmission',
    label: 'Transmission',
    value: 'Automatic',
    icon: <BuildIcon sx={{ fontSize: 18 }} />,
  },
  {
    key: 'fuel',
    label: 'Fuel',
    value: 'Diesel',
    icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />,
  },
  {
    key: 'seats',
    label: 'Seats',
    value: '7 seats',
    icon: <PersonIcon sx={{ fontSize: 18 }} />,
  },
];

const CarListingCard: React.FC<{ listing: VehicleListing }> = ({ listing }) => {
  return (
    <Box
      component="article"
      className="bg-[#0b0b0e] border border-white/[0.10] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col min-h-[520px]"
    >
      <Box className="relative">
        <Box className="h-[260px] sm:h-[280px] lg:h-[300px] bg-black">
          <img
            src={listing.imageSrc}
            alt={listing.title}
            className="h-full w-full object-cover rounded-t-[18px]"
            draggable={false}
          />
        </Box>

        <Box className="absolute bottom-4 right-4">
          <Box className="inline-flex items-center gap-2 rounded-full bg-black/65 border border-white/[0.10] px-4 py-1.5 font-urbanist text-[13px] text-white">
            <StarIcon sx={{ fontSize: 16, color: '#fff' }} />
            <span className="whitespace-nowrap">{RATING_TEXT}</span>
          </Box>
        </Box>
      </Box>

      <Box className="px-6 pt-6 pb-5 flex-1 flex flex-col">
        <h3 className="font-urbanist text-[17px] sm:text-[18px] font-semibold leading-[1.15]">
          {listing.title}
        </h3>

        <Box className="mt-3 flex items-center gap-2 text-white/65 font-urbanist text-[13.5px]">
          <LocationOnIcon sx={{ fontSize: 18 }} />
          <span className="truncate">{listing.location}</span>
        </Box>

        <Box className="mt-5 h-[1px] bg-white/[0.10]" />

        <Box className="mt-5 grid flex-1 grid-cols-2 gap-x-4 gap-y-4">
          {VEHICLE_FEATURES.map((feature) => (
            <Box key={feature.key} className="flex items-start gap-2.5">
              <Box className="mt-[2px] text-white/70">{feature.icon}</Box>
              <Box>
                <div className="font-urbanist text-[10.5px] text-white/50 uppercase tracking-[0.13em]">
                  {feature.label}
                </div>
                <div className="font-urbanist text-[14px] text-white/90 font-semibold leading-[1.2] mt-1">
                  {feature.value}
                </div>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className="mt-auto pt-5 flex items-center justify-between gap-4">
          <Box className="min-w-[90px]">
            <div className="font-urbanist text-[12px] text-white/55">Price</div>
            <div className="font-urbanist text-[17px] font-semibold mt-0.5">
              {PRICE_TEXT}
            </div>
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
              height: 46,
              minHeight: 46,
              '&:hover': { backgroundColor: '#f3f3f3', boxShadow: 'none' },
              whiteSpace: 'nowrap',
            }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const FeaturedListingsSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Top row */}
        <div className="flex items-start justify-between gap-8">
          <div>
            <h2 className="font-nichrome font-extrabold uppercase text-[28px] sm:text-[34px] leading-[1.05] tracking-[-0.02em]">
              FEATURED LISTINGS
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
              whiteSpace: 'nowrap',
            }}
          >
            View More
          </Button>
        </div>

        {/* Cards grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {LISTINGS.map((listing) => (
            <CarListingCard key={listing.title} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;

