// app/solutions/page.tsx
import { SolutionsHero } from '@/components/sections/solutions-hero';
import { ServiceCategories } from '@/components/sections/service-categories';
import { SolutionsFeatures } from '@/components/sections/solutions-features';
import solutionsData from '@/data/solutions.json';

export const metadata = {
    title: 'Solutions & Services - Om India',
    description: 'Comprehensive wooden packaging solutions including seaworthy boxes, industrial pallets, ISPM-15 Treatments, and specialized packaging materials for export and heavy machinery.',
    keywords: 'wooden packaging, seaworthy boxes, wooden pallets, ISPM-15 treatment, industrial packaging, export packaging, heavy machinery packaging, wooden crates, VCI packing, fumigation treatment',
    openGraph: {
        title: 'Wooden Packaging Solutions & Services - Om India',
        description: 'Premium wooden packaging solutions for industrial applications. Seaworthy boxes, heavy-duty pallets, ISPM-15 Treatments, and specialized packaging materials.',
        type: 'website',
        images: [
            {
                url: '/images/wooden-packaging-solutions.jpg',
                width: 1200,
                height: 630,
                alt: 'Wooden Packaging Solutions by Om India'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wooden Packaging Solutions - Om India',
        description: 'Premium wooden packaging solutions including seaworthy boxes, industrial pallets, and ISPM-15 Treatments.',
        images: ['/images/wooden-packaging-solutions.jpg']
    }
};

export default function SolutionsPage() {
    return (
        <>
            <SolutionsHero data={solutionsData.hero} />
            <ServiceCategories data={solutionsData.categories} />
            <SolutionsFeatures data={solutionsData.features} />
        </>
    );
}