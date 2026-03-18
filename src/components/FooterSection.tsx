import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const COMPANY_LINKS = [
  'About Us',
  'Our Awards',
  'Agencies',
  'Copyright Notices',
  'Terms of Use',
  'Privacy Notice',
  'Lost & Found',
];

const SERVICES_LINKS = [
  'Car Rental Services',
  'Vehicle Leasing Options',
  'Long-Term Car Rentals',
  'Car Sales and Trade-Ins',
  'Luxury Car Rentals',
  'Rent-to-Own Programs',
  'Fleet Management Solutions',
];

const PARTNERS_LINKS = [
  'Affiliates',
  'Travel Agents',
  'AARP Members',
  'Points Programs',
  'Military & Veterans',
  'Work with us',
  'Advertise with us',
];

const SUPPORT_LINKS = [
  'Forum support',
  'Help Center',
  'Live chat',
  'How it works',
  'Security',
  'Refund Policy',
];

const FooterSection: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Subscribe row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h3 className="font-nichrome font-extrabold uppercase text-[28px] sm:text-[34px] leading-[1.05] tracking-[-0.02em] max-w-[680px]">
            SUBSCRIBE TO SEE SECRET DEALS PRICES
            <br />
            DROP THE MOMENT YOU SIGN UP!
          </h3>

          <Box className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <TextField
              fullWidth
              size="small"
              placeholder="Email address"
              InputProps={{
                startAdornment: (
                  <Box className="mr-2 flex items-center">
                    <MailOutlineIcon sx={{ fontSize: 18, color: 'rgba(255,255,255,0.7)' }} />
                  </Box>
                ),
              }}
              sx={{
                '& .MuiInputBase-root': { color: '#fff' },
                '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.5)' },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '999px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                },
                '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
              }}
            />
            <Button
              variant="contained"
              disableElevation
              disableRipple
              sx={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: '999px',
                boxShadow: 'none',
                fontFamily: 'Urbanist, sans-serif',
                fontWeight: 700,
                textTransform: 'none',
                paddingLeft: 3,
                paddingRight: 3,
                height: 40,
                minHeight: 40,
                '&:hover': { backgroundColor: '#f2f2f2', boxShadow: 'none' },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </div>

        {/* Divider */}
        <Box className="mt-12 border-t border-white/[0.10]" />

        {/* Main footer */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr_0.7fr] gap-x-10 gap-y-10">
          {/* Branding + contact */}
          <Box>
            <div className="font-nichrome font-extrabold uppercase text-[30px] leading-[1.05] tracking-[-0.03em]">
              ALL-STAR
              <br />
              RIDES
            </div>

            <Box className="mt-6 space-y-4">
              <Box className="flex items-start gap-3">
                <LocationOnIcon sx={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', mt: '2px' }} />
                <div className="font-urbanist text-white/65 text-[14px] leading-[1.5]">
                  2356 Oakwood Drive, Suite 18, San Francisco, California 94111, US
                </div>
              </Box>

              <Box className="flex items-start gap-3">
                <AccessTimeIcon sx={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', mt: '2px' }} />
                <div className="font-urbanist text-white/65 text-[14px] leading-[1.5]">
                  Hours 8:00 - 17:00, Mon - Sat
                </div>
              </Box>

              <Box className="flex items-start gap-3">
                <MailOutlineIcon sx={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', mt: '2px' }} />
                <div className="font-urbanist text-white/65 text-[14px] leading-[1.5]">
                  support@All-Star Rides.com
                </div>
              </Box>

              <Box className="flex items-start gap-3">
                <PhoneIcon sx={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', mt: '2px' }} />
                <div className="font-urbanist">
                  <div className="text-white/65 text-[14px] leading-[1.4]">Need help? Call us</div>
                  <div className="text-white text-[18px] font-semibold leading-[1.3]">
                    +0 000-000-00-00
                  </div>
                </div>
              </Box>
            </Box>
          </Box>

          {/* Company */}
          <Box>
            <div className="font-urbanist font-semibold text-white text-[16px] mb-4">Company</div>
            <div className="space-y-3">
              {COMPANY_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block font-urbanist text-white/65 text-[14px] hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </Box>

          {/* Our Services */}
          <Box>
            <div className="font-urbanist font-semibold text-white text-[16px] mb-4">Our Services</div>
            <div className="space-y-3">
              {SERVICES_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block font-urbanist text-white/65 text-[14px] hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </Box>

          {/* Our Partners */}
          <Box>
            <div className="font-urbanist font-semibold text-white text-[16px] mb-4">Our Partners</div>
            <div className="space-y-3">
              {PARTNERS_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block font-urbanist text-white/65 text-[14px] hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </Box>

          {/* Support */}
          <Box>
            <div className="font-urbanist font-semibold text-white text-[16px] mb-4">Support</div>
            <div className="space-y-3">
              {SUPPORT_LINKS.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block font-urbanist text-white/65 text-[14px] hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </Box>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="font-urbanist text-white/65 text-[14px]">
            © 2026 All-Star Rides Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
              <FacebookIcon sx={{ fontSize: 20 }} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white/80 hover:text-white transition-colors">
              <TwitterIcon sx={{ fontSize: 20 }} />
            </a>
            <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
              <InstagramIcon sx={{ fontSize: 20 }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

