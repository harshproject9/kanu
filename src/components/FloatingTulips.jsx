import { motion } from 'framer-motion';

const FloatingTulips = () => {
  const tulips = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 20,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {tulips.map((tulip) => (
        <motion.div
          key={tulip.id}
          className="absolute"
          style={{
            left: `${tulip.left}%`,
            top: '-10%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(tulip.id) * 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: tulip.duration,
            delay: tulip.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div 
            className="text-4xl opacity-20"
            style={{ fontSize: `${tulip.size}px` }}
          >
            🌷
          </div>
        </motion.div>
      ))}

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-rose-pink rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingTulips;
