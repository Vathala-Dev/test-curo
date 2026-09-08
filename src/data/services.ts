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

export interface ServiceBenefitDetail {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  image?: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  features: ServiceFeature[];
  benefits: string[];
  benefitDetails?: ServiceBenefitDetail[];
  howItWorks: HowItWorksStep[];
  faqs: FAQ[];
  seoTitle: string;
  seoDescription: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export const services: ServiceData[] = [
  {
    slug: "home-doctor",
    title: "Home Doctor",
    shortDescription:
      "Expert medical care at home for consultations, follow-ups, and everyday health needs.",
    icon: "doctor",
    image:
      "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788846761827/docto.jpg",
    heroTitle: "Doctor at Home",
    heroSubtitle:
      "Get professional doctor consultations and medical care without the hassle of visiting a hospital.",
    description:
      "At CuroAid Home Healthcare, we believe quality healthcare should be accessible, convenient, and centred around the patient. Our Home Doctor Service brings professional medical expertise to your doorstep, with personalised care tailored to your individual health needs.",
    features: [
      {
        title: "General Physician Consultation",
        description:
          "Get medical consultation at home for common illnesses, symptoms, and everyday health concerns.",
      },
      {
        title: "Elderly Care at Home",
        description:
          "Personalised medical support for senior citizens who may find travelling to a clinic difficult.",
      },
      {
        title: "Chronic Disease Management",
        description:
          "Regular monitoring and medical guidance for conditions such as diabetes, hypertension, and other long-term health concerns.",
      },
      {
        title: "Post-Hospitalization Care",
        description:
          "Receive medical follow-up and support at home during your recovery after hospital discharge.",
      },
      {
        title: "Follow-Up Doctor Visits",
        description:
          "Continue your treatment and monitor your recovery with convenient follow-up consultations at home.",
      },
      {
        title: "Preventive Health Check-ups",
        description:
          "Stay proactive about your health with routine medical assessments and personalised health guidance.",
      },
      {
        title: "Medication Review & Guidance",
        description:
          "Get professional guidance regarding your ongoing medications and treatment plan.",
      },
      {
        title: "Family Healthcare Support",
        description:
          "Convenient medical care for individuals and families, delivered in the comfort of home.",
      },
    ],
    benefits: [
      "Healthcare That Comes to You",
      "Medical Care Designed Around You",
      "Comfortable Care at Home",
      "Personalised Attention",
      "Convenient & Hassle-Free",
      "Care for Every Stage",
      "Trusted Healthcare Support",
    ],
    benefitDetails: [
      {
        title: "Medical Care Designed Around You",
        description:
          "Your healthcare should be convenient, comfortable, and personal. CuroAid Home Healthcare brings professional medical care to your doorstep, allowing you and your loved ones to receive attention without the inconvenience of travelling to a hospital or clinic.",
      },
      {
        title: "Comfortable Care at Home",
        description:
          "Receive medical attention in the familiar surroundings of your own home.",
      },
      {
        title: "Personalised Attention",
        description:
          "Every visit is focused on understanding your individual health concerns and needs.",
      },
      {
        title: "Convenient & Hassle-Free",
        description:
          "Skip unnecessary travel, waiting rooms, and the stress of arranging a clinic visit.",
      },
      {
        title: "Care for Every Stage",
        description:
          "From everyday health concerns to elderly care and follow-up support, get appropriate medical guidance at home.",
      },
      {
        title: "Trusted Healthcare Support",
        description:
          "CuroAid is committed to making quality healthcare more accessible while keeping patient comfort at the centre of every visit.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Login / Sign Up",
        description:
          "Log in to your CuroAid account or create a new account to get started.",
      },
      {
        step: 2,
        title: "Choose Your Service",
        description:
          "Select Doctor at Home and provide the required details about your healthcare needs.",
      },
      {
        step: 3,
        title: "Select Date & Time",
        description:
          "Choose your preferred date and convenient time slot for the home visit.",
      },
      {
        step: 4,
        title: "Confirm Your Booking",
        description:
          "Review your appointment details and confirm your home doctor booking.",
      },
    ],
    faqs: [
      {
        question: "What is included in a home doctor consultation?",
        answer:
          "A home doctor consultation generally includes a medical assessment, review of symptoms, basic examination, prescription guidance, and follow-up recommendations. If your condition requires additional tests or a hospital referral, the doctor will advise you appropriately.",
      },
      {
        question: "Can I book a home doctor for elderly family members?",
        answer:
          "Yes. Our home doctor service is especially helpful for elderly patients, post-surgery recovery, and individuals who find travel difficult. A doctor can assess, advise, and coordinate care at home.",
      },
      {
        question: "Is a home doctor visit suitable for chronic disease care?",
        answer:
          "Yes. Follow-up consultations and medical monitoring for chronic conditions can be handled more conveniently at home, with ongoing guidance for treatment and recovery.",
      },
    ],
    seoTitle: "Doctor at Home | CuroAid",
    seoDescription:
      "Expert doctor consultations at home for general care, chronic disease support, elderly care, and follow-up treatment with CuroAid.",
    primaryCtaLabel: "App Download",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Book Now",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "nursing-services",
    title: "Nursing Services",
    shortDescription:
      "Compassionate nursing support at home for recovery, chronic care, and daily health needs.",
    icon: "nursing",
    image:
      "https://vathala-bucket.s3.ap-south-1.amazonaws.com/1788847085556/nurse.jpg",
    heroTitle: "Home Nursing Services",
    heroSubtitle:
      "Professional Nursing Care, Right at Your Doorstep\n\nGet compassionate and professional nursing support at home, tailored to your health needs and delivered in the comfort of your own surroundings.",
    description:
      "At CuroAid Home Healthcare, we believe quality healthcare should extend beyond hospitals and clinics. Our Home Nursing Service provides professional nursing support at your doorstep, helping patients receive the care, comfort, and attention they need at home.\n\nWhether you need short-term nursing assistance, post-hospitalisation support, elderly care, or ongoing healthcare supervision, our services are designed around your individual needs.",
    features: [
      {
        title: "Elderly Nursing Care",
        description:
          "Compassionate nursing support for senior citizens who require assistance with their healthcare and daily needs at home.",
      },
      {
        title: "Post-Hospitalization Nursing Care",
        description:
          "Receive professional nursing assistance after hospital discharge to support a safe and comfortable recovery at home.",
      },
      {
        title: "Chronic Disease Care",
        description:
          "Ongoing nursing support for patients managing long-term conditions such as diabetes, hypertension, and other chronic health concerns.",
      },
      {
        title: "Post-Surgical Care",
        description:
          "Get dedicated nursing assistance during the recovery period following surgery, including routine monitoring and care support.",
      },
      {
        title: "Medication Assistance",
        description:
          "Professional support with medication schedules and administration as prescribed by your doctor.",
      },
      {
        title: "Wound & Dressing Care",
        description:
          "Receive appropriate nursing support for wound care, dressing changes, and recovery-related healthcare needs at home.",
      },
      {
        title: "Vital Signs Monitoring",
        description:
          "Regular monitoring of essential health parameters such as blood pressure, temperature, pulse, and oxygen levels as required.",
      },
      {
        title: "Personal Care Assistance",
        description:
          "Support with everyday personal care needs for individuals who require additional assistance during recovery or due to limited mobility.",
      },
      {
        title: "Bedridden Patient Care",
        description:
          "Compassionate nursing support for patients who are bedridden and require regular attention and assistance at home.",
      },
      {
        title: "Family Healthcare Support",
        description:
          "Reliable nursing assistance that helps families manage the healthcare needs of their loved ones with greater comfort and confidence.",
      },
    ],
    benefits: [
      "Professional Nursing Support",
      "Personalised Care",
      "Comfortable Home Environment",
      "Support for Recovery",
      "Care for Elderly & Dependent Patients",
      "Convenient & Reliable",
    ],
    benefitDetails: [
      {
        title: "Professional Nursing Support",
        description:
          "Receive nursing assistance designed to support your healthcare and recovery needs at home.",
      },
      {
        title: "Personalised Care",
        description:
          "Our care approach focuses on the individual needs, condition, comfort, and routine of each patient.",
      },
      {
        title: "Comfortable Home Environment",
        description:
          "Receive care in familiar surroundings without the need for frequent travel to hospitals or clinics.",
      },
      {
        title: "Support for Recovery",
        description:
          "From post-surgical recovery to post-hospitalisation care, get the nursing support you need during your recovery journey.",
      },
      {
        title: "Care for Elderly & Dependent Patients",
        description:
          "Dedicated support for senior citizens, bedridden patients, and individuals who need assistance with everyday healthcare needs.",
      },
      {
        title: "Convenient & Reliable",
        description:
          "Access professional nursing support at home while reducing the stress and inconvenience associated with repeated hospital visits.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Login / Sign Up",
        description:
          "Log in to your CuroAid account or create a new account to get started.",
      },
      {
        step: 2,
        title: "Choose Your Service",
        description:
          "Select Home Nursing Services and provide the required details about the patient's healthcare needs.",
      },
      {
        step: 3,
        title: "Select Date & Time",
        description:
          "Choose your preferred date and convenient time slot for the nursing service.",
      },
      {
        step: 4,
        title: "Confirm Your Booking",
        description:
          "Review the service details and confirm your home nursing booking.",
      },
    ],
    faqs: [
      {
        question: "What kinds of nursing care are available at home?",
        answer:
          "We provide elder care nursing, post-hospitalisation nursing, chronic disease management, wound and dressing care, vital signs monitoring, and personal care assistance for patients needing ongoing support at home.",
      },
      {
        question: "Can nursing care be arranged for bedridden patients?",
        answer:
          "Yes. We provide compassionate nursing care for bedridden patients, including regular monitoring, personal assistance, and overall support to improve comfort and recovery.",
      },
      {
        question: "Do you support families with long-term home nursing needs?",
        answer:
          "Yes. CuroAid offers nursing support tailored for both short-term recovery and ongoing care, helping families manage healthcare needs more comfortably and confidently at home.",
      },
    ],
    seoTitle: "Home Nursing Services | CuroAid",
    seoDescription:
      "Professional nursing care at home for elderly support, post-hospitalisation recovery, chronic disease care, medication assistance, and family healthcare support.",
    primaryCtaLabel: "App Download",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Book Now",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    shortDescription:
      "Professional physiotherapy at home for pain relief, mobility, and recovery support.",
    icon: "physio",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    heroTitle: "Physiotherapy at Home",
    heroSubtitle:
      "Professional Physiotherapy, Right at Your Doorstep\n\nGet personalised physiotherapy care at home with professional support designed to improve mobility, manage pain, build strength, and support a comfortable recovery in familiar surroundings.",
    description:
      "At CuroAid Home Healthcare, we make physiotherapy more convenient by bringing professional rehabilitation support directly to your home. Our Physiotherapy at Home Service is designed to help individuals recover, improve movement, manage pain, and regain independence without the need for frequent visits to a clinic.\n\nWhether you are recovering from an injury, surgery, illness, or dealing with mobility difficulties, our physiotherapy services are tailored to your individual condition, goals, and recovery needs.",
    features: [
      {
        title: "Post-Surgical Physiotherapy",
        description:
          "Professional physiotherapy support following surgery to help improve mobility, strength, flexibility, and overall recovery.",
      },
      {
        title: "Injury Rehabilitation",
        description:
          "Personalised rehabilitation support for individuals recovering from sports injuries, falls, strains, sprains, and other physical injuries.",
      },
      {
        title: "Pain Management",
        description:
          "Physiotherapy-based support to help manage common muscle, joint, and movement-related pain and improve physical comfort.",
      },
      {
        title: "Orthopaedic Physiotherapy",
        description:
          "Dedicated physiotherapy support for conditions affecting the bones, joints, muscles, and overall musculoskeletal system.",
      },
      {
        title: "Neurological Physiotherapy",
        description:
          "Personalised rehabilitation support for individuals experiencing movement, balance, coordination, or mobility challenges related to neurological conditions.",
      },
      {
        title: "Elderly Physiotherapy",
        description:
          "Gentle and personalised physiotherapy support for senior citizens to improve mobility, strength, balance, and independence.",
      },
      {
        title: "Mobility & Balance Training",
        description:
          "Exercises and movement-based therapy designed to improve balance, coordination, walking ability, and confidence in daily activities.",
      },
      {
        title: "Strength & Flexibility Training",
        description:
          "Guided exercises to help improve muscle strength, flexibility, physical function, and overall movement.",
      },
      {
        title: "Stroke Rehabilitation",
        description:
          "Home-based physiotherapy support to help individuals work towards improving movement, balance, strength, and functional independence after a stroke.",
      },
      {
        title: "Home-Based Recovery Support",
        description:
          "Convenient physiotherapy sessions at home to support your recovery journey while reducing the need for frequent travel to clinics or hospitals.",
      },
    ],
    benefits: [
      "Professional rehabilitation support at home",
      "Improved mobility and strength",
      "Better pain management",
      "Comfortable recovery in your own space",
      "Personalised treatment based on your condition and goals",
      "Convenient support for recovery and independence",
    ],
    benefitDetails: [
      {
        title: "Professional Physiotherapy Support",
        description:
          "Receive physiotherapy assistance focused on your condition, mobility, recovery, and rehabilitation needs.",
      },
      {
        title: "Personalised Treatment Approach",
        description:
          "Our physiotherapy care is tailored to your individual condition, physical abilities, recovery goals, and daily routine.",
      },
      {
        title: "Comfortable Home Environment",
        description:
          "Receive physiotherapy in the comfort of your own home without the inconvenience of travelling to a clinic for every session.",
      },
      {
        title: "Support for Recovery & Rehabilitation",
        description:
          "From post-surgical recovery to injury rehabilitation, get the support you need throughout your recovery journey.",
      },
      {
        title: "Care for Seniors & Mobility Needs",
        description:
          "Access convenient physiotherapy support for elderly individuals and those experiencing mobility, balance, or movement difficulties.",
      },
      {
        title: "Convenient & Reliable",
        description:
          "Schedule physiotherapy sessions at home based on your needs, helping make regular rehabilitation easier and more convenient.",
      },
    ],
    howItWorks: [
      {
        step: 1,
        title: "Login / Sign Up",
        description:
          "Log in to your CuroAid account or create a new account to get started.",
      },
      {
        step: 2,
        title: "Choose Your Service",
        description:
          "Select Physiotherapy at Home and provide the required details about the patient's condition and physiotherapy needs.",
      },
      {
        step: 3,
        title: "Select Date & Time",
        description:
          "Choose your preferred date and convenient time slot for the physiotherapy session.",
      },
      {
        step: 4,
        title: "Confirm Your Booking",
        description:
          "Review the service details and confirm your physiotherapy booking.",
      },
    ],
    faqs: [
      {
        question: "Is physiotherapy at home effective?",
        answer:
          "Yes. Home-based physiotherapy is often highly effective because it allows treatment to be tailored to your environment, daily routine, and rehabilitation goals while reducing travel stress.",
      },
      {
        question: "Can physiotherapy help with recovery after surgery or injury?",
        answer:
          "Yes. It is commonly used for post-surgical rehabilitation, injury recovery, mobility issues, and movement-related pain. A therapist will design a rehabilitation plan based on your condition.",
      },
      {
        question: "Do I need to have equipment at home for the session?",
        answer:
          "Not necessarily. Most sessions use bodyweight exercises, simple mobility work, and therapist-provided tools where needed. The treatment is designed to fit your home setting.",
      },
    ],
    seoTitle: "Physiotherapy at Home | CuroAid",
    seoDescription:
      "Book personalized physiotherapy at home for mobility, pain management, rehabilitation, and recovery support with CuroAid.",
    primaryCtaLabel: "App Download",
    primaryCtaHref: "/contact",
    secondaryCtaLabel: "Book Now",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "elder-care",
    title: "Elder Care",
    shortDescription:
      "Dedicated caregivers and healthcare support for seniors living at home.",
    icon: "elder",
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcbf3c3c4?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
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
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80",
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
