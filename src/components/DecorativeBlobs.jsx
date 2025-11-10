export const DecorativeBlobs = ({ className = "" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="blobGradient1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary-400)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--secondary-500)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="blobGradient2" x1="1" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--secondary-400)" stopOpacity="0.25" />
          <stop offset="100%" stopColor="var(--primary-300)" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <g filter="url(#blur)" opacity="0.9">
        <path
          d="M90,200 C120,120 240,100 300,160 C360,220 460,210 520,260 C580,310 540,360 460,350 C380,340 320,300 240,300 C160,300 60,280 90,200 Z"
          fill="url(#blobGradient1)"
        />
        <path
          d="M120,120 C180,80 260,90 320,130 C380,170 420,230 380,260 C340,290 280,270 220,240 C160,210 60,160 120,120 Z"
          fill="url(#blobGradient2)"
        />
      </g>
    </svg>
  );
};