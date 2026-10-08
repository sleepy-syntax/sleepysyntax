export type ExperienceEntry = {
    company: string;
    role: string;
    period: string;
    highlights: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
    {
        company: 'Mithya Labs Private Limited',
        role: 'Full Stack Developer',
        period: 'March 2022 — Present',
        highlights: [
            'Architected full-stack applications with React, Next.js, TypeScript, Node.js, Express, and NestJS',
            'Designed SQL and NoSQL database schemas with query optimization and data integrity across complex architectures',
            'Deployed containerized services on AWS (EC2, S3, Lightsail) and Cloudflare R2 with CI/CD pipelines',
            'Implemented Redis caching and BullMQ/RabbitMQ queues to improve response times under high throughput',
        ],
    },
    {
        company: 'Mithya Labs Private Limited',
        role: 'Full Stack Developer Intern',
        period: 'September 2021 — February 2022',
        highlights: [
            'Built responsive web interfaces with React, JavaScript, and Bootstrap alongside senior engineers',
            'Developed RESTful APIs in Node.js and integrated frontend apps with MongoDB and SQL databases',
        ],
    },
];

export const EDUCATION = {
    institution: 'Prof. Ram Meghe Institute of Technology and Research, Amravati University',
    degree: 'Bachelor of Engineering in Information Technology',
    year: '2020',
} as const;
