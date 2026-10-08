import type { AnchorHTMLAttributes, ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/Utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

type BaseProps = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type LinkButtonProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-ink text-paper-bright hover:bg-ink-soft border border-ink shadow-soft',
    secondary: 'bg-paper-bright text-ink border border-paper-warm hover:border-blueprint/30 shadow-soft',
    ghost: 'text-ink-soft hover:text-ink hover:bg-paper-warm/60',
};

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'px-3.5 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
};

const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper';

const Button: FC<ButtonProps | LinkButtonProps> = props => {
    const { variant = 'primary', size = 'md', className, children, ...rest } = props;

    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if ('href' in props && props.href) {
        const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
            href: string;
        };
        return (
            <a href={href} className={classes} {...anchorRest}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
            {children}
        </button>
    );
};

export default Button;
