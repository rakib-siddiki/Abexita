// imports
import { TNavList } from "../shared/TheHeader/TheHeader";

// exports
export * from "./industries";

// constants
export const APP_ONE_NAV_LIST: TNavList[] = [
  {
    id: "#feature",
    label: "Features",
  },
  {
    id: "pricing",
    path: "http://localhost:5174/",
    label: "Pricing",
  },
  {
    id: "#solutions",
    label: "Solutions",
  },
  {
    id: "#resources",
    label: "Resources",
  },
  {
    id: "#find-professionals",
    label: "Find Professionals",
    hasDropDown: false,
  },
  {
    id: "#help",
    label: "Help",
  },
];

export const BRANDS = [
  {
    id: "1",
    img: "/brands/aqua.png",
    alt: "aqua",
  },
  {
    id: "2",
    img: "/brands/logo-cfr.png",
    alt: "logo-cfr",
  },
  {
    id: "3",
    img: "/brands/mucha-marketing.png",
    alt: "mucha-marketing",
  },
  {
    id: "4",
    img: "/brands/skin-precision.png",
    alt: "skin-precision",
  },
  {
    id: "5",
    img: "/brands/rh-logo.png",
    alt: "rh-logo",
  },
  {
    id: "6",
    img: "/brands/spa-tru-clinics.png",
    alt: "spa-tru-clinics",
  },
];

export const APPOINTMENT_TAGS = [
  "Doctor",
  "Lawyer",
  "Therapist",
  "Barber",
  "Spa",
  "Med Spa",
  "Psychiatrist",
  "Consultancy firm",
];
export const APPOINTMENT_TOOLS = [
  "Jane",
  "Calendly",
  "Cal.com",
  "Acuity",
  "Square appointment",
  "Simplybook.me",
  "Zenoti",
  "Appointy",
  "Set More",
  "Honey Book",
];
