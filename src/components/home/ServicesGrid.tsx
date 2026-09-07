import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Services"
          subtitle="CuroAid provides a comprehensive range of home healthcare services to meet your family's needs"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-light-blue text-primary transition-colors group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-base font-semibold text-navy transition-colors group-hover:text-primary sm:text-lg">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.shortDescription}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Learn more
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
