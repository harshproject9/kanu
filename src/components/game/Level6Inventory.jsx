import { motion } from 'framer-motion';
import { useState } from 'react';

const Level6Inventory = ({ onNext, onBack }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    { id: 1, emoji: '🌷', name: 'Tulip', desc: 'Favorite flower. Brings instant happiness.' },
    { id: 2, emoji: '💄', name: 'Lip Gloss', desc: 'Essential item. Always in bag. Quantity: 10+' },
    { id: 3, emoji: '🎵', name: 'Seedhe Maut', desc: 'Playlist on repeat. Peak music taste.' },
    { id: 4, emoji: '💃', name: 'Dance Moves', desc: 'Unlimited supply. Can activate anytime.' },
    { id: 5, emoji: '🥊', name: 'Punch', desc: 'Special attack. Use with caution.' },
  ];

  return (
    <div className="game-screen p-8 md:p-12 no-select">
      <div className="text-center mb-6">
        <span className="pixel-text text-sm bg-black text-white px-4 py-2 inline-block">
          LEVEL 6
        </span>
      </div>

      <h2 className="pixel-text text-sm text-center mb-6">KANU INVENTORY</h2>

      <div className="retro-panel p-4 mb-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setSelectedItem(item)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 border-4 border-black ${
              selectedItem?.id === item.id ? 'bg-pink-200' : 'bg-white'
            }`}
          >
            <div className="text-5xl mb-2">{item.emoji}</div>
            <p className="pixel-text text-xs">{item.name}</p>
          </motion.button>
        ))}
      </div>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="dialog-box mb-6"
        >
          <p className="pixel-text text-xs">
            <span className="font-bold">{selectedItem.name}</span><br />
            <br />
            {selectedItem.desc}
          </p>
        </motion.div>
      )}

      <div className="flex justify-between">
        <motion.button
          onClick={onBack}
          className="pixel-button px-6 py-3 text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← BACK
        </motion.button>
        <motion.button
          onClick={onNext}
          className="pixel-button px-6 py-3 text-xs"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NEXT →
        </motion.button>
      </div>
    </div>
  );
};

export default Level6Inventory;
