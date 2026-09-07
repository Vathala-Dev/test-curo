export default function WhoWeAreSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[2rem] bg-gradient-to-br from-light-blue to-white p-5 shadow-xl shadow-primary/5 ring-1 ring-blue-100 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-blue-100">
                  <p className="text-3xl font-bold text-navy">Home</p>
                  <p className="mt-2 text-sm text-muted">Comfort-first care</p>
                </div>
                <div className="rounded-2xl bg-primary p-5 text-white shadow-lg shadow-primary/20">
                  <p className="text-3xl font-bold">Care</p>
                  <p className="mt-2 text-sm text-blue-100">Personalized support</p>
                </div>
                <div className="rounded-2xl bg-navy p-5 text-white shadow-lg shadow-navy/20 sm:col-span-2">
                  <p className="text-3xl font-bold">Dignity</p>
                  <p className="mt-2 text-sm text-blue-100">Respectful, compassionate treatment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              WHO WE ARE
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Bringing Quality Healthcare Closer to You, Right at Home
            </h2>

            <p className="mt-6 text-base leading-8 text-muted sm:text-lg">
              CuroAid is committed to making healthcare personal, accessible, and convenient by bringing professional care directly to where you are. We provide a comprehensive range of home healthcare services tailored to support individuals through recovery, ongoing care, elderly support, rehabilitation, and everyday health needs. Our dedicated approach combines professional expertise with genuine compassion, ensuring every patient receives care with dignity, comfort, and respect. With CuroAid by your side, families can have greater confidence knowing their loved ones are supported with the right care, in the place they feel most comfortable home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
