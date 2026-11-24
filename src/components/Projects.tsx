import { motion } from 'framer-motion';
import {
  ArrowRight,
  Baby,
  Calculator,
  Globe,
  Smartphone,
  type LucideProps,
} from 'lucide-react';
import { Reveal, staggerContainer, staggerItem } from './Shared';

type Project = {
  number: string;
  title: string;
  status: 'IN DEVELOPMENT' | 'COMPLETED';
  description: string;
  tech: string[];
  highlights?: string[];
  icon: React.ComponentType<LucideProps>;
  previewClass: string;
};

const projects: Project[] = [
  {
    number: '01',
    title: 'Keepo Kids',
    status: 'IN DEVELOPMENT',
    description:
      "A digital product concept focused on children's safety and parental support.",
    tech: ['UI/UX Concept', 'Product Design', 'User Research'],
    icon: Baby,
    previewClass: 'from-royal via-[#1a46b0] to-navy-900',
  },
  {
    number: '02',
    title: 'Keepo SOS',
    status: 'IN DEVELOPMENT',
    description:
      'A personal safety application connected to a GPS wearable device, designed to send emergency alerts and share location information with registered contacts.',
    tech: ['SOS Emergency', 'GPS Location Sharing', 'Emergency Notifications', 'Wearable Device Concept', 'User Research & Competitor Analysis'],
    icon: Smartphone,
    previewClass: 'from-navy-900 via-royal to-[#4a7bff]',
  },
  {
    number: '03',
    title: 'Interactive Solar System',
    status: 'COMPLETED',
    description:
      'An interactive educational web project that explores the Solar System through planetary information, movement, orbits, and visual learning experiences.',
    tech: ['Interactive Planetary Map', 'Planet Information', 'Orbital Movement Concepts', 'Educational Encyclopedia', 'Scale & Distance Information'],
    icon: Globe,
    previewClass: 'from-[#0B2348] via-[#123a7d] to-royal',
  },
  {
    number: '04',
    title: 'BizTrack / Financial Calculator',
    status: 'IN DEVELOPMENT',
    description:
      'A frontend web development project combining business-oriented functionality and financial calculations.',
    tech: ['React', 'React Router DOM', 'Tailwind CSS', 'DaisyUI', 'Swiper'],
    highlights: [
      'Component structure',
      'Navigation & routing',
      'Frontend interface development',
    ],
    icon: Calculator,
    previewClass: 'from-gold via-amber-400 to-[#e6b800]',
  },
];

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon;
  const isGold = project.number === '04';

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`group flex flex-col overflow-hidden rounded-3xl shadow-card ${
        isGold ? 'bg-navy-950 text-white' : 'bg-white text-navy-950'
      }`}
    >
      {/* animated preview */}
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.previewClass}`}
      >
        <motion.div
          aria-hidden
          className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-white/10"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-white/10"
          animate={{ x: [0, -24, 0], y: [0, -16, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <Icon
          size={72}
          strokeWidth={1.2}
          className={`relative z-10 transition-transform duration-500 group-hover:scale-110 ${
            isGold ? 'text-navy-950' : 'text-white/90'
          }`}
        />
        <span
          className={`absolute left-5 top-5 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
            project.status === 'COMPLETED'
              ? 'bg-gold text-navy-950 shadow-glow-sm'
              : isGold
                ? 'bg-navy-950/80 text-gold'
                : 'bg-white/15 text-white backdrop-blur'
          }`}
        >
          {project.status}
        </span>
        <span
          className={`absolute right-5 top-4 font-display text-5xl font-bold ${
            isGold ? 'text-navy-950/20' : 'text-white/20'
          }`}
        >
          {project.number}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p
          className={`mt-3 text-sm leading-relaxed ${
            isGold ? 'text-white/75' : 'text-navy-950/70'
          }`}
        >
          {project.description}
        </p>

        {project.highlights && (
          <ul
            className={`mt-4 space-y-1.5 text-sm font-medium ${
              isGold ? 'text-gold' : 'text-royal'
            }`}
          >
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2">
                <ArrowRight size={13} className="shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isGold
                  ? 'bg-white/10 text-gold'
                  : 'bg-royal/10 text-royal'
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 pt-1">
          <button
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              isGold
                ? 'bg-gold text-navy-950 hover:shadow-glow'
                : 'bg-navy-950 text-white hover:bg-royal'
            }`}
            aria-label={`Explore ${project.title} — details coming soon`}
          >
            Explore Project
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-royal/15 blur-[140px]"
      />
      <div className="section-shell relative">
        <Reveal>
          <span className="eyebrow">My Projects</span>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Things I&apos;m building, learning, and bringing to life.
          </h2>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-2"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.number} project={p} />
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-10">
          <p className="text-sm text-white/40">
            Interactive previews and public links will be added as each project
            reaches its next milestone.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
