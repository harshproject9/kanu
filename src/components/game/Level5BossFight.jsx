import { motion } from 'framer-motion';
import { useState } from 'react';

const Level5BossFight = ({ onNext, onBack }) => {
  const [bossHP, setBossHP] = useState(100);
  const [gameState, setGameState] = useState('intro'); // intro, battle, defeat, victory
  const [shake, setShake] = useState(false);

  const choices = [
    { id: 1, text: 'Tease Her', wrong: true },
    { id: 2, text: 'Give Hint', wrong: true },
    { id: 3, text: "Say 'I'll Tell You Later'", wrong: true },
    { id: 4, text: 'Give Full Information', wrong: false },
  ];

  const handleChoice = (choice) => {
    if (choice.wrong) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setGameState('defeat');
      }, 500);
    } else {
      setBossHP(0);
      setTimeout(() => setGameState('victory'), 1000);
    }
  };

  return (
    <div className={`game-screen p-8 md:p-12 no-select ${shake ? 'shake' : ''}`}>
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-red-600 text-white px-4 py-2 inline-block">
          LEVEL 5 - BOSS FIGHT
        </span>
      </div>

      {(gameState === 'intro' || gameState === 'battle') && (
        <>
          <div className="text-center mb-6">
            <motion.div
              className="text-8xl mb-4"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              😤
            </motion.div>
            <p className="pixel-text text-lg mb-4">ANGRY KANU</p>
            
            <div className="max-w-md mx-auto mb-4">
              <div className="flex justify-between mb-2 pixel-text text-xs">
                <span>HP</span>
                <span>{bossHP}/100</span>
              </div>
              <div className="hp-bar">
                <motion.div
                  className="hp-fill"
                  style={{ width: `${bossHP}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </div>

          <div className="dialog-box mb-6">
            <p className="pixel-text text-xs">
              KANU is furious!<br />
              What will HARSH do?
            </p>
          </div>

          <div className="retro-panel p-4 mb-6">
            <div className="grid grid-cols-1 gap-3">
              {choices.map((choice, i) => (
                <motion.button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="pixel-button px-4 py-3 text-xs text-left relative select-cursor"
                >
                  {choice.text}
                </motion.button>
              ))}
            </div>
          </div>
        </>
      )}

      {gameState === 'defeat' && (
        <div className="text-center">
          <div className="text-9xl mb-4">💥</div>
          <div className="dialog-box mb-6">
            <p className="pixel-text text-xs text-red-600">
              KANU used:<br />
              TOP HEAD PUNCH<br />
              <br />
              -999 HP<br />
              <br />
              HARSH fainted!
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => { setGameState('intro'); setBossHP(100); }}
              className="pixel-button px-6 py-3 text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TRY AGAIN
            </motion.button>
          </div>
        </div>
      )}

      {gameState === 'victory' && (
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            className="text-9xl mb-4"
          >
            ⭐
          </motion.div>
          <div className="dialog-box mb-6">
            <p className="pixel-text text-xs text-green-600">
              ★ BOSS DEFEATED ★<br />
              <br />
              KANU calmed down!<br />
              Communication successful!
            </p>
          </div>
          <motion.button
            onClick={onNext}
            className="pixel-button px-8 py-4 text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTINUE →
          </motion.button>
        </div>
      )}

      {gameState === 'intro' && (
        <div className="flex justify-start">
          <motion.button
            onClick={onBack}
            className="pixel-button px-6 py-3 text-xs"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← BACK
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Level5BossFight;
