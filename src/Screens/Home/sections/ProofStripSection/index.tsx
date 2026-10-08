import { PROOF_METRICS } from '@/Constants';
import { Container, Reveal } from '@/Components';

const numericMetrics = PROOF_METRICS.slice(0, 2);

const ProofStripSection = () => (
    <section className="border-y border-paper-warm/80 bg-paper-bright/60 py-10">
        <Container>
            <Reveal>
                <div className="rounded-3xl border border-paper-warm/80 bg-paper/70 p-5 shadow-soft sm:p-6 lg:p-7">
                    <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-center">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {numericMetrics.map((metric, index) => (
                                <div
                                    key={metric.label}
                                    className="rounded-2xl border border-paper-warm/70 bg-paper-bright/70 p-5"
                                    style={{ transitionDelay: `${index * 60}ms` }}
                                >
                                    <p className="font-mono text-4xl font-medium tracking-tight text-ink">{metric.value}</p>
                                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-stone">{metric.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-paper-warm pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-copper">Operating range</p>
                            <p className="mt-3 max-w-2xl text-balance text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
                                Web, mobile, and cloud systems for B2B, B2C, and commerce products.
                            </p>
                            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
                                Frontend interfaces, backend services, databases, queues, payments, analytics, and deployment pipelines handled as one product
                                system.
                            </p>
                        </div>
                    </div>
                </div>
            </Reveal>
        </Container>
    </section>
);

export default ProofStripSection;
