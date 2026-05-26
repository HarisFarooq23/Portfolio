import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from "framer-motion";

const GridPattern = ({ offsetX, offsetY }: { offsetX: any; offsetY: any }) => (
  <svg className="w-full h-full">
    <defs>
      <motion.pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse" x={offsetX} y={offsetY}>
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground/30" />
      </motion.pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
  </svg>
);

interface AnimatedGridBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedGridBackground: React.FC<AnimatedGridBackgroundProps> = ({ children, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);
  const speedX = 0.3;
  const speedY = 0.3;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + speedX) % 40);
    gridOffsetY.set((gridOffsetY.get() + speedY) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} className={cn("relative overflow-hidden bg-background", className)}>
      <div className="absolute inset-0 z-0 opacity-[0.05]">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </div>
      <motion.div className="absolute inset-0 z-0 opacity-50" style={{ maskImage, WebkitMaskImage: maskImage }}>
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} />
      </motion.div>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-10%] top-[-10%] w-[30%] h-[30%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
