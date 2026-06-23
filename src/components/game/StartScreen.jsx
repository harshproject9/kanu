import { motion } from 'framer-motion';

const StartScreen = ({ onStart }) => {
  return (
    <div className="game-screen p-8 md:p-16 text-center no-select">
      {/* Floating tulips */}
      <div className="mb-8">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="text-3xl inline-block mx-4"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          >
            🌷
          </motion.span>
        ))}
      </div>

      {/* Title */}
      <div className="retro-panel p-8 mb-8">
        <motion.h1
          className="pixel-text text-4xl md:text-5xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          KANU QUEST
        </motion.h1>
        <p className="pixel-text text-sm text-gray-600">v1.0</p>
      </div>

      {/* Start Button */}
      <motion.button
        onClick={onStart}
        className="pixel-button px-12 py-6 text-lg pulse"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        START
      </motion.button>

      {/* Decorative elements */}
      <div className="mt-12 flex justify-center gap-8">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="text-3xl"
        >
          💃
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-3xl"
        >
          💄
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl"
        >
          🎵
        </motion.div>
      </div>
    </div>
  );
};

export default StartScreen;
