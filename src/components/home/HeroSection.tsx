// import Link from "next/link";
// import Button from "@/components/ui/Button";


// const GooglePlayIcon = () => (
//   <svg
//     className="size-7 shrink-0"
//     viewBox="12 11 32 33"
//     width={28}
//     height={28}
//     aria-hidden
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       fill="#5778c5"
//       d="m13.426 12.37c-0.08533 0.31466-0.13018 0.64425-0.13018 0.98651v26.623c0 0.34162 0.04432 0.67233 0.13072 0.98587l14.684-14.681-14.684-13.914"
//     />
//     <path
//       fill="#3bad49"
//       d="m27.727 26.668 7.3473-7.3451-15.96-9.2534c-0.58012-0.34746-1.2572-0.54799-1.9817-0.54799-1.7734 0-3.2697 1.2068-3.7051 2.8447-5.34e-4 0.0016-5.34e-4 0.0027-5.34e-4 0.0041l14.3 14.298"
//     />
//     <path
//       fill="#eb3131"
//       d="m27.622 25.899-14.194 15.066c5.34e-4 0.0031 0.0016 0.0057 0.0021 0.0089 0.43532 1.636 1.9296 2.8406 3.703 2.8406 0.70892 0 1.3745-0.19166 1.9453-0.52812l0.04533-0.02656 15.978-9.22-7.479-8.141"
//     />
//     <path
//       fill="#f6b60b"
//       d="m41.983 23.334-0.0136-0.0093-6.8982-3.999-7.7717 6.9156 7.7987 7.7977 6.8618-3.9592c1.203-0.64945 2.0197-1.9177 2.0197-3.3802 0-1.452-0.80571-2.7139-1.9968-3.3655"
//     />
//   </svg>
// );

// const AppStoreIcon = () => (
//   <svg
//     className="size-[1.625rem] text-vathala-forest"
//     viewBox="0 0 24 24"
//     aria-hidden
//     fill="currentColor"
//   >
//     <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
//   </svg>
// );


// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-light-blue via-white to-light-blue">
//       <div className="absolute inset-0">
//         <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
//         <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-primary-dark/5 blur-3xl" />
//       </div>
//       <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:flex lg:items-center lg:gap-16 lg:px-8 lg:py-28">
//         <div className="flex-1">
//           <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
//             <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
//             Healthcare At Your Doorstep
//           </div>
//           <h1 className="mt-6 text-4xl font-bold tracking-tight text-navy sm:text-5xl lg:text-6xl">
//             Proffessional Healthcare Services{" "}
//             <span className="text-primary">At Home</span>
//           </h1>
//           <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
//             From doctor visits and nursing to physiotherapy, elder care, blood tests, and more — CuroAid delivers quality healthcare services at your doorstep.
//           </p>
//           <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
//             <Button href="/contact" className="w-full sm:w-auto">
//               Book Now
//             </Button>

//             <div className="flex flex-wrap gap-3">
//               <a
//                 href="https://play.google.com/store/apps/details?id=YOUR_ANDROID_PACKAGE"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <GooglePlayIcon />
//                 <span className="leading-none text-left">
//                   <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
//                     Get it on
//                   </span>
//                   <span className="mt-1 block text-sm font-bold text-navy">Google Play</span>
//                 </span>
//               </a>

//               <a
//                 href="https://apps.apple.com/app/YOUR_APP_ID"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
//               >
//                 <AppStoreIcon />
//                 <span className="leading-none text-left">
//                   <span className="block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
//                     Download on the
//                   </span>
//                   <span className="mt-1 block text-sm font-bold text-navy">App Store</span>
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12 flex-1 lg:mt-0">
//           <div className="relative mx-auto max-w-md">
//             <div className="rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-2xl shadow-primary/30">
//               <div className="space-y-6">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
//                     <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-sm text-blue-200">Trusted Care</p>
//                     <p className="text-lg font-semibold">Home Healthcare</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4">
//                   {["Doctor Visits", "Nursing Care", "Physiotherapy", "Lab Tests"].map((item) => (
//                     <div key={item} className="rounded-xl bg-white/10 px-4 py-3 text-sm font-medium">
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//                 <p className="text-sm text-blue-200">
//                   Professional healthcare professionals delivered to your home.
//                 </p>
//               </div>
//             </div>
//             <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-6 py-4 shadow-lg">
//               <p className="text-sm font-semibold text-navy">Need help?</p>
//               <Link href="/contact" className="text-sm text-primary hover:underline">
//                 Get a callback →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";


const GooglePlayIcon = () => (
  <svg
    className="size-7 shrink-0"
    viewBox="12 11 32 33"
    width={28}
    height={28}
    aria-hidden
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#5778c5"
      d="m13.426 12.37c-0.08533 0.31466-0.13018 0.64425-0.13018 0.98651v26.623c0 0.34162 0.04432 0.67233 0.13072 0.98587l14.684-14.681-14.684-13.914"
    />
    <path
      fill="#00f000"
      d="m27.727 26.668 7.3473-7.3451-15.96-9.2534c-0.58012-0.34746-1.2572-0.54799-1.9817-0.54799-1.7734 0-3.2697 1.2068-3.7051 2.8447-5.34e-4 0.0016-5.34e-4 0.0027-5.34e-4 0.0041l14.3 14.298"
    />
    <path
      fill="#eb3131"
      d="m27.622 25.899-14.194 15.066c5.34e-4 0.0031 0.0016 0.0057 0.0021 0.0089 0.43532 1.636 1.9296 2.8406 3.703 2.8406 0.70892 0 1.3745-0.19166 1.9453-0.52812l0.04533-0.02656 15.978-9.22-7.479-8.141"
    />
    <path
      fill="#f6b60b"
      d="m41.983 23.334-0.0136-0.0093-6.8982-3.999-7.7717 6.9156 7.7987 7.7977 6.8618-3.9592c1.203-0.64945 2.0197-1.9177 2.0197-3.3802 0-1.452-0.80571-2.7139-1.9968-3.3655"
    />
  </svg>
);

const AppStoreIcon = () => (
  <svg
    className="h-8 w-8 shrink-0 text-[#111827]"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const HeartIcon = () => (
  <svg
    className="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.6}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
    <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
  </svg>
);

const FlaskIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M9 3h6" />
    <path d="M10 3v6l-5.2 8.7A2.2 2.2 0 0 0 6.7 21h10.6a2.2 2.2 0 0 0 1.9-3.3L14 9V3" />
    <path d="M8 15h8" />
  </svg>
);

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eefaff] via-white to-[#e9f8ff]">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#42aee0]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#42aee0]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[#0d83c6]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-[1500px] items-center px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* =====================================================
              LEFT SIDE
          ====================================================== */}
          <div className="relative z-10 max-w-[700px]">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-[#dff4ff] px-5 py-2.5 text-sm font-semibold text-[#258fc4]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3aaee0]" />
              Healthcare At Your Doorstep
            </div>

            {/* Heading */}
            <h1 className="text-[48px] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#102d49] sm:text-[58px] lg:text-[68px]">
              Professional
              <br />
              Healthcare Services
              <br />
              <span className="text-[#38a9dc]">At Home</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[690px] text-[17px] leading-[1.65] text-[#526477] sm:text-[19px]">
              From doctor visits and nursing to physiotherapy, elder care,
              blood tests, and more — CuroAid delivers quality healthcare
              services at your doorstep.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              {/* Book Now */}
              <Button
                href="/contact"
                className="rounded-xl bg-[#35a7db] px-7 py-4 text-base font-semibold shadow-lg shadow-[#35a7db]/20 transition hover:-translate-y-0.5 hover:bg-[#2699ce]"
              >
                Book Now
              </Button>

              {/* Google Play */}
              <a
                href="https://play.google.com/store/apps/details?id=com.androidVathalaUser"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[64px] items-center gap-3 rounded-xl border border-[#dce4e9] bg-white px-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <GooglePlayIcon />

                <span className="text-left leading-none">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[#687787]">
                    Get it on
                  </span>

                  <span className="mt-1.5 block text-[17px] font-bold text-[#142c45]">
                    Google Play
                  </span>
                </span>
              </a>

              {/* App Store */}
              <a
                href="https://apps.apple.com/us/app/vathala/id6474188887"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[64px] items-center gap-3 rounded-xl border border-[#dce4e9] bg-white px-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <AppStoreIcon />

                <span className="text-left leading-none">
                  <span className="block text-[10px] font-medium uppercase tracking-[0.12em] text-[#687787]">
                    Download on the
                  </span>

                  <span className="mt-1.5 block text-[17px] font-bold text-[#142c45]">
                    App Store
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="relative mx-auto h-[600px] w-full max-w-[700px]">
            {/* -----------------------------------------------
                TOP LEFT DOCTOR IMAGE
            ------------------------------------------------ */}
            <div className="absolute left-[3%] top-[0%] z-20 h-[190px] w-[190px] overflow-hidden rounded-full border-[4px] border-white shadow-lg">
              <img
                src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788766798126/t1.webp"


                alt="Doctor providing healthcare"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Small floating circle */}
            <div className="absolute left-[37%] top-[10%] z-10 h-11 w-11 rounded-full bg-[#d9f2fc]" />

            {/* -----------------------------------------------
                TOP RIGHT NURSE IMAGE
            ------------------------------------------------ */}
            <div className="absolute right-[3%] top-[-5%] z-10 h-[225px] w-[225px] overflow-hidden rounded-full border-[4px] border-white shadow-lg">
              <img
                src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788767301819/t2.webp"
                alt="Nurse caring for elderly patient"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Heart floating icon */}
            <div className="absolute right-[-1%] top-[8%] z-30 flex h-16 w-16 items-center justify-center rounded-full bg-[#dff4ff] text-white shadow-sm">
              <HeartIcon />
            </div>

            {/* -----------------------------------------------
                MAIN BLUE CARD
            ------------------------------------------------ */}
            <div className="absolute left-[20%] top-[24%] z-20 w-[76%] rounded-[30px] bg-gradient-to-br from-[#38a9dc] to-[#238fc4] p-7 text-white shadow-2xl shadow-[#238fc4]/30 sm:p-9">
              {/* Card Header */}
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                  <HeartIcon />
                </div>

                <div>
                  <p className="text-sm text-[#c4ebfa]">Trusted Care</p>

                  <p className="mt-1 text-xl font-bold">
                    Home Healthcare
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  "Doctor Visits",
                  "Nursing Care",
                  "Physiotherapy",
                  "Lab Tests",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white/10 px-4 py-4 text-sm font-medium backdrop-blur-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Card description */}
              <p className="mt-7 max-w-[470px] text-sm leading-6 text-[#c4ebfa]">
                Professional healthcare professionals delivered to your
                home.
              </p>
            </div>

            {/* -----------------------------------------------
                PHYSIOTHERAPIST IMAGE
            ------------------------------------------------ */}
            <div className="absolute bottom-[6%] left-[1%] z-30 h-[190px] w-[190px] overflow-hidden rounded-full border-[4px] border-white shadow-xl">
              <img
                src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788767339817/b1--2.png"

                alt="Physiotherapist providing home care"
                className="h-full w-full object-cover"
              />
            </div>

            {/* -----------------------------------------------
                LAB IMAGE
            ------------------------------------------------ */}
            <div className="absolute bottom-[12%] right-[-1%] z-10 h-[180px] w-[180px] overflow-hidden rounded-full border-[4px] border-white shadow-xl">
              <img
                src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788767402986/b2.webp"

                alt="Healthcare laboratory testing"
                className="h-full w-full object-cover"
              />
            </div>

            {/* -----------------------------------------------
                PLUS ICON
            ------------------------------------------------ */}
            <div className="absolute right-[-1%] top-[38%] z-30 text-[#a9ddf2]">
              <PlusIcon />
            </div>

            {/* -----------------------------------------------
                LAB FLASK FLOATING ICON
            ------------------------------------------------ */}
            <div className="absolute bottom-[18%] right-[-6%] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#42a9d9] shadow-md">
              <FlaskIcon />
            </div>

            {/* -----------------------------------------------
                PHYSIO RUNNING ICON
            ------------------------------------------------ */}
            <div className="absolute bottom-[4%] left-[28%] z-40 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#35a7db] shadow-lg">
              <svg
                viewBox="0 0 24 24"
                className="h-9 w-9"
                fill="currentColor"
              >
                <circle cx="14.5" cy="4" r="2" />

                <path d="M13.5 7.2 10.8 11l-2.4 2.3-1.4-1.4 2.5-2.7 2.3-3.5z" />

                <path d="M10.8 11 14 12.5l1.7 3.5-1.7.8-2.1-2.8-2.7-.8z" />

                <path d="m8.2 13.1-3.4 3.7-1.3-1.2 3.2-4z" />

                <path d="m14.4 16.2 2.5 3.3-1.5 1.1-3-3.1z" />
              </svg>
            </div>

            {/* -----------------------------------------------
                CALLBACK CARD
            ------------------------------------------------ */}
            <div className="absolute bottom-[2%] right-[7%] z-50 rounded-2xl bg-white px-7 py-5 shadow-xl">
              <p className="text-sm font-bold text-[#19334d]">
                Need help?
              </p>

              <Link
                href="/contact"
                className="mt-1 block text-sm font-medium text-[#2da1d5] hover:underline"
              >
                Get a callback →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}