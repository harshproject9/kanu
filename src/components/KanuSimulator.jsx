import { motion } from 'framer-motion';
import { useState } from 'react';

const KanuSimulator = () => {
  const [selectedScenario, setSelectedScenario] = useState(null);

  const scenarios = [
    {
      id: 1,
      condition: 'If Hungry',
      action: 'Give Pasta',
      successRate: 98,
      icon: '🍝',
      result: 'Mission Successful! Kanu is happy and talking about how good it tastes.',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      id: 2,
      condition: 'If Angry',
      action: 'Do Not Give Half Information',
      successRate: 95,
      icon: '😤',
      result: 'Anger levels stabilizing... Remember: Full story or no story.',
      color: 'from-red-400 to-pink-500',
    },
    {
      id: 3,
      condition: 'If Dancing',
      action: 'Just Watch',
      successRate: 100,
      icon: '💃',
      result: 'Perfect response! Enjoy the show and try not to laugh.',
      color: 'from-purple-400 to-pink-500',
    },
    {
      id: 4,
      condition: 'If Talking',
      action: 'Listen & Engage',
      successRate: 99,
      icon: '💬',
      result: 'Conversation flowing! This could go on for hours (and probably will).',
      color: 'from-blue-400 to-purple-500',
    },
    {
      id: 5,
      condition: 'If Needs Lip Gloss',
      action: 'Already Has 10 In Her Bag',
      successRate: 100,
      icon: '💄',
      result: 'Crisis averted! She always comes prepared.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 6,
      condition: 'If Sees Tulips',
      action: 'Take A Photo',
      successRate: 100,
      icon: '🌷',
      result: 'Moment captured! New favorite photo unlocked.',
      color: 'from-green-400 to-pink-400',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="max-w-5xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block text-7xl mb-4"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎮
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            KANU SIMULATOR
          </h2>
          <p className="text-gray-600 font-medium">
            Interactive Response Guide
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedScenario(scenario)}
              className="cursor-pointer"
            >
              <div className="glass rounded-2xl p-6 hover:shadow-2xl transition-all relative overflow-hidden group">
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Success Rate */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{scenario.icon}</div>
                    <motion.div
                      className="px-3 py-1 bg-green-400 text-white rounded-full font-bold text-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                    >
                      {scenario.successRate}% Success
                    </motion.div>
                  </div>

                  {/* Condition */}
                  <div className="mb-3">
                    <p className="text-xs text-gray-600 font-semibold mb-1">CONDITION</p>
                    <p className="text-lg font-black text-gray-800">{scenario.condition}</p>
                  </div>

                  {/* Action */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-600 font-semibold mb-1">RECOMMENDED ACTION</p>
                    <p className="text-base font-bold text-rose-pink">{scenario.action}</p>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${scenario.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${scenario.successRate}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Click hint */}
                  <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-gray-600 font-semibold">
                      Click to simulate →
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result Modal */}
        {selectedScenario && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedScenario(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 max-w-lg w-full relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedScenario.color} opacity-10`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-center mb-6">
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 1 }}
                  >
                    {selectedScenario.icon}
                  </motion.div>
                  <div className="inline-block px-4 py-2 bg-green-400 text-white rounded-full font-bold text-sm mb-4">
                    ✓ Simulation Complete
                  </div>
                </div>

                {/* Scenario Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-gray-800 mb-2">
                    {selectedScenario.condition}
                  </h3>
                  <p className="text-lg font-bold text-rose-pink mb-4">
                    → {selectedScenario.action}
                  </p>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {selectedScenario.result}
                  </p>
                </div>

                {/* Success Rate */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">Success Rate</span>
                    <span className="font-black text-gray-800">{selectedScenario.successRate}%</span>
                  </div>
                  <div className="h-4 bg-white/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${selectedScenario.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedScenario.successRate}%` }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedScenario(null)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-rose-pink to-baby-pink text-white font-bold rounded-full shadow-lg"
                >
                  Close Simulator
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-700 font-semibold text-sm mb-2">
              ⚠️ Disclaimer
            </p>
            <p className="text-gray-600 text-sm">
              Results may vary. User experience level: Expert required.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KanuSimulator;
