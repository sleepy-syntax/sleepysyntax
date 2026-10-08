import { NAV_LINKS, PROFILE } from '@/Constants';
import { useAppContext } from '@/Contexts';
import { Button } from '@/Components';
import { cn } from '@/Utils';

const MobileNav = () => {
    const { mobileNavOpen, closeMobileNav } = useAppContext();

    return (
        <div className={cn('fixed inset-0 z-30 md:hidden', mobileNavOpen ? 'pointer-events-auto' : 'pointer-events-none')}>
            <div
                className={cn('absolute inset-0 bg-ink/20 backdrop-blur-sm transition-opacity duration-300', mobileNavOpen ? 'opacity-100' : 'opacity-0')}
                onClick={closeMobileNav}
                aria-hidden="true"
            />

            <nav
                className={cn(
                    'absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l border-paper-warm bg-paper-bright p-6 pt-20 shadow-lift transition-transform duration-300',
                    mobileNavOpen ? 'translate-x-0' : 'translate-x-full',
                )}
                aria-hidden={!mobileNavOpen}
            >
                <div className="flex flex-col gap-1">
                    {NAV_LINKS.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-lg px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-paper-warm/60 hover:text-ink"
                            onClick={closeMobileNav}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="mt-auto flex flex-col gap-3 border-t border-paper-warm pt-6">
                    <Button href={`mailto:${PROFILE.email}`} variant="primary" className="w-full" onClick={closeMobileNav}>
                        Email me
                    </Button>
                    <Button href={PROFILE.linkedin} variant="secondary" className="w-full" target="_blank" rel="noopener noreferrer" onClick={closeMobileNav}>
                        LinkedIn
                    </Button>
                </div>
            </nav>
        </div>
    );
};

export default MobileNav;
