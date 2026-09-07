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
import { useState } from "react";
import Button from "@/components/ui/Button";
import BookingModal from "@/components/ui/BookingModal";


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
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
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
                  onClick={() => setBookingOpen(true)}
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
    RIGHT SIDE - RESPONSIVE
===================================================== */}
            <div
              className="
    relative
    mx-auto
    h-[390px]
    w-full
    max-w-[500px]

    sm:h-[480px]
    sm:max-w-[600px]

    lg:h-[600px]
    lg:max-w-[700px]
  "
            >
              {/* =================================================
      DOCTOR IMAGE
  ================================================== */}
              <div
                className="
      absolute
      left-[0%]
      top-0
      z-20

      h-[105px]
      w-[105px]

      overflow-hidden
      rounded-full
      border-4
      border-white
      shadow-lg

      sm:left-[4%]
      sm:h-[150px]
      sm:w-[150px]

      lg:left-[3%]
      lg:h-[190px]
      lg:w-[190px]
    "
              >
                <img
                  src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788766798126/t1.webp"
                  alt="Doctor providing healthcare"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Small circle */}
              <div
                className="
      absolute
      left-[38%]
      top-[9%]
      z-10
      h-7
      w-7
      rounded-full
      bg-[#d9f2fc]

      sm:h-10
      sm:w-10

      lg:h-11
      lg:w-11
    "
              />

              {/* =================================================
      NURSE IMAGE
  ================================================== */}
              <div
                className="
      absolute
      right-[1%]
      top-0
      z-10

      h-[120px]
      w-[120px]

      overflow-hidden
      rounded-full
      border-4
      border-white
      shadow-lg

      sm:right-[3%]
      sm:h-[175px]
      sm:w-[175px]

      lg:h-[225px]
      lg:w-[225px]
    "
              >
                <img
                  src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788767301819/t2.webp"
                  alt="Nurse caring for elderly patient"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Heart */}
              <div
                className="
      absolute
      right-0
      top-[7%]
      z-30

      flex
      h-10
      w-10
      items-center
      justify-center

      rounded-full
      bg-[#dff4ff]
      text-white

      sm:h-14
      sm:w-14

      lg:h-16
      lg:w-16
    "
              >
                <HeartIcon />
              </div>

              {/* =================================================
      MAIN BLUE CARD
  ================================================== */}
              <div
                className="
      absolute
      left-[7%]
      right-[3%]
      top-[22%]
      z-20

      rounded-[22px]
      bg-gradient-to-br
      from-[#38a9dc]
      to-[#238fc4]

      p-5
      text-white

      shadow-2xl
      shadow-[#238fc4]/30

      sm:left-[13%]
      sm:top-[23%]
      sm:p-7

      lg:left-[20%]
      lg:right-auto
      lg:top-[24%]
      lg:w-[76%]
      lg:rounded-[30px]
      lg:p-8
    "
              >
                {/* Header */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div
                    className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-white/15

          sm:h-14
          sm:w-14
          sm:rounded-2xl
        "
                  >
                    <HeartIcon />
                  </div>

                  <div>
                    <p className="text-xs text-[#c4ebfa] sm:text-sm">
                      Trusted Care
                    </p>

                    <p className="text-base font-bold sm:text-lg">
                      Home Healthcare
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div
                  className="
        mt-5
        grid
        grid-cols-2
        gap-2

        sm:mt-6
        sm:gap-3

        lg:mt-7
        lg:gap-4
      "
                >
                  {[
                    "Doctor Visits",
                    "Nursing Care",
                    "Physiotherapy",
                    "Lab Tests",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
            rounded-lg
            bg-white/10
            px-3
            py-2.5
            text-[11px]
            font-medium

            sm:rounded-xl
            sm:px-4
            sm:py-3
            sm:text-sm
          "
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="
        mt-5
        text-[11px]
        leading-5
        text-[#c4ebfa]

        sm:mt-6
        sm:text-sm
        sm:leading-6
      "
                >
                  Professional healthcare professionals delivered to your home.
                </p>
              </div>

              {/* =================================================
      PHYSIOTHERAPY IMAGE
  ================================================== */}
              <div
                className="
      absolute
      bottom-[5%]
      left-0
      z-30

      h-[105px]
      w-[105px]

      overflow-hidden
      rounded-full
      border-4
      border-white
      shadow-xl

      sm:h-[150px]
      sm:w-[150px]

      lg:h-[190px]
      lg:w-[190px]
    "
              >
                <img
                  src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788767339817/b1--2.png"
                  alt="Physiotherapist providing home care"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* =================================================
      LAB IMAGE
  ================================================== */}
              <div
                className="
      absolute
      bottom-[9%]
      right-0
      z-10

      h-[100px]
      w-[100px]

      overflow-hidden
      rounded-full
      border-4
      border-white
      shadow-xl

      sm:h-[145px]
      sm:w-[145px]

      lg:h-[180px]
      lg:w-[180px]
    "
              >
                <img
                  src="https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788767402986/b2.webp"
                  alt="Healthcare laboratory testing"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Plus icon */}
              <div
                className="
      absolute
      right-0
      top-[39%]
      z-30
      text-[#a9ddf2]

      sm:right-[1%]
    "
              >
                <PlusIcon />
              </div>

              {/* Flask */}
              <div
                className="
      absolute
      bottom-[16%]
      right-[-1%]
      z-40

      flex
      h-10
      w-10
      items-center
      justify-center

      rounded-full
      bg-white
      text-[#42a9d9]
      shadow-md

      sm:h-14
      sm:w-14
    "
              >
                <FlaskIcon />
              </div>

              {/* =================================================
      CALLBACK
  ================================================== */}
              <div
                className="
      absolute
      bottom-0
      right-[8%]
      z-50

      rounded-xl
      bg-white
      px-4
      py-3
      shadow-xl

      sm:right-[7%]
      sm:rounded-2xl
      sm:px-6
      sm:py-4
    "
              >
                <p className="text-xs font-bold text-[#19334d] sm:text-sm">
                  Need help?
                </p>

                <Link
                  href="/contact"
                  className="mt-1 block text-xs font-medium text-[#2da1d5] hover:underline sm:text-sm"
                >
                  Get a callback →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}