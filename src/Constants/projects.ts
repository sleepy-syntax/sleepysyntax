export type Project = {
    name: string;
    url?: string;
    role: string;
    description: string;
    stack: string[];
    highlights: string[];
    featured?: boolean;
};

export const PROJECTS: Project[] = [
    {
        name: 'Dorii',
        url: 'https://dorii.app/',
        role: 'Full Stack Developer',
        description:
            'Grocery platform empowering local retailers with web and cross-platform mobile apps, real-time order tracking, and automated background processing.',
        stack: ['Next.js', 'React Native', 'Node.js', 'MongoDB', 'Redis', 'BullMQ', 'Socket.io', 'Razorpay'],
        highlights: ['Real-time order updates via WebSockets', 'Payment gateway and background job queues', 'Cross-platform mobile with Expo'],
        featured: true,
    },
    {
        name: 'Playground',
        url: 'https://playground.inc/',
        role: 'Full Stack Developer',
        description: 'Event discovery and management platform with Web3 integrations, real-time features, and robust payment processing.',
        stack: ['React.js', 'Loopback 3', 'MongoDB', 'Redis', 'BullMQ', 'Thirdweb', 'Stripe', 'Socket.io'],
        highlights: ['Web3 wallet and token functionality', 'Real-time event updates', 'Segment analytics integration'],
        featured: true,
    },
    {
        name: 'Palatial',
        url: 'https://palatial.cloud/',
        role: 'Full Stack Developer',
        description: '3D asset management platform with secure cloud storage, containerized deployments, and subscription billing.',
        stack: ['React.js', 'NestJS', 'MongoDB', 'AWS S3', 'Docker', 'Kubernetes', 'gRPC', 'Stripe'],
        highlights: ['gRPC microservices architecture', 'Kubernetes container orchestration', 'S3-backed asset storage pipeline'],
        featured: true,
    },
    {
        name: 'Stay with Stay',
        url: 'https://staywithstay.com/',
        role: 'Frontend Developer',
        description: 'No-fee vacation rental platform built as a Next.js monorepo with CMS-driven content and direct Stripe bookings.',
        stack: ['Next.js', 'Turborepo', 'Tailwind CSS', 'Shadcn', 'Agility CMS', 'Stripe', 'Docker'],
        highlights: ['Monorepo architecture with Turborepo', 'Headless CMS content management', 'Direct booking with Stripe'],
        featured: true,
    },
    {
        name: "Moody's Omni",
        role: 'Full Stack Developer',
        description: 'Risk assessment platform with a React browser extension, JavaScript library, and backend microservices using message queuing.',
        stack: ['React', 'Node.js', 'AWS RDS', 'AWS S3', 'Redis', 'RabbitMQ', 'Docker'],
        highlights: ['Browser extension development', 'RabbitMQ for high-performance data processing', 'Reusable JavaScript library'],
    },
    {
        name: 'KnoPro',
        url: 'https://www.knopro.org/',
        role: 'Frontend Developer',
        description: 'Educational platform for work-based learning with complex forms and Contentful CMS integration.',
        stack: ['Next.js', 'Sass', 'Contentful CMS', 'Formik', 'Yup'],
        highlights: ['Complex multi-step form flows', 'Headless CMS content architecture'],
    },
    {
        name: 'Couper',
        url: 'https://shopcouper.com/',
        role: 'Shopify Developer',
        description: "Luxury women's fashion e-commerce storefront with custom Liquid templates and optimized UX.",
        stack: ['Shopify Liquid', 'Shopify CMS'],
        highlights: ['Custom theme development', 'E-commerce UX optimization'],
    },
    {
        name: 'Truenose',
        role: 'Frontend Developer',
        description: 'Cosmetic registration platform with responsive UI, form validation, and Contentful CMS integration.',
        stack: ['Next.js', 'Tailwind CSS', 'Contentful CMS', 'Stripe'],
        highlights: ['Robust form validation with Yup', 'CMS-driven content pages'],
    },
    {
        name: 'Mamakoo',
        url: 'https://mamakoo.com/',
        role: 'Frontend Intern',
        description: 'Food and itinerary discovery platform with UI components, state management, and Stripe payments.',
        stack: ['React.js', 'Loopback 3', 'MongoDB', 'Material UI', 'Stripe'],
        highlights: ['Easy-Peasy state management', 'Stripe payment integration'],
    },
];
