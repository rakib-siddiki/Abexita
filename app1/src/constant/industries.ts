import { IIndustriesCard } from "../components/Industries/IndustriesCards";

export const INDUSTRIES_TAB_LIST = [
  { name: "Doctor ", id: 0 },
  { name: "Lawyer", id: 1 },
  { name: "Spa & Salon", id: 2 },
  { name: "Therapist", id: 3 },
  { name: "Fitness", id: 4 },
  { name: "Instructor", id: 5 },
  { name: "Consultancy", id: 6 },
];

export const INDUSTRIES_CARD_LIST: IIndustriesCard[] = [
  {
    id: 0,
    badge: "Doctor",
    title: "Business solution for healthcare providers",
    description:
      "Our software allows Doctors and Medical Professionals to book appointment, manage their patients, provide online prescriptions, overview of their med charts and automatically send reminders for treatments.",
    image: "/industries/doctor.png",
  },
  {
    id: 2,
    badge: "Lawyer",
    title: "Business solutions for Law Firms",
    description:
      "Ambel provides your Law Firm with document automation, case management, scheduling, booking, billing, custom invoice, installment and accounting features",
    image: "/industries/lawyer.png",
  },
  {
    id: 3,
    badge: "Spa & Salon",
    title: "Effortless Scheduling for Spas & Salons",
    description:
      "Enable clients to book services online 24/7, reducing phone time, front desk operation,  streamlining appointment scheduling for your staff and reminders to reduce no shows, keeping schedules organized.",
    image: "/industries/salone.png",
  },
  {
    id: 4,
    badge: "Therapist",
    title: "Simplify Your Therapy Practice with Intuitive Scheduling",
    description:
      "Spend less time on admin tasks with a user-friendly scheduler that handles bookings and cancellations. Stay organized and focus more on what matters most—your clients. ",
    image: "/industries/therapist.png",
  },
  {
    id: 5,
    badge: "Fitness",
    title: "Seamless Bookings for Trainers ",
    description:
      "Make client booking easy with 24/7 online scheduling for classes and personal training sessions and diet chart. Offer package, memberships and track client progress—all in one place.",
    image: "/industries/fitness.png",
  },
  {
    id: 6,
    badge: "Instructor",
    title: "Effortless Class Scheduling for Instructors",
    description:
      "Simplify your class management with scheduling tool designed for instructors. Allow clients to book sessions online, keep all class and client details organized in one place.",
    image: "/industries/instructor.png",
  },
  {
    id: 7,
    badge: "Consultancy",
    title: "Give advice anytime from anywhere",
    description:
      "Effortlessly manage client booking with a scheduling solution designed for consulting. Enable clients to book online. Keep track of all sessions and client notes to deliver personalized, professional service every time.",
    image: "/industries/consultant.png",
  },
];
