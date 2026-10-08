import { EDUCATION, EXPERIENCE } from '@/Constants';
import { Container, Reveal, SectionHeading } from '@/Components';

const ExperienceSection = () => (
    <section id="experience" className="py-20 sm:py-28">
        <Container>
            <Reveal>
                <SectionHeading
                    eyebrow="Career"
                    title="Experience & education"
                    description="Five years at Mithya Labs — from intern to full-stack engineer owning architecture, deployment, and production systems."
                />
            </Reveal>

            <div className="relative mt-12">
                <div className="absolute left-[7px] top-2 hidden h-[calc(100%-16px)] w-px bg-paper-warm sm:block" />

                <div className="space-y-10">
                    {EXPERIENCE.map((entry, index) => (
                        <Reveal key={`${entry.company}-${entry.role}`} delay={index * 0.08}>
                            <article className="relative sm:pl-8">
                                <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-blueprint bg-paper-bright sm:block" />
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold text-ink">{entry.role}</h3>
                                        <p className="text-sm text-ink-soft">{entry.company}</p>
                                    </div>
                                    <p className="font-mono text-xs text-stone">{entry.period}</p>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {entry.highlights.map(item => (
                                        <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-stone">
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-copper" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </Reveal>
                    ))}

                    <Reveal delay={0.2}>
                        <article className="relative sm:pl-8">
                            <span className="absolute left-0 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-copper bg-paper-bright sm:block" />
                            <div className="rounded-xl border border-paper-warm bg-paper-bright/80 p-5 sm:p-6">
                                <h3 className="text-lg font-semibold text-ink">{EDUCATION.degree}</h3>
                                <p className="mt-1 text-sm text-ink-soft">{EDUCATION.institution}</p>
                                <p className="mt-2 font-mono text-xs text-stone">Graduated {EDUCATION.year}</p>
                            </div>
                        </article>
                    </Reveal>
                </div>
            </div>
        </Container>
    </section>
);

export default ExperienceSection;
