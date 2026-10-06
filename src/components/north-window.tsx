export function NorthWindow() {
  return (
    <div className="border-[10px] border-[#6b442c] bg-[#6b442c] shadow-[inset_0_0_0_1px_#3e2918]">
      <svg
        viewBox="0 0 320 460"
        className="mx-auto block h-[22svh] w-auto max-w-full lg:h-auto lg:w-full"
        role="img"
        aria-label="Kuzeye bakan pencere. Karlı fiyort ve bir gemi burnu."
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c5dceb" />
            <stop offset="62%" stopColor="#f4efe4" />
            <stop offset="100%" stopColor="#e7f0f4" />
          </linearGradient>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8eb4c6" />
            <stop offset="100%" stopColor="#5e879c" />
          </linearGradient>
        </defs>
        <rect width="320" height="460" fill="url(#sky)" />
        <circle cx="248" cy="86" r="22" fill="#f6e2b8" />
        <path
          d="M0 250 L36 228 L70 246 L118 206 L156 236 L198 214 L246 240 L286 220 L320 236 L320 300 L0 300 Z"
          fill="#f7f4ee"
        />
        <path
          d="M0 268 L48 258 L92 276 L140 250 L190 272 L240 256 L320 274 L320 300 L0 300 Z"
          fill="#e4edf1"
        />
        <rect y="300" width="320" height="160" fill="url(#water)" />
        <path d="M0 318 H320" stroke="#f7f4ee" strokeWidth="3" opacity="0.55" />
        <path
          d="M46 318 C70 300 92 292 108 300 L118 286 L126 300 C150 286 176 292 196 318 Z"
          fill="#3e2918"
        />
        <path d="M118 286 L118 248" stroke="#3e2918" strokeWidth="3" />
        <path d="M118 252 L156 286 L118 286 Z" fill="#9c2f24" />
        <path d="M160 0v460M0 230h320" stroke="#3e2918" strokeWidth="8" />
      </svg>
    </div>
  );
}
