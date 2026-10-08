import { createContext, useCallback, useContext, useMemo, useState, type FC, type PropsWithChildren } from 'react';

type AppContextValue = {
    mobileNavOpen: boolean;
    activeSection: string;
    setMobileNavOpen: (open: boolean) => void;
    setActiveSection: (section: string) => void;
    closeMobileNav: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);

    const value = useMemo(
        () => ({
            mobileNavOpen,
            activeSection,
            setMobileNavOpen,
            setActiveSection,
            closeMobileNav,
        }),
        [mobileNavOpen, activeSection, closeMobileNav],
    );

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within AppContextProvider');
    }
    return context;
};
