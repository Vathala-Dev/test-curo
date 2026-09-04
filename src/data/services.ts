export interface ServiceFeature {
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  features: ServiceFeature[];
  benefits: string[];
  howItWorks: HowItWorksStep[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
}

export const services: ServiceData[] = [
  {
    slug: "home-doctor",
    title: "Home Doctor",
    shortDescription:
      "Qualified doctors visit your home for consultations, check-ups, and follow-up care.",
    icon: "doctor",
    heroTitle: "Doctor Visits At Home",
    heroSubtitle:
      "Get professional medical consultations without leaving your home. Our doctors provide thorough examinations and personalized care plans.",
    description:
      "CuroAid connects you with experienced general physicians and specialists who visit your home for consultations, health assessments, and follow-up care. Whether you need a routine check-up, post-surgery review, or medical advice for a family member who cannot travel, our home doctor service brings quality healthcare to your doorstep.",
    features: [
      {
        title: "General Consultations",
        description:
          "Comprehensive health evaluations including vitals, symptom assessment, and treatment recommendations.",
      },
      {
        title: "Follow-Up Visits",
        description:
          "Scheduled follow-up appointments to monitor recovery progress and adjust treatment plans.",
      },
      {
        title: "Prescription & Reports",
        description:
          "Doctors provide prescriptions, medical certificates, and guidance on further tests if needed.",
      },
      {
        title: "Chronic Condition Management",
        description:
          "Regular monitoring and management support for diabetes, hypertension, and other chronic conditions.",
      },
    ],
    benefits: [
      "Avoid hospital waiting rooms and travel discomfort",
      "Ideal for elderly patients, post-operative recovery, and mobility limitations",
      "One-on-one attention in a comfortable home environment",
      "Flexible scheduling including evenings and weekends",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book an Appointment",
        description:
          "Call us or fill out the contact form with your preferred date, time, and medical concern.",
      },
      {
        step: 2,
        title: "Doctor Assignment",
        description:
          "We match you with a qualified doctor based on your location and healthcare needs.",
      },
      {
        step: 3,
        title: "Home Visit",
        description:
          "The doctor arrives at your home with necessary equipment for examination and consultation.",
      },
      {
        step: 4,
        title: "Care Plan & Follow-Up",
        description:
          "Receive prescriptions, recommendations, and optional follow-up visit scheduling.",
      },
    ],
    faqs: [
      {
        question: "What types of conditions can a home doctor treat?",
        answer:
          "Home doctors handle general consultations, fever, infections, chronic disease follow-ups, post-surgery reviews, and wellness check-ups. For emergencies or conditions requiring hospital equipment, they will recommend appropriate hospital care.",
      },
      {
        question: "How quickly can a doctor be arranged?",
        answer:
          "Same-day or next-day appointments are typically available depending on your location and doctor availability. Urgent requests are prioritized when possible.",
      },
      {
        question: "Do home doctors carry medical equipment?",
        answer:
          "Yes, doctors bring essential diagnostic tools such as stethoscopes, blood pressure monitors, thermometers, and pulse oximeters for basic examinations.",
      },
    ],
    seoTitle: "Home Doctor Visit Services | CuroAid",
    seoDescription:
      "Book qualified doctors for home visits with CuroAid. General consultations, follow-ups, and chronic care management delivered at your doorstep.",
  },
  {
    slug: "nursing-services",
    title: "Nursing Services",
    shortDescription:
      "Skilled nurses for patient care, medication administration, and daily health monitoring at home.",
    icon: "nursing",
    heroTitle: "Professional Nursing At Home",
    heroSubtitle:
      "Trained and qualified nurses provide compassionate patient care, medication management, and health monitoring in the comfort of your home.",
    description:
      "Our nursing services bring qualified healthcare professionals to your home for patient care, post-operative support, medication administration, wound dressing, and daily health monitoring. CuroAid nurses are trained to handle diverse care needs with professionalism and compassion.",
    features: [
      {
        title: "Patient Care",
        description:
          "Assistance with daily activities, mobility support, hygiene, and comfort care for bedridden patients.",
      },
      {
        title: "Medication Management",
        description:
          "Timely administration of prescribed medications, injections, and IV therapy under medical guidance.",
      },
      {
        title: "Vital Monitoring",
        description:
          "Regular tracking of blood pressure, temperature, pulse, oxygen levels, and other vital signs.",
      },
      {
        title: "Post-Operative Care",
        description:
          "Specialized nursing support during recovery after surgery, including wound care and mobility assistance.",
      },
    ],
    benefits: [
      "Continuous professional care without hospital admission",
      "Reduced risk of hospital-acquired infections",
      "Personalized one-on-one attention for patients",
      "Family members receive guidance and peace of mind",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Share Care Requirements",
        description:
          "Tell us about the patient's condition, care needs, and preferred schedule.",
      },
      {
        step: 2,
        title: "Nurse Matching",
        description:
          "We assign a qualified nurse experienced in your specific care requirements.",
      },
      {
        step: 3,
        title: "Care Begins",
        description:
          "The nurse starts providing care at your home according to the agreed schedule.",
      },
      {
        step: 4,
        title: "Regular Updates",
        description:
          "Receive care reports and coordination with doctors as needed for ongoing treatment.",
      },
    ],
    faqs: [
      {
        question: "Can I hire a nurse for short-term or long-term care?",
        answer:
          "Yes, we offer both short-term nursing for post-operative recovery and long-term care arrangements for chronic conditions or elderly patients.",
      },
      {
        question: "Are your nurses qualified and verified?",
        answer:
          "All CuroAid nurses hold valid nursing qualifications and undergo background verification before assignment.",
      },
      {
        question: "What shifts are available?",
        answer:
          "We offer flexible shifts including 8-hour, 12-hour, and 24-hour live-in nursing care based on patient needs.",
      },
    ],
    seoTitle: "Home Nursing Services | CuroAid",
    seoDescription:
      "Hire skilled nurses for home patient care, medication management, and post-operative support with CuroAid's professional nursing services.",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    shortDescription:
      "Licensed physiotherapists for pain relief, rehabilitation, and mobility improvement at home.",
    icon: "physio",
    heroTitle: "Physiotherapy At Home",
    heroSubtitle:
      "Recover faster with personalized physiotherapy sessions delivered by licensed therapists in your own space.",
    description:
      "CuroAid's physiotherapy service brings licensed physiotherapists to your home for pain management, post-injury rehabilitation, stroke recovery, and mobility improvement. Sessions are tailored to your condition, home environment, and recovery goals.",
    features: [
      {
        title: "Pain Management",
        description:
          "Targeted exercises and manual therapy for back pain, joint pain, neck pain, and muscle strains.",
      },
      {
        title: "Post-Injury Rehabilitation",
        description:
          "Structured recovery programs after fractures, surgeries, sports injuries, and accidents.",
      },
      {
        title: "Stroke & Neuro Rehab",
        description:
          "Specialized exercises to improve balance, coordination, and motor function after neurological events.",
      },
      {
        title: "Mobility & Strength Training",
        description:
          "Programs to improve flexibility, strength, and independence for elderly or recovering patients.",
      },
    ],
    benefits: [
      "Therapy in a familiar, comfortable environment",
      "No travel required during recovery periods",
      "Personalized exercise plans adapted to your home setup",
      "Consistent sessions with the same therapist for better outcomes",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Initial Assessment",
        description:
          "Book a session and share your medical history, current condition, and therapy goals.",
      },
      {
        step: 2,
        title: "Therapist Assignment",
        description:
          "We assign a licensed physiotherapist experienced in your type of condition.",
      },
      {
        step: 3,
        title: "Home Sessions",
        description:
          "The therapist conducts sessions at your home with appropriate equipment and exercises.",
      },
      {
        step: 4,
        title: "Progress Tracking",
        description:
          "Regular assessments and plan adjustments to ensure steady improvement toward your goals.",
      },
    ],
    faqs: [
      {
        question: "How many sessions will I need?",
        answer:
          "The number of sessions depends on your condition and recovery goals. Your therapist will recommend a plan after the initial assessment.",
      },
      {
        question: "Does the therapist bring equipment?",
        answer:
          "Therapists bring portable equipment such as resistance bands, therapy balls, and TENS units. Home-based exercises using furniture and body weight are also incorporated.",
      },
      {
        question: "Can physiotherapy help with chronic pain?",
        answer:
          "Yes, regular physiotherapy can help manage chronic conditions like arthritis, sciatica, and repetitive strain injuries through targeted exercises and manual techniques.",
      },
    ],
    seoTitle: "Home Physiotherapy Services | CuroAid",
    seoDescription:
      "Book licensed physiotherapists for home sessions. Pain relief, rehabilitation, and mobility improvement with CuroAid physiotherapy services.",
  },
  {
    slug: "elder-care",
    title: "Elder Care",
    shortDescription:
      "Dedicated caregivers and healthcare support for seniors living at home.",
    icon: "elder",
    heroTitle: "Compassionate Elder Care At Home",
    heroSubtitle:
      "Professional caregivers provide daily assistance, companionship, and health support so your loved ones can age comfortably at home.",
    description:
      "CuroAid's elder care service provides trained caregivers who assist seniors with daily activities, medication reminders, mobility support, companionship, and health monitoring. We help families ensure their elderly loved ones receive attentive, dignified care while maintaining independence at home.",
    features: [
      {
        title: "Daily Living Assistance",
        description:
          "Help with bathing, dressing, grooming, meal preparation, and toileting as needed.",
      },
      {
        title: "Companionship",
        description:
          "Engaging conversation, recreational activities, and emotional support to reduce isolation.",
      },
      {
        title: "Medication Reminders",
        description:
          "Timely reminders and assistance ensuring medications are taken as prescribed.",
      },
      {
        title: "Mobility & Safety Support",
        description:
          "Assistance with walking, transfers, and fall prevention measures within the home.",
      },
    ],
    benefits: [
      "Seniors remain in familiar surroundings with family nearby",
      "Personalized care adapted to individual preferences and routines",
      "Relief for family caregivers who need support or respite",
      "Regular health monitoring and coordination with medical professionals",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Care Assessment",
        description:
          "Discuss your loved one's needs, daily routine, medical conditions, and preferences.",
      },
      {
        step: 2,
        title: "Caregiver Matching",
        description:
          "We assign a trained caregiver suited to the senior's personality and care requirements.",
      },
      {
        step: 3,
        title: "Care Plan Setup",
        description:
          "A personalized care plan is created covering daily activities, meals, and health routines.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "Regular check-ins with family and care plan adjustments as needs evolve over time.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between elder care and nursing?",
        answer:
          "Elder care focuses on daily living assistance and companionship, while nursing involves clinical tasks like injections and wound care. We can combine both services based on needs.",
      },
      {
        question: "Can caregivers stay overnight?",
        answer:
          "Yes, we offer live-in and overnight caregiver arrangements for seniors who need round-the-clock assistance.",
      },
      {
        question: "How do you ensure caregiver reliability?",
        answer:
          "All caregivers undergo background verification, training, and regular supervision. Replacement arrangements are available if needed.",
      },
    ],
    seoTitle: "Elder Care At Home | CuroAid",
    seoDescription:
      "Professional elder care services at home. Daily assistance, companionship, and health support for seniors with CuroAid caregivers.",
  },
  {
    slug: "yoga-classes",
    title: "Yoga Classes",
    shortDescription:
      "Certified yoga instructors for personalized wellness sessions at your home.",
    icon: "yoga",
    heroTitle: "Yoga & Wellness At Home",
    heroSubtitle:
      "Practice yoga with certified instructors in the privacy and comfort of your home, tailored to your fitness level and health goals.",
    description:
      "CuroAid offers home yoga sessions led by certified instructors who customize practices for your fitness level, health conditions, and wellness goals. Whether you are a beginner seeking stress relief or recovering from injury, our yoga classes adapt to your needs.",
    features: [
      {
        title: "Personalized Sessions",
        description:
          "One-on-one or small group classes designed around your flexibility, strength, and health conditions.",
      },
      {
        title: "Therapeutic Yoga",
        description:
          "Gentle practices for seniors, prenatal yoga, and yoga for chronic pain or mobility issues.",
      },
      {
        title: "Stress & Wellness",
        description:
          "Breathing techniques, meditation, and relaxation practices for mental well-being.",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Morning, evening, or weekend sessions that fit your daily routine.",
      },
    ],
    benefits: [
      "Learn at your own pace without gym or studio pressure",
      "Instructor adapts poses for your body and any limitations",
      "Convenient sessions without commute time",
      "Supports overall physical and mental wellness",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book a Session",
        description:
          "Share your experience level, health goals, and preferred schedule.",
      },
      {
        step: 2,
        title: "Instructor Matching",
        description:
          "We assign a certified yoga instructor suited to your practice style and needs.",
      },
      {
        step: 3,
        title: "Home Practice",
        description:
          "The instructor conducts sessions at your home with guidance on mats and basic props.",
      },
      {
        step: 4,
        title: "Progress & Adaptation",
        description:
          "Sessions evolve as you progress, with new poses and techniques introduced gradually.",
      },
    ],
    faqs: [
      {
        question: "Do I need my own yoga mat and equipment?",
        answer:
          "A yoga mat is recommended. Basic props like blocks and straps can be suggested by your instructor or provided upon request.",
      },
      {
        question: "Is yoga suitable for seniors or beginners?",
        answer:
          "Absolutely. Our instructors offer gentle, modified practices suitable for all ages and experience levels, including those with limited mobility.",
      },
      {
        question: "Can yoga help with specific health conditions?",
        answer:
          "Therapeutic yoga can support conditions like back pain, arthritis, and stress. Always inform your instructor about medical conditions so sessions can be safely adapted.",
      },
    ],
    seoTitle: "Home Yoga Classes | CuroAid",
    seoDescription:
      "Book certified yoga instructors for personalized home sessions. Wellness, therapeutic yoga, and stress relief with CuroAid.",
  },
  {
    slug: "wound-care",
    title: "Wound Care",
    shortDescription:
      "Professional wound assessment, dressing, and healing support at home.",
    icon: "wound",
    heroTitle: "Expert Wound Care At Home",
    heroSubtitle:
      "Skilled healthcare professionals provide wound assessment, dressing changes, and healing monitoring in the comfort of your home.",
    description:
      "CuroAid's wound care service provides professional assessment, cleaning, dressing, and monitoring of surgical wounds, pressure ulcers, diabetic wounds, and other injuries. Our trained staff follow sterile protocols to promote healing and prevent infection.",
    features: [
      {
        title: "Wound Assessment",
        description:
          "Thorough evaluation of wound type, size, depth, and healing progress at each visit.",
      },
      {
        title: "Dressing & Cleaning",
        description:
          "Sterile wound cleaning, appropriate dressing application, and bandage changes.",
      },
      {
        title: "Infection Monitoring",
        description:
          "Regular checks for signs of infection with coordination to doctors when needed.",
      },
      {
        title: "Diabetic Wound Care",
        description:
          "Specialized care for foot ulcers and slow-healing wounds common in diabetic patients.",
      },
    ],
    benefits: [
      "Reduced infection risk with professional sterile technique",
      "Consistent monitoring accelerates healing",
      "Avoid frequent trips to clinics or hospitals",
      "Family receives guidance on wound care between visits",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Describe the Wound",
        description:
          "Share details about the wound type, location, and any doctor's instructions.",
      },
      {
        step: 2,
        title: "Care Professional Assignment",
        description:
          "A trained nurse or wound care specialist is assigned based on wound complexity.",
      },
      {
        step: 3,
        title: "Home Visits",
        description:
          "Regular scheduled visits for dressing changes and wound assessment.",
      },
      {
        step: 4,
        title: "Healing Progress",
        description:
          "Documentation of healing progress with doctor coordination if complications arise.",
      },
    ],
    faqs: [
      {
        question: "What types of wounds can be treated at home?",
        answer:
          "We handle surgical incisions, pressure sores, diabetic foot ulcers, minor burns, and other non-emergency wounds. Severe or actively bleeding wounds require emergency hospital care.",
      },
      {
        question: "How often are dressing changes needed?",
        answer:
          "Frequency depends on wound type and doctor recommendations, typically ranging from daily to every few days.",
      },
      {
        question: "Do you provide wound care supplies?",
        answer:
          "Basic dressing materials can be arranged. Specific supplies may be recommended based on your doctor's prescription.",
      },
    ],
    seoTitle: "Home Wound Care Services | CuroAid",
    seoDescription:
      "Professional wound care at home including dressing changes, infection monitoring, and diabetic wound management with CuroAid.",
  },
  {
    slug: "veterinary-doctor",
    title: "Veterinary Doctor",
    shortDescription:
      "Licensed veterinarians for pet health check-ups and medical care at home.",
    icon: "vet",
    heroTitle: "Veterinary Care At Home",
    heroSubtitle:
      "Licensed veterinarians visit your home to provide health check-ups, treatment, and medical care for your pets in a stress-free environment.",
    description:
      "CuroAid connects pet owners with licensed veterinarians who provide home visits for routine check-ups, vaccinations, illness treatment, and post-surgery follow-ups. Home veterinary care reduces stress for anxious pets and is convenient for multi-pet households.",
    features: [
      {
        title: "Health Check-Ups",
        description:
          "Comprehensive physical examinations including weight, temperature, and general health assessment.",
      },
      {
        title: "Vaccinations",
        description:
          "Administration of routine and required vaccinations for dogs, cats, and other pets.",
      },
      {
        title: "Illness Treatment",
        description:
          "Diagnosis and treatment of common pet illnesses including infections, digestive issues, and skin conditions.",
      },
      {
        title: "Post-Surgery Follow-Up",
        description:
          "Wound checks, suture removal, and recovery monitoring after veterinary procedures.",
      },
    ],
    benefits: [
      "Less stress for pets who fear clinic visits",
      "Convenient for elderly pet owners or multi-pet families",
      "Vet observes pets in their natural home environment",
      "Reduced exposure to other sick animals at clinics",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Book a Visit",
        description:
          "Describe your pet's species, age, symptoms or reason for visit, and location.",
      },
      {
        step: 2,
        title: "Vet Assignment",
        description:
          "We assign a licensed veterinarian experienced with your type of pet.",
      },
      {
        step: 3,
        title: "Home Examination",
        description:
          "The vet examines your pet at home and provides diagnosis and treatment.",
      },
      {
        step: 4,
        title: "Care Instructions",
        description:
          "Receive medication prescriptions, dietary advice, and follow-up scheduling if needed.",
      },
    ],
    faqs: [
      {
        question: "Which pets do you provide care for?",
        answer:
          "We primarily serve dogs and cats, with some veterinarians available for birds, rabbits, and other small pets depending on location.",
      },
      {
        question: "Can the vet perform emergency procedures at home?",
        answer:
          "Home visits are suited for non-emergency care. Critical emergencies should go to an emergency veterinary clinic immediately.",
      },
      {
        question: "Are vaccinations available during home visits?",
        answer:
          "Yes, routine vaccinations can be administered during home visits. Bring any previous vaccination records for reference.",
      },
    ],
    seoTitle: "Home Veterinary Doctor Services | CuroAid",
    seoDescription:
      "Book licensed veterinarians for home pet visits. Health check-ups, vaccinations, and illness treatment with CuroAid veterinary services.",
  },
  {
    slug: "blood-test",
    title: "Blood Test",
    shortDescription:
      "Convenient home sample collection for laboratory blood tests and health screenings.",
    icon: "blood",
    heroTitle: "Blood Tests At Home",
    heroSubtitle:
      "Certified phlebotomists collect blood samples at your home for lab testing — no clinic visit required.",
    description:
      "CuroAid's blood test service sends certified phlebotomists to your home for safe, hygienic blood sample collection. Results are processed through partner laboratories with reports delivered digitally. Ideal for routine health screenings, chronic disease monitoring, and doctor-prescribed tests.",
    features: [
      {
        title: "Home Sample Collection",
        description:
          "Trained phlebotomists visit your home for painless, hygienic blood sample collection.",
      },
      {
        title: "Wide Test Panel",
        description:
          "Routine health panels, diabetes monitoring, thyroid tests, lipid profiles, and custom doctor-prescribed tests.",
      },
      {
        title: "Digital Reports",
        description:
          "Lab reports delivered electronically for easy sharing with your doctor.",
      },
      {
        title: "Flexible Timing",
        description:
          "Early morning fasting sample collection available at your preferred time slot.",
      },
    ],
    benefits: [
      "No waiting at diagnostic centers",
      "Safe collection for elderly and immobile patients",
      "Fasting samples collected early at home convenience",
      "Reduced exposure in crowded lab waiting areas",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Select Tests",
        description:
          "Choose from available test panels or share your doctor's prescription.",
      },
      {
        step: 2,
        title: "Schedule Collection",
        description:
          "Pick a convenient date and time, especially early morning for fasting tests.",
      },
      {
        step: 3,
        title: "Home Collection",
        description:
          "A certified phlebotomist arrives, collects samples, and transports them to the lab.",
      },
      {
        step: 4,
        title: "Receive Reports",
        description:
          "Digital lab reports are shared within the standard turnaround time for your tests.",
      },
    ],
    faqs: [
      {
        question: "Do I need to fast before a blood test?",
        answer:
          "Fasting requirements depend on the specific tests ordered. Tests like lipid profiles and glucose typically require 8–12 hours of fasting. We will inform you of any preparation needed when you book.",
      },
      {
        question: "How long do results take?",
        answer:
          "Most routine tests are reported within 24–48 hours. Specialized tests may take longer depending on the laboratory.",
      },
      {
        question: "Is home collection as accurate as lab collection?",
        answer:
          "Yes, samples are collected using the same sterile techniques and transported to accredited partner laboratories following proper protocols.",
      },
    ],
    seoTitle: "Home Blood Test Collection | CuroAid",
    seoDescription:
      "Book home blood test sample collection with CuroAid. Certified phlebotomists, wide test panels, and digital lab reports delivered to you.",
  },
  {
    slug: "other-services",
    title: "Other Services",
    shortDescription:
      "Additional home healthcare services tailored to your unique needs.",
    icon: "other",
    heroTitle: "Additional Healthcare Services",
    heroSubtitle:
      "Beyond our core offerings, CuroAid provides a range of supplementary home healthcare services customized to your requirements.",
    description:
      "CuroAid understands that healthcare needs vary widely. Our other services category covers additional home healthcare support including medical equipment guidance, health attendant services, diet consultation coordination, and custom care packages. Contact us to discuss your specific requirements.",
    features: [
      {
        title: "Health Attendants",
        description:
          "Trained attendants for non-clinical patient support including companionship and daily assistance.",
      },
      {
        title: "Medical Equipment Guidance",
        description:
          "Assistance with selecting, renting, or purchasing home medical equipment like oxygen concentrators and hospital beds.",
      },
      {
        title: "Care Package Coordination",
        description:
          "Customized packages combining nursing, doctor visits, physiotherapy, and lab tests.",
      },
      {
        title: "Specialized Care Requests",
        description:
          "Coordination for unique healthcare needs not covered by standard service categories.",
      },
    ],
    benefits: [
      "Single point of contact for diverse healthcare needs",
      "Flexible service combinations tailored to your situation",
      "Coordination across multiple care providers",
      "Scalable services as needs change over time",
    ],
    howItWorks: [
      {
        step: 1,
        title: "Tell Us Your Needs",
        description:
          "Describe the healthcare support you require via phone, email, or contact form.",
      },
      {
        step: 2,
        title: "Custom Plan",
        description:
          "Our team creates a tailored service plan with pricing and scheduling details.",
      },
      {
        step: 3,
        title: "Service Delivery",
        description:
          "Assigned professionals begin providing the agreed-upon services at your home.",
      },
      {
        step: 4,
        title: "Ongoing Support",
        description:
          "Regular reviews and adjustments to ensure the care plan meets evolving needs.",
      },
    ],
    faqs: [
      {
        question: "What services fall under 'Other Services'?",
        answer:
          "This includes health attendants, medical equipment assistance, multi-service care packages, and any specialized home healthcare request not listed in our main categories.",
      },
      {
        question: "Can I combine multiple services?",
        answer:
          "Yes, we frequently create combined care plans. For example, nursing care with periodic doctor visits and physiotherapy sessions.",
      },
      {
        question: "How do I get a quote for custom services?",
        answer:
          "Contact us with your requirements and we will provide a detailed quote based on services, duration, and location.",
      },
    ],
    seoTitle: "Other Home Healthcare Services | CuroAid",
    seoDescription:
      "Explore additional home healthcare services with CuroAid. Health attendants, care packages, medical equipment guidance, and custom care plans.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
