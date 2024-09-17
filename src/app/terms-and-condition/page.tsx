// pages/terms-and-conditions.js

import Head from 'next/head';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Terms and Conditions - Great Think Construction Corp.</title>
                <meta name="description" content="Terms and Conditions for Great Think Construction Corp." />
            </Head>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-red-600 mb-6">
                    Terms and Conditions
                </h1>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
                    Great Think Construction Corp.
                </h2>

                <div className="space-y-6 text-gray-700">
                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">1. Acceptance of Terms</h3>
                        <p>
                            By engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">2. Services</h3>
                        <p>
                            Great Think Construction Corp. provides construction and renovation services. The specific details of the services will be outlined in the project contract.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">3. Pricing and Payment</h3>
                        <p>
                            Prices for our services are as quoted in the project contract. Payment terms, including deposits and installments, will be specified in the contract. We reserve the right to suspend work if payments are not made as agreed.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">4. Project Timeline</h3>
                        <p>
                            While we strive to complete projects within the estimated timeframe, delays can occur due to unforeseen circumstances. We are not liable for delays caused by factors beyond our control, such as weather conditions or material shortages.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">5. Client Responsibilities</h3>
                        <p>
                            Clients are responsible for providing accurate information, timely decisions, and access to the work site as required. Failure to do so may result in project delays or additional costs.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">6. Change Orders</h3>
                        <p>
                            Any changes to the agreed scope of work must be documented in a written change order and may result in additional costs and time adjustments.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">7. Warranties</h3>
                        <p>
                            We provide a warranty on our workmanship for a period specified in the project contract. This warranty does not cover damages resulting from normal wear and tear, improper use, or lack of maintenance.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">8. Limitation of Liability</h3>
                        <p>
                            Our liability is limited to the amount paid for our services. We are not responsible for indirect, consequential, or incidental damages.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">9. Termination</h3>
                        <p>
                            Either party may terminate the contract with written notice if the other party breaches a material term of the agreement. In case of termination, the client is responsible for paying for all work completed up to the termination date.
                        </p>
                    </section>
                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">10. Governing Law</h3>
                        <p>
                            These Terms and Conditions are governed by the laws of the State of New York. Any disputes shall be resolved in the courts of Kings County, Brooklyn, New York.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">11. Changes to Terms</h3>
                        <p>
                            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}