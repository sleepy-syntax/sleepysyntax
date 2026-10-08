export type SkillCategory = {
    title: string;
    items: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Material UI', 'Shadcn UI', 'Radix UI'],
    },
    {
        title: 'Backend',
        items: ['Node.js', 'Express.js', 'NestJS', 'Loopback 3', 'gRPC', 'REST APIs', 'Socket.io', 'WebRTC'],
    },
    {
        title: 'Cloud & DevOps',
        items: ['AWS (EC2, S3, RDS, Lightsail)', 'Docker', 'Kubernetes', 'GCP', 'Vercel', 'Cloudflare R2', 'CI/CD', 'Git'],
    },
    {
        title: 'Data & Queues',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'RabbitMQ', 'BullMQ', 'SQLite'],
    },
    {
        title: 'Integrations',
        items: ['Stripe', 'Razorpay', 'Twilio', 'SendGrid', 'Segment', 'Amplitude', 'Contentful', 'Web3 (Thirdweb)'],
    },
];

export const SYSTEM_LAYERS = [
    {
        id: 'frontend',
        label: 'Frontend',
        description: 'React, Next.js, React Native — responsive interfaces with real-time UX',
        tags: ['React', 'Next.js', 'RN', 'Tailwind'],
    },
    {
        id: 'backend',
        label: 'Backend',
        description: 'Node.js services with Express, NestJS, and gRPC microservices',
        tags: ['Node.js', 'NestJS', 'gRPC', 'REST'],
    },
    {
        id: 'data',
        label: 'Data Layer',
        description: 'SQL and NoSQL databases with Redis caching and query optimization',
        tags: ['PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
        id: 'queues',
        label: 'Async Processing',
        description: 'Background jobs and message queues for high-throughput workloads',
        tags: ['BullMQ', 'RabbitMQ', 'Workers'],
    },
    {
        id: 'cloud',
        label: 'Cloud & Infra',
        description: 'Containerized deployments on AWS with CI/CD and object storage',
        tags: ['AWS', 'Docker', 'K8s', 'R2'],
    },
    {
        id: 'integrations',
        label: 'Integrations',
        description: 'Payments, analytics, CMS, communications, and third-party APIs',
        tags: ['Stripe', 'Segment', 'Twilio', 'CMS'],
    },
] as const;
