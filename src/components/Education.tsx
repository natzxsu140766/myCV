import { motion } from 'framer-motion';
import { BookOpen, Building2, GraduationCap, MessageCircle } from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Shared';

const education = [
  {
    icon: GraduationCap,
    title: 'College — Bishkek, Kyrgyzstan',
    text: 'Currently studying IT, building a foundation in Software Engineering and Computer Science.',
    current: true,
  },
  {
    icon: BookOpen,
    title: 'Secondary Education',
    text: 'Completed previous secondary education with a strong interest in science and creativity.',
    current: false,
  },
  {
    icon: Building2,
    title: 'The Path Ahead',
    text: 'Aiming for Software Engineering and Computer Science studies, with international education in sight.',
    current: false,
  },
];

const languages = [
  { name: 'Russian', level: 'Native / Fluent', width: '100%' },
  { name: 'Kyrgyz', level: 'Native / Fluent', width: '100%' },
  { name: 'English', level: '≈ B1 — working towards B2–C1', width: '55%' },
];

export function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-royal/15 blur-[140px]"
      />
      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">Education & Languages</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Learning is the
            <span className="text-gradient-gold"> main project</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* timeline */}
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-bold text-white">
                Education Timeline
              </h3>
            </Reveal>
            <div className="relative mt-8 space-y-8 pl-8">
              <div
                aria-hidden
                className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-gold via-royal to-white/10"
              />
              {education.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={i * 0.12} direction="left">
                    <div className="relative">
                      <span
                        className={`absolute -left-8 top-1 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 ${
                          item.current
                            ? 'border-gold bg-gold shadow-glow-sm'
                            : 'border-royal bg-navy-950'
                        }`}
                      >
                        {item.current && (
                          <motion.span
                            className="h-2 w-2 rounded-full bg-navy-950"
                            animate={{ scale: [1, 1.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </span>
                      <div className="glass-card p-6 transition-colors duration-300 hover:border-gold/40">
                        <div className="flex items-center gap-3">
                          <Icon className="text-gold" size={20} />
                          <h4 className="font-display text-base font-bold text-white">
                            {item.title}
                          </h4>
                          {item.current && (
                            <span className="ml-auto rounded-full bg-gold px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-navy-950">
                              Now
                            </span>
                          )}
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-white/65">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* languages */}
          <div>
            <Reveal>
              <h3 className="font-display text-xl font-bold text-white">
                Languages
              </h3>
            </Reveal>
            <motion.div
              className="mt-8 space-y-5"
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={staggerItem}
                  className="glass-card p-6 transition-colors duration-300 hover:border-gold/40"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg font-bold text-white">
                      {lang.name}
                    </span>
                    <span className="text-xs font-medium text-white/55">
                      {lang.level}
                    </span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-royal via-[#4a7bff] to-gold"
                      initial={{ width: '0%' }}
                      whileInView={{ width: lang.width }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
              <motion.div
                variants={staggerItem}
                className="flex items-center gap-3 rounded-2xl border border-gold/25 bg-gold/5 p-5"
              >
                <MessageCircle className="shrink-0 text-gold" size={20} />
                <p className="text-sm leading-relaxed text-white/70">
                  Actively improving English every day — next milestone: B2,
                  then C1.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
