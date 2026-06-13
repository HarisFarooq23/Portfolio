import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LocationCardProps {
  imageUrl: string;
  location: string;
  country: string;
  href: string;
  className?: string;
  actionLabel?: string;
  actionAriaLabel?: string;
  imageAlt?: string;
}

const LocationCard = React.forwardRef<HTMLDivElement, LocationCardProps>(
  (
    {
      imageUrl,
      location,
      country,
      href,
      className,
      actionLabel = 'Directions',
      actionAriaLabel,
      imageAlt,
    },
    ref,
  ) => {
    const controls = useAnimation();
    const iconControls = useAnimation();

    const cardVariants = {
      initial: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -5, transition: { type: 'spring' as const, stiffness: 400, damping: 10 } },
    };

    const textVariants = {
      initial: { opacity: 1 },
      hover: { opacity: 0, transition: { duration: 0.1 } },
    };

    const iconVariants = {
      initial: { x: 0 },
      hover: { x: 50, transition: { type: 'spring' as const, stiffness: 300, damping: 15 } },
    };

    const handleHoverStart = () => {
      controls.start('hover');
      iconControls.start('hover');
    };

    const handleHoverEnd = () => {
      controls.start('initial');
      iconControls.start('initial');
    };

    return (
      <motion.div
        ref={ref}
        className={cn(
          'w-full max-w-xs overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm',
          className,
        )}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        role="group"
        aria-labelledby="location-title"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={imageUrl}
            alt={imageAlt ?? `A scenic view of ${location}`}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="flex items-center justify-between p-4">
          <div>
            <h3 id="location-title" className="font-semibold text-card-foreground">
              {location},
            </h3>
            <p className="text-sm text-muted-foreground">{country}</p>
          </div>

          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-10 w-32 items-center justify-center overflow-hidden rounded-full bg-primary text-sm font-medium text-primary-foreground"
            aria-label={actionAriaLabel ?? `Get directions to ${location}`}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span variants={textVariants} animate={controls} className="absolute">
              {actionLabel}
            </motion.span>
            <motion.span variants={iconVariants} animate={controls} className="absolute left-4">
              <Send size={16} />
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    );
  },
);

LocationCard.displayName = 'LocationCard';

export { LocationCard };
