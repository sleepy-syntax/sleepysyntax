import ContactCTA from '@/Features/ContactCTA';
import { HomeProvider } from './Home.context';
import CurrentFocusSection from './sections/CurrentFocusSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ProofStripSection from './sections/ProofStripSection';
import SkillsSection from './sections/SkillsSection';
import SystemsSection from './sections/SystemsSection';

const Home = () => (
    <HomeProvider>
        <HeroSection />
        <ProofStripSection />
        <CurrentFocusSection />
        <SystemsSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactCTA />
    </HomeProvider>
);

export default Home;
