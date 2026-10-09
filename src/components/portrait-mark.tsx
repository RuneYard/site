import Image from "next/image";

const frames = [
  {
    src: "/portrait/mehmet-sea.jpg",
    alt: "Mehmet Akdeniz",
    grade: true,
    position: "object-[center_28%]",
  },
  {
    src: "/portrait/mehmet-torii.jpg",
    alt: "Mehmet Akdeniz",
    grade: true,
    position: "object-[center_16%]",
  },
  {
    src: "/portrait/still-runes.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-sky.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-ritual.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-runes-iron.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-runes-arc.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-sky-pines.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-chart.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
  {
    src: "/portrait/still-iron-candle.jpg",
    alt: "",
    grade: false,
    position: "object-center",
  },
] as const;

export function PortraitMark() {
  return (
    <figure
      className="bronze-frame h-full min-h-[420px] w-full overflow-hidden bg-ink p-3"
      aria-label="Mehmet Akdeniz"
    >
      <div className="relative h-full min-h-[392px] overflow-hidden">
        {frames.map((frame, index) => (
          <Image
            key={frame.src}
            src={frame.src}
            alt={frame.alt}
            aria-hidden={frame.alt === ""}
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            style={{ animationDelay: `${-(index * 9 + 4.5)}s` }}
            className={`portrait-slide object-cover ${frame.position} ${frame.grade ? "portrait-grade" : ""}`}
          />
        ))}
      </div>
    </figure>
  );
}
