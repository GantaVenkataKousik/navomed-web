export function NeuralNetwork({ className = "", ...props }) {
  return (
    <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
      {/* Central node */}
      <circle cx="256" cy="256" r="16" fill="url(#paint0_linear_neural)" />

      {/* Input layer nodes */}
      <circle cx="96" cy="128" r="12" fill="url(#paint1_linear_neural)" />
      <circle cx="96" cy="256" r="12" fill="url(#paint2_linear_neural)" />
      <circle cx="96" cy="384" r="12" fill="url(#paint3_linear_neural)" />

      {/* Hidden layer nodes */}
      <circle cx="176" cy="176" r="12" fill="url(#paint4_linear_neural)" />
      <circle cx="176" cy="256" r="12" fill="url(#paint5_linear_neural)" />
      <circle cx="176" cy="336" r="12" fill="url(#paint6_linear_neural)" />

      {/* Output layer nodes */}
      <circle cx="336" cy="176" r="12" fill="url(#paint7_linear_neural)" />
      <circle cx="336" cy="256" r="12" fill="url(#paint8_linear_neural)" />
      <circle cx="336" cy="336" r="12" fill="url(#paint9_linear_neural)" />

      {/* Final output node */}
      <circle cx="416" cy="256" r="12" fill="url(#paint10_linear_neural)" />

      {/* Connections */}
      {/* Input to hidden */}
      <line
        x1="108"
        y1="128"
        x2="164"
        y2="176"
        stroke="url(#paint11_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="108"
        y1="128"
        x2="164"
        y2="256"
        stroke="url(#paint12_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="108"
        y1="128"
        x2="164"
        y2="336"
        stroke="url(#paint13_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      <line
        x1="108"
        y1="256"
        x2="164"
        y2="176"
        stroke="url(#paint14_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="108"
        y1="256"
        x2="164"
        y2="256"
        stroke="url(#paint15_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="108"
        y1="256"
        x2="164"
        y2="336"
        stroke="url(#paint16_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      <line
        x1="108"
        y1="384"
        x2="164"
        y2="176"
        stroke="url(#paint17_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="108"
        y1="384"
        x2="164"
        y2="256"
        stroke="url(#paint18_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="108"
        y1="384"
        x2="164"
        y2="336"
        stroke="url(#paint19_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      {/* Hidden to central */}
      <line
        x1="188"
        y1="176"
        x2="240"
        y2="256"
        stroke="url(#paint20_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="188"
        y1="256"
        x2="240"
        y2="256"
        stroke="url(#paint21_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="188"
        y1="336"
        x2="240"
        y2="256"
        stroke="url(#paint22_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      {/* Central to output */}
      <line
        x1="272"
        y1="256"
        x2="324"
        y2="176"
        stroke="url(#paint23_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="272"
        y1="256"
        x2="324"
        y2="256"
        stroke="url(#paint24_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="272"
        y1="256"
        x2="324"
        y2="336"
        stroke="url(#paint25_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      {/* Output to final */}
      <line
        x1="348"
        y1="176"
        x2="404"
        y2="256"
        stroke="url(#paint26_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="348"
        y1="256"
        x2="404"
        y2="256"
        stroke="url(#paint27_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />
      <line
        x1="348"
        y1="336"
        x2="404"
        y2="256"
        stroke="url(#paint28_linear_neural)"
        strokeWidth="2"
        strokeOpacity="0.6"
      />

      <defs>
        <linearGradient id="paint0_linear_neural" x1="240" y1="256" x2="272" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint1_linear_neural" x1="84" y1="128" x2="108" y2="128" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint2_linear_neural" x1="84" y1="256" x2="108" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint3_linear_neural" x1="84" y1="384" x2="108" y2="384" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint4_linear_neural" x1="164" y1="176" x2="188" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint5_linear_neural" x1="164" y1="256" x2="188" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint6_linear_neural" x1="164" y1="336" x2="188" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint7_linear_neural" x1="324" y1="176" x2="348" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint8_linear_neural" x1="324" y1="256" x2="348" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint9_linear_neural" x1="324" y1="336" x2="348" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint10_linear_neural" x1="404" y1="256" x2="428" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint11_linear_neural" x1="108" y1="128" x2="164" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint12_linear_neural" x1="108" y1="128" x2="164" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint13_linear_neural" x1="108" y1="128" x2="164" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint14_linear_neural" x1="108" y1="256" x2="164" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint15_linear_neural" x1="108" y1="256" x2="164" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint16_linear_neural" x1="108" y1="256" x2="164" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint17_linear_neural" x1="108" y1="384" x2="164" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint18_linear_neural" x1="108" y1="384" x2="164" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint19_linear_neural" x1="108" y1="384" x2="164" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint20_linear_neural" x1="188" y1="176" x2="240" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint21_linear_neural" x1="188" y1="256" x2="240" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint22_linear_neural" x1="188" y1="336" x2="240" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint23_linear_neural" x1="272" y1="256" x2="324" y2="176" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint24_linear_neural" x1="272" y1="256" x2="324" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint25_linear_neural" x1="272" y1="256" x2="324" y2="336" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint26_linear_neural" x1="348" y1="176" x2="404" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint27_linear_neural" x1="348" y1="256" x2="404" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>

        <linearGradient id="paint28_linear_neural" x1="348" y1="336" x2="404" y2="256" gradientUnits="userSpaceOnUse">
          <stop stopColor="#26a69a" />
          <stop offset="1" stopColor="#4299e1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

