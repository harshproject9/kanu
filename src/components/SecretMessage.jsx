import { motion } from 'framer-motion';

const SecretMessage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="max-w-3xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Floating tulips around message */}
        <div className="relative">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.cos((i * Math.PI * 2) / 6) * 150 + 50}%`,
                top: `${Math.sin((i * Math.PI * 2) / 6) * 150 + 50}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🌷
            </motion.div>
          ))}

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative z-10"
          >
            {/* Decorative header */}
            <div className="text-center mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl mb-4"
              >
                💌
              </motion.div>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-px bg-gradient-to-r from-transparent via-rose-pink to-transparent"
              />
            </div>

            {/* Message */}
            <div className="space-y-6 text-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
              >
                I made this because
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
              >
                it's rare to find someone who feels familiar this quickly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold"
              >
                You somehow became one of my favorite people.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium"
              >
                And I thought that deserved its own website.
              </motion.p>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 }}
                className="pt-8"
              >
                <p className="text-2xl text-gray-600 font-medium italic">
                  - Dodo
                </p>
              </motion.div>
            </div>

            {/* Decorative footer */}
            <div className="mt-8">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="h-px bg-gradient-to-r from-transparent via-rose-pink to-transparent mb-6"
              />

              {/* Known Bug */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7 }}
                className="bg-red-50/50 border border-red-200 rounded-2xl p-4 text-center"
              >
                <p className="text-sm font-mono text-red-600 font-bold mb-1">
                  ⚠️ Known Bug:
                </p>
                <p className="text-sm text-gray-700 font-semibold">
                  Still threatens to punch me.
                </p>
              </motion.div>
            </div>

            {/* Sparkle effects */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 2 + i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 5,
                }}
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 2 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-4 text-4xl">
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              🌷
            </motion.span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              🌷
            </motion.span>
          </div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 2.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm font-medium">
            Made with attention to who you actually are
          </p>
          <p className="text-gray-400 text-xs mt-2 font-mono">
            KANU.EXE v1.0 | June 2026
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SecretMessage;
