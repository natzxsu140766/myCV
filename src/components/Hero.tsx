import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, FolderKanban, Trophy } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function FloatingShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        reduce
          ? { opacity: 0.5, scale: 1 }
          : { opacity: 0.55, scale: 1, y: [0, -22, 0], rotate: [0, 8, 0] }
      }
      transition={{
        opacity: { duration: 1.2, delay },
        scale: { duration: 1.2, delay },
        y: { duration: 7 + delay, repeat: Infinity, ease: 'easeInOut' },
        rotate: { duration: 9 + delay, repeat: Infinity, ease: 'easeInOut' },
      }}
    />
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  const jump = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-hero-radial"
    >
      {/* animated background gradients */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-royal/25 blur-[140px]"
        animate={reduce ? undefined : { x: [0, 60, 0], y: [0, -40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[130px]"
        animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* floating geometric shapes */}
      <FloatingShape className="left-[8%] top-[22%] h-16 w-16 rounded-2xl border border-gold/50" delay={0.4} />
      <FloatingShape className="right-[12%] top-[18%] h-24 w-24 rounded-full bg-royal/30 blur-[2px]" delay={0.8} />
      <FloatingShape className="left-[16%] bottom-[20%] h-10 w-10 rotate-45 bg-gold/40" delay={1.2} />
      <FloatingShape className="right-[20%] bottom-[28%] h-14 w-14 rounded-xl border border-white/25" delay={1.6} />
      <FloatingShape className="left-[45%] top-[12%] h-6 w-6 rounded-full bg-gold shadow-glow-sm" delay={2} />

      <div className="relative z-20 mx-auto w-full max-w-6xl px-6 pb-24 pt-32 sm:px-10">
        <div className="max-w-3xl">
          {/* the Asemma identity mark */}
          <motion.h1
            className="font-display text-6xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl"
            initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="relative inline-block">
              Asem
              <motion.span
                className="text-gold"
                animate={
                  reduce
                    ? undefined
                    : { textShadow: ['0 0 0px rgba(255,212,59,0)', '0 0 34px rgba(255,212,59,0.55)', '0 0 0px rgba(255,212,59,0)'] }
                }
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                ma
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-sm font-semibold uppercase tracking-[0.28em] text-gold sm:text-base"
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
          >
            Creative Mind. Technical Skills. Ambitious Goals.
          </motion.p>

          <motion.h2
            className="mt-8 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
          >
            Hello, I&apos;m <span className="text-gradient-gold">Asema</span>.
          </motion.h2>

          <motion.p
            className="mt-4 text-base font-medium text-royal sm:text-lg"
            initial="hidden"
            animate="show"
            custom={0.75}
            variants={fadeUp}
          >
            Frontend Developer in Progress
            <span className="mx-2 text-gold">|</span>
            Creative Problem Solver
            <span className="mx-2 text-gold">|</span>
            Future Software Engineer
          </motion.p>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg"
            initial="hidden"
            animate="show"
            custom={0.9}
            variants={fadeUp}
          >
            I&apos;m passionate about technology, creative development, and
            building digital experiences that combine functionality with
            beautiful design.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial="hidden"
            animate="show"
            custom={1.05}
            variants={fadeUp}
          >
            <button onClick={() => jump('projects')} className="btn-primary">
              <FolderKanban size={18} />
              Explore My Projects
            </button>
            <button onClick={() => jump('achievements')} className="btn-ghost">
              <Trophy size={18} />
              View My Achievements
            </button>
          </motion.div>
        </div>
      </div>

      {/* scroll indicator */}
      <motion.button
        onClick={() => jump('about')}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-white/60 transition-colors hover:text-gold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-label="Scroll down"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <span className="flex h-9 w-6 items-start justify-center rounded-full border border-current p-1.5">
            <span className="h-2 w-1 animate-scrollhint rounded-full bg-current" />
          </span>
          <ChevronDown size={14} />
        </span>
      </motion.button>
    </section>
  );
}
