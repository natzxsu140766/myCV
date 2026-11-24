import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  GraduationCap,
  Medal,
  Palette,
  Trophy,
  type LucideProps,
} from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Shared';

type Achievement = {
  title: string;
  description: string;
  icon: React.ComponentType<LucideProps>;
};

const achievements: Achievement[] = [
  {
    title: 'Programming Certificate',
    description:
      'Successfully completed a course covering HTML, CSS, JavaScript, and JSX.',
    icon: Award,
  },
  {
    title: 'First Place — Final Project',
    description:
      'Achieved first place for the final programming course project.',
    icon: Trophy,
  },
  {
    title: 'Art Achievement — First Place',
    description: 'Received a first-place diploma in art.',
    icon: Palette,
  },
  {
    title: 'Art Achievement — Second Place',
    description: 'Received a second-place diploma in art.',
    icon: Medal,
  },
  {
    title: 'College Admission',
    description: 'Successfully passed the AUCA College admission process.',
    icon: GraduationCap,
  },
  {
    title: 'Solar System Project',
    description:
      'Successfully completed an interactive educational web development project.',
    icon: CheckCircle2,
  },
];

function AchievementCard({ achievement }: { achievement: Achievement }) {
  const Icon = achievement.icon;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
    >
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20"
      />
      <div className="flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-gold/30 bg-gold/10 p-3 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={26} />
        </div>
        <motion.span
          className="flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-navy-950"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 300, damping: 15 }}
        >
          <CheckCircle2 size={12} />
          Successful
        </motion.span>
      </div>

      <h3 className="mt-5 font-display text-lg font-bold text-white">
        {achievement.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white/65">
        {achievement.description}
      </p>

      <div
        aria-hidden
        className="mt-6 h-0.5 w-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100"
      />
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-navy-900">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-gold/8 blur-[130px]"
      />
      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">My Achievements</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Goals. Worked On.{' '}
            <span className="text-gradient-gold">Achieved.</span>
          </h2>
          <p className="mt-4 text-base text-white/60 sm:text-lg">
            Every achievement represents a step forward.
          </p>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {achievements.map((a) => (
            <AchievementCard key={a.title} achievement={a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
