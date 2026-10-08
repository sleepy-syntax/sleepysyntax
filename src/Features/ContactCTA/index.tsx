import { PROFILE } from '@/Constants';
import { Button, Card, Container, Reveal } from '@/Components';

const ContactCTA = () => (
    <section id="contact" className="py-20 sm:py-28">
        <Container>
            <Reveal>
                <Card className="relative overflow-hidden p-8 sm:p-12">
                    <div className="grid-blueprint pointer-events-none absolute inset-0 opacity-40" />
                    <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-xl">
                            <p className="font-mono text-xs uppercase tracking-[0.14em] text-copper">Contact</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Let&apos;s build something that scales.</h2>
                            <p className="mt-4 text-base leading-relaxed text-stone">
                                Open to senior full-stack roles, cloud-heavy product work, and technically ambitious projects. Reach out directly — I respond
                                within a day.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button href={`mailto:${PROFILE.email}`} variant="primary">
                                {PROFILE.email}
                            </Button>
                            <Button href={PROFILE.linkedin} variant="secondary" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </Button>
                            <Button href={PROFILE.github} variant="ghost" target="_blank" rel="noopener noreferrer">
                                GitHub →
                            </Button>
                        </div>
                    </div>
                </Card>
            </Reveal>
        </Container>
    </section>
);

export default ContactCTA;
