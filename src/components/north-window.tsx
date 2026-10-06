export function NorthWindow() {
  return (
    <div className="border-[10px] border-[#3a3128] bg-[#3a3128] shadow-[inset_0_0_0_1px_#1a1612]">
      <svg
        viewBox="0 0 320 460"
        className="mx-auto block h-[22svh] w-auto max-w-full lg:h-auto lg:w-full"
        role="img"
        aria-label="Kuzeye bakan pencere. Dışarıda alacakaranlık ve alçak bir sırt."
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#101820" />
            <stop offset="55%" stopColor="#243848" />
            <stop offset="100%" stopColor="#8ea8b6" />
          </linearGradient>
        </defs>
        <rect width="320" height="460" fill="url(#sky)" />
        <circle cx="232" cy="78" r="18" fill="#f3eadc" opacity="0.85" />
        <circle cx="238" cy="74" r="16" fill="#1a2834" opacity="0.35" />
        {[
          [48, 60],
          [90, 110],
          [140, 46],
          [188, 150],
          [70, 190],
          [260, 200],
          [120, 240],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill="#f3eadc" />
        ))}
        <path
          d="M0 340 L40 318 L78 332 L120 290 L168 326 L210 300 L250 328 L290 304 L320 322 L320 460 L0 460 Z"
          fill="#0c1216"
        />
        <path
          d="M0 372 L56 360 L110 378 L170 352 L230 374 L320 358 L320 460 L0 460 Z"
          fill="#070b0e"
        />
        <rect width="320" height="460" fill="url(#sky)" opacity="0.08" />
        <path d="M160 0v460M0 230h320" stroke="#1a120e" strokeWidth="8" />
      </svg>
    </div>
  );
}
