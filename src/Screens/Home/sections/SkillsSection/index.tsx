import { SKILL_CATEGORIES } from '@/Constants';
import { Card, Container, Reveal, SectionHeading, Tag } from '@/Components';

const SkillsSection = () => (
    <section id="skills" className="bg-paper-bright/40 py-20 sm:py-28">
        <Container>
            <Reveal>
                <SectionHeading
                    eyebrow="Toolkit"
                    title="Skills across the stack"
                    description="Languages, frameworks, infrastructure, and integrations I've used in production — not a wishlist."
                />
            </Reveal>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {SKILL_CATEGORIES.map((category, index) => (
                    <Reveal key={category.title} delay={index * 0.05}>
                        <Card className="h-full p-5 sm:p-6">
                            <h3 className="font-mono text-xs uppercase tracking-wider text-copper">{category.title}</h3>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {category.items.map(skill => (
                                    <Tag key={skill} label={skill} />
                                ))}
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </Container>
    </section>
);

export default SkillsSection;
