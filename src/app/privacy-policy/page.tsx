// pages/privacy-policy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
            <Head>
                <title>Privacy Policy - Great Think Construction Corp.</title>
                <meta name="description" content="Privacy Policy for Great Think Construction Corp." />
            </Head>

            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-red-600 mb-6">
                    Privacy Policy
                </h1>
                <h2 className="text-2xl font-semibold text-yellow-500 mb-4">
                    Great Think Construction Corp.
                </h2>

                <div className="space-y-6 text-gray-700">
                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">1. Information We Collect</h3>
                        <p>
                            At Great Think Construction Corp., we collect various types of information to provide and improve our services. This may include:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Personal information (name, address, email, phone number)</li>
                            <li>Project details and specifications</li>
                            <li>Financial information for billing purposes</li>
                            <li>Communication records between you and our team</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">2. How We Use Your Information</h3>
                        <p>
                            We use the collected information for various purposes, including:
                        </p>
                        <ul className="list-disc pl-5 mt-2">
                            <li>Providing and maintaining our construction services</li>
                            <li>Improving our customer service and project management</li>
                            <li>Processing payments and maintaining financial records</li>
                            <li>Communicating with you about your projects and our services</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">3. Data Protection</h3>
                        <p>
                            We implement various security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">4. Your Rights</h3>
                        <p>
                            You have the right to access, correct, or delete your personal information. If you wish to exercise these rights or have any questions about our privacy practices, please contact us using the information provided below.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">5. Changes to This Policy</h3>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;last updated&quot; date.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}