import type { FC } from 'react';
import { cn } from '@/Utils';

type TagProps = {
    label: string;
    className?: string;
    dark?: boolean;
};

const Tag: FC<TagProps> = ({ label, className, dark = false }) => (
    <span
        className={cn(
            'inline-flex rounded-md px-2 py-0.5 font-mono text-[11px] tracking-wide',
            dark ? 'bg-panel-soft text-paper-bright/70' : 'bg-paper-warm/70 text-ink-soft',
            className,
        )}
    >
        {label}
    </span>
);

export default Tag;
