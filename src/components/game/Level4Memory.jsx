import { motion } from 'framer-motion';
import { useState } from 'react';

const Level4Memory = ({ onNext, onBack }) => {
  const [opened, setOpened] = useState(false);

  const memories = [
    { emoji: '💃', caption: 'Dance Mode: Activated', type: 'Dance Clip' },
    { emoji: '😂', caption: 'Peak Comedy Moment', type: 'Screenshot' },
    { emoji: '🌷', caption: 'Tulip Appreciation Time', type: 'Photo' },
  ];

  const [currentMemory, setCurrentMemory] = useState(0);

  return (
    <div className="game-screen p-8 md:p-12 no-select">
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 4
        </span>
      </div>

      {!opened ? (
        <div className="text-center">
          <motion.div
            className="text-9xl mb-6 cursor-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => setOpened(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            📦
          </motion.div>
          <p className="pixel-text text-sm mb-8">Click to open treasure!</p>
        </div>
      ) : (
        <>
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            className="retro-panel p-6 mb-6"
          >
            <p className="pixel-text text-xs text-center mb-4 text-green-600">
              ★ MEMORY FOUND ★
            </p>
            <div className="text-center mb-4">
              <div className="text-7xl mb-4">{memories[currentMemory].emoji}</div>
              <p className="pixel-text text-xs mb-2">{memories[currentMemory].type}</p>
              <p className="pixel-text text-xs text-gray-600">{memories[currentMemory].caption}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-2 mb-6">
            {memories.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentMemory(i)}
                className={`w-3 h-3 border-2 border-black ${
                  i === currentMemory ? 'bg-pink-400' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </>
      )}

      <div className="flex justify-between">
        <motion.button
          onClick={onBack}
          className="pixel-button px-6 py-3 text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← BACK
        </motion.button>
        {opened && (
          <motion.button
            onClick={onNext}
            className="pixel-button px-6 py-3 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NEXT →
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default Level4Memory;
