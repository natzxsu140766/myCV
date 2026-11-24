import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Rocket, Target } from 'lucide-react';
import { Counter, Reveal, staggerContainer, staggerItem } from './Shared';

const stats = [
  { value: 4, suffix: '', label: 'Featured Projects' },
  { value: 1, suffix: '', label: 'Completed Educational Web Project' },
  { value: 2, suffix: '', label: 'Projects In Development' },
  { value: 3, suffix: '', label: 'Languages' },
];

const highlights = [
  {
    icon: GraduationCap,
    title: 'IT Student',
    text: 'Studying IT at college in Bishkek, focused on frontend and software engineering.',
  },
  {
    icon: Lightbulb,
    title: 'UI/UX Interest',
    text: 'Designing interfaces that are both functional and beautiful.',
  },
  {
    icon: Rocket,
    title: 'Always Learning',
    text: 'Exploring new technologies and building real projects that solve real problems.',
  },
];

export function About() {
  return (
    <section id="about" className="relative bg-ice text-navy-950">
      <div className="section-shell">
        <Reveal>
          <span className="eyebrow">About Me</span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Turning ideas into
            <span className="text-royal"> digital products</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-3">
            {[
              "I'm an IT college student from Bishkek, Kyrgyzstan, interested in Frontend Development, Software Engineering, and UI/UX Design.",
              'I enjoy transforming ideas into functional digital products. I continuously develop my programming skills, explore new technologies, and work on projects that solve real-world problems.',
              'My long-term goal is to become a skilled software engineer and gain international education and professional experience.',
            ].map((text, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-base leading-relaxed text-navy-950/75 sm:text-lg">
                  {text}
                </p>
              </Reveal>
            ))}

            <motion.div
              className="grid gap-4 sm:grid-cols-3"
              variants={staggerContainer(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              {highlights.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={staggerItem}
                  className="rounded-2xl border border-navy-950/10 bg-white p-5 shadow-card transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon className="text-royal" size={26} />
                  <h3 className="mt-3 font-display text-base font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-950/65">
                    {text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <Reveal direction="left" delay={0.15}>
              <div className="rounded-3xl bg-navy-950 p-8 text-white shadow-card">
                <div className="flex items-center gap-2 text-gold">
                  <Target size={18} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    By the numbers
                  </span>
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors duration-300 hover:border-gold/50"
                    >
                      <Counter
                        value={stat.value}
                        className="font-display text-4xl font-bold text-gold"
                      />
                      <p className="mt-2 text-sm leading-snug text-white/70">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
