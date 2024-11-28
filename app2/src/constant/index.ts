import { IFaqItem } from "../components/FAQ/FaqItem";
import { IPricingCard } from "../components/Pricing/PricingCard";
import { Icons } from "../Icons";

export const APP_TWO_NAV_LIST = [
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
export const PRICING_CARD_DATA: IPricingCard[] = [
  {
    Icon: Icons.Thunder,
    price: {
      monthly: "10%",
      yearly: "30%",
    },
    headingText: "Pay As You Go",
    description: "10% from your customer payment",
    items: [
      "Only pre-paid booking",
      "Both practitioner and Organization",
      "Up to 5 practitioners in organization",
      "2 staff members are allowed",
      "Basic chat and email support",
    ],
  },
  {
    Icon: Icons.Stack,
    price: {
      monthly: "$49",
      yearly: "$59",
    },
    headingText: "Practitioner",
    description: "1 practitioner license/monthly",
    items: [
      "All booking options",
      "All schedule Feature",
      "Individual single practitioner license",
      "3 staff members are allowed",
      "Unlimited email marketing",
    ],
  },
  {
    Icon: Icons.Stack,
    price: {
      monthly: "$39",
      yearly: "$99",
    },
    headingText: "Enterprise",
    description: "Practitioner Number",
    items: [
      "All booking options",
      "Both practitioner and Organization",
      "Unlimited practitioners and staff",
      "Customizable 6 page website",
      "E-commerce functionality",
    ],
    buttonText: "Contact Sales",
  },
];

export const FAQ_ITEM_LIST: (IFaqItem & { id: number })[] = [
  {
    id: 1,
    Icon: Icons.Love,
    title: "Is there a free trial available?",
    description:
      "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
  },
  {
    id: 2,
    Icon: Icons.Retry,
    title: "Can I change my plan later?",
    description:
      "Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan.",
  },
  {
    id: 3,
    Icon: Icons.Mobile,
    title:
      "May I need to pay full amount while I update plan in the middle of the month?",
    description:
      "No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.",
  },
  {
    id: 4,
    Icon: Icons.AutoRenew,
    title: "Can I disable the auto renew?",
    description:
      "You can disable and enable auto renew anytime also you can choose auto renew from different options.",
  },
  {
    id: 5,
    Icon: Icons.Cancel,
    title: "What is your cancellation policy?",
    description:
      "We understand that things change. You can cancel your plan at any time in your trial period and we’ll refund you the difference already paid.",
  },
  {
    id: 6,
    Icon: Icons.Infinity,
    title: "Can I run my business Pay As You Go for lifetime",
    description:
      "Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan.",
  },
];
