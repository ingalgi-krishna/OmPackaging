import { AboutHero } from '@/components/sections/about-hero';
import { MissionVision } from '@/components/sections/mission-vision';
import { StatsDisplay } from '@/components/sections/stats-display';
import { CoreValues } from '@/components/sections/core-values';
import { TeamSection } from '@/components/sections/team-section';
import { BrochureStrip } from '@/components/sections/brochure-strip';
import aboutData from '@/data/about.json';
import homeData from '@/data/home.json';

export const metadata = {
    title: 'About Us - Om India',
    description: 'Learn about our journey, mission, and the team behind Om India industrial packaging services.',
};

export default function AboutPage() {
    return (
        <>
            <AboutHero data={aboutData.overview} />
            <MissionVision
                mission={aboutData.mission}
                vision={aboutData.vision}
            // No values prop needed - it's optional now
            />
            <StatsDisplay
                data={aboutData.stats}
                title="Our Achievements in Numbers"
                subtitle="Numbers that reflect our commitment to excellence and growth in the packaging industry."
                variant="gradient"
            />
            <CoreValues data={homeData.coreValues} />
            <BrochureStrip
                title="Learn More About Our Company"
                description="Download our comprehensive company brochure to learn about our history, capabilities, and commitment to excellence in industrial packaging."
                downloadText="Download Company Profile"
                fileName="Om India-company-profile.pdf"
                variant="default"
            />
            <TeamSection
                boardOfDirectors={aboutData.boardOfDirectors}
                expertTeam={aboutData.expertTeam}
            />
        </>
    );
}