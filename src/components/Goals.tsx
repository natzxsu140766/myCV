import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, type LucideProps } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Shared';

const goals: { text: string; icon: React.ComponentType<LucideProps> }[] = [
  { text: 'Become a professional Software Developer', icon: Rocket },
  { text: 'Master Frontend Development', icon: Sparkles },
  { text: 'Improve JavaScript and React skills', icon: Sparkles },
  { text: 'Learn Python and expand programming knowledge', icon: Sparkles },
  { text: 'Reach English level C1', icon: Sparkles },
  { text: 'Study abroad', icon: Sparkles },
  { text: 'Gain international professional experience', icon: Sparkles },
  { text: 'Build meaningful digital products', icon: Sparkles },
  { text: 'Develop a successful international IT career', icon: Rocket },
];

function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        left: `${(i * 37.7) % 100}%`,
        top: `${(i * 53.3) % 100}%`,
        size: (i % 3) + 1,
        delay: (i % 8) * 0.45,
      })),
    []
  );

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute animate-twinkle rounded-full bg-white"
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function GlowingLines() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-0 top-1/4 h-px w-full bg-gradient-to-r from-transparent via-royal/60 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2], x: ['-4%', '2%', '-4%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-0 top-2/3 h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        animate={{ opacity: [0.15, 0.7, 0.15], x: ['2%', '-4%', '2%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-24 bottom-0 h-[380px] w-[380px] rounded-full bg-royal/20 blur-[130px]"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export function Goals() {
  return (
    <section id="goals" className="relative overflow-hidden bg-navy-900">
      <StarField />
      <GlowingLines />
      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">Future Goals</span>
          <h2 className="mt-5 font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl md:text-6xl">
            The Future
            <br className="sm:hidden" /> <span className="text-gradient-gold">I&apos;m Building.</span>
          </h2>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {goals.map((goal, i) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.text}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors duration-300 hover:border-gold/50"
              >
                <span className="font-display text-sm font-bold text-white/25">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="rounded-xl border border-gold/25 bg-gold/10 p-2 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon size={17} />
                </div>
                <p className="text-sm font-medium leading-snug text-white/85">
                  {goal.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
