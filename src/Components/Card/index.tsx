import type { FC, PropsWithChildren } from 'react';
import { cn } from '@/Utils';

type CardProps = PropsWithChildren<{
    className?: string;
    variant?: 'paper' | 'panel';
    hover?: boolean;
}>;

const Card: FC<CardProps> = ({ children, className, variant = 'paper', hover = false }) => (
    <div
        className={cn(
            'rounded-xl border transition-all duration-300',
            variant === 'paper' && 'border-paper-warm/80 bg-paper-bright/90 shadow-soft backdrop-blur-sm',
            variant === 'panel' && 'border-panel-soft bg-panel text-paper-bright shadow-lift',
            hover && 'hover:-translate-y-0.5 hover:shadow-lift',
            className,
        )}
    >
        {children}
    </div>
);

export default Card;
