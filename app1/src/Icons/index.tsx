import { SVGProps } from "react";

export type TIconProps = SVGProps<SVGSVGElement>;
export const Icons = {
  ArrowDown: (props: TIconProps) => (
    <svg
      {...props}
      width="9"
      height="6"
      viewBox="0 0 9 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16553 1.49268L4.49747 4.82462L7.82941 1.49268"
        stroke="#595959"
        strokeWidth="1.66597"
        strokeLinecap="round"
      />
    </svg>
  ),
  PointToTrail: (props: TIconProps) => (
    <svg
      {...props}
      width="49"
      height="72"
      viewBox="0 0 49 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.99858 29L1.00526 28.8846L1.99858 29ZM44.7086 65.2073C45.0991 64.8168 45.0991 64.1836 44.7086 63.7931L38.3447 57.4291C37.9541 57.0386 37.321 57.0386 36.9304 57.4291C36.5399 57.8196 36.5399 58.4528 36.9304 58.8433L42.5873 64.5002L36.9304 70.157C36.5399 70.5476 36.5399 71.1807 36.9304 71.5713C37.321 71.9618 37.9541 71.9618 38.3447 71.5713L44.7086 65.2073ZM48.0425 1.00065C36.214 0.49729 25.1404 1.87194 16.6709 6.17058C8.14003 10.5004 2.29529 17.7811 1.00526 28.8846L2.9919 29.1154C4.19981 18.7187 9.60578 11.9993 17.5761 7.95402C25.6078 3.87757 36.286 2.50216 47.9575 2.99884L48.0425 1.00065ZM1.00526 28.8846C-0.274493 39.8996 2.8004 49.1227 10.1535 55.5647C17.4669 61.9719 28.8676 65.5002 44.0015 65.5002V63.5002C29.1331 63.5002 18.2834 60.0283 11.4714 54.0603C4.69918 48.1272 1.77376 39.6001 2.9919 29.1154L1.00526 28.8846Z"
        fill="#1F242F"
      />
    </svg>
  ),
  Success: (props: TIconProps) => (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8346 6.99984C12.8346 3.77817 10.2229 1.1665 7.0013 1.1665C3.77964 1.1665 1.16797 3.77817 1.16797 6.99984C1.16797 10.2215 3.77964 12.8332 7.0013 12.8332C10.2229 12.8332 12.8346 10.2215 12.8346 6.99984Z"
        stroke="#079455"
      />
      <path
        d="M4.66797 7.29142L6.1263 8.74976L9.33463 5.24976"
        stroke="#079455"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  LinkSquare: (props: TIconProps) => (
    <svg
      {...props}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.32393 2.25159C5.58725 2.25651 4.15418 2.32369 3.23834 3.23951C2.25 4.22782 2.25 5.8185 2.25 8.9998C2.25 12.1812 2.25 13.7718 3.23834 14.7601C4.22668 15.7485 5.8174 15.7485 8.99885 15.7485C12.1802 15.7485 13.771 15.7485 14.7593 14.7601C15.6751 13.8444 15.7423 12.4113 15.7473 9.67473"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3612 2.63816L11.1992 6.78866M15.3612 2.63816C14.9907 2.26728 12.495 2.30186 11.9674 2.30936M15.3612 2.63816C15.7316 3.00905 15.6971 5.5075 15.6896 6.03569"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Search: (props: TIconProps) => (
    <svg
      {...props}
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2007_399)">
        <path
          d="M15.8496 11.8501L18.9996 15.0001"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5998 7.2999C17.5998 3.82057 14.7793 1 11.2999 1C7.82057 1 5 3.82057 5 7.2999C5 10.7793 7.82057 13.5998 11.2999 13.5998C14.7793 13.5998 17.5998 10.7793 17.5998 7.2999Z"
          stroke="white"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_2007_399"
          x="0.5"
          y="0.5"
          width="22.9995"
          height="23"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2007_399"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2007_399"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  ),
  Consultant: (props: TIconProps) => (
    <svg
      {...props}
      width="26"
      height="22"
      viewBox="0 0 26 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.7976 6.20059H14.1976"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1 9.79999C1 5.8402 1 3.86029 2.23016 2.63015C3.4603 1.39999 5.4402 1.39999 9.4 1.39999H10.6C14.5598 1.39999 16.5396 1.39999 17.7699 2.63015C19 3.86029 19 5.8402 19 9.79999V12.2C19 16.1598 19 18.1396 17.7699 19.3699C16.5396 20.6 14.5598 20.6 10.6 20.6H9.4C5.4402 20.6 3.4603 20.6 2.23016 19.3699C1 18.1396 1 16.1598 1 12.2V9.79999Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M19 7.28702L19.1511 7.16235C21.69 5.06747 22.9595 4.02003 23.9798 4.52578C25 5.03153 25 6.70826 25 10.0617V11.9383C25 15.2918 25 16.9684 23.9798 17.4742C22.9595 17.9799 21.69 16.9326 19.1511 14.8376L19 14.7129"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Calendar: (props: TIconProps) => (
    <svg
      {...props}
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.6024 1V3.4M5.20239 1V3.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7946 14H11.8054M11.7946 18.8H11.8054M16.5892 14H16.6M7 14H7.01076M7 18.8H7.01076"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.20239 8.1994H22.6024"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 13.2913C1 8.06253 1 5.44814 2.50255 3.82377C4.00509 2.1994 6.42339 2.1994 11.26 2.1994H13.54C18.3766 2.1994 20.795 2.1994 22.2975 3.82377C23.8 5.44814 23.8 8.06253 23.8 13.2913V13.9076C23.8 19.1363 23.8 21.7507 22.2975 23.3751C20.795 24.9994 18.3766 24.9994 13.54 24.9994H11.26C6.42339 24.9994 4.00509 24.9994 2.50255 23.3751C1 21.7507 1 19.1363 1 13.9076V13.2913Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.60132 8.1994H23.2013"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Payment: (props: TIconProps) => (
    <svg
      {...props}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.61206 18.0369L18.0069 2.64215M20.9551 11.8665L18.3157 14.5059M16.0631 16.7316L14.8887 17.9061"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2.40961 17.9693C0.530131 16.0899 0.530131 13.0426 2.40961 11.1632L11.1632 2.40961C13.0426 0.530131 16.0899 0.530131 17.9693 2.40961L23.5904 8.03069C25.4699 9.91017 25.4699 12.9574 23.5904 14.8368L14.8368 23.5904C12.9574 25.4699 9.91017 25.4699 8.03069 23.5904L2.40961 17.9693Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M3.3988 25H22.5988"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Notification: (props: TIconProps) => (
    <svg
      {...props}
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.03591 15.8728C0.780726 17.4965 1.9216 18.6234 3.31846 19.185C8.67377 21.3383 16.1262 21.3383 21.4815 19.185C22.8784 18.6234 24.0192 17.4965 23.7641 15.8728C23.6073 14.875 22.8318 14.0441 22.2573 13.2328C21.5048 12.157 21.43 10.9836 21.4299 9.73529C21.4299 4.91092 17.3871 1 12.4 1C7.41296 1 3.37016 4.91092 3.37016 9.73529C3.37004 10.9836 3.29527 12.157 2.54273 13.2328C1.96821 14.0441 1.19273 14.875 1.03591 15.8728Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.79761 23.7998C9.75296 24.5461 11.0146 24.9998 12.3976 24.9998C13.7806 24.9998 15.0423 24.5461 15.9976 23.7998"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  WebsiteBuilder: (props: TIconProps) => (
    <svg
      {...props}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 13C1 7.34314 1 4.51472 2.75735 2.75735C4.51472 1 7.34314 1 13 1C18.6568 1 21.4852 1 23.2427 2.75735C25 4.51472 25 7.34314 25 13C25 18.6568 25 21.4852 23.2427 23.2427C21.4852 25 18.6568 25 13 25C7.34314 25 4.51472 25 2.75735 23.2427C1 21.4852 1 18.6568 1 13Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M1 9.21127H25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.2637 14.2636H19.3163"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2637 19.3159H16.79"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.68213 5.42051H6.69111"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7363 5.42051H11.7453"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.20923 9.21127V25.0007"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Report: (props: TIconProps) => (
    <svg
      {...props}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 25H10.3333C5.93356 25 3.73367 25 2.36684 23.6332C1 22.2663 1 20.0664 1 15.6667V1"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.33557 2.3339H7.6689"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.33557 6.33305H11.6689"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3.66785 23.6655C5.09575 21.0695 7.03157 14.3574 10.7429 14.3574C13.308 14.3574 13.9722 17.6278 16.486 17.6278C20.8108 17.6278 20.1838 10.3322 25.0012 10.3322"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Resources: (props: TIconProps) => (
    <svg
      {...props}
      width="24"
      height="26"
      viewBox="0 0 24 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.77158 2.37471L5.72579 3.32034C2.57526 4.77663 1 5.50476 1 6.7C1 7.89523 2.57526 8.62337 5.7258 10.0797L7.77158 11.0253C9.75424 11.9417 10.7457 12.4 11.8 12.4C12.8543 12.4 13.8458 11.9417 15.8284 11.0253L17.8742 10.0797C21.0248 8.62337 22.6 7.89523 22.6 6.7C22.6 5.50476 21.0248 4.77663 17.8742 3.32034L15.8284 2.37471C13.8458 1.45823 12.8543 1 11.8 1C10.7457 1 9.75424 1.45823 7.77158 2.37471Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3456 11.9165C22.5152 12.155 22.6 12.4036 22.6 12.677C22.6 13.8551 21.0248 14.573 17.8742 16.0085L15.8284 16.9407C13.8458 17.844 12.8543 18.2958 11.8 18.2958C10.7457 18.2958 9.75424 17.844 7.77158 16.9407L5.7258 16.0085C2.57526 14.573 1 13.8551 1 12.677C1 12.4036 1.0848 12.155 1.2544 11.9165"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.852 18.1196C22.3506 18.5168 22.6 18.9126 22.6 19.3814C22.6 20.5596 21.0248 21.2774 17.8742 22.7129L15.8284 23.6451C13.8458 24.5486 12.8543 25.0002 11.8 25.0002C10.7457 25.0002 9.75424 24.5486 7.77158 23.6451L5.7258 22.7129C2.57526 21.2774 1 20.5596 1 19.3814C1 18.9126 1.24934 18.5168 1.74801 18.1196"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Targeting: (props: TIconProps) => (
    <svg
      {...props}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.7574 1.6C15.5754 1.21066 14.3123 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25C19.6274 25 25 19.6274 25 13C25 11.7458 24.8075 10.5364 24.4506 9.4"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 13C19 16.3137 16.3137 19 13 19C9.6863 19 7 16.3137 7 13C7 9.6863 9.6863 7 13 7"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4L13 13M22 4V1M22 4H25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
};
