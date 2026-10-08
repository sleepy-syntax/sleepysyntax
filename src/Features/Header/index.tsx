import { useEffect } from 'react';
import { NAV_LINKS, PROFILE } from '@/Constants';
import { useAppContext } from '@/Contexts';
import { Button } from '@/Components';
import MobileNav from '@/Features/MobileNav';
import { cn } from '@/Utils';

const Header = () => {
    const { mobileNavOpen, setMobileNavOpen, closeMobileNav } = useAppContext();

    useEffect(() => {
        document.body.style.overflow = mobileNavOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileNavOpen]);

    return (
        <>
            <header className="sticky top-0 z-40 border-b border-paper-warm/60 bg-paper-bright/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
                    <a href="#" className="group flex items-center gap-3" onClick={closeMobileNav} aria-label="Go to top">
                        <img src="/favicon.svg" alt="" className="h-9 w-9 rounded-xl shadow-soft" />
                        <span className="hidden flex-col leading-none sm:flex">
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">SleepySyntax</span>
                            <span className="mt-1 text-[11px] text-stone">systems portfolio</span>
                        </span>
                    </a>

                    <nav className="hidden items-center gap-1 md:flex">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-paper-warm/50 hover:text-ink"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <Button href={`mailto:${PROFILE.email}`} variant="primary" size="sm" className="hidden sm:inline-flex">
                            Get in touch
                        </Button>

                        <button
                            type="button"
                            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileNavOpen}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-paper-warm bg-paper-bright md:hidden"
                            onClick={() => setMobileNavOpen(!mobileNavOpen)}
                        >
                            <span className="relative h-3.5 w-4">
                                <span
                                    className={cn(
                                        'absolute left-0 h-0.5 w-4 bg-ink transition-all duration-200',
                                        mobileNavOpen ? 'top-[6px] rotate-45' : 'top-0',
                                    )}
                                />
                                <span className={cn('absolute left-0 top-[6px] h-0.5 w-4 bg-ink transition-all duration-200', mobileNavOpen && 'opacity-0')} />
                                <span
                                    className={cn(
                                        'absolute left-0 h-0.5 w-4 bg-ink transition-all duration-200',
                                        mobileNavOpen ? 'top-[6px] -rotate-45' : 'top-[12px]',
                                    )}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            <MobileNav />
        </>
    );
};

export default Header;
