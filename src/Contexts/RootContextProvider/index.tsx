import type { FC, PropsWithChildren } from 'react';
import { AppContextProvider } from '@/Contexts/AppContext';

const RootContextProvider: FC<PropsWithChildren> = ({ children }) => <AppContextProvider>{children}</AppContextProvider>;

export default RootContextProvider;
