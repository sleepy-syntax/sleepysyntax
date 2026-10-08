import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
    const [reducedMotion, setReducedMotion] = useState(() =>
        typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
    );

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handler = (event: MediaQueryListEvent) => setReducedMotion(event.matches);

        setReducedMotion(media.matches);
        media.addEventListener('change', handler);
        return () => media.removeEventListener('change', handler);
    }, []);

    return reducedMotion;
};
