import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RootContextProvider from '@/Contexts/RootContextProvider';
import App from '@/App';
import '@/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RootContextProvider>
            <App />
        </RootContextProvider>
    </StrictMode>,
);
