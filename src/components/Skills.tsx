import { motion } from 'framer-motion';
import {
  Atom,
  BookOpenCheck,
  Boxes,
  Code2,
  Layout,
  Wrench,
  type LucideProps,
} from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Shared';

type SkillGroup = {
  title: string;
  icon: React.ComponentType<LucideProps>;
  skills: string[];
};

const groups: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'JSX', 'React'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Boxes,
    skills: ['React Router DOM', 'Tailwind CSS', 'DaisyUI', 'Swiper'],
  },
  {
    title: 'Additional Knowledge',
    icon: Wrench,
    skills: [
      'C++',
      'Responsive Web Design',
      'Component-Based Development',
      'UI Implementation',
      'Mock Data',
      'Website Routing',
    ],
  },
];

const floatingIcons = [
  { Icon: Layout, className: 'left-[6%] top-[14%]', delay: 0 },
  { Icon: Atom, className: 'right-[8%] top-[24%]', delay: 1.2 },
  { Icon: BookOpenCheck, className: 'left-[12%] bottom-[12%]', delay: 2.1 },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-ice text-navy-950">
      {floatingIcons.map(({ Icon, className, delay }) => (
        <motion.div
          key={className}
          aria-hidden
          className={`absolute hidden text-royal/20 md:block ${className}`}
          animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon size={54} strokeWidth={1.4} />
        </motion.div>
      ))}

      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">Technical Skills</span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            The tools I use to bring
            <span className="text-royal"> ideas to the screen</span>.
          </h2>
          <p className="mt-4 max-w-xl text-base text-navy-950/65">
            An honest snapshot of what I work with — always growing, never
            finished.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {groups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={gi * 0.12}>
                <div className="h-full rounded-3xl border border-navy-950/10 bg-white p-7 shadow-card transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-royal/10 p-2.5 text-royal">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-6 space-y-3.5">
                    {group.skills.map((skill, si) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 * si, duration: 0.5 }}
                        className="group/skill"
                      >
                        <div className="flex items-center justify-between text-sm font-semibold">
                          <span className="transition-colors group-hover/skill:text-royal">
                            {skill}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-navy-950/35">
                            Learning
                          </span>
                        </div>
                        <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-navy-950/10">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-royal to-gold"
                            initial={{ width: '0%' }}
                            whileInView={{ width: '72%' }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{
                              duration: 1,
                              delay: 0.15 + 0.08 * si,
                              ease: 'easeOut',
                            }}
                          />
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <p className="text-xs text-navy-950/45">
            Progress bars show learning momentum, not measured proficiency — I
            let projects speak for skill level.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
