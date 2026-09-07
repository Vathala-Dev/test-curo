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
  const primaryCtaLabel = service.primaryCtaLabel ?? "Book This Service";
  const primaryCtaHref = service.primaryCtaHref ?? "/contact";
  const secondaryCtaLabel = service.secondaryCtaLabel ?? "View All Services";
  const secondaryCtaHref = service.secondaryCtaHref ?? "/services";

  const descriptionTitleMap: Record<string, string> = {
    "home-doctor": "CUROAID HOME DOCTOR SERVICE",
    "nursing-services": "CUROAID HOME NURSING SERVICE",
    "physiotherapy": "CUROAID PHYSIOTHERAPY AT HOME SERVICE",
  };

  const featuresTitleMap: Record<string, string> = {
    "home-doctor": "OUR HOME DOCTOR SERVICES",
    "nursing-services": "OUR HOME NURSING SERVICES",
    "physiotherapy": "OUR PHYSIOTHERAPY AT HOME SERVICES",
  };

  const benefitsTitleMap: Record<string, string> = {
    "home-doctor": "WHY CHOOSE CUROAID?",
    "nursing-services": "WHY CHOOSE CUROAID?",
    "physiotherapy": "WHY CHOOSE CUROAID?",
  };

  const howItWorksTitleMap: Record<string, string> = {
    "home-doctor": "HOW TO BOOK OUR HOME DOCTOR SERVICE",
    "nursing-services": "HOW TO BOOK OUR HOME NURSING SERVICE",
    "physiotherapy": "HOW TO BOOK OUR PHYSIOTHERAPY AT HOME SERVICE",
  };

  const isAppDownload = primaryCtaLabel === "App Download";

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/20" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs text-blue-100 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm">
              <ServiceIcon name={service.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
              {service.title}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.heroTitle}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-blue-100 whitespace-pre-line sm:mt-6 sm:text-lg">
              {service.heroSubtitle}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <Button href={primaryCtaHref} variant={isAppDownload ? "white" : "white"} className="w-full sm:w-auto">
                {primaryCtaLabel}
              </Button>
              <Button href={secondaryCtaHref} variant="outline" className="w-full border-white text-white hover:bg-white/10 sm:w-auto">
                {secondaryCtaLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeading title={descriptionTitleMap[service.slug] ?? `About ${service.title}`} centered={false} />
            <p className="text-lg leading-relaxed text-muted whitespace-pre-line">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={featuresTitleMap[service.slug] ?? "What We Offer"}
            subtitle={service.slug === "home-doctor"
              ? "Whether you need a routine consultation, ongoing health monitoring, or medical support for a loved one, CuroAid brings professional healthcare to the comfort of your home."
              : service.slug === "nursing-services"
                ? "From recovery and rehabilitation to long-term healthcare support, CuroAid provides personalised nursing care to help patients and families manage healthcare needs comfortably at home."
                : "From pain management and rehabilitation to mobility improvement and recovery support, CuroAid provides personalised physiotherapy care based on your individual healthcare needs."}
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
            title={benefitsTitleMap[service.slug] ?? "Benefits"}
            subtitle={
              service.slug === "home-doctor"
                ? "Healthcare That Comes to You"
                : service.slug === "nursing-services"
                  ? "Healthcare becomes easier when professional support is available where you are most comfortable."
                  : "Healthcare That Comes to You"
            }
          />
          <div className="mx-auto grid max-w-4xl gap-3 sm:gap-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-4 sm:gap-4 sm:p-5"
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
            title={howItWorksTitleMap[service.slug] ?? "How It Works"}
            subtitle={
              service.slug === "home-doctor"
                ? "Getting Medical Care at Home Is Simple"
                : service.slug === "nursing-services"
                  ? "Getting Nursing Care at Home Is Simple"
                  : "Getting Physiotherapy Care at Home Is Simple"
            }
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            title={service.slug === "home-doctor" ? "FAQ" : service.slug === "nursing-services" ? "FAQ - Home Nursing Services" : "FAQ"}
            subtitle="Common questions about this service"
          />
          <FAQSection faqs={service.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {service.slug === "home-doctor"
              ? "Need Medical Care at Home?"
              : service.slug === "nursing-services"
                ? "NEED PROFESSIONAL NURSING CARE AT HOME?"
                : "Need Physiotherapy Support at Home?"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            {service.slug === "home-doctor"
              ? "CuroAid brings trusted healthcare to your doorstep. Book a convenient home doctor visit and take the next step towards better, more accessible healthcare."
              : service.slug === "nursing-services"
                ? "Compassionate Care. Professional Support. Right at Your Doorstep. CuroAid makes it easier for you and your loved ones to access reliable nursing support without leaving the comfort of home."
                : "Professional physiotherapy support designed to help you recover, improve movement, and regain confidence in the comfort of your own home."}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Button href={primaryCtaHref} variant="white" className="w-full sm:w-auto">
              {service.slug === "home-doctor" ? "Book Free Consultation" : service.slug === "nursing-services" ? "Book Home Nursing Service" : "Book Physiotherapy Session"}
            </Button>
            <Button
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              variant="outline"
              className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
            >
              Call Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
