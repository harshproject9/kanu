import { motion } from 'framer-motion';
import { useState } from 'react';

const Level8SecretNotes = ({ onNext, onBack }) => {
  const [currentNote, setCurrentNote] = useState(0);

  const notes = [
    { id: 7, text: 'She somehow makes every conversation interesting.' },
    { id: 13, text: 'Cannot keep secrets. This is documented multiple times.' },
    { id: 18, text: 'Dancing skills: Unexpectedly high. Confidence: Maximum.' },
    { id: 21, text: 'Favorite human detected. Compatibility levels off the chart.' },
    { id: 25, text: 'Warning: Gets angry with incomplete information. Always tell full story.' },
  ];

  return (
    <div className="game-screen p-8 md:p-12 no-select">
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 8
        </span>
      </div>

      <h2 className="pixel-text text-sm text-center mb-6">SECRET DEV LOGS</h2>

      <div className="retro-panel p-6 mb-6">
        <motion.div
          key={currentNote}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="min-h-[200px]"
        >
          <p className="pixel-text text-xs text-gray-600 mb-4">
            DEV LOG #{notes[currentNote].id.toString().padStart(2, '0')}
          </p>
          <p className="pixel-text text-xs leading-loose">
            {notes[currentNote].text}
          </p>
        </motion.div>

        <div className="flex justify-center gap-2 mt-6">
          {notes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentNote(i)}
              className={`w-3 h-3 border-2 border-black ${
                i === currentNote ? 'bg-pink-400' : 'bg-white'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <motion.button
            onClick={onBack}
            className="pixel-button px-6 py-3 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← BACK
          </motion.button>
          <motion.button
            onClick={() => setCurrentNote((prev) => (prev > 0 ? prev - 1 : notes.length - 1))}
            className="pixel-button px-4 py-3 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ←
          </motion.button>
          <motion.button
            onClick={() => setCurrentNote((prev) => (prev < notes.length - 1 ? prev + 1 : 0))}
            className="pixel-button px-4 py-3 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            →
          </motion.button>
        </div>
        <motion.button
          onClick={onNext}
          className="pixel-button px-6 py-3 text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          FINISH →
        </motion.button>
      </div>
    </div>
  );
};

export default Level8SecretNotes;
