import { motion } from 'framer-motion';

const FinalScreen = () => {
  return (
    <div className="game-screen p-8 md:p-12 no-select text-center">
      {/* Achievement */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="mb-8"
      >
        <div className="text-8xl mb-4">🏆</div>
        <div className="retro-panel p-6 inline-block">
          <p className="pixel-text text-xs text-yellow-600 mb-2">★ GAME COMPLETED ★</p>
          <p className="pixel-text text-xs">ACHIEVEMENT UNLOCKED</p>
        </div>
      </motion.div>

      {/* Main Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="dialog-box mb-8 max-w-2xl mx-auto"
      >
        <p className="pixel-text text-xs leading-loose">
          Found Another Version<br />
          Of Yourself<br />
          <br />
          ━━━━━━━━━━━━━━━━<br />
          <br />
          It's rare to meet someone<br />
          who feels familiar<br />
          this quickly.<br />
          <br />
          Thanks for being you.<br />
          <br />
          - Dodo
        </p>
      </motion.div>

      {/* Hearts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex justify-center gap-4 mb-8"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
            }}
            className="text-3xl"
          >
            💖
          </motion.div>
        ))}
      </motion.div>

      {/* Credits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="pixel-text text-xs text-gray-600"
      >
        <p>KANU QUEST v1.0</p>
        <p className="mt-2">A GAME ABOUT A PERSON</p>
        <p className="mt-2">WHO BECAME ONE OF</p>
        <p>MY FAVORITE PEOPLE</p>
      </motion.div>

      {/* Restart Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8"
      >
        <motion.button
          onClick={() => window.location.reload()}
          className="pixel-button px-8 py-4 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PLAY AGAIN
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FinalScreen;
