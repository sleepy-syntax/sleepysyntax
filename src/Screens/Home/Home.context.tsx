import { createContext, useContext, type FC, type PropsWithChildren } from 'react';

type HomeContextValue = Record<string, never>;

const HomeContext = createContext<HomeContextValue | null>(null);

export const HomeProvider: FC<PropsWithChildren> = ({ children }) => <HomeContext.Provider value={{}}>{children}</HomeContext.Provider>;

export const useHomeContext = () => {
    const context = useContext(HomeContext);
    if (!context) {
        throw new Error('useHomeContext must be used within HomeProvider');
    }
    return context;
};
