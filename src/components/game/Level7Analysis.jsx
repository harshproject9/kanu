import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Level7Analysis = ({ onNext, onBack }) => {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  const matches = [
    { trait: 'Humor', status: 'MATCH' },
    { trait: 'Talking', status: 'MATCH' },
    { trait: 'Enjoying Life', status: 'MATCH' },
    { trait: 'Being Idiots', status: 'MAXIMUM MATCH' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setComplete(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="game-screen p-8 md:p-12 no-select">
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 7
        </span>
      </div>

      <h2 className="pixel-text text-sm text-center mb-6">RELATIONSHIP ANALYZER</h2>

      {!complete ? (
        <div className="retro-panel p-6">
          <p className="pixel-text text-xs text-center mb-4">Comparing Subjects...</p>
          <div className="loading-bar mb-2">
            <div className="loading-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="pixel-text text-xs text-center text-gray-600">{progress}%</p>
        </div>
      ) : (
        <>
          <div className="retro-panel p-6 mb-6 space-y-4">
            {matches.map((match, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex justify-between items-center pixel-text text-xs"
              >
                <span>{match.trait}</span>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.2 + 0.2, type: 'spring' }}
                  className={`font-bold px-3 py-1 border-2 border-black ${
                    match.status === 'MAXIMUM MATCH' ? 'bg-yellow-400' : 'bg-green-400'
                  }`}
                >
                  {match.status}
                </motion.span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="dialog-box mb-6 text-center"
          >
            <p className="pixel-text text-xs">
              ANALYSIS COMPLETE<br />
              <br />
              RESULT:<br />
              <span className="text-pink-600">SOMEHOW THE SAME PERSON</span>
            </p>
          </motion.div>
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
        {complete && (
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

export default Level7Analysis;
