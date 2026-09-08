import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore CuroAid home healthcare services including home doctor visits, nursing, physiotherapy, elder care, yoga, wound care, veterinary care, and blood tests.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Healthcare Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-blue-100 sm:mt-6 sm:text-lg">
              CuroAid offers a comprehensive catalog of home healthcare services. Browse our offerings below and find the care that fits your needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="All Services"
            subtitle="Professional healthcare delivered to your doorstep"
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image ?? "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80"}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123b52]/80 via-[#123b52]/15 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-primary shadow-sm backdrop-blur-sm">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                      Care Service
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lg text-primary shadow-sm">
                      →
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-navy">{service.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    View Details
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            title="Not Sure Which Service You Need?"
            subtitle="Contact us and we'll help you find the right care"
          />
          <Button href="/contact">Get in Touch</Button>
        </div>
      </section>
    </>
  );
}
