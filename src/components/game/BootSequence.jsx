import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [showContinue, setShowContinue] = useState(false);

  const bootMessages = [
    { text: 'Initializing Kanu Database...', delay: 500 },
    { text: 'Loading Dance Module... ✓', delay: 800 },
    { text: 'Loading Tulip Engine... ✓', delay: 800 },
    { text: 'Loading Seedhe Maut Archive... ✓', delay: 800 },
    { text: 'Loading Lip Gloss Inventory... ✓', delay: 800 },
    { text: 'Scanning Height...', delay: 800 },
    { text: 'ERROR', delay: 500 },
    { text: 'Target Too Small.', delay: 800 },
    { text: 'Proceeding Anyway...', delay: 1000 },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timeouts = [];

    const showNextLine = () => {
      if (currentIndex < bootMessages.length) {
        setLines(prev => [...prev, bootMessages[currentIndex]]);
        const timeout = setTimeout(showNextLine, bootMessages[currentIndex].delay);
        timeouts.push(timeout);
        currentIndex++;
      } else {
        const timeout = setTimeout(() => setShowContinue(true), 500);
        timeouts.push(timeout);
      }
    };

    showNextLine();

    return () => timeouts.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="game-screen p-8 md:p-12 no-select">
      <div className="retro-panel p-6 min-h-[400px]">
        <div className="space-y-3 pixel-text text-xs md:text-sm">
          {lines.filter(line => line && line.text).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`
                ${line.text === 'ERROR' ? 'text-red-600 font-bold' : 'text-gray-800'}
              `}
            >
              {line.text}
            </motion.div>
          ))}
        </div>

        {showContinue && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-center"
          >
            <motion.button
              onClick={onComplete}
              className="pixel-button px-8 py-4 text-sm pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PRESS A TO CONTINUE
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
