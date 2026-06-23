import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const BossFight = () => {
  const [health, setHealth] = useState(100);
  const [gameState, setGameState] = useState('initial'); // initial, fighting, defeated
  const [selectedChoice, setSelectedChoice] = useState(null);

  const choices = [
    { id: 1, text: 'Tease Her More', icon: '😏', damage: 999 },
    { id: 2, text: 'Give Half Information', icon: '🤐', damage: 999 },
    { id: 3, text: 'Say "I\'ll Tell You Later"', icon: '⏰', damage: 999 },
  ];

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    setGameState('fighting');
    
    setTimeout(() => {
      setHealth(0);
      setTimeout(() => {
        setGameState('defeated');
      }, 1000);
    }, 500);
  };

  const resetFight = () => {
    setHealth(100);
    setGameState('initial');
    setSelectedChoice(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block text-7xl mb-4"
            animate={gameState === 'fighting' ? { 
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.2, 1]
            } : {}}
            transition={{ duration: 0.5 }}
          >
            👊
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            BOSS ENCOUNTER
          </h2>
          <motion.p 
            className="text-gray-700 font-bold text-xl"
            animate={gameState === 'initial' ? {
              scale: [1, 1.05, 1],
              color: ['#374151', '#EF4444', '#374151']
            } : {}}
            transition={{ duration: 1, repeat: gameState === 'initial' ? Infinity : 0 }}
          >
            KANU HAS BECOME ANGRY
          </motion.p>
        </div>

        {/* Boss Card */}
        <motion.div
          className="glass rounded-3xl p-8 mb-8 relative overflow-hidden"
          animate={gameState === 'fighting' ? { 
            x: [-5, 5, -5, 5, 0],
          } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Warning stripes */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-yellow-400 via-red-500 to-yellow-400 opacity-80" />

          <div className="text-center mb-6">
            <motion.div 
              className="text-8xl mb-4"
              animate={gameState === 'fighting' ? {
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              😤
            </motion.div>
            <h3 className="text-3xl font-black text-gray-800 mb-4">BOSS: ANGRY KANU</h3>
            
            {/* Health Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-700">HP</span>
                <span className="font-bold text-gray-800">{health}/100</span>
              </div>
              <div className="h-6 bg-white/50 rounded-full overflow-hidden border-2 border-red-500">
                <motion.div
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
                  initial={{ width: '100%' }}
                  animate={{ width: `${health}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Boss Stats */}
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="glass rounded-xl p-3">
                <p className="text-gray-600 mb-1">Attack</p>
                <p className="font-black text-red-500">999</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-gray-600 mb-1">Defense</p>
                <p className="font-black text-gray-800">0</p>
              </div>
              <div className="glass rounded-xl p-3">
                <p className="text-gray-600 mb-1">Anger</p>
                <p className="font-black text-orange-500">MAX</p>
              </div>
            </div>
          </div>

          {/* Special Abilities */}
          <div className="glass rounded-2xl p-4 bg-red-500/10">
            <p className="font-bold text-gray-800 text-center mb-2">⚠️ Warning</p>
            <p className="text-sm text-gray-700 text-center">
              Boss uses "Bahut Marungi Tujhe" when HP drops below 50%
            </p>
          </div>
        </motion.div>

        {/* Choices */}
        <AnimatePresence mode="wait">
          {gameState === 'initial' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <p className="text-center font-bold text-gray-700 mb-6">
                Choose your action:
              </p>
              {choices.map((choice, index) => (
                <motion.button
                  key={choice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleChoice(choice)}
                  className="w-full glass rounded-2xl p-6 text-left hover:shadow-xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{choice.icon}</div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 text-lg">{choice.text}</p>
                    </div>
                    <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {gameState === 'fighting' && selectedChoice && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-12 text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.5, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 0.5 }}
                className="text-8xl mb-6"
              >
                💥
              </motion.div>
              <h3 className="text-3xl font-black text-red-500 mb-4">
                WRONG ANSWER!
              </h3>
              <p className="text-xl font-bold text-gray-700 mb-2">
                Kanu used "Bahut Marungi Tujhe"
              </p>
              <motion.p
                className="text-5xl font-black text-red-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                -999 HP
              </motion.p>
            </motion.div>
          )}

          {gameState === 'defeated' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-3xl p-12 text-center"
            >
              <div className="text-8xl mb-6">💀</div>
              <h3 className="text-4xl font-black text-gray-800 mb-4">
                YOU HAVE BEEN DEFEATED
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                All choices lead to the same fate when Kanu is angry
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetFight}
                className="px-8 py-4 bg-gradient-to-r from-rose-pink to-baby-pink text-white font-bold rounded-full shadow-lg"
              >
                Try Again (It Won't Help)
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BossFight;
