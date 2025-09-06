import { Container } from '@/components/ui/container';

export const metadata = {
    title: 'Terms & Conditions - Om India Total Packaging Solutions',
    description: 'Read the terms and conditions for using Om India Total Packaging Solutions services.',
};

export default function TermsConditionsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="section-padding bg-berkeley-blue text-white">
                <Container size="xl">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Terms & Conditions
                        </h1>
                        <p className="text-xl text-white/90">
                            Please read these terms carefully before using our services.
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

                            <h2 style={{ color: '#1C2A39' }}>1. Acceptance of Terms</h2>
                            <p className="text-gray-700 leading-relaxed">
                                By accessing and using the services of Om India Total Packaging Solutions, you accept
                                and agree to be bound by the terms and provision of this agreement.
                            </p>

                            <h2 style={{ color: '#1C2A39' }}>2. Services</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Om India Total Packaging Solutions provides industrial packaging solutions including
                                but not limited to wooden packaging, pallets, corrugated boxes, and specialized
                                packaging materials. All services are subject to availability and our standard
                                business practices.
                            </p>

                            <h2 style={{ color: '#1C2A39' }}>3. Orders and Pricing</h2>
                            <ul className="text-gray-700">
                                <li>All orders are subject to acceptance by Om India Total Packaging Solutions</li>
                                <li>Prices are subject to change without notice</li>
                                <li>Custom quotes are valid for 30 days unless otherwise specified</li>
                                <li>Payment terms will be specified in individual agreements</li>
                            </ul>

                            <h2 style={{ color: '#1C2A39' }}>4. Quality and Standards</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We maintain high-quality standards in all our packaging solutions. All products
                                comply with relevant industry standards and regulations. We reserve the right to
                                inspect and test products before delivery.
                            </p>

                            <h2 style={{ color: '#1C2A39' }}>5. Delivery and Risk</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Delivery dates are estimates and not guaranteed. Risk of loss or damage passes to
                                the buyer upon delivery. We will make reasonable efforts to meet agreed delivery
                                schedules but are not liable for delays beyond our control.
                            </p>

                            <h2 style={{ color: '#1C2A39' }}>6. Limitation of Liability</h2>
                            <p className="text-gray-700 leading-relaxed">
                                Our liability is limited to the value of the goods supplied. We are not liable for
                                indirect, consequential, or special damages arising from the use of our products
                                or services.
                            </p>

                            <h2 style={{ color: '#1C2A39' }}>7. Intellectual Property</h2>
                            <p className="text-gray-700 leading-relaxed">
                                All intellectual property rights in our designs, processes, and documentation remain
                                with Om India Total Packaging Solutions. Customers may not reproduce or distribute
                                our proprietary information without written consent.
                            </p>

                            <h2 style={{ color: '#1C2A39' }}>8. Governing Law</h2>
                            <p className="text-gray-700 leading-relaxed">
                                These terms are governed by the laws of India. Any disputes will be resolved through
                                arbitration in accordance with Indian arbitration laws.
                            </p>

                            <div
                                className="bg-gray-50 p-6 rounded-lg mt-8"
                                style={{ borderLeft: '4px solid #00B1F1ff' }}
                            >
                                <h3 style={{ color: '#1C2A39' }} className="mb-3">Contact Information</h3>
                                <p className="text-gray-700">
                                    For questions about these terms, please contact us at hr@omindiagroups.com
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}