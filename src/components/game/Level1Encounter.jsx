import { motion } from 'framer-motion';

const Level1Encounter = ({ onNext }) => {
  return (
    <div className="game-screen p-8 md:p-12 no-select">
      {/* Level Header */}
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 1
        </span>
      </div>

      {/* Character Sprite */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-9xl inline-block"
        >
          💃
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pixel-text text-xl mt-4"
        >
          A wild KANU appeared!
        </motion.p>
      </div>

      {/* Stats Panel */}
      <div className="retro-panel p-6 mb-6">
        <div className="pixel-text text-xs space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Class:</span>
            <span className="font-bold">Professional Yapper</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Type:</span>
            <span className="font-bold">Dance/Fairy</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Level:</span>
            <motion.span
              className="font-bold text-yellow-600"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              99
            </motion.span>
          </div>
          <div className="border-t-2 border-black pt-3 mt-3">
            <p className="text-gray-600 mb-1">Special Attack:</p>
            <motion.p
              className="font-bold text-red-600"
              animate={{ x: [-2, 2, -2] }}
              transition={{ duration: 0.3, repeat: Infinity }}
            >
              BAHUT MARUNGI TUJHE
            </motion.p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center">
        <motion.button
          onClick={onNext}
          className="pixel-button px-8 py-4 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NEXT →
        </motion.button>
      </div>
    </div>
  );
};

export default Level1Encounter;
