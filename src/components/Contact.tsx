import { ArrowUpRight, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';
import { Reveal } from './Shared';

const channels = [
  {
    label: 'Email',
    placeholder: 'Your email address goes here',
    icon: Mail,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/natzxsu140766',
    placeholder: 'github.com/natzxsu140766',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    placeholder: 'Your LinkedIn profile goes here',
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/15 blur-[150px]"
      />
      <div className="section-shell relative text-center">
        <Reveal>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl md:text-6xl">
            Let&apos;s <span className="text-gradient-gold">Connect.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base text-white/65 sm:text-lg">
            Have an interesting project or opportunity? Let&apos;s connect.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {channels.map(({ label, href, placeholder, icon: Icon }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card flex flex-col items-center gap-3 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50"
                >
                  <div className="rounded-full border border-gold/30 bg-gold/10 p-3 text-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {label}
                  </span>
                  <span className="flex items-center gap-1 text-xs leading-relaxed text-white/60">
                    {placeholder}
                    <ExternalLink
                      size={12}
                      className="text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </span>
                </a>
              ) : (
                <div
                  key={label}
                  className="group glass-card flex flex-col items-center gap-3 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50"
                >
                  <div className="rounded-full border border-gold/30 bg-gold/10 p-3 text-gold transition-transform duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {label}
                  </span>
                  <span className="text-xs leading-relaxed text-white/45">
                    {placeholder}
                  </span>
                </div>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 text-sm text-white/40">
            <ArrowUpRight size={15} className="text-gold" />
            Email and LinkedIn links will appear here once added.
          </p>
        </Reveal>
      </div>

      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 sm:flex-row sm:px-10">
          <span className="font-display text-lg font-bold">
            Asem<span className="text-gold">ma</span>
          </span>
          <p className="text-sm text-white/50">
            Designed &amp; Developed by <span className="text-white">Asema</span>.
          </p>
        </div>
      </footer>
    </section>
  );
}
