export const Icons = {
  ArrowDown: (props: React.SVGProps<SVGSVGElement>) => (
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
  Search: (props: React.SVGProps<SVGSVGElement>) => (
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
