import { PROFILE } from '@/Constants';
import Container from '@/Components/Container';

const Footer = () => (
    <footer className="border-t border-paper-warm/80 bg-paper-bright/50">
        <Container className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
            <p className="font-mono text-xs text-stone">
                © {new Date().getFullYear()} {PROFILE.shortName}
            </p>
            <div className="flex items-center gap-4">
                <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-stone transition-colors hover:text-ink">
                    GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-stone transition-colors hover:text-ink">
                    LinkedIn
                </a>
                <a href={`mailto:${PROFILE.email}`} className="font-mono text-xs text-stone transition-colors hover:text-ink">
                    Email
                </a>
            </div>
        </Container>
    </footer>
);

export default Footer;
