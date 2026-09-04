import Link from "next/link";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-light-blue via-white to-light-blue">
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-dark/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            Healthcare At Your Doorstep
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
            24×7 Healthcare Services{" "}
            <span className="text-primary">At Home</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            From doctor visits and nursing to physiotherapy, elder care, blood tests, and more — CuroAid delivers quality healthcare services at your doorstep.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Book Now</Button>
            <Button href="/services" variant="outline">
              Explore Services
            </Button>
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
  );
}
