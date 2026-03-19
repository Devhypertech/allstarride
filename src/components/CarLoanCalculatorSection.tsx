import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function clampNumber(n: number, min: number, max?: number) {
  if (Number.isNaN(n)) return min;
  if (n < min) return min;
  if (typeof max === 'number' && n > max) return max;
  return n;
}

function formatCurrencyUSD(value: number) {
  const safe = Number.isFinite(value) ? value : 0;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(safe);
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function monthlyPayment({
  price,
  downPayment,
  annualInterestRate,
  termMonths,
}: {
  price: number;
  downPayment: number;
  annualInterestRate: number;
  termMonths: number;
}) {
  const term = Math.max(0, termMonths);
  const principal = Math.max(price - downPayment, 0);
  if (term === 0 || principal === 0) return 0;

  const monthlyRate = annualInterestRate / 100 / 12;
  if (monthlyRate === 0) return principal / term;

  const pow = Math.pow(1 + monthlyRate, term);
  const numerator = principal * (monthlyRate * pow);
  const denominator = pow - 1;
  if (denominator === 0) return 0;
  return numerator / denominator;
}

const COUNT_TARGETS = [45, 29000, 20, 168000] as const;

function formatCounter(index: number, value: number) {
  const v = Math.round(value);
  if (index === 0) return `${v}+`;
  if (index === 1) return `${Math.round(v / 1000)}K`;
  if (index === 2) return `${v}+`;
  return `${Math.round(v / 1000)}K`;
}

const CarLoanCalculatorSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const startedRef = useRef(false);

  const [price, setPrice] = useState<number>(20000);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [terms, setTerms] = useState<number>(12);
  const [downPayment, setDownPayment] = useState<number>(12000);

  const [hasStartedCounters, setHasStartedCounters] = useState(false);
  const [counterValues, setCounterValues] = useState<number[]>([0, 0, 0, 0]);

  const computed = useMemo(() => {
    const safePrice = clampNumber(price, 0);
    const safeDown = clampNumber(downPayment, 0);
    const safeRate = clampNumber(interestRate, 0, 1000);
    const termMonths = clampNumber(terms, 0, 1200);

    const principal = Math.max(safePrice - safeDown, 0);
    const monthly = monthlyPayment({
      price: safePrice,
      downPayment: safeDown,
      annualInterestRate: safeRate,
      termMonths,
    });

    return {
      downPaymentAmount: safeDown,
      amountFinanced: principal,
      monthlyPayment: monthly,
    };
  }, [price, downPayment, interestRate, terms]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (!first?.isIntersecting) return;
        if (startedRef.current) return;
        startedRef.current = true;
        setHasStartedCounters(true);
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStartedCounters) return;

    const durationMs = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const t = clampNumber((now - start) / durationMs, 0, 1);
      const eased = easeOutCubic(t);

      const next = COUNT_TARGETS.map((target) => target * eased);
      setCounterValues(next);

      if (t < 1) requestAnimationFrame(tick);
      else setCounterValues([...COUNT_TARGETS]);
    };

    requestAnimationFrame(tick);
  }, [hasStartedCounters]);

  return (
    <section ref={sectionRef as any} className="w-full bg-black text-white">
      <div
        className="mx-auto max-w-[1400px] px-15 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28"
      >
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] min-h-[580px] sm:min-h-[620px] lg:min-h-[720px] shadow-[0_25px_90px_rgba(0,0,0,0.55)]"
          style={{
            backgroundImage: "url('/home/formbg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for readability (matches the reference panel look) */}
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />

          {/* Main panel layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 p-6 sm:p-10 pb-28 sm:pb-32 lg:pb-40">
            {/* Left intro */}
            <div className="flex flex-col">
              <h2 className="font-nichrome font-extrabold uppercase text-[34px] sm:text-[44px] leading-[1.05] tracking-[-0.02em]">
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  WANT TO CALCULATE YOUR
                </span>
                <span className="block whitespace-normal lg:whitespace-nowrap">
                  CAR PAYMENT?
                </span>
              </h2>
              <p className="mt-5 font-urbanist text-[13px] sm:text-[14px] text-white/65 leading-[1.55] max-w-[520px]">
                Match with up to 4 lenders to get the lowest rates available with no markups,
                no fees, and no obligations.
              </p>
            </div>

            {/* Right calculator */}
            <div className="lg:flex lg:justify-end">
              <div className="bg-white rounded-[22px] shadow-[0_20px_70px_rgba(0,0,0,0.45)] p-5 sm:p-7 w-full sm:max-w-[460px]">
                <Box className="font-urbanist">
                  <h3 className="font-urbanist text-[16px] sm:text-[18px] font-semibold text-black">
                    Car Loan Calculator
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-[12px] text-black/55">
                    Estimate your monthly auto loan payments with this calculator.
                  </p>
                </Box>

                {/* Inputs */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="Price of vehicle"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    type="number"
                    inputProps={{ min: 0, step: 100 }}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      '& .MuiOutlinedInput-root': { borderRadius: 2, backgroundColor: '#fff' },
                      '& label': { fontFamily: 'Urbanist, sans-serif' },
                    }}
                  />
                  <TextField
                    label="Interest rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    type="number"
                    inputProps={{ min: 0, step: 0.1 }}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      '& .MuiOutlinedInput-root': { borderRadius: 2, backgroundColor: '#fff' },
                      '& label': { fontFamily: 'Urbanist, sans-serif' },
                    }}
                  />
                  <TextField
                    label="Terms"
                    value={terms}
                    onChange={(e) => setTerms(Number(e.target.value))}
                    type="number"
                    inputProps={{ min: 0, step: 1 }}
                    fullWidth
                    size="small"
                    helperText="Months"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      '& .MuiOutlinedInput-root': { borderRadius: 2, backgroundColor: '#fff' },
                      '& label': { fontFamily: 'Urbanist, sans-serif' },
                    }}
                  />
                  <TextField
                    label="Down payment"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    type="number"
                    inputProps={{ min: 0, step: 100 }}
                    fullWidth
                    size="small"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      '& .MuiOutlinedInput-root': { borderRadius: 2, backgroundColor: '#fff' },
                      '& label': { fontFamily: 'Urbanist, sans-serif' },
                    }}
                  />
                </div>

                {/* Summary rows */}
                <div className="mt-4 rounded-[16px] bg-black/[0.04] p-4">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-[11px] font-urbanist text-black/55">
                        Down payment amount
                      </div>
                      <div className="text-[12px] font-urbanist font-semibold text-black">
                        {formatCurrencyUSD(computed.downPaymentAmount)}
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-[11px] font-urbanist text-black/55">Amount financed</div>
                      <div className="text-[12px] font-urbanist font-semibold text-black">
                        {formatCurrencyUSD(computed.amountFinanced)}
                      </div>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-[11px] font-urbanist text-black/55">
                        Monthly payment
                      </div>
                      <div className="text-[12px] font-urbanist font-semibold text-black">
                        {formatCurrencyUSD(computed.monthlyPayment)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="contained"
                  disableElevation
                  disableRipple
                  endIcon={<ArrowForwardIcon />}
                  className="!mt-5 !w-full !rounded-[10px] !bg-[#bdbdbd] !text-black !font-urbanist !font-semibold !normal-case"
                  sx={{
                    paddingTop: 1.25,
                    paddingBottom: 1.25,
                    boxShadow: 'none',
                    '&:hover': { backgroundColor: '#b0b0b0', boxShadow: 'none' },
                  }}
                >
                  Apply for a loan
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom-left counters */}
          <div className="absolute left-6 sm:left-10 bottom-10 sm:bottom-12 z-10">
            <div className="border-t border-white/15 w-[min(720px,calc(100vw-64px))]" />
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-[min(720px,calc(100vw-64px))]">
              <div className="text-center font-urbanist">
                <div className="text-[22px] sm:text-[24px] font-extrabold">
                  {formatCounter(0, counterValues[0] ?? 0)}
                </div>
                <div className="text-[13px] text-white/70">Global Branches</div>
              </div>
              <div className="text-center font-urbanist">
                <div className="text-[22px] sm:text-[24px] font-extrabold">
                  {formatCounter(1, counterValues[1] ?? 0)}
                </div>
                <div className="text-[13px] text-white/70">Destinations Collaboration</div>
              </div>
              <div className="text-center font-urbanist">
                <div className="text-[22px] sm:text-[24px] font-extrabold">
                  {formatCounter(2, counterValues[2] ?? 0)}
                </div>
                <div className="text-[13px] text-white/70">Years Experience</div>
              </div>
              <div className="text-center font-urbanist">
                <div className="text-[22px] sm:text-[24px] font-extrabold">
                  {formatCounter(3, counterValues[3] ?? 0)}
                </div>
                <div className="text-[13px] text-white/70">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Bottom-right client image */}
          <div className="absolute right-6 bottom-6 z-10">
            <Box
              component="img"
              src="/home/client.png"
              alt="Client"
              className="h-[90px] w-auto sm:h-[110px]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarLoanCalculatorSection;

