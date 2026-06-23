import { motion } from 'framer-motion';
import { useState } from 'react';

const CharacterProfile = () => {
  const [showHeightError, setShowHeightError] = useState(false);

  const stats = [
    { name: 'Talking', value: 100, color: 'bg-rose-pink' },
    { name: 'Dancing', value: 100, color: 'bg-pink-400' },
    { name: 'Keeping Secrets', value: 12, color: 'bg-red-400' },
    { name: 'Patience', value: 85, color: 'bg-purple-400' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="glass rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-8">
          <motion.div
            className="inline-block px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-white font-bold text-sm mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⭐ LEGENDARY
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            CHARACTER PROFILE
          </h2>
        </div>

        <div className="space-y-6">
          {/* Character Info */}
          <div className="grid grid-cols-2 gap-4 text-left">
            <InfoItem label="Character Name" value="Kanu" />
            <InfoItem label="Alias" value="Professional Yapper" />
            <InfoItem label="Class" value="Dancer" emoji="💃" />
            <InfoItem label="Rarity" value="Legendary" emoji="⭐" />
            <InfoItem label="Threat Level" value="Bahut Marungi Tujhe" emoji="👊" />
            <InfoItem label="Favorite Flower" value="Tulips" emoji="🌷" />
            <InfoItem label="Favorite Anime" value="Demon Slayer" emoji="⚔️" />
            <InfoItem label="Favorite Director" value="Imtiaz Ali" emoji="🎬" />
            <InfoItem label="Weapon" value="Lip Gloss" emoji="💄" />
            <InfoItem label="Special Ability" value="Talking For Hours" emoji="💬" />
          </div>

          {/* Stats */}
          <div className="pt-6 border-t border-white/30">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Stats</h3>
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-700">{stat.name}</span>
                    <span className="font-bold text-gray-800">{stat.value}%</span>
                  </div>
                  <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full ${stat.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Height Stat with Error */}
              <motion.div
                className="cursor-pointer"
                onClick={() => setShowHeightError(true)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-700">Height</span>
                  <span className="font-bold text-gray-400">Loading...</span>
                </div>
                <div className="h-3 bg-white/50 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gray-400"
                    animate={{ width: ['0%', '30%', '0%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Height Error Modal */}
        {showHeightError && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
            onClick={() => setShowHeightError(false)}
          >
            <div className="glass rounded-2xl p-8 max-w-sm text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold text-red-500 mb-2">ERROR</h3>
              <p className="text-gray-700 font-medium">
                Height Data Corrupted
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Unable to process measurement
              </p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

const InfoItem = ({ label, value, emoji }) => (
  <motion.div
    className="bg-white/40 rounded-xl p-3 hover:bg-white/60 transition-all"
    whileHover={{ scale: 1.05 }}
  >
    <p className="text-xs text-gray-600 mb-1 font-medium">{label}</p>
    <p className="font-bold text-gray-800 text-sm">
      {emoji && <span className="mr-2">{emoji}</span>}
      {value}
    </p>
  </motion.div>
);

export default CharacterProfile;
