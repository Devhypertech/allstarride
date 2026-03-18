import React from 'react';
import { Menu, Grid2X2 } from 'lucide-react';

const NAV_ITEMS = [
  'Home',
  'Vehicles',
  'Dealers',
  'How It Works',
  'Become a Provider',
  'News',
  'Contact',
] as const;

const baseHeaderPadding = 'px-5 sm:px-6 lg:px-8';
const headerHeight = 'h-[60px] min-h-[60px]';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-white">
      <div className={`max-w-[1400px] mx-auto ${baseHeaderPadding}`}>
        <div className={`grid grid-cols-[auto_1fr_auto] items-center gap-6 ${headerHeight}`}>
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/home/logo.png"
              alt="All Star Rides"
              className="h-6 sm:h-7 w-auto max-h-[34px] object-contain object-left"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-self-center gap-6 text-[13px] font-medium font-urbanist tracking-[0.01em]">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/85 hover:text-white transition-colors duration-200 whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center justify-self-end gap-4 font-urbanist">
            <button className="text-[13px] font-medium text-white/85 hover:text-white transition-colors duration-200">
              Sign in
            </button>
            <button className="rounded-full bg-white text-black text-[13px] font-semibold px-4 py-2 hover:bg-white/95 active:bg-white/90 transition-colors duration-200 shadow-sm">
              Add Listing
            </button>
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 hover:text-white hover:border-white/30 hover:bg-white/5 transition-colors duration-200"
              aria-label="Open menu"
            >
              <Grid2X2 className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-3 justify-self-end">
            <button className="hidden sm:inline-flex text-[13px] font-medium font-urbanist text-white/85 hover:text-white transition-colors">
              Sign in
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/85 hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

