'use client';

import { motion } from 'framer-motion';

export default function TrustBadges() {
  const badges = [
    { label: 'Silk Mark Certified', icon: '🏅' },
    { label: 'Handloom Woven', icon: '✨' },
    { label: 'Direct Manufacturer', icon: '🏭' },
    { label: 'Limited Edition', icon: '💎' }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#E8DCC4]"
        >
          <span className="text-lg">{badge.icon}</span>
          <span className="text-xs text-[#8B7355] tracking-wide">{badge.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
