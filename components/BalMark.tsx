import type { SVGProps } from "react";

type BalMarkProps = SVGProps<SVGSVGElement> & {
  monochrome?: string;
};

/**
 * Stylized BAL Dental Centre mark — just the icon (no wordmark).
 * The center forms a tooth / dental-arch silhouette flanked by the
 * curved "B" and "L" stems from the logo.
 */
export function BalMark({ monochrome, className = "", ...props }: BalMarkProps) {
  const color = monochrome ?? "url(#balGold)";
  return (
    <svg
      viewBox="0 0 220 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {!monochrome ? (
        <defs>
          <linearGradient id="balGold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#d8c79a" />
            <stop offset="50%" stopColor="#a2844e" />
            <stop offset="100%" stopColor="#6e5827" />
          </linearGradient>
        </defs>
      ) : null}

      {/* Left stem (B-like vertical with two arches) */}
      <path
        d="M 28 28
           L 28 172
           L 56 172
           L 56 120
           Q 84 120 90 100
           Q 84 80 56 80
           L 56 28
           Z"
        fill={color}
      />
      <path
        d="M 56 56
           Q 80 56 86 70
           Q 80 84 56 84
           Z"
        fill="#ffffff"
        opacity="0.15"
      />

      {/* Center tooth / dental-arch */}
      <path
        d="M 110 32
           Q 92 32 90 56
           Q 90 80 96 100
           Q 100 122 102 144
           Q 104 168 110 170
           Q 116 168 118 144
           Q 120 122 124 100
           Q 130 80 130 56
           Q 128 32 110 32 Z"
        fill={color}
      />
      {/* Tooth root split */}
      <path
        d="M 108 120
           Q 106 144 105 168
           M 112 120
           Q 114 144 115 168"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="1.2"
        fill="none"
      />

      {/* Right stem (L-like) */}
      <path
        d="M 154 28
           L 154 172
           L 196 172
           L 196 152
           L 178 152
           L 178 28
           Z"
        fill={color}
      />

      {/* Sparkle accent above the tooth */}
      <g transform="translate(110 14)" fill={color}>
        <path d="M 0 -10 L 2 -2 L 10 0 L 2 2 L 0 10 L -2 2 L -10 0 L -2 -2 Z" />
      </g>
    </svg>
  );
}
