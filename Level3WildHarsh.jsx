import { motion } from 'framer-motion';
import { useState } from 'react';

const Level3WildHarsh = ({ onNext, onBack }) => {
  const [battleState, setBattleState] = useState('choice'); // choice, attack, result
  const [selectedAction, setSelectedAction] = useState(null);
  const [shake, setShake] = useState(false);
  const [disabledActions, setDisabledActions] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const actions = [
    {
      id: 'punch',
      name: 'Punch',
      result: 'KANU tried to punch HARSH!\n\nBut...\n\nTarget too high!\nCannot reach face!\n\nHARSH: "Height issue detected 😏"',
      emoji: '👊',
      fails: true,
    },
    {
      id: 'kick',
      name: 'Kick',
      result: 'KANU tried to kick HARSH!\n\nBut...\n\nSlipped and fell!\n\nHARSH: "Nice try! 😂"',
      emoji: '🦵',
      fails: true,
    },
    {
      id: 'annoy',
      name: 'Annoy',
      result: 'KANU tried to annoy HARSH!\n\nHARSH used:\nGiving Half Information\n\nIt backfired!\nKANU got annoyed instead!\n\nHARSH: "Works every time 😎"',
      emoji: '😤',
      fails: true,
    },
    {
      id: 'kiss',
      name: 'Kiss',
      result: 'KANU used: Kiss!\n\n💕\n\nIt\'s super effective!\n\nHARSH is stunned!\nHARSH can\'t move!\n\n✓ VICTORY!',
      emoji: '💋',
      success: true,
    },
  ];

  const handleAction = (action) => {
    if (disabledActions.includes(action.id)) return;

    setSelectedAction(action);
    setBattleState('attack');
    setShake(true);
    
    setTimeout(() => {
      setShake(false);
      setBattleState('result');
      
      if (action.fails) {
        // Disable this action after showing result
        setDisabledActions(prev => [...prev, action.id]);
        setAttempts(prev => prev + 1);
      }
    }, 800);
  };

  const handleContinue = () => {
    setBattleState('choice');
    setSelectedAction(null);
  };

  const getButtonClass = (actionId) => {
    const isDisabled = disabledActions.includes(actionId);
    return `pixel-button px-4 py-3 text-xs relative ${
      isDisabled ? 'opacity-30 cursor-not-allowed' : ''
    }`;
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
              className="pixel-text text-lg mb-2"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              A Wild HARSH Appeared!
            </motion.p>
            {disabledActions.length > 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pixel-text text-xs text-red-600 mt-2"
              >
                {disabledActions.length} move{disabledActions.length > 1 ? 's' : ''} disabled!
              </motion.p>
            )}
          </div>

          {/* Action Menu */}
          <div className="retro-panel p-4 mb-6">
            <div className="grid grid-cols-2 gap-4">
              {actions.map((action, index) => {
                const isDisabled = disabledActions.includes(action.id);
                return (
                  <motion.button
                    key={action.id}
                    onClick={() => handleAction(action)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={isDisabled ? {} : { scale: 1.05 }}
                    whileTap={isDisabled ? {} : { scale: 0.95 }}
                    disabled={isDisabled}
                    className={getButtonClass(action.id)}
                  >
                    <span className="mr-2">{action.emoji}</span>
                    {action.name}
                    {isDisabled && (
                      <span className="block text-xs mt-1 text-red-600">✗ FAILED</span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Hint after failures */}
          {disabledActions.length === 3 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="dialog-box mb-4"
            >
              <p className="pixel-text text-xs text-center text-pink-600">
                💡 Only one option left...<br />
                Choose wisely!
              </p>
            </motion.div>
          )}
        </>
      )}

      {battleState === 'attack' && selectedAction && (
        <div className="text-center">
          <motion.div
            className="text-9xl mb-6"
            animate={{
              scale: [1, 1.5, 1],
              rotate: selectedAction.fails ? [0, -10, 10, 0] : [0, 10, -10, 0],
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
            KANU used {selectedAction.name}!
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

          {selectedAction.fails && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-center mb-6"
            >
              <div className="text-7xl mb-2">❌</div>
              <p className="pixel-text text-sm text-red-600">MOVE FAILED!</p>
            </motion.div>
          )}

          {selectedAction.success && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="text-center mb-6"
            >
              <div className="text-7xl mb-2">💖</div>
              <p className="pixel-text text-sm text-green-600">CRITICAL HIT!</p>
            </motion.div>
          )}

          <div className="flex justify-center gap-4">
            {selectedAction.fails && (
              <motion.button
                onClick={handleContinue}
                className="pixel-button px-6 py-3 text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                TRY ANOTHER
              </motion.button>
            )}
            {selectedAction.success && (
              <motion.button
                onClick={onNext}
                className="pixel-button px-8 py-4 text-sm pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CONTINUE →
              </motion.button>
            )}
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
