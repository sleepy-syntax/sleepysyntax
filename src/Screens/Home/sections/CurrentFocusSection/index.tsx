import { CURRENT_FOCUS } from '@/Constants';
import { Card, Container, Reveal, SectionHeading, Tag } from '@/Components';

const CurrentFocusSection = () => (
    <section className="py-20 sm:py-28">
        <Container>
            <Reveal>
                <SectionHeading
                    eyebrow="Now"
                    title="What I am building and studying"
                    description="A snapshot of active work beyond the resume: one product, one backend foundation, and one systems book shaping how I think about reliable software."
                />
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
                {CURRENT_FOCUS.map((item, index) => (
                    <Reveal key={item.title} delay={index * 0.06}>
                        <Card hover className="flex h-full flex-col p-5 sm:p-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper">{item.type}</p>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group mt-3 inline-flex items-center gap-1.5 text-xl font-semibold tracking-tight text-ink transition-colors hover:text-blueprint"
                                        >
                                            {item.title}
                                            <span className="text-stone transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                                        </a>
                                    ) : (
                                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{item.title}</h3>
                                    )}
                                </div>
                            </div>

                            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{item.description}</p>

                            <div className="mt-6 flex flex-wrap gap-1.5">
                                {item.tags.map(tag => (
                                    <Tag key={tag} label={tag} />
                                ))}
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </Container>
    </section>
);

export default CurrentFocusSection;
