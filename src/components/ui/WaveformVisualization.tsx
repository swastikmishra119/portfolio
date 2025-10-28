import { motion } from 'framer-motion';
import { memo, useMemo } from 'react';

interface WaveformProps {
  bars?: number;
  color?: string;
}

const WaveformVisualization = memo(({ bars = 40, color = '#a855f7' }: WaveformProps) => {
  // Generate random heights for ambient animation
  const barHeights = useMemo(() => 
    Array.from({ length: bars }, () => Math.random() * 60 + 20),
    [bars]
  );

  return (
    <div className="flex items-center justify-center gap-1 h-24 overflow-hidden">
      {barHeights.map((height, index) => (
        <motion.div
          key={index}
          className="w-1 rounded-full"
          style={{
            background: `linear-gradient(to top, ${color}, ${color}80)`,
            transformOrigin: 'bottom'
          }}
          initial={{ height: `${height}%` }}
          animate={{
            height: [`${height}%`, `${Math.random() * 60 + 20}%`, `${height}%`],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: [0.45, 0, 0.55, 1],
            delay: index * 0.05
          }}
        />
      ))}
    </div>
  );
});

WaveformVisualization.displayName = 'WaveformVisualization';

export default WaveformVisualization;
