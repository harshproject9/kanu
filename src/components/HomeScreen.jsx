import { motion } from 'framer-motion';

const HomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-9xl font-black gradient-text mb-4 tracking-tight">
            KANU.EXE
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Version 1.0
          </p>
          <p className="text-rose-pink text-sm md:text-base font-semibold mt-2">
            "Professional Yapper Edition"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-10 py-5 rounded-full font-bold text-lg md:text-xl text-gray-800 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
          >
            <span className="relative z-10">Begin Analysis →</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-baby-pink to-rose-pink opacity-0 group-hover:opacity-100 transition-opacity"
              layoutId="button-bg"
            />
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 right-10 text-6xl"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          🌷
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-10 text-5xl"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          💄
        </motion.div>
      </div>
    </div>
  );
};

export default HomeScreen;
