export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4BA3F5" />
          <stop offset="100%" stopColor="#1B5FA8" />
        </linearGradient>
      </defs>
      {/* Outer subtle ring */}
      <polygon
        points="100,5 185,52 185,148 100,195 15,148 15,52"
        fill="none"
        stroke="rgba(59,142,224,0.35)"
        strokeWidth="1"
      />
      {/* Main filled hexagon */}
      <polygon
        points="100,15 178,58 178,142 100,185 22,142 22,58"
        fill="url(#hexGrad)"
      />
      {/* Hexagon border */}
      <polygon
        points="100,15 178,58 178,142 100,185 22,142 22,58"
        fill="none"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1.5"
      />
      {/* Main outer triangle */}
      <polygon
        points="100,38 160,138 40,138"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Internal subdivision lines */}
      <line x1="100" y1="38" x2="100" y2="138" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <line x1="100" y1="38" x2="40"  y2="138" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <line x1="100" y1="38" x2="160" y2="138" stroke="white" strokeWidth="1.5" opacity="0.7" />
      <line x1="70"  y1="88" x2="130" y2="88"  stroke="white" strokeWidth="1.5" opacity="0.7" />
      {/* Vertex dots */}
      <circle cx="100" cy="38"  r="3" fill="white" opacity="0.9" />
      <circle cx="160" cy="138" r="3" fill="white" opacity="0.9" />
      <circle cx="40"  cy="138" r="3" fill="white" opacity="0.9" />
    </svg>
  );
}
