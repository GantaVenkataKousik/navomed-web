export function ChildIllustration({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Sun */}
      <circle cx="256" cy="120" r="60" fill="url(#paint0_radial_child)" />
      <path d="M256 40V80" stroke="url(#paint1_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M256 160V200" stroke="url(#paint2_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M176 120H216" stroke="url(#paint3_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M296 120H336" stroke="url(#paint4_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M196 60L226 90" stroke="url(#paint5_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M286 150L316 180" stroke="url(#paint6_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M196 180L226 150" stroke="url(#paint7_linear_child)" strokeWidth="8" strokeLinecap="round" />
      <path d="M286 90L316 60" stroke="url(#paint8_linear_child)" strokeWidth="8" strokeLinecap="round" />

      {/* Child figure */}
      <circle cx="256" cy="300" r="40" fill="url(#paint9_linear_child)" />
      <path
        d="M216 360C216 338 234 320 256 320C278 320 296 338 296 360V440H216V360Z"
        fill="url(#paint10_linear_child)"
        fillOpacity="0.8"
      />

      {/* Toys */}
      <circle cx="176" cy="400" r="20" fill="url(#paint11_linear_child)" />
      <circle cx="336" cy="400" r="20" fill="url(#paint12_linear_child)" />
      <rect x="146" y="430" width="60" height="30" rx="10" fill="url(#paint13_linear_child)" />
      <rect x="306" y="430" width="60" height="30" rx="10" fill="url(#paint14_linear_child)" />

      <defs>
        <radialGradient
          id="paint0_radial_child"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(256 120) rotate(90) scale(60)"
        >
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </radialGradient>
        <linearGradient id="paint1_linear_child" x1="256" y1="40" x2="256" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint2_linear_child" x1="256" y1="160" x2="256" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint3_linear_child" x1="176" y1="120" x2="216" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint4_linear_child" x1="296" y1="120" x2="336" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint5_linear_child" x1="196" y1="60" x2="226" y2="90" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint6_linear_child" x1="286" y1="150" x2="316" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint7_linear_child" x1="196" y1="180" x2="226" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint8_linear_child" x1="286" y1="90" x2="316" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD54F" />
          <stop offset="1" stopColor="#FF9800" />
        </linearGradient>
        <linearGradient id="paint9_linear_child" x1="216" y1="300" x2="296" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint10_linear_child" x1="216" y1="380" x2="296" y2="380" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint11_linear_child" x1="156" y1="400" x2="196" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F06292" />
          <stop offset="1" stopColor="#BA68C8" />
        </linearGradient>
        <linearGradient id="paint12_linear_child" x1="316" y1="400" x2="356" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FC3F7" />
          <stop offset="1" stopColor="#7986CB" />
        </linearGradient>
        <linearGradient id="paint13_linear_child" x1="146" y1="445" x2="206" y2="445" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F06292" />
          <stop offset="1" stopColor="#BA68C8" />
        </linearGradient>
        <linearGradient id="paint14_linear_child" x1="306" y1="445" x2="366" y2="445" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4FC3F7" />
          <stop offset="1" stopColor="#7986CB" />
        </linearGradient>
      </defs>
    </svg>
  )
}

