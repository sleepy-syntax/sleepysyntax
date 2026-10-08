import type { FC } from 'react';
import { cn } from '@/Utils';

type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    className?: string;
    dark?: boolean;
};

const SectionHeading: FC<SectionHeadingProps> = ({ eyebrow, title, description, className, dark = false }) => (
    <div className={cn('max-w-2xl', className)}>
        <p className={cn('font-mono text-xs uppercase tracking-[0.14em]', dark ? 'text-blueprint/80' : 'text-copper')}>{eyebrow}</p>
        <h2 className={cn('mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl', dark ? 'text-paper-bright' : 'text-ink')}>{title}</h2>
        {description && <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', dark ? 'text-stone/90' : 'text-stone')}>{description}</p>}
    </div>
);

export default SectionHeading;
