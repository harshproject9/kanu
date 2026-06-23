import { motion } from 'framer-motion';
import { useState } from 'react';

const EvidenceArchive = () => {
  const [selectedEvidence, setSelectedEvidence] = useState(null);

  const evidence = [
    {
      id: '07',
      title: 'Subject Dancing For Absolutely No Reason',
      type: 'VIDEO',
      date: '2026.06.15',
      icon: '💃',
      classification: 'LEGENDARY',
    },
    {
      id: '12',
      title: 'Subject Threatening Violence',
      type: 'AUDIO',
      date: '2026.06.18',
      icon: '👊',
      classification: 'HIGH PRIORITY',
    },
    {
      id: '18',
      title: 'Subject Talking Nonstop',
      type: 'AUDIO',
      date: '2026.06.20',
      icon: '💬',
      classification: 'ONGOING',
    },
    {
      id: '23',
      title: 'Lip Gloss Collection Documented',
      type: 'PHOTO',
      date: '2026.06.10',
      icon: '💄',
      classification: 'ARCHIVED',
    },
    {
      id: '31',
      title: 'Height Measurement Failure',
      type: 'ERROR LOG',
      date: '2026.06.22',
      icon: '⚠️',
      classification: 'CORRUPTED',
    },
    {
      id: '42',
      title: 'Tulip Appreciation Moment',
      type: 'PHOTO',
      date: '2026.06.12',
      icon: '🌷',
      classification: 'WHOLESOME',
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
            className="inline-block glass rounded-full px-6 py-2 mb-4"
            animate={{ boxShadow: ['0 0 20px rgba(255,182,193,0.3)', '0 0 40px rgba(255,182,193,0.6)', '0 0 20px rgba(255,182,193,0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-red-500 font-bold text-sm">🔒 CLASSIFIED</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black gradient-text mb-2">
            EVIDENCE ARCHIVE
          </h2>
          <p className="text-gray-600 font-medium font-mono text-sm">
            Database ID: KANU_2026 | Clearance Level: MAX
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {evidence.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedEvidence(item)}
              className="cursor-pointer"
            >
              <div className="glass rounded-2xl p-6 hover:shadow-2xl transition-all border border-white/30 relative overflow-hidden group">
                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-pink/10 to-transparent h-full"
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Evidence Number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="font-mono text-rose-pink font-bold text-sm">
                      EVIDENCE #{item.id}
                    </div>
                    <div className="text-3xl">{item.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-800 text-base mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-mono">Type:</span>
                      <span className="font-bold text-gray-800">{item.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-mono">Date:</span>
                      <span className="font-bold text-gray-800">{item.date}</span>
                    </div>
                  </div>

                  {/* Classification Badge */}
                  <motion.div
                    className={`mt-4 px-3 py-1 rounded-full text-xs font-bold text-center ${
                      item.classification === 'LEGENDARY'
                        ? 'bg-yellow-400 text-yellow-900'
                        : item.classification === 'HIGH PRIORITY'
                        ? 'bg-red-400 text-white'
                        : item.classification === 'CORRUPTED'
                        ? 'bg-gray-400 text-white'
                        : 'bg-green-400 text-white'
                    }`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.classification}
                  </motion.div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-rose-pink/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvidence && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvidence(null)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="glass rounded-3xl p-8 max-w-lg w-full"
            >
              <div className="text-center">
                <div className="text-7xl mb-4">{selectedEvidence.icon}</div>
                <div className="font-mono text-rose-pink font-bold text-sm mb-2">
                  EVIDENCE #{selectedEvidence.id}
                </div>
                <h3 className="text-2xl font-black text-gray-800 mb-4">
                  {selectedEvidence.title}
                </h3>
                <div className="space-y-2 mb-6">
                  <p className="text-gray-700">
                    <span className="font-bold">Type:</span> {selectedEvidence.type}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Date:</span> {selectedEvidence.date}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Status:</span> {selectedEvidence.classification}
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedEvidence(null)}
                  className="px-6 py-3 bg-gradient-to-r from-rose-pink to-baby-pink text-white font-bold rounded-full"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default EvidenceArchive;
