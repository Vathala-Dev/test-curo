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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.slug}
                className="flex flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg sm:p-8"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-light-blue text-primary">
                  <ServiceIcon name={service.icon} className="h-8 w-8" />
                </div>
                <h2 className="text-xl font-bold text-navy">{service.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  View Details
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
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
