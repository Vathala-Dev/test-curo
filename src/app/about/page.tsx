import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CuroAid — a home healthcare platform connecting families with qualified doctors, nurses, and caregivers for quality care at your doorstep.",
};

const values = [
  {
    title: "Patient-Centered Care",
    description:
      "Every service we provide is designed around the comfort, safety, and well-being of patients and their families.",
  },
  {
    title: "Professional Standards",
    description:
      "We work with qualified healthcare professionals who meet verified credentials and training requirements.",
  },
  {
    title: "Accessibility",
    description:
      "Healthcare should be accessible. We bring medical services to your home so you can focus on recovery and wellness.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication about services, scheduling, and care plans — no hidden surprises.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-dark via-primary to-primary-dark py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              About CuroAid
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-blue-100 sm:mt-6 sm:text-base lg:text-lg">
              CuroAid is a home healthcare platform dedicated to connecting families with qualified healthcare professionals. We believe quality medical care should be accessible, convenient, and delivered with compassion — right where you feel most comfortable: at home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                title="Our Mission"
                subtitle="Making home healthcare accessible for everyone"
                centered={false}
              />
              <p className="text-lg leading-relaxed text-muted">
                Our mission is to bridge the gap between patients and quality healthcare by delivering professional medical services at home. Whether you need a doctor visit, nursing care, physiotherapy, elder care support, or diagnostic services, CuroAid coordinates the right professionals for your needs.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                We serve individuals and families who prefer home-based care — including elderly patients, post-operative recovery cases, people with mobility limitations, and busy professionals seeking convenient healthcare access.
              </p>
            </div>
            <div className="rounded-2xl bg-light-blue p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-navy">Why Home Healthcare?</h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Comfort and familiarity of your own environment",
                  "Reduced exposure to hospital-acquired infections",
                  "Personalized one-on-one attention from caregivers",
                  "Convenient scheduling that fits your routine",
                  "Support for family members and caregivers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white">
                      ✓
                    </span>
                    <span className="text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light-blue py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <SectionHeading
            title="Ready to Learn More?"
            subtitle="Get in touch to discuss your healthcare needs"
          />
          <Button href="/contact">Contact Us</Button>
        </div>
      </section>
    </>
  );
}
