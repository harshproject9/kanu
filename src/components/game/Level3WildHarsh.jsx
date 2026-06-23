import { motion } from 'framer-motion';
import { useState } from 'react';

const Level3WildHarsh = ({ onNext, onBack }) => {
  const [battleState, setBattleState] = useState('choice'); // choice, attack, result
  const [selectedAction, setSelectedAction] = useState(null);
  const [shake, setShake] = useState(false);

  const actions = [
    {
      id: 'annoy',
      name: 'Annoy',
      result: 'HARSH used:\nGiving Half Information\n\nIt\'s Super Effective!',
      emoji: '😤',
      critical: true,
    },
    {
      id: 'roast',
      name: 'Roast',
      result: 'HARSH used:\nBad Haircut Joke\n\nCritical Hit! 😂',
      emoji: '🔥',
      critical: true,
    },
    {
      id: 'attack',
      name: 'Attack',
      result: 'HARSH used:\nTeasing\n\nKANU became angry!',
      emoji: '⚔️',
      critical: false,
    },
    {
      id: 'leave',
      name: 'Leave',
      result: 'HARSH ran away!\n\n...Got caught anyway.',
      emoji: '🏃',
      critical: false,
    },
  ];

  const handleAction = (action) => {
    setSelectedAction(action);
    setBattleState('attack');
    setShake(true);
    
    setTimeout(() => {
      setShake(false);
      setBattleState('result');
    }, 800);
  };

  const handleContinue = () => {
    setBattleState('choice');
    setSelectedAction(null);
  };

  return (
    <div className={`game-screen p-8 md:p-12 no-select ${shake ? 'shake' : ''}`}>
      {/* Level Header */}
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 3
        </span>
      </div>

      {battleState === 'choice' && (
        <>
          {/* Enemy */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-8xl mb-4"
            >
              😎
            </motion.div>
            <motion.p
              className="pixel-text text-lg"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              A Wild HARSH Appeared!
            </motion.p>
          </div>

          {/* Action Menu */}
          <div className="retro-panel p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {actions.map((action, index) => (
                <motion.button
                  key={action.id}
                  onClick={() => handleAction(action)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="pixel-button px-4 py-3 text-xs relative"
                >
                  <span className="mr-2">{action.emoji}</span>
                  {action.name}
                </motion.button>
              ))}
            </div>
          </div>
        </>
      )}

      {battleState === 'attack' && selectedAction && (
        <div className="text-center">
          <motion.div
            className="text-9xl mb-6"
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 0.5 }}
          >
            {selectedAction.emoji}
          </motion.div>
          <motion.p
            className="pixel-text text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            HARSH used {selectedAction.name}!
          </motion.p>
        </div>
      )}

      {battleState === 'result' && selectedAction && (
        <>
          <div className="dialog-box mb-6">
            <pre className="pixel-text text-xs whitespace-pre-wrap leading-loose">
              {selectedAction.result}
            </pre>
          </div>

          {selectedAction.critical && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center mb-6"
            >
              <div className="text-7xl mb-2">😤</div>
              <p className="pixel-text text-sm text-red-600">KANU STATUS: ANGRY</p>
            </motion.div>
          )}

          <div className="flex justify-center gap-4">
            <motion.button
              onClick={handleContinue}
              className="pixel-button px-6 py-3 text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TRY AGAIN
            </motion.button>
            <motion.button
              onClick={onNext}
              className="pixel-button px-6 py-3 text-xs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTINUE →
            </motion.button>
          </div>
        </>
      )}

      {/* Back Button */}
      {battleState === 'choice' && (
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

export default Level3WildHarsh;
