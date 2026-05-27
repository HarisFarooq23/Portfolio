import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface PerspectiveProps extends React.HTMLAttributes<HTMLDivElement> {
  maxRotateX?: number;
  maxRotateY?: number;
  smoothing?: number;
}

export const Perspective = ({
  maxRotateX = 10,
  maxRotateY = 20,
  smoothing = 0.1,
  className,
  children,
  ...props
}: PerspectiveProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targetX = 0, targetY = 0, rotX = 0, rotY = 0, raf = 0;

    const onMove = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const dist = Math.hypot(dx, dy);
      const falloff = dist <= 1 ? 1 : Math.max(0, 1 - (dist - 1) / 2);
      targetX = clamp(dy, -1, 1) * maxRotateX * falloff;
      targetY = -clamp(dx, -1, 1) * maxRotateY * falloff;
    };

    const onLeave = () => { targetX = 0; targetY = 0; };

    const tick = () => {
      rotX += (targetX - rotX) * smoothing;
      rotY += (targetY - rotY) * smoothing;
      const lift = Math.min(1, Math.hypot(rotX / maxRotateX, rotY / maxRotateY));
      container.style.setProperty("--rx", `${rotX.toFixed(2)}deg`);
      container.style.setProperty("--ry", `${rotY.toFixed(2)}deg`);
      container.style.setProperty("--lift", lift.toFixed(3));
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    tick();

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [maxRotateX, maxRotateY, smoothing]);

  return (
    <div ref={containerRef} className={cn("[perspective:1200px]", className)} {...props}>
      <div className="[transform-style:preserve-3d]">
        <div
          ref={cardRef}
          className="will-change-transform"
          style={{ transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

type HighlightColor = "beige" | "amber" | "warm";

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: HighlightColor;
}

export const Highlight = ({ color = "beige", className, style, children, ...props }: HighlightProps) => {
  const colors = {
    beige: { bg: "#a0845c", ring: "160, 132, 92" },
    amber: { bg: "#b07040", ring: "176, 112, 64" },
    warm: { bg: "#8a6844", ring: "138, 104, 68" },
  };
  const c = colors[color];

  return (
    <span
      className={cn("inline-block rounded-[3px] px-1 text-[#0a0907] font-semibold will-change-[transform,box-shadow]", className)}
      style={{
        background: c.bg,
        transform: "translate(calc(-8px * var(--lift, 0)), calc(-6px * var(--lift, 0)))",
        boxShadow: `rgba(${c.ring}, calc(0.8 * var(--lift, 0))) 2px 1.5px 0px 0.75px, rgba(${c.ring}, calc(0.3 * var(--lift, 0))) 8px 4px 4px 0px`,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
