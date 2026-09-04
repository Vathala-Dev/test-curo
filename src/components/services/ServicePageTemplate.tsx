import Button from "@/components/ui/Button";
import FAQSection from "@/components/ui/FAQSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceIcon from "@/components/ui/ServiceIcon";
import type { ServiceData } from "@/data/services";
import { siteConfig } from "@/lib/site";

interface ServicePageTemplateProps {
  service: ServiceData;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100">
              <ServiceIcon name={service.icon} className="h-5 w-5" />
              {service.title}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {service.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-100">
              {service.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="white">
                Book This Service
              </Button>
              <Button href="/services" variant="outline" className="border-white text-white hover:bg-white/10">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={`About ${service.title}`} centered={false} />
            <p className="text-lg leading-relaxed text-muted">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What We Offer"
            subtitle={`Comprehensive ${service.title.toLowerCase()} tailored to your needs`}
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <ServiceIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Benefits"
            subtitle="Why choose CuroAid for this service"
          />
          <div className="mx-auto grid max-w-4xl gap-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 rounded-xl border border-blue-100 bg-white p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  ✓
                </div>
                <p className="text-navy leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How It Works"
            subtitle="Simple steps to get started"
            light
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.howItWorks.map((step) => (
              <div key={step.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-200">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common questions about this service"
          />
          <FAQSection faqs={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Contact us today to book {service.title.toLowerCase()} or learn more about how CuroAid can help you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="white">
              Contact Us
            </Button>
            <Button
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
