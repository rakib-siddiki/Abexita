import { SVGProps } from "react";

type TIconProps = SVGProps<SVGSVGElement>;
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
};
