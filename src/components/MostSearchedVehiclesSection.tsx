import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SpeedIcon from '@mui/icons-material/Speed';
import BuildIcon from '@mui/icons-material/Build';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PersonIcon from '@mui/icons-material/Person';
import DownloadIcon from '@mui/icons-material/Download';

type VehicleFeature = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

type Vehicle = {
  imageSrc: string;
  title: string;
  location: string;
  rating: string;
  features: VehicleFeature[];
  fromLabel: string;
  price: string;
};

const VEHICLES: Vehicle[] = [
  {
    imageSrc: '/home/car1.png',
    title: 'Audi A3 1.6 TDI S line',
    location: 'Manchester, England',
    rating: '4.96 (672 reviews)',
    features: [
      { icon: <SpeedIcon sx={{ fontSize: 18 }} />, label: 'Mileage', value: '25,100 miles' },
      { icon: <BuildIcon sx={{ fontSize: 18 }} />, label: 'Transmission', value: 'Automatic' },
      { icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />, label: 'Fuel', value: 'Diesel' },
      { icon: <PersonIcon sx={{ fontSize: 18 }} />, label: 'Seats', value: '7 seats' },
    ],
    fromLabel: 'From',
    price: '$498.25',
  },
  {
    imageSrc: '/home/car2.png',
    title: 'Mercedes-Benz C220d',
    location: 'New South Wales, Australia',
    rating: '4.96 (672 reviews)',
    features: [
      { icon: <SpeedIcon sx={{ fontSize: 18 }} />, label: 'Mileage', value: '25,100 miles' },
      { icon: <BuildIcon sx={{ fontSize: 18 }} />, label: 'Transmission', value: 'Automatic' },
      { icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />, label: 'Fuel', value: 'Diesel' },
      { icon: <PersonIcon sx={{ fontSize: 18 }} />, label: 'Seats', value: '7 seats' },
    ],
    fromLabel: 'From',
    price: '$498.25',
  },
  {
    imageSrc: '/home/car3.png',
    title: 'Volkswagen Golf GTD 2.0 TDI',
    location: 'Manchester, England',
    rating: '4.96 (672 reviews)',
    features: [
      { icon: <SpeedIcon sx={{ fontSize: 18 }} />, label: 'Mileage', value: '25,100 miles' },
      { icon: <BuildIcon sx={{ fontSize: 18 }} />, label: 'Transmission', value: 'Automatic' },
      { icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />, label: 'Fuel', value: 'Diesel' },
      { icon: <PersonIcon sx={{ fontSize: 18 }} />, label: 'Seats', value: '7 seats' },
    ],
    fromLabel: 'From',
    price: '$498.25',
  },
  {
    imageSrc: '/home/car4.png',
    title: 'Volvo S60 D4 R-Design',
    location: 'New South Wales, Australia',
    rating: '4.96 (672 reviews)',
    features: [
      { icon: <SpeedIcon sx={{ fontSize: 18 }} />, label: 'Mileage', value: '25,100 miles' },
      { icon: <BuildIcon sx={{ fontSize: 18 }} />, label: 'Transmission', value: 'Automatic' },
      { icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />, label: 'Fuel', value: 'Diesel' },
      { icon: <PersonIcon sx={{ fontSize: 18 }} />, label: 'Seats', value: '7 seats' },
    ],
    fromLabel: 'From',
    price: '$498.25',
  },
  {
    imageSrc: '/home/car5.png',
    title: 'Jaguar XE 2.0d R-Sport',
    location: 'Manchester, England',
    rating: '4.96 (672 reviews)',
    features: [
      { icon: <SpeedIcon sx={{ fontSize: 18 }} />, label: 'Mileage', value: '25,100 miles' },
      { icon: <BuildIcon sx={{ fontSize: 18 }} />, label: 'Transmission', value: 'Automatic' },
      { icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />, label: 'Fuel', value: 'Diesel' },
      { icon: <PersonIcon sx={{ fontSize: 18 }} />, label: 'Seats', value: '7 seats' },
    ],
    fromLabel: 'From',
    price: '$498.25',
  },
  {
    imageSrc: '/home/car6.png',
    title: 'Lexus IS 300h F Sport',
    location: 'New South Wales, Australia',
    rating: '4.96 (672 reviews)',
    features: [
      { icon: <SpeedIcon sx={{ fontSize: 18 }} />, label: 'Mileage', value: '25,100 miles' },
      { icon: <BuildIcon sx={{ fontSize: 18 }} />, label: 'Transmission', value: 'Automatic' },
      { icon: <LocalGasStationIcon sx={{ fontSize: 18 }} />, label: 'Fuel', value: 'Diesel' },
      { icon: <PersonIcon sx={{ fontSize: 18 }} />, label: 'Seats', value: '7 seats' },
    ],
    fromLabel: 'From',
    price: '$498.25',
  },
];

const MostSearchedVehiclesSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="font-nichrome font-extrabold text-[28px] sm:text-[34px] leading-[1.05] tracking-[-0.02em] uppercase">
              MOST SEARCHED VEHICLES
            </h2>
            <p className="mt-3 font-urbanist text-[15px] sm:text-[16px] text-white/65">
              The world’s leading car brands
            </p>
          </div>

          <div className="flex items-center gap-2">
            <IconButton
              aria-label="Previous"
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#fff',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.10)' },
              }}
            >
              <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
            </IconButton>
            <IconButton
              aria-label="Next"
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: '#fff',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.10)' },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((vehicle) => (
            <Box
              key={vehicle.title}
              component="article"
              className="bg-[#0b0b0e] border border-white/[0.10] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)] flex flex-col min-h-[520px]"
            >
              <Box className="relative">
                <Box className="h-[260px] sm:h-[280px] lg:h-[300px] bg-black">
                  <img
                    src={vehicle.imageSrc}
                    alt={vehicle.title}
                    className="h-full w-full object-cover rounded-t-[18px]"
                    draggable={false}
                  />
                </Box>

                <Box className="absolute bottom-4 right-4">
                  <Box className="rounded-full bg-black/65 border border-white/[0.10] px-4 py-1.5 font-urbanist text-[13px] text-white">
                    {vehicle.rating}
                  </Box>
                </Box>
              </Box>

              <Box className="px-6 pt-6 pb-5 flex-1 flex flex-col">
                <h3 className="font-urbanist text-[17px] sm:text-[18px] font-semibold leading-[1.15]">
                  {vehicle.title}
                </h3>

                <Box className="mt-3 flex items-center gap-2 text-white/65 font-urbanist text-[13.5px]">
                  <LocationOnIcon sx={{ fontSize: 18 }} />
                  <span className="truncate">{vehicle.location}</span>
                </Box>

                <Box className="mt-5 h-[1px] bg-white/[0.10]" />

                <Box className="mt-5 grid flex-1 grid-cols-2 gap-x-4 gap-y-4">
                  {vehicle.features.map((feature) => (
                    <Box key={feature.label} className="flex items-start gap-2.5">
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
                  <Box className="min-w-[70px]">
                    <div className="font-urbanist text-[12px] text-white/55">
                      {vehicle.fromLabel}
                    </div>
                    <div className="font-urbanist text-[17px] font-semibold mt-0.5">
                      {vehicle.price}
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
          ))}
        </div>

        <div className="mt-10 sm:mt-12 flex justify-center">
          <Button
            variant="contained"
            disableElevation
            disableRipple
            startIcon={<DownloadIcon sx={{ fontSize: 18 }} />}
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              borderRadius: '999px',
              boxShadow: 'none',
              paddingLeft: 3,
              paddingRight: 3,
              paddingTop: 1.1,
              paddingBottom: 1.1,
              '&:hover': { backgroundColor: '#f3f3f3', boxShadow: 'none' },
              fontFamily: 'Urbanist, sans-serif',
              fontWeight: 700,
              textTransform: 'none',
            }}
          >
            Load More Cars
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MostSearchedVehiclesSection;

