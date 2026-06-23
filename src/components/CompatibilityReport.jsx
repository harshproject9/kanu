import { motion } from 'framer-motion';

const CompatibilityReport = () => {
  const compatibilityItems = [
    { trait: 'Enjoying Life', status: 'MATCH', icon: '🎉' },
    { trait: 'Peak Humor', status: 'MATCH', icon: '😂' },
    { trait: 'Talking Too Much', status: 'MATCH', icon: '💬' },
    { trait: 'Brain Cells', status: 'Shared Account', icon: '🧠', special: true },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="glass rounded-3xl p-8 md:p-12 max-w-3xl w-full shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-6xl">🔍</div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            COMPATIBILITY REPORT
          </h2>
          <p className="text-gray-600 font-medium">System Analysis Complete</p>
        </div>

        {/* Compatibility Grid */}
        <div className="space-y-4 mb-12">
          {compatibilityItems.map((item, index) => (
            <motion.div
              key={item.trait}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">{item.trait}</h3>
                    <p className="text-sm text-gray-600">You + Kanu</p>
                  </div>
                </div>
                <motion.div
                  className={`px-4 py-2 rounded-full font-bold text-sm ${
                    item.special
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white'
                      : 'bg-green-400 text-white'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                >
                  {item.status}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Result */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 border-4 border-rose-pink/50 relative overflow-hidden">
            {/* Background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-baby-pink/20 to-rose-pink/20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <div className="relative z-10 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4">
                Final Result
              </h3>
              <p className="text-3xl md:text-4xl font-black gradient-text leading-relaxed">
                "Somehow the same person.<br />Different gender."
              </p>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-4 -left-4 text-4xl">🌟</div>
          <div className="absolute -bottom-4 -right-4 text-4xl">💫</div>
        </motion.div>

        {/* Compatibility Score */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-3">
            <span className="text-gray-700 font-semibold">Compatibility Score:</span>
            <motion.span
              className="text-3xl font-black gradient-text"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            >
              ∞%
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompatibilityReport;
