export function WellnessIllustration({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      <circle cx="256" cy="256" r="200" fill="url(#paint0_radial_wellness)" fillOpacity="0.1" />
      <circle cx="256" cy="256" r="150" fill="url(#paint1_radial_wellness)" fillOpacity="0.15" />
      <circle cx="256" cy="256" r="100" fill="url(#paint2_radial_wellness)" fillOpacity="0.2" />

      <path d="M256 156V356" stroke="url(#paint3_linear_wellness)" strokeWidth="8" strokeLinecap="round" />
      <path d="M156 256H356" stroke="url(#paint4_linear_wellness)" strokeWidth="8" strokeLinecap="round" />

      <path d="M196 196L316 316" stroke="url(#paint5_linear_wellness)" strokeWidth="8" strokeLinecap="round" />
      <path d="M196 316L316 196" stroke="url(#paint6_linear_wellness)" strokeWidth="8" strokeLinecap="round" />

      <defs>
        <radialGradient
          id="paint0_radial_wellness"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256 256) rotate(90) scale(200)"
        >
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_wellness"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256 256) rotate(90) scale(150)"
        >
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_wellness"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256 256) rotate(90) scale(100)"
        >
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </radialGradient>
        <linearGradient id="paint3_linear_wellness" x1="256" y1="156" x2="256" y2="356" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint4_linear_wellness" x1="156" y1="256" x2="356" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint5_linear_wellness" x1="196" y1="196" x2="316" y2="316" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint6_linear_wellness" x1="196" y1="316" x2="316" y2="196" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

