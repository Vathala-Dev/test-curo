import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    step: 1,
    title: "Contact Us",
    description: "Reach out via phone, email, or our contact form with your healthcare needs.",
  },
  {
    step: 2,
    title: "Get Matched",
    description: "We connect you with qualified healthcare professionals in your area.",
  },
  {
    step: 3,
    title: "Receive Care",
    description: "Professional care is delivered at your home on your preferred schedule.",
  },
  {
    step: 4,
    title: "Ongoing Support",
    description: "We provide follow-up coordination and adjust care plans as needed.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-light-blue py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="How It Works"
          subtitle="Getting started with CuroAid is simple and straightforward"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.step} className="rounded-2xl bg-white/60 p-5 text-center shadow-sm sm:p-6">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30 sm:h-14 sm:w-14 sm:text-xl">
                {item.step}
              </div>
              <h3 className="text-base font-semibold text-navy sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
