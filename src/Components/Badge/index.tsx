import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/Utils';

type BadgeVariant = 'default' | 'blueprint' | 'copper' | 'signal' | 'mono';

type BadgeProps = PropsWithChildren<{
    variant?: BadgeVariant;
    className?: string;
}>;

const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-paper-warm/80 text-ink-soft border-paper-warm',
    blueprint: 'bg-blueprint/8 text-blueprint border-blueprint/20',
    copper: 'bg-copper/8 text-copper border-copper/20',
    signal: 'bg-signal/8 text-signal border-signal/20',
    mono: 'bg-panel text-paper-bright/80 border-panel-soft font-mono text-xs',
};

const Badge: FC<BadgeProps> = ({ children, variant = 'default', className }) => (
    <span className={cn('inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium', variantStyles[variant], className)}>{children}</span>
);

export default Badge;
