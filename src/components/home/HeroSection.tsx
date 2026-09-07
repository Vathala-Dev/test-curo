"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import BookingModal from "@/components/ui/BookingModal";
import { siteConfig } from "@/lib/site";


const GooglePlayIcon = () => (
  <svg
    className="size-7 shrink-0"
    viewBox="12 11 32 33"
    width={28}
    height={28}
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#5778c5"
      d="m13.426 12.37c-0.08533 0.31466-0.13018 0.64425-0.13018 0.98651v26.623c0 0.34162 0.04432 0.67233 0.13072 0.98587l14.684-14.681-14.684-13.914"
    />
    <path
      fill="#3bad49"
      d="m27.727 26.668 7.3473-7.3451-15.96-9.2534c-0.58012-0.34746-1.2572-0.54799-1.9817-0.54799-1.7734 0-3.2697 1.2068-3.7051 2.8447-5.34e-4 0.0016-5.34e-4 0.0027-5.34e-4 0.0041l14.3 14.298"
    />
    <path
      fill="#eb3131"
      d="m27.622 25.899-14.194 15.066c5.34e-4 0.0031 0.0016 0.0057 0.0021 0.0089 0.43532 1.636 1.9296 2.8406 3.703 2.8406 0.70892 0 1.3745-0.19166 1.9453-0.52812l0.04533-0.02656 15.978-9.22-7.479-8.141"
    />
    <path
      fill="#f6b60b"
      d="m41.983 23.334-0.0136-0.0093-6.8982-3.999-7.7717 6.9156 7.7987 7.7977 6.8618-3.9592c1.203-0.64945 2.0197-1.9177 2.0197-3.3802 0-1.452-0.80571-2.7139-1.9968-3.3655"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg
    className="size-[1.625rem] text-vathala-forest"
    viewBox="0 0 24 24"
    aria-hidden
    fill="currentColor"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);


export default function HeroSection() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-light-blue via-white to-light-blue">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-dark/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-2 text-xs font-medium text-primary sm:px-4 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Healthcare At Your Doorstep
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-navy sm:mt-6 sm:text-4xl lg:text-6xl">
            Proffessional Healthcare Services{" "}
            <span className="text-primary">At Home</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:mt-6 sm:text-base lg:text-lg">
            From doctor visits and nursing to physiotherapy, elder care, blood tests, and more — CuroAid delivers quality healthcare services at your doorstep.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center">
            <Button onClick={() => setBookingOpen(true)} className="w-full sm:w-auto">
              Book Now
            </Button>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://play.google.com/store/apps/details?id=YOUR_ANDROID_PACKAGE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-4 sm:py-3"
              >
                <GooglePlayIcon />
                <span className="leading-none text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                    Get it on
                  </span>
                  <span className="mt-1 block text-sm font-bold text-navy">Google Play</span>
                </span>
              </a>

              <a
                href="https://apps.apple.com/app/YOUR_APP_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <AppStoreIcon />
                <span className="leading-none text-left">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
                    Download on the
                  </span>
                  <span className="mt-1 block text-sm font-bold text-navy">App Store</span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto max-w-md">
            <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-2xl shadow-primary/30">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Trusted Care</p>
                    <p className="text-lg font-semibold">Home Healthcare</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Doctor Visits", "Nursing Care", "Physiotherapy", "Lab Tests"].map((item) => (
                    <div key={item} className="rounded-xl bg-white/10 px-4 py-3 text-sm font-medium">
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-blue-200">
                  Professional healthcare professionals delivered to your home.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-6 py-4 shadow-lg">
              <p className="text-sm font-semibold text-navy">Need help?</p>
              <Link href="/contact" className="text-sm text-primary hover:underline">
                Get a callback →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
