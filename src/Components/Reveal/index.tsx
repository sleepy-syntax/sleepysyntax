import type { FC, PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/Hooks';
import { cn } from '@/Utils';

type RevealProps = PropsWithChildren<{
    className?: string;
    delay?: number;
}>;

const Reveal: FC<RevealProps> = ({ children, className, delay = 0 }) => {
    const reducedMotion = useReducedMotion();

    if (reducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
