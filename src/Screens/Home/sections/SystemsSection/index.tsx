import { SYSTEM_LAYERS } from '@/Constants';
import { Card, Container, Reveal, SectionHeading, Tag } from '@/Components';

const SystemsSection = () => (
    <section id="systems" className="py-20 sm:py-28">
        <Container>
            <Reveal>
                <SectionHeading
                    eyebrow="Architecture"
                    title="Systems I design and ship"
                    description="From UI to infrastructure — I work across the full stack, with particular depth in async processing, cloud deployment, and integration-heavy products."
                />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SYSTEM_LAYERS.map((layer, index) => (
                    <Reveal key={layer.id} delay={index * 0.05}>
                        <Card hover className="flex h-full flex-col p-5 sm:p-6">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blueprint" />
                                <h3 className="font-mono text-xs uppercase tracking-wider text-copper">{layer.label}</h3>
                            </div>
                            <p className="flex-1 text-sm leading-relaxed text-ink-soft">{layer.description}</p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {layer.tags.map(tag => (
                                    <Tag key={tag} label={tag} />
                                ))}
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>

            <Reveal delay={0.2}>
                <Card variant="panel" className="relative mt-8 overflow-hidden p-6 sm:p-8">
                    <div className="grid-blueprint pointer-events-none absolute inset-0 opacity-20" />
                    <div className="relative">
                        <p className="font-mono text-xs uppercase tracking-[0.14em] text-blueprint/70">Data flow</p>
                        <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm">
                            {['Client', 'API Gateway', 'Services', 'Queue', 'Database', 'Cloud'].map((node, i, arr) => (
                                <span key={node} className="flex items-center gap-2">
                                    <span className="rounded-md border border-panel-soft bg-panel-soft px-2.5 py-1 text-paper-bright/80">{node}</span>
                                    {i < arr.length - 1 && <span className="text-stone/50">→</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </Card>
            </Reveal>
        </Container>
    </section>
);

export default SystemsSection;
