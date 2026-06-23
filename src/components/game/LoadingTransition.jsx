import { motion } from 'framer-motion';

const LoadingTransition = ({ level }) => {
  const messages = [
    'Analyzing Subject...',
    'Loading Dance Data...',
    'Scanning Height...',
    'Reading Memory Files...',
    'Preparing Boss Battle...',
    'Loading Inventory...',
    'Analyzing Compatibility...',
    'Decrypting Notes...',
    'Final Analysis...',
  ];

  return (
    <div className="game-screen p-8 md:p-12 flex items-center justify-center min-h-[400px] no-select">
      <div className="w-full max-w-md">
        <motion.p
          className="pixel-text text-sm text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {messages[level - 1] || 'Loading...'}
        </motion.p>

        <div className="loading-bar mb-4">
          <motion.div
            className="loading-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </div>

        <motion.p
          className="pixel-text text-xs text-center text-gray-600"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Please wait...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingTransition;
