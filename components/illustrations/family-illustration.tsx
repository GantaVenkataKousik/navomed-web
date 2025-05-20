export function FamilyIllustration({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Adult 1 */}
      <circle cx="200" cy="160" r="40" fill="url(#paint0_linear_family)" />
      <path
        d="M160 240C160 218 178 200 200 200C222 200 240 218 240 240V320H160V240Z"
        fill="url(#paint1_linear_family)"
        fillOpacity="0.8"
      />

      {/* Adult 2 */}
      <circle cx="320" cy="160" r="40" fill="url(#paint2_linear_family)" />
      <path
        d="M280 240C280 218 298 200 320 200C342 200 360 218 360 240V320H280V240Z"
        fill="url(#paint3_linear_family)"
        fillOpacity="0.8"
      />

      {/* Child 1 */}
      <circle cx="240" cy="240" r="30" fill="url(#paint4_linear_family)" />
      <path
        d="M210 300C210 283.4 223.4 270 240 270C256.6 270 270 283.4 270 300V360H210V300Z"
        fill="url(#paint5_linear_family)"
        fillOpacity="0.8"
      />

      {/* Child 2 */}
      <circle cx="160" cy="360" r="25" fill="url(#paint6_linear_family)" />
      <path
        d="M135 410C135 396.2 146.2 385 160 385C173.8 385 185 396.2 185 410V450H135V410Z"
        fill="url(#paint7_linear_family)"
        fillOpacity="0.8"
      />

      {/* Child 3 */}
      <circle cx="320" cy="360" r="25" fill="url(#paint8_linear_family)" />
      <path
        d="M295 410C295 396.2 306.2 385 320 385C333.8 385 345 396.2 345 410V450H295V410Z"
        fill="url(#paint9_linear_family)"
        fillOpacity="0.8"
      />

      <defs>
        <linearGradient id="paint0_linear_family" x1="160" y1="160" x2="240" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint1_linear_family" x1="160" y1="260" x2="240" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint2_linear_family" x1="280" y1="160" x2="360" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint3_linear_family" x1="280" y1="260" x2="360" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint4_linear_family" x1="210" y1="240" x2="270" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint5_linear_family" x1="210" y1="315" x2="270" y2="315" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint6_linear_family" x1="135" y1="360" x2="185" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_family"
          x1="135"
          y1="417.5"
          x2="185"
          y2="417.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient id="paint8_linear_family" x1="295" y1="360" x2="345" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_family"
          x1="295"
          y1="417.5"
          x2="345"
          y2="417.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

