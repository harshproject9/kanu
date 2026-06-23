import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      id: 1,
      title: 'We Met',
      date: 'March 2026',
      icon: '👋',
      description: 'First encounter, no idea what was coming',
      color: 'from-blue-400 to-purple-400',
    },
    {
      id: 2,
      title: 'Started Talking',
      date: 'April 2026',
      icon: '💬',
      description: 'Conversations that actually made sense',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 3,
      title: 'Talked Way Too Much',
      date: 'May 2026',
      icon: '📱',
      description: 'Realized we could talk for hours and not get bored',
      color: 'from-pink-400 to-rose-400',
    },
    {
      id: 4,
      title: 'Shared Brain Cell Detected',
      date: 'May 2026',
      icon: '🧠',
      description: 'Same humor, same energy, somehow the same person',
      color: 'from-rose-400 to-red-400',
    },
    {
      id: 5,
      title: 'First Date',
      date: 'May 2026',
      icon: '✨',
      description: 'Officially started this journey',
      color: 'from-red-400 to-orange-400',
    },
    {
      id: 6,
      title: 'Current Status',
      date: 'June 2026',
      icon: '💫',
      description: 'Still Yapping',
      color: 'from-orange-400 to-yellow-400',
      current: true,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-block text-7xl mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⏳
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            TIMELINE
          </h2>
          <p className="text-gray-600 font-medium">
            The Journey So Far
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-pink-400 to-yellow-400 -translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                } text-left`}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`glass rounded-2xl p-6 hover:shadow-2xl transition-all relative overflow-hidden ${
                      event.current ? 'ring-4 ring-yellow-400' : ''
                    }`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-10`} />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{event.icon}</span>
                        {event.current && (
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-bold"
                          >
                            NOW
                          </motion.span>
                        )}
                      </div>
                      <h3 className="text-2xl font-black text-gray-800 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-rose-pink font-bold text-sm mb-2">
                        {event.date}
                      </p>
                      <p className="text-gray-700 font-medium">
                        {event.description}
                      </p>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-10"
                >
                  <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg bg-gradient-to-br ${event.color} ${
                    event.current ? 'w-12 h-12 animate-pulse' : ''
                  }`} />
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-[calc(50%-4rem)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Continue indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-5xl mb-4">⬇️</div>
            <p className="text-gray-600 font-semibold">
              To Be Continued...
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Timeline;
