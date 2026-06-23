import { motion } from 'framer-motion';

const DanceArchive = () => {
  const danceVideos = [
    {
      id: 1,
      title: 'Dance.exe',
      subtitle: 'Main Character Energy Detected',
      confidence: 100,
      icon: '💃',
      color: 'from-purple-400 to-pink-500',
      description: 'Random burst of energy captured on camera',
    },
    {
      id: 2,
      title: 'Spontaneous_Move.mp4',
      subtitle: 'No Music Required',
      confidence: 95,
      icon: '🎵',
      color: 'from-blue-400 to-purple-500',
      description: 'Dancing to the music in her head',
    },
    {
      id: 3,
      title: 'Peak_Performance.avi',
      subtitle: 'Professional Level Unlocked',
      confidence: 100,
      icon: '⭐',
      color: 'from-yellow-400 to-orange-500',
      description: 'This is what confidence looks like',
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
            className="inline-block mb-4"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              rotate: { duration: 3, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <div className="text-7xl">💃</div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            THE DANCE ARCHIVE
          </h2>
          <p className="text-gray-600 font-medium">
            Premium Collection of Legendary Moves
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {danceVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                {/* Video Thumbnail */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-rose-pink/20 to-baby-pink/20">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${video.color} opacity-20`} />
                  
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-9xl"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      {video.icon}
                    </motion.div>
                  </div>

                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    whileHover={{ opacity: 1 }}
                  >
                    <motion.div
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-10 h-10 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Top badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className="glass rounded-full px-3 py-1 text-xs font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                    >
                      🔥 PREMIUM
                    </motion.div>
                  </div>

                  {/* Scan lines effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20"
                    animate={{ y: ['0%', '400%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2 font-mono">
                    {video.title}
                  </h3>
                  <p className="text-rose-pink font-semibold text-sm mb-3">
                    {video.subtitle}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {video.description}
                  </p>

                  {/* Confidence meter */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-600">Confidence Level</span>
                      <span className="text-xs font-bold text-gray-800">{video.confidence}%</span>
                    </div>
                    <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${video.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${video.confidence}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-gray-700 font-semibold mb-2">
              📊 Performance Analysis
            </p>
            <p className="text-3xl font-black gradient-text">
              Main Character Energy: MAXIMUM
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DanceArchive;
