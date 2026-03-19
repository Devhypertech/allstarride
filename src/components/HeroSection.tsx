import { Button } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import SearchIcon from "@mui/icons-material/Search";

const FEATURES = [
  "High quality at a low cost.",
  "Premium services",
  "24/7 roadside support.",
];

const BOOKING_FIELDS = [
  {
    label: "Pick Up Location",
    value: "New York, USA",
    icon: <FmdGoodOutlinedIcon sx={{ fontSize: 16 }} />,
  },
  {
    label: "Drop Off Location",
    value: "Delaware, USA",
    icon: <FmdGoodOutlinedIcon sx={{ fontSize: 16 }} />,
  },
  {
    label: "Pick Up Date & Time",
    value: "02/20/2026",
    icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 15 }} />,
  },
  {
    label: "Return Date & Time",
    value: "02/20/2026",
    icon: <CalendarTodayOutlinedIcon sx={{ fontSize: 15 }} />,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-visible bg-black pb-[120px]">
      <div
        className="relative min-h-[780px] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/home/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1280px] items-start px-6 pt-24 lg:px-10">
          <div className="max-w-[900px] pt-14">
            <p className="mb-4 font-urbanist text-[14px] uppercase tracking-[0.24em] text-white/85">
              Find Your Perfect Car
            </p>

            <h1 className="max-w-[900px] font-nichrome text-[56px] font-[800] leading-[0.98] tracking-[-0.04em] text-white xl:text-[66px]">
              <span className="block whitespace-nowrap">
                Looking for a vehicle?
              </span>
              <span className="block whitespace-nowrap">
                You’re in the perfect spot.
              </span>
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              {FEATURES.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 font-urbanist text-[15px] text-white"
                >
                  <CheckCircleRoundedIcon sx={{ fontSize: 18, color: "white" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 bottom-[-72px] z-30 w-full max-w-[1120px] -translate-x-1/2 px-4">
          <div className="rounded-[28px] border border-white/10 bg-black px-4 py-4 shadow-[0_25px_60px_rgba(0,0,0,0.45)] md:px-5 md:py-5">
            <div className="mb-4 flex flex-col gap-4 border-b border-white/10 pb-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    backgroundColor: "#fff",
                    color: "#000",
                    boxShadow: "none",
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    px: 2.2,
                    py: 0.9,
                    minWidth: "auto",
                    "&:hover": {
                      backgroundColor: "#f5f5f5",
                      boxShadow: "none",
                    },
                  }}
                >
                  All cars
                </Button>

                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    px: 1.8,
                    minWidth: "auto",
                  }}
                >
                  New cars
                </Button>

                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    borderRadius: "999px",
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Urbanist, sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    px: 1.8,
                    minWidth: "auto",
                  }}
                >
                  Used cars
                </Button>
              </div>

              <div className="flex items-center gap-2 font-urbanist text-[13px] text-white/80">
                <SupportAgentOutlinedIcon sx={{ fontSize: 15 }} />
                <span>Need help?</span>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
              <div className="grid flex-1 grid-cols-1 overflow-hidden rounded-[18px] border border-white/10 lg:grid-cols-4">
                {BOOKING_FIELDS.map((field, index) => (
                  <div
                    key={field.label}
                    className={`flex min-h-[86px] flex-col justify-center px-5 ${
                      index > 0 ? "border-t border-white/10 lg:border-l lg:border-t-0" : ""
                    }`}
                  >
                    <span className="mb-2 font-urbanist text-[11px] uppercase tracking-[0.18em] text-white/45">
                      {field.label}
                    </span>

                    <div className="flex items-center gap-2 text-white">
                      <span className="text-white/75">{field.icon}</span>
                      <span className="font-urbanist text-[15px] font-semibold">
                        {field.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="contained"
                startIcon={<SearchIcon />}
                sx={{
                  textTransform: "none",
                  borderRadius: "18px",
                  backgroundColor: "#fff",
                  color: "#000",
                  boxShadow: "none",
                  fontFamily: "Urbanist, sans-serif",
                  fontWeight: 700,
                  fontSize: "15px",
                  minHeight: "86px",
                  minWidth: { xs: "100%", lg: "190px" },
                  "&:hover": {
                    backgroundColor: "#f2f2f2",
                    boxShadow: "none",
                  },
                }}
              >
                Find a Vehicle
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}