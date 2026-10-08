import { PROFILE } from '@/Constants';
import { Badge, Button, Container, Reveal } from '@/Components';

const HeroSection = () => (
    <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid-blueprint pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blueprint/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-16 h-64 w-64 rounded-full bg-copper/8 blur-3xl" />

        <Container className="relative">
            <Reveal>
                <Badge variant="copper" className="mb-6">
                    Production systems, end to end
                </Badge>
            </Reveal>

            <Reveal delay={0.05}>
                <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                    {PROFILE.shortName}
                    <span className="mt-2 block text-2xl font-medium text-stone sm:text-3xl lg:text-4xl">{PROFILE.tagline}</span>
                </h1>
            </Reveal>

            <Reveal delay={0.1}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">{PROFILE.summary}</p>
            </Reveal>

            <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="#work" variant="primary">
                        View selected work
                    </Button>
                    <Button href={PROFILE.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Button>
                    <Button href={PROFILE.github} variant="ghost" target="_blank" rel="noopener noreferrer">
                        GitHub →
                    </Button>
                </div>
            </Reveal>

            <Reveal delay={0.2}>
                <div className="mt-12 rounded-xl border border-paper-warm bg-panel p-5 font-mono text-xs text-paper-bright/80 sm:p-6 sm:text-sm">
                    <div className="flex items-center gap-2 text-stone/70">
                        <span className="h-2 w-2 rounded-full bg-signal" />
                        <span>systems.profile</span>
                    </div>
                    <pre className="mt-3 overflow-x-auto leading-relaxed">
                        {`{
  role: "${PROFILE.title}",
  experience: "${PROFILE.yearsExperience}+ years",
  focus: ["full-stack", "cloud", "mobile", "queues"],
  stack: ["React", "Next.js", "Node.js", "AWS"]
}`}
                    </pre>
                </div>
            </Reveal>
        </Container>
    </section>
);

export default HeroSection;
