import { CareersHero } from '@/components/sections/careers-hero';
import { WhyWorkWithUs } from '@/components/sections/why-work-with-us';
import { ApplicationProcess } from '@/components/sections/application-process';
import careersData from '@/data/careers.json';

export const metadata = {
    title: 'Careers - Om India Total Packaging Solutions',
    description: 'Join our team @ Om India. Empowering innovation, embracing diversity, and fostering growth in packaging solutions.',
};

export default function CareersPage() {
    return (
        <>
            <CareersHero data={careersData.hero} />
            <WhyWorkWithUs data={careersData.whyWorkWithUs} />
            <ApplicationProcess data={careersData.applicationProcess} />
        </>
    );
}