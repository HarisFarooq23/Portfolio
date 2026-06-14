import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxTextProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export function ParallaxText({ children, baseVelocity = 100, className }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden -tracking-wider leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap mt-[1px]">
      <motion.div
        style={{ x }}
        className={`font-semibold uppercase text-4xl sm:text-5xl md:text-6xl flex whitespace-nowrap flex-nowrap will-change-transform ${className ?? ''}`}
      >
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
        <span className="block mr-8">{children} </span>
      </motion.div>
    </div>
  );
}

const SKILL_ROWS: { label: string; velocity: number; opacity?: string }[] = [
  { label: 'Python · TypeScript · C++ · SQL · R · C', velocity: -5 },
  { label: 'React · PostgreSQL · Firestore · Prefect · CI/CD', velocity: 5 },
  { label: 'XGBoost · LightGBM · Scikit-learn · BiLSTM · SVM', velocity: -3 },
  { label: 'BERT · NER · HuggingFace · spaCy · Transformers', velocity: 4 },
  { label: 'Pandas · NumPy · Matplotlib · Plotly · MLOps', velocity: -4 },
];

interface SkillsMarqueeProps {
  id?: string;
}

export function SkillsMarquee({ id = 'skills' }: SkillsMarqueeProps) {
  return (
    <section
      id={id}
      className="relative py-24 z-10 overflow-hidden"
      style={{
        background: '#0a0907',
        backgroundImage: `
          linear-gradient(to right, rgba(201,176,140,0.06) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(201,176,140,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '24px 24px',
      }}
    >
      <div className="container mx-auto px-6 mb-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-lg" style={{ color: '#c9b08c' }}>02.</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: '#ede0cc' }}>
            Technical Skills
          </h2>
          <div className="h-px flex-grow ml-4 max-w-[200px]" style={{ background: 'rgba(201,176,140,0.12)' }} />
        </div>
        <p className="mt-6 font-mono text-sm" style={{ color: 'rgba(237,224,204,0.45)' }}>
          Scroll to speed up the marquee
        </p>
      </div>

      <div className="flex flex-col gap-1 py-4">
        {SKILL_ROWS.map((row) => (
          <section key={row.label} className="py-2 relative">
            <ParallaxText baseVelocity={row.velocity} className="text-[#ede0cc]/90">
              {row.label}
            </ParallaxText>
          </section>
        ))}
      </div>
    </section>
  );
}
