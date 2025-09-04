import { ContactHero } from '@/components/sections/contact-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { ContactInfo } from '@/components/sections/contact-info';
import { MapSection } from '@/components/sections/map-section';
import contactData from '@/data/contact.json';

export const metadata = {
    title: 'Contact Us - Om India',
    description: 'Get in touch with us for packaging solutions, quotes, and support. Multiple office locations across India.',
};

export default function ContactPage() {
    return (
        <>
            <ContactHero data={contactData.hero} />
            <div className="grid lg:grid-cols-2">
                <ContactForm data={contactData.inquiryTypes} />
                <ContactInfo data={contactData.contactInfo} />
            </div>
            <MapSection data={contactData.officeLocations} />
        </>
    );
}