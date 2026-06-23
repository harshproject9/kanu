import { motion } from 'framer-motion';
import { useState } from 'react';

const Level2Stats = ({ onNext, onBack }) => {
  const [revealed, setRevealed] = useState(false);

  const stats = [
    { name: 'TALKING', value: 100, color: '#FFB6C1', delay: 0.2 },
    { name: 'DANCING', value: 100, color: '#FF69B4', delay: 0.4 },
    { name: 'KEEPING SECRETS', value: 12, color: '#EF4444', delay: 0.6 },
    { name: 'HEIGHT', value: 0, color: '#9CA3AF', delay: 0.8, error: true },
  ];

  useState(() => {
    setTimeout(() => setRevealed(true), 500);
  }, []);

  return (
    <div className="game-screen p-8 md:p-12 no-select">
      {/* Level Header */}
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 2
        </span>
      </div>

      {/* Stats Panel */}
      <div className="retro-panel p-6 mb-6">
        <h2 className="pixel-text text-sm text-center mb-6">CHARACTER STATS</h2>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: revealed ? 1 : 0, x: revealed ? 0 : -20 }}
              transition={{ delay: stat.delay }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="pixel-text text-xs">{stat.name}</span>
                <span className="pixel-text text-xs font-bold">
                  {stat.error ? 'ERROR' : `${stat.value}%`}
                </span>
              </div>
              <div className="stat-bar">
                <motion.div
                  className="stat-fill h-full"
                  style={{ backgroundColor: stat.color }}
                  initial={{ width: 0 }}
                  animate={{ width: revealed ? `${stat.value}%` : 0 }}
                  transition={{ delay: stat.delay + 0.2, duration: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 pt-6 border-t-2 border-black"
          >
            <p className="pixel-text text-xs text-center text-gray-600">
              * Height data corrupted during scan
            </p>
          </motion.div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <motion.button
          onClick={onBack}
          className="pixel-button px-6 py-3 text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← BACK
        </motion.button>
        <motion.button
          onClick={onNext}
          className="pixel-button px-6 py-3 text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NEXT →
        </motion.button>
      </div>
    </div>
  );
};

export default Level2Stats;
