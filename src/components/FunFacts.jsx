import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

const FunFacts = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const facts = [
    {
      id: 1,
      title: 'Cannot Keep Secrets For Long',
      icon: '🤫',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 2,
      title: 'Can Talk For Hours And Still Have More To Say',
      icon: '💬',
      color: 'from-blue-400 to-purple-400',
    },
    {
      id: 3,
      title: 'Somehow Makes Every Conversation Funny',
      icon: '😂',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      id: 4,
      title: 'Dances To Literally Anything',
      icon: '💃',
      color: 'from-pink-400 to-red-400',
    },
    {
      id: 5,
      title: 'Owns More Lip Gloss Than Necessary',
      icon: '💄',
      color: 'from-rose-400 to-pink-500',
    },
    {
      id: 6,
      title: 'Threatens Violence More Than Expected',
      icon: '👊',
      color: 'from-red-400 to-orange-500',
    },
    {
      id: 7,
      title: 'Gets Angry When Given Half Information',
      icon: '😤',
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 8,
      title: 'Loves Tulips More Than Most Things',
      icon: '🌷',
      color: 'from-pink-300 to-rose-400',
    },
  ];

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % facts.length);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + facts.length) % facts.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="max-w-2xl w-full"
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
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            📋
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            FUN FACTS
          </h2>
          <p className="text-gray-600 font-medium">
            Swipe to discover more
          </p>
        </div>

        {/* Card Stack */}
        <div className="relative h-[500px] mb-8">
          {facts.map((fact, index) => {
            const isActive = index === currentCard;
            const offset = index - currentCard;
            
            return (
              <motion.div
                key={fact.id}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                  y: offset * 20,
                  opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3,
                  zIndex: facts.length - Math.abs(offset),
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
                transition={{ duration: 0.3 }}
                drag={isActive ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  if (Math.abs(offset.x) > 100) {
                    if (offset.x > 0) {
                      prevCard();
                    } else {
                      nextCard();
                    }
                  }
                }}
              >
                <div className={`glass rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-10`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="text-9xl mb-8"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {fact.icon}
                    </motion.div>

                    <div className="mb-6">
                      <span className="px-4 py-2 bg-white/60 rounded-full font-bold text-sm text-gray-700">
                        Fun Fact #{fact.id}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-gray-800 leading-tight px-4">
                      {fact.title}
                    </h3>
                  </div>

                  {/* Card number indicator */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <div className="flex gap-2">
                      {facts.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentCard ? 'bg-rose-pink w-6' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevCard}
            className="glass rounded-full p-4 hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div className="glass rounded-full px-6 py-3">
            <span className="font-bold text-gray-700">
              {currentCard + 1} / {facts.length}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextCard}
            className="glass rounded-full p-4 hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Swipe hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            👆 Swipe or use arrows to navigate
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FunFacts;
