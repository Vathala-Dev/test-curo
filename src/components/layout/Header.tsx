"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, serviceNavItems } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import Button from "@/components/ui/Button";
import BookingModal from "@/components/ui/BookingModal";
import { cn } from "@/lib/utils";
import Image from "next/image";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788850749197/curologo.jpg"
            alt={`${siteConfig.name} logo`}
            width={160}
            height={50}
            className="h-10 w-auto object-contain"
            priority
          />

          <span className="text-xl font-bold text-trust-blue sm:text-2xl lg:text-3xl">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-light-blue hover:text-primary"
                >
                  {item.label}
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full w-64 pt-2">
                    <div className="rounded-xl border border-blue-100 bg-white py-2 shadow-xl shadow-navy/10">
                      {serviceNavItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-navy transition-colors hover:bg-light-blue hover:text-primary"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-light-blue hover:text-primary"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button onClick={() => setBookingOpen(true)}>Book Now</Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-blue-100 bg-white lg:hidden",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4">
          {mainNav.map((item) =>
            item.hasDropdown ? (
              <div key={item.label}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-navy hover:bg-light-blue"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {item.label}
                  <svg
                    className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-1 border-l-2 border-light-blue pl-4">
                    <Link
                      href="/services"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-primary hover:bg-light-blue"
                      onClick={() => setMobileOpen(false)}
                    >
                      All Services
                    </Link>
                    {serviceNavItems.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block rounded-lg px-4 py-2 text-sm text-muted hover:bg-light-blue hover:text-primary"
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-sm font-medium text-navy hover:bg-light-blue"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
          <div className="pt-2">
            <Button onClick={() => setBookingOpen(true)} className="w-full">
              Book Now
            </Button>
          </div>
        </nav>
      </div>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </header>
  );
}
