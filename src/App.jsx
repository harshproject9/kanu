import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import StartScreen from './components/game/StartScreen';
import BootSequence from './components/game/BootSequence';
import Level1Encounter from './components/game/Level1Encounter';
import LoadingTransition from './components/game/LoadingTransition';
import Level2Stats from './components/game/Level2Stats';
import Level3WildHarsh from './components/game/Level3WildHarsh';
import Level4Memory from './components/game/Level4Memory';
import Level5BossFight from './components/game/Level5BossFight';
import Level6Inventory from './components/game/Level6Inventory';
import Level7Analysis from './components/game/Level7Analysis';
import Level8SecretNotes from './components/game/Level8SecretNotes';
import FinalScreen from './components/game/FinalScreen';

function App() {
  const [gameState, setGameState] = useState('start'); // start, boot, loading, level1, level2, etc.
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleStart = () => {
    setGameState('boot');
  };

  const handleBootComplete = () => {
    setGameState('loading');
    setTimeout(() => {
      setGameState('level1');
      setCurrentLevel(1);
    }, 2000);
  };

  const handleNext = () => {
    const nextLevel = currentLevel + 1;
    setGameState('loading');
    setTimeout(() => {
      setCurrentLevel(nextLevel);
      setGameState(`level${nextLevel}`);
    }, 2000);
  };

  const handleBack = () => {
    if (currentLevel > 1) {
      const prevLevel = currentLevel - 1;
      setCurrentLevel(prevLevel);
      setGameState(`level${prevLevel}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-baby-pink">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {gameState === 'start' && (
            <motion.div
              key="start"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <StartScreen onStart={handleStart} />
            </motion.div>
          )}

          {gameState === 'boot' && (
            <motion.div
              key="boot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BootSequence onComplete={handleBootComplete} />
            </motion.div>
          )}

          {gameState === 'loading' && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <LoadingTransition level={currentLevel} />
            </motion.div>
          )}

          {gameState === 'level1' && (
            <motion.div
              key="level1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level1Encounter onNext={handleNext} />
            </motion.div>
          )}

          {gameState === 'level2' && (
            <motion.div
              key="level2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level2Stats onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level3' && (
            <motion.div
              key="level3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level3WildHarsh onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level4' && (
            <motion.div
              key="level4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level4Memory onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level5' && (
            <motion.div
              key="level5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level5BossFight onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level6' && (
            <motion.div
              key="level6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level6Inventory onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level7' && (
            <motion.div
              key="level7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level7Analysis onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level8' && (
            <motion.div
              key="level8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Level8SecretNotes onNext={handleNext} onBack={handleBack} />
            </motion.div>
          )}

          {gameState === 'level9' && (
            <motion.div
              key="final"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <FinalScreen />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
