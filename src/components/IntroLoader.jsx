import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequence = [
  { text: 'Loading Kanu.exe...', delay: 500 },
  { text: 'Loading Dance Module...', status: 'Complete', delay: 800 },
  { text: 'Loading Tulip Module...', status: 'Complete', delay: 800 },
  { text: 'Loading Seedhe Maut Module...', status: 'Complete', delay: 800 },
  { text: 'Loading Lip Gloss Engine...', status: 'Complete', delay: 800 },
  { text: 'Loading Height Scanner...', status: 'ERROR', delay: 800 },
  { text: 'Object too small to detect.', delay: 1000 },
  { text: 'System Ready.', delay: 1000 }
];

const IntroLoader = ({ onComplete }) => {
  const [started, setStarted] = useState(false);
  const [lines, setLines] = useState([]);
  const [showEnterButton, setShowEnterButton] = useState(false);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    let timeouts = [];

    const showNextLine = () => {
      if (currentIndex < bootSequence.length) {
        setLines(prev => [...prev, bootSequence[currentIndex]]);
        const nextDelay = bootSequence[currentIndex].delay;
        currentIndex++;
        const timeout = setTimeout(showNextLine, nextDelay);
        timeouts.push(timeout);
      } else {
        const timeout = setTimeout(() => setShowEnterButton(true), 500);
        timeouts.push(timeout);
      }
    };

    showNextLine();

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [started]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex flex-col items-center justify-center p-6 z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {!started ? (
        // Simple Start Button
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setStarted(true)}
            className="px-12 py-6 bg-baby-pink text-gray-900 font-bold text-xl rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all"
            style={{ backgroundColor: '#FFB6C1' }}
          >
            Start
          </motion.button>
        </motion.div>
      ) : (
        // Boot Sequence
        <>
          <div className="w-full max-w-md space-y-3 font-mono text-sm md:text-base">
            <AnimatePresence>
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <span className={`
                    ${line?.status === 'Complete' ? 'text-green-400' : 
                      line?.status === 'ERROR' ? 'text-red-500' : 'text-white'}
                  `}>
                    {line?.text || ''}
                  </span>
                  {line?.status && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={`text-xs px-2 py-1 rounded ${
                        line.status === 'Complete' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}
                    >
                      {line.status}
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {showEnterButton && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="mt-12 px-8 py-4 text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: '#FFB6C1' }}
              >
                Enter →
              </motion.button>
            )}
          </AnimatePresence>
        </>
      )}
    </motion.div>
  );
};

export default IntroLoader;
