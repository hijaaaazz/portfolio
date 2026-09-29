export default function PrismLogo({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`prism-logo ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path
        d="M16 2L2 28H10L16 15L22 28H30L16 2Z"
        fill="url(#brand-prism-gradient)"
      />
      <path
        d="M16 15L11 25H21L16 15Z"
        fill="#ea4335"
        opacity="0.9"
      />
      <circle cx="16" cy="11" r="2.5" fill="#fbbc05" />
      <defs>
        <linearGradient id="brand-prism-gradient" x1="2" y1="2" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="0.4" stopColor="#8b5cf6" />
          <stop offset="0.7" stopColor="#ea4335" />
          <stop offset="1" stopColor="#34a853" />
        </linearGradient>
      </defs>
    </svg>
  );
}
