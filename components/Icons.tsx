/**
 * Authored icon set. One family, 24px box, 1.6 stroke, round caps and joins.
 * No emoji, no unicode glyphs, no mixed libraries.
 */

type P = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

export const IconPhone = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M5.5 3.5h3l1.5 4-2 1.4a12 12 0 0 0 5.6 5.6l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.7 2 2 0 0 1 5.5 3.5Z" />
  </svg>
);

export const IconWhatsApp = ({ size = 18, className }: P) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    focusable="false"
    className={className}
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.25 8.24a8.24 8.24 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24Zm-2.7 4.3c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.45-1.35-1.69-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.46Z" />
  </svg>
);

export const IconHome = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M3.5 10.5 12 3.5l8.5 7" />
    <path d="M5.5 9.5v10h13v-10" />
    <path d="M9.75 19.5v-5.75h4.5v5.75" />
  </svg>
);

export const IconPin = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M19 10.5c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z" />
    <circle cx="12" cy="10.25" r="2.6" />
  </svg>
);

export const IconSearch = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="10.75" cy="10.75" r="6.25" />
    <path d="m15.5 15.5 4 4" />
  </svg>
);

export const IconArrowRight = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M4.5 12h15" />
    <path d="m13.5 6 6 6-6 6" />
  </svg>
);

export const IconArrowDown = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M12 4.5v15" />
    <path d="m6 13.5 6 6 6-6" />
  </svg>
);

export const IconClock = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5.25l3.25 2" />
  </svg>
);

export const IconClose = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
  </svg>
);

export const IconTube = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <path d="M8.75 3.5h6.5v14a3.25 3.25 0 0 1-6.5 0Z" />
    <path d="M8.75 11.5h6.5" />
    <path d="M7.25 3.5h9.5" />
  </svg>
);

export const IconGroup = ({ size = 18, className }: P) => (
  <svg {...base(size)} className={className}>
    <circle cx="9" cy="8.5" r="3.25" />
    <path d="M3.5 19.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
    <path d="M16 5.6a3.25 3.25 0 0 1 0 5.8" />
    <path d="M17.25 14.9c1.9.6 3.25 2.3 3.25 4.6" />
  </svg>
);
