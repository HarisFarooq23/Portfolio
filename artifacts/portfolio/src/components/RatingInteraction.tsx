import { useState } from "react";
import { cn } from "@/lib/utils";

interface RatingInteractionProps {
  onChange?: (rating: number) => void;
  className?: string;
}

const ratingData = [
  { emoji: "😔", label: "Terrible" },
  { emoji: "😕", label: "Poor" },
  { emoji: "😐", label: "Okay" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😍", label: "Amazing!" },
];

export function RatingInteraction({ onChange, className }: RatingInteractionProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (value: number) => {
    setRating(value);
    onChange?.(value);
    setTimeout(() => setSubmitted(true), 400);
  };

  const displayRating = hoverRating || rating;

  if (submitted) {
    return (
      <div className={cn("flex flex-col items-center gap-4", className)}>
        <div className="text-4xl">✨</div>
        <p className="font-mono text-sm text-[#c9b08c] tracking-widest">THANK YOU</p>
        <p className="text-[rgba(237,224,204,0.5)] text-sm">Your feedback means a lot.</p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <div className="flex items-center gap-3">
        {ratingData.map((item, i) => {
          const value = i + 1;
          const isActive = value <= displayRating;

          return (
            <button
              key={value}
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              className="group relative focus:outline-none"
              aria-label={`Rate ${value}: ${item.label}`}
            >
              <div className={cn("relative flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ease-out", isActive ? "scale-110" : "scale-100 group-hover:scale-105")}>
                <span className={cn("text-3xl transition-all duration-300 ease-out select-none", isActive ? "grayscale-0 drop-shadow-lg" : "grayscale opacity-40 group-hover:opacity-70 group-hover:grayscale-[0.3]")}>
                  {item.emoji}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative h-7 w-40">
        <div className={cn("absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out", displayRating > 0 ? "opacity-0 blur-md scale-95" : "opacity-100 blur-0 scale-100")}>
          <span className="text-sm font-mono text-[rgba(201,176,140,0.5)] tracking-widest">RATE THIS PORTFOLIO</span>
        </div>
        {ratingData.map((item, i) => (
          <div key={i} className={cn("absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out", displayRating === i + 1 ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-105")}>
            <span className="text-sm font-semibold tracking-widest font-mono text-[#c9b08c]">{item.label.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
