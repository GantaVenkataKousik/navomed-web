export function PatternBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="pattern-dots absolute inset-0 opacity-30"></div>
      <div className="pattern-circles absolute inset-0 opacity-20"></div>
      <div className="pattern-hexagons absolute inset-0 opacity-20"></div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-primary-50/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-secondary-50/30 to-transparent"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-50/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary-50/30 to-transparent"></div>
    </div>
  )
}

