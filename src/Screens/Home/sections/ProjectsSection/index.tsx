import { PROJECTS } from '@/Constants';
import { Badge, Card, Container, Reveal, SectionHeading, Tag } from '@/Components';

const featured = PROJECTS.filter(p => p.featured);
const others = PROJECTS.filter(p => !p.featured);

const ProjectCard = ({ project, large = false }: { project: (typeof PROJECTS)[number]; large?: boolean }) => (
    <Card hover className="flex h-full flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
            <div>
                {project.url ? (
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-lg font-semibold text-ink transition-colors hover:text-blueprint"
                    >
                        {project.name}
                        <span className="text-stone transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                    </a>
                ) : (
                    <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                )}
                <p className="mt-0.5 font-mono text-xs text-copper">{project.role}</p>
            </div>
            {project.featured && <Badge variant="blueprint">Featured</Badge>}
        </div>

        <p className={`mt-3 leading-relaxed text-ink-soft ${large ? 'text-base' : 'text-sm'}`}>{project.description}</p>

        <ul className="mt-4 space-y-1.5">
            {project.highlights.map(h => (
                <li key={h} className="flex items-start gap-2 text-sm text-stone">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {h}
                </li>
            ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
            {project.stack.slice(0, large ? 8 : 5).map(tech => (
                <Tag key={tech} label={tech} />
            ))}
            {project.stack.length > (large ? 8 : 5) && <Tag label={`+${project.stack.length - (large ? 8 : 5)}`} />}
        </div>
    </Card>
);

const ProjectsSection = () => (
    <section id="work" className="bg-paper-bright/40 py-20 sm:py-28">
        <Container>
            <Reveal>
                <SectionHeading
                    eyebrow="Selected Work"
                    title="Products shipped across domains"
                    description="B2B platforms, consumer apps, e-commerce, education, and cloud-native tooling — each with distinct technical constraints and real users."
                />
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-2">
                {featured.map((project, index) => (
                    <Reveal key={project.name} delay={index * 0.05}>
                        <ProjectCard project={project} large />
                    </Reveal>
                ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((project, index) => (
                    <Reveal key={project.name} delay={index * 0.04}>
                        <ProjectCard project={project} />
                    </Reveal>
                ))}
            </div>
        </Container>
    </section>
);

export default ProjectsSection;
