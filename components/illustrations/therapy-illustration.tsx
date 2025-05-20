export function TherapyIllustration({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <path
        d="M256 96C203.2 96 160 139.2 160 192V320C160 372.8 203.2 416 256 416C308.8 416 352 372.8 352 320V192C352 139.2 308.8 96 256 96Z"
        fill="url(#paint0_linear_therapy)"
        fillOpacity="0.1"
      />
      <path
        d="M256 128C220.8 128 192 156.8 192 192V320C192 355.2 220.8 384 256 384C291.2 384 320 355.2 320 320V192C320 156.8 291.2 128 256 128Z"
        fill="url(#paint1_linear_therapy)"
        fillOpacity="0.2"
      />

      <path
        d="M256 160C238.4 160 224 174.4 224 192V320C224 337.6 238.4 352 256 352C273.6 352 288 337.6 288 320V192C288 174.4 273.6 160 256 160Z"
        fill="url(#paint2_linear_therapy)"
        fillOpacity="0.3"
      />

      <path d="M128 256H160" stroke="url(#paint3_linear_therapy)" strokeWidth="8" strokeLinecap="round" />
      <path d="M352 256H384" stroke="url(#paint4_linear_therapy)" strokeWidth="8" strokeLinecap="round" />

      <path d="M176 176L200 200" stroke="url(#paint5_linear_therapy)" strokeWidth="8" strokeLinecap="round" />
      <path d="M312 312L336 336" stroke="url(#paint6_linear_therapy)" strokeWidth="8" strokeLinecap="round" />

      <path d="M176 336L200 312" stroke="url(#paint7_linear_therapy)" strokeWidth="8" strokeLinecap="round" />
      <path d="M312 200L336 176" stroke="url(#paint8_linear_therapy)" strokeWidth="8" strokeLinecap="round" />

      <defs>
        <linearGradient id="paint0_linear_therapy" x1="160" y1="256" x2="352" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint1_linear_therapy" x1="192" y1="256" x2="320" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint2_linear_therapy" x1="224" y1="256" x2="288" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint3_linear_therapy" x1="128" y1="256" x2="160" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint4_linear_therapy" x1="352" y1="256" x2="384" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint5_linear_therapy" x1="176" y1="176" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint6_linear_therapy" x1="312" y1="312" x2="336" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint7_linear_therapy" x1="176" y1="336" x2="200" y2="312" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint8_linear_therapy" x1="312" y1="200" x2="336" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

