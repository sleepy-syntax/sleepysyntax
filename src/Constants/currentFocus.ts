export type CurrentFocusItem = {
    title: string;
    type: string;
    href?: string;
    description: string;
    tags: string[];
};

export const CURRENT_FOCUS: CurrentFocusItem[] = [
    {
        title: 'Aegis',
        type: 'Open-source product',
        href: 'https://github.com/sleepy-syntax/aegis.git',
        description: 'A safe, secure, open-source password manager built as a TypeScript monorepo with web, API, docs, and shared packages.',
        tags: ['Turborepo', 'Next.js', 'NestJS', 'Security'],
    },
    {
        title: 'Agora API',
        type: 'Backend foundation',
        href: 'https://github.com/sleepy-syntax/agora-api.git',
        description: 'NestJS API foundation for a WebRTC conferencing platform, covering rooms, meetings, participants, and call-session workflows.',
        tags: ['NestJS', 'Fastify', 'Docker', 'WebRTC'],
    },
    {
        title: 'Designing Data-Intensive Applications',
        type: 'Currently reading',
        description: 'Studying distributed systems, storage engines, replication, consistency, and the trade-offs behind reliable data systems.',
        tags: ['Data systems', 'Scalability', 'Reliability'],
    },
];
