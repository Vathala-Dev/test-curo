import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Your Healthcare Partner At Home
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base lg:text-lg">
          CuroAid is committed to delivering quality home healthcare services. Contact us today to discuss your care needs.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="white">
            Get a Callback
          </Button>
          <Button href="/services" variant="outline" className="border-white text-white hover:bg-white/10">
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
}
