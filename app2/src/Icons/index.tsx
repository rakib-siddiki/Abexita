import { SVGProps } from "react";

export type TIconProps = SVGProps<SVGSVGElement>;
export const Icons = {
  Check: (props: TIconProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" rx="12" fill="#E2E2E2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0964 7.39016L9.93638 14.3002L8.03638 12.2702C7.68638 11.9402 7.13638 11.9202 6.73638 12.2002C6.34638 12.4902 6.23638 13.0002 6.47638 13.4102L8.72638 17.0702C8.94638 17.4102 9.32638 17.6202 9.75638 17.6202C10.1664 17.6202 10.5564 17.4102 10.7764 17.0702C11.1364 16.6002 18.0064 8.41016 18.0064 8.41016C18.9064 7.49016 17.8164 6.68016 17.0964 7.38016V7.39016Z"
        fill="#19525A"
      />
    </svg>
  ),
  Thunder: (props: TIconProps) => (
    <svg
      {...props}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="40" height="40" rx="20" fill="#E6E6E6" />
      <rect
        x="3"
        y="3"
        width="40"
        height="40"
        rx="20"
        stroke="#F5FFF8"
        strokeWidth="6"
      />
      <path
        d="M23.8333 14.6667L15.5 24.6667H23L22.1667 31.3334L30.5 21.3334H23L23.8333 14.6667Z"
        stroke="#19525A"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Stack: (props: TIconProps) => (
    <svg
      {...props}
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="3" width="40" height="40" rx="20" fill="#E6E6E6" />
      <rect
        x="3"
        y="3"
        width="40"
        height="40"
        rx="20"
        stroke="#F5FFF8"
        strokeWidth="6"
      />
      <path
        d="M14.6667 25.0833L23 29.25L31.3333 25.0833M23 16.75L14.6667 20.9167L23 25.0833L31.3333 20.9167L23 16.75Z"
        stroke="#19525A"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
