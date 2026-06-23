import { motion } from 'framer-motion';
import { useState } from 'react';

const AchievementSystem = () => {
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);

  const achievements = [
    {
      id: 1,
      title: 'Made Dodo Explain The Full Story',
      xp: 500,
      icon: '📖',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 2,
      title: 'Used "Bahut Marungi Tujhe"',
      subtitle: '472 Times',
      xp: 999,
      icon: '👊',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 3,
      title: 'Carried Lip Gloss Everywhere',
      xp: 300,
      icon: '💄',
      color: 'from-pink-400 to-pink-600',
    },
    {
      id: 4,
      title: 'Started Dancing Randomly',
      xp: 750,
      icon: '💃',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 5,
      title: 'Got Angry Because Of Half Information',
      xp: 650,
      icon: '😤',
      color: 'from-orange-400 to-orange-600',
    },
    {
      id: 6,
      title: 'Talked For Hours Straight',
      xp: 888,
      icon: '💬',
      color: 'from-green-400 to-green-600',
    },
  ];

  const unlockAchievement = (id) => {
    if (!unlockedAchievements.includes(id)) {
      setUnlockedAchievements([...unlockedAchievements, id]);
      
      // Trigger confetti effect
      createConfetti();
    }
  };

  const createConfetti = () => {
    const confettiCount = 50;
    const confettiElements = [];
    
    for (let i = 0; i < confettiCount; i++) {
      confettiElements.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 0.3,
      });
    }
    
    // You can implement confetti animation here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block text-7xl mb-4"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            ACHIEVEMENT SYSTEM
          </h2>
          <p className="text-gray-600 font-medium">
            Legendary Moments Unlocked
          </p>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => unlockAchievement(achievement.id)}
              className="cursor-pointer"
            >
              <div className="glass rounded-2xl p-6 hover:shadow-2xl transition-all relative overflow-hidden group">
                {/* Background gradient animation */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{achievement.icon}</div>
                    <motion.div
                      className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full font-bold text-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
                    >
                      +{achievement.xp} XP
                    </motion.div>
                  </div>

                  <h3 className="font-black text-gray-800 text-lg mb-1">
                    Achievement Unlocked
                  </h3>
                  <p className="text-gray-700 font-semibold text-base leading-snug">
                    {achievement.title}
                  </p>
                  {achievement.subtitle && (
                    <p className="text-rose-pink font-bold text-sm mt-1">
                      {achievement.subtitle}
                    </p>
                  )}

                  {/* Unlock animation */}
                  {unlockedAchievements.includes(achievement.id) && (
                    <motion.div
                      className="absolute top-2 right-2"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <div className="text-3xl">✨</div>
                    </motion.div>
                  )}
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total XP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-600 font-semibold mb-2">Total Experience</p>
            <motion.p
              className="text-5xl font-black gradient-text"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, type: 'spring' }}
            >
              {achievements.reduce((sum, a) => sum + a.xp, 0).toLocaleString()} XP
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AchievementSystem;
