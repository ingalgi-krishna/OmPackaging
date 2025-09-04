import { Container } from '@/components/ui/container';

export const metadata = {
    title: 'Privacy Policy - Om India Total Packaging Solutions',
    description: 'Learn how Om India Total Packaging Solutions collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="section-padding bg-berkeley-blue text-white">
                <Container size="xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-white/90">
                            Your privacy is important to us. Learn how we protect your information.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Content */}
            <section className="section-padding">
                <Container size="xl">
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
                        <div className="prose prose-lg max-w-none">
                            <p className="text-gray-600 mb-8">
                                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                            </p>

                            <h2 style={{ color: '#002B5B' }}>1. Information We Collect</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We collect information you provide directly to us, such as when you create an account,
                                make a purchase, request a quote, or contact us for support. This may include your name,
                                email address, phone number, company information, and billing details.
                            </p>

                            <h2 style={{ color: '#002B5B' }}>2. How We Use Your Information</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We use the information we collect to:
                            </p>
                            <ul className="text-gray-700">
                                <li>Provide, maintain, and improve our packaging solutions and services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices, updates, and support messages</li>
                                <li>Respond to your comments, questions, and customer service requests</li>
                                <li>Communicate with you about products, services, and promotional offers</li>
                            </ul>

                            <h2 style={{ color: '#002B5B' }}>3. Information Sharing</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We do not sell, trade, or otherwise transfer your personal information to third parties
                                without your consent, except as described in this policy. We may share your information with:
                            </p>
                            <ul className="text-gray-700">
                                <li>Service providers who assist us in operating our business</li>
                                <li>Legal authorities when required by law or to protect our rights</li>
                                <li>Business partners for joint marketing efforts (with your consent)</li>
                            </ul>

                            <h2 style={{ color: '#002B5B' }}>4. Data Security</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We implement appropriate security measures to protect your personal information against
                                unauthorized access, alteration, disclosure, or destruction. However, no method of
                                transmission over the internet is 100% secure.
                            </p>

                            <h2 style={{ color: '#002B5B' }}>5. Your Rights</h2>
                            <p className="text-gray-700 leading-relaxed">
                                You have the right to access, update, or delete your personal information. You may also
                                opt out of certain communications from us. To exercise these rights, please contact us
                                using the information provided below.
                            </p>

                            <h2 style={{ color: '#002B5B' }}>6. Contact Us</h2>
                            <p className="text-gray-700 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div
                                className="bg-gray-50 p-6 rounded-lg mt-4"
                                style={{ borderLeft: '4px solid #00B0F0' }}
                            >
                                <p className="text-gray-700 mb-2">
                                    <strong>Om India Total Packaging Solutions</strong>
                                </p>
                                <p className="text-gray-700">
                                    Email: hr@omindiagroups.com<br />
                                    Phone: +91 XXXX XXXXXX
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}